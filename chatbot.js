// Chatbot functionality for Lapor Mangan!
// Powered by Google Gemini API

(function () {
    'use strict';

    // Konfigurasi Chatbot
    const CHATBOT_CONFIG = {
        MODEL: 'gemini-1.5-flash',
        API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
        API_KEY: 'AIzaSyDn1E7SrbHbgoRCG7NQeUH-IsjtAJ5HA7A' // Using the key from feature branch
    };

    // State
    let isChatOpen = false;
    let isTyping = false;

    // DOM Elements
    const chatbot = document.getElementById('chatbot');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');

    // Toggle Chatbot
    function toggleChat() {
        isChatOpen = !isChatOpen;
        if (chatbot) {
            chatbot.classList.toggle('active', isChatOpen);
            chatbot.style.display = isChatOpen ? 'flex' : 'none';
            if (isChatOpen && chatInput) chatInput.focus();
        }
    }

    // Expose toggleChat globally
    window.toggleChat = toggleChat;

    // Handle Input
    function handleChatInput(e) {
        if (e.key === 'Enter') sendMessage();
    }

    // Show Typing Indicator
    function showTypingIndicator() {
        const id = 'typing-' + Date.now();
        const div = document.createElement('div');
        div.className = 'message message-bot';
        div.id = id;
        div.innerHTML = `<div class="message-content"><i class="fas fa-circle-notch fa-spin"></i> MakanBot sedang mengetik...</div>`;
        if (chatMessages) {
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        return id;
    }

    // Append message to chat container
    function appendMessage(container, text, sender) {
        if (!container) return;
        const div = document.createElement('div');
        div.className = `message message-${sender}`;
        div.innerHTML = `<div class="message-content">${text}</div><div class="message-time">Baru saja</div>`;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    // Format text
    function formatResponse(text) {
        if (!text) return "";
        return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
    }

    // Send Message
    async function sendMessage() {
        if (!chatInput) return;
        const text = chatInput.value.trim();
        if (!text || isTyping) return;

        appendMessage(chatMessages, text, 'user');
        chatInput.value = '';

        isTyping = true;
        const typingId = showTypingIndicator();

        try {
            // Context Building
            let contextContent = "Belum ada data kuliner.";
            if (typeof kulinerData !== 'undefined' && Array.isArray(kulinerData)) {
                contextContent = kulinerData.map(k =>
                    `- ${k.nama} (${k.kategori}): Alamat ${k.alamat}, Harga ${k.harga}, Jam ${k.jam}. Deskripsi: ${k.deskripsi || ''}`
                ).join('\n');
            }

            const systemPrompt = `
                Kamu adalah "MakanBot", asisten AI paling asik untuk aplikasi Lapor Mangan! di Purwokerto.
                
                Data Kuliner:
                ${contextContent}

                Aturan:
                - Ramah, humoris, gunakan sapaan "Lur".
                - Jawab bahasa Indonesia santai.
                - Berikan rekomendasi konkret dari data.
                - Gunakan emoji 🍜.
            `;

            const response = await fetch(`${CHATBOT_CONFIG.API_URL}?key=${CHATBOT_CONFIG.API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: systemPrompt + `\n\nUser: ${text}` }] }]
                })
            });

            const data = await response.json();

            // Remove typing indicator
            const typingEl = document.getElementById(typingId);
            if (typingEl) typingEl.remove();

            if (data.candidates && data.candidates[0].content) {
                const reply = data.candidates[0].content.parts[0].text;
                appendMessage(chatMessages, formatResponse(reply), 'bot');
            } else {
                throw new Error('No response content');
            }
        } catch (error) {
            console.error('Bot Error:', error);
            const typingEl = document.getElementById(typingId);
            if (typingEl) typingEl.remove();
            appendMessage(chatMessages, "Waduh Lur, lagi error nih (API/Koneksi). Coba lagi ya! 🙏", 'bot');
        } finally {
            isTyping = false;
        }
    }

    // Send Quick Message
    function sendQuickMessage(text) {
        if (chatInput) {
            chatInput.value = text;
            sendMessage();
        }
    }

    window.sendMessage = sendMessage;
    window.handleChatInput = handleChatInput;
    window.sendQuickMessage = sendQuickMessage;

    // Auto Init
    console.log('Chatbot script loaded');
})();
