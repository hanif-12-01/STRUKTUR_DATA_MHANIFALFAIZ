(function () {
    'use strict';

    const CHATBOT_CONFIG = {
        MODEL: 'gemini-1.5-flash',
        API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
        API_KEY: 'AIzaSyDn1E7SrbHbgoRCG7NQeUH-IsjtAJ5HA7A'
    };

    let isChatOpen = false;
    let isTyping = false;

    const chatbot = document.getElementById('chatbot') || document.getElementById('chatPopup');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');

    function toggleChat() {
        isChatOpen = !isChatOpen;
        if (chatbot) {
            chatbot.style.display = isChatOpen ? 'flex' : 'none';
            if (isChatOpen && chatInput) chatInput.focus();
        }
    }
    window.toggleChat = toggleChat;

    async function sendMessage() {
        const text = chatInput.value.trim();
        if (!text || isTyping) return;

        appendMessage(chatMessages, text, 'user');
        chatInput.value = '';

        isTyping = true;
        const typingId = showTypingIndicator();

        try {
            // Mengambil seluruh data kuliner dari script.js
            const allData = typeof window.getAllKulinerData === 'function' ? window.getAllKulinerData() : [];

            // Mengambil pengetahuan tambahan dari knowledge-base.js
            const kb = typeof knowledgeBase !== 'undefined' ? JSON.stringify(knowledgeBase) : "";

            let contextContent = allData.map(k =>
                `- ${k.nama} (${k.kategori}): Alamat ${k.alamat}, Harga ${k.harga}, Jam ${k.jam}. Deskripsi: ${k.deskripsi}`
            ).join('\n');

            const systemPrompt = `
                Kamu adalah "MakanBot", asisten AI paling asik untuk aplikasi Lapor Mangan! di Purwokerto.
                
                TUGAS UTAMA: Membantu pengguna mencari rekomendasi makanan berdasarkan DATA KULINER asli berikut:
                ${contextContent}

                INFO TAMBAHAN:
                ${kb}

                KEPRIBADIAN:
                - Ramah, humoris, dan gunakan sapaan khas Purwokerto seperti "Lur" atau "Sedulur".
                - Jawab dengan bahasa Indonesia yang santai.
                - Jika ditanya rekomendasi, berikan 2-3 opsi terbaik dari data.
                - Jika data tidak ada, jangan mengarang. Sarankan cari di menu 'Jelajahi'.
                - Gunakan emoji makanan 🍜🍛😋.
            `;

            const response = await fetch(`${CHATBOT_CONFIG.API_URL}?key=${CHATBOT_CONFIG.API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: systemPrompt + `\n\nUser: ${text}` }] }]
                })
            });

            const data = await response.json();
            const typingEl = document.getElementById(typingId);
            if (typingEl) typingEl.remove();

            if (data.candidates && data.candidates[0].content) {
                const reply = data.candidates[0].content.parts[0].text;
                appendMessage(chatMessages, formatResponse(reply), 'bot');
            }
        } catch (error) {
            console.error('Bot Error:', error);
            const typingEl = document.getElementById(typingId);
            if (typingEl) typingEl.remove();
            appendMessage(chatMessages, "Waduh Lur, koneksinya lagi 'mendo' (lemot). Coba lagi nanti ya! 🙏", 'bot');
        } finally {
            isTyping = false;
        }
    }

    function appendMessage(container, text, sender) {
        const div = document.createElement('div');
        div.className = `message message-${sender}`;
        div.innerHTML = `<div class="message-content">${text}</div><div class="message-time">Baru saja</div>`;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    function showTypingIndicator() {
        const id = 'typing-' + Date.now();
        const div = document.createElement('div');
        div.className = 'message message-bot';
        div.id = id;
        div.innerHTML = `<div class="message-content"><i class="fas fa-circle-notch fa-spin"></i> MakanBot sedang mengetik...</div>`;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return id;
    }

    function formatResponse(text) {
        return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
    }

    window.sendMessage = sendMessage;
    window.handleChatInput = (e) => { if (e.key === 'Enter') sendMessage(); };
})();
