
// ============================================
// CHATBOT "MakanBot" (AI Powered)
// ============================================

const chatConfig = {
    apiKey: "AIzaSyDn1E7SrbHbgoRCG7NQeUH-IsjtAJ5HA7A", // API Key (Hardcoded for demo)
    model: "gemini-1.5-flash"
};

const chatState = {
    isOpen: false,
    history: []
};

// 1. INIT CHATBOT UI
function initChatbot() {
    if (document.getElementById('chatbot')) return;

    const chatHTML = `
    <div id="chatbot" class="chatbot-container" style="display: none;">
        <div class="chat-header">
            <div class="chat-title">
                <i class="fas fa-robot"></i>
                <span>MakanBot AI</span>
            </div>
            <button onclick="toggleChat()" class="close-chat"><i class="fas fa-times"></i></button>
        </div>
        <div class="chat-body" id="chatBody">
            <div class="chat-message bot">
                <div class="message-content">Halo! Saya MakanBot 🤖. Lagi cari kuliner apa di Purwokerto?</div>
            </div>
        </div>
        <div class="chat-input-area">
            <input type="text" id="chatInput" placeholder="Tanya rekomendasi..." onkeypress="handleChatInput(event)">
            <button onclick="sendMessage()"><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>
    <button class="chatbot-fab" onclick="toggleChat()">
        <i class="fas fa-comment-dots"></i>
    </button>
    `;

    const div = document.createElement('div');
    div.innerHTML = chatHTML;
    document.body.appendChild(div);
}

// 2. TOGGLE CHAT
window.toggleChat = function () {
    const chat = document.getElementById('chatbot');
    if (!chat) {
        initChatbot();
        setTimeout(toggleChat, 100);
        return;
    }

    chatState.isOpen = !chatState.isOpen;
    chat.style.display = chatState.isOpen ? 'flex' : 'none';
    chat.classList.toggle('active', chatState.isOpen);

    if (chatState.isOpen) {
        setTimeout(() => document.getElementById('chatInput').focus(), 100);
    }
};

// 3. SEND MESSAGE Logic
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg) return;

    // User Message
    appendMessage(msg, 'user');
    input.value = '';

    // Typing Indicator
    showTyping(true);

    try {
        const reply = await fetchGeminiResponse(msg);
        showTyping(false);
        appendMessage(reply, 'bot');
    } catch (err) {
        showTyping(false);
        appendMessage("Maaf, saya sedang pusing. Coba lagi nanti ya! 😵", 'bot');
        console.error(err);
    }
}

function handleChatInput(e) {
    if (e.key === 'Enter') sendMessage();
}

function appendMessage(text, sender) {
    const body = document.getElementById('chatBody');
    const div = document.createElement('div');
    div.className = `chat-message ${sender}`;
    div.innerHTML = `<div class="message-content">${marked.parse(text)}</div>`;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

function showTyping(show) {
    const body = document.getElementById('chatBody');
    const existing = document.getElementById('typing-indicator');
    if (show) {
        if (!existing) {
            const div = document.createElement('div');
            div.id = 'typing-indicator';
            div.className = 'chat-message bot';
            div.innerHTML = `<div class="message-content typing">Sedang mengetik...</div>`;
            body.appendChild(div);
            body.scrollTop = body.scrollHeight;
        }
    } else {
        if (existing) existing.remove();
    }
}

// 4. GEMINI API CALL
async function fetchGeminiResponse(prompt) {
    // Context Construction
    const context = `Kamu adalah MakanBot, asisten kuliner ramah untuk aplikasi "Lapor Mangan!" di Purwokerto.
    Data Kuliner Saat Ini:
    ${JSON.stringify(window.kulinerData || [], null, 2)}
    
    Jawablah pertanyaan user dengan santai, gunakan emoji, dan berikan rekomendasi spesifik dari data di atas jika relevan.
    Jika tidak ada di data, berikan saran umum kuliner Purwokerto (seperti Mendoan, Soto Sokaraja, Getuk Goreng).`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${chatConfig.model}:generateContent?key=${chatConfig.apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: context + "\n\nUser: " + prompt }]
            }]
        })
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', initChatbot);
window.initChatbot = initChatbot; // Global Expose
