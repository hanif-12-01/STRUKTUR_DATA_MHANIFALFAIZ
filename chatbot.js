// Chatbot functionality for Lapor Mangan!
// Powered by Google Gemini API

(function () {
    'use strict';

    // Konfigurasi Chatbot
    const CHATBOT_CONFIG = {
        // Gunakan model yang stabil
        MODEL: 'gemini-1.5-flash',
        API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
        API_KEY: '' // User needs to provide this or use a proxy
    };

    // State
    let isChatOpen = false;
    let isTyping = false;

    // DOM Elements
    const chatbot = document.getElementById('chatbot'); // Changed ID to match HTML
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');

    // Toggle Chatbot
    function toggleChat() {
        isChatOpen = !isChatOpen;
        const chatbotEl = document.getElementById('chatbot');
        if (chatbotEl) {
            chatbotEl.classList.toggle('active', isChatOpen);
            // Also toggle display for safety if CSS uses display:none
            chatbotEl.style.display = isChatOpen ? 'flex' : 'none';
            if (isChatOpen && chatInput) chatInput.focus();
        }
    }
    window.toggleChat = toggleChat;

    // Handle Input
    function handleChatInput(e) {
        if (e.key === 'Enter') sendMessage();
    }

    // Show Typing Indicator
    function showTypingIndicator() {
        const id = 'typing-' + Date.now();
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message message-bot';
        typingDiv.id = id;
        typingDiv.innerHTML = `<div class="message-content"><i class="fas fa-circle-notch fa-spin"></i> Sedang mengetik...</div>`;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return id;
    }

    // Send Message
    async function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        // User Message
        appendMessage(chatMessages, text, 'user');
        chatInput.value = '';

        // Bot Typing
        isTyping = true;
        const typingId = showTypingIndicator();

        try {
            // Cek API Key (For demo purposes, we might need a placeholder or instructions)
            const apiKey = localStorage.getItem('GEMINI_API_KEY') || CHATBOT_CONFIG.API_KEY;

            // Check if we have context data
            let kulinerContext = "Belum ada data kuliner.";
            if (typeof kulinerData !== 'undefined' && Array.isArray(kulinerData)) {
                kulinerData.forEach(k => {
                    kulinerContext += `\n- ${k.nama} (${k.kategori}): ${k.deskripsi || ''}. Lokasi: ${k.alamat}. Harga: ${k.harga}. Jam: ${k.jam}.`;
                });
            }

            const systemPrompt = `
        Kamu adalah "MakanBot", asisten AI ramah untuk aplikasi "Lapor Mangan!" di Purwokerto.
        Tugasmu adalah membantu pengguna mencari rekomendasi kuliner berdasarkan data berikut:
        
        DATA KULINER PURWOKERTO:
        ${kulinerContext}
        
        ATURAN:
        1. Jawab dengan bahasa Indonesia yang santai, ramah, dan sedikit gaul (seperti teman).
        2. Jika user bertanya rekomendasi, berikan opsi dari data di atas. Sebutkan Nama, Alamat, dan kenapa itu enak.
        3. Jika user bertanya hal lain (kabar, cuaca), jawab sopan tapi arahkan kembali ke topik makanan.
        4. Jangan mengarang data kuliner yang tidak ada di list.
        5. Gunakan emoji agar chat lebih hidup! 😋
        
        User berkata: "${text}"
        `;

            // If no API key is set, simulate a response for demo
            if (!apiKey) {
                await new Promise(r => setTimeout(r, 1500)); // Fake delay
                throw new Error('Missing API Key');
            }

            const url = `${CHATBOT_CONFIG.API_URL}?key=${apiKey}`;
            const payload = {
                contents: [{
                    parts: [{
                        text: systemPrompt
                    }]
                }]
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.candidates && data.candidates[0].content) {
                const reply = data.candidates[0].content.parts[0].text;
                // Remove typing indicator
                const typingEl = document.getElementById(typingId);
                if (typingEl) typingEl.remove();

                appendMessage(chatMessages, formatResponse(reply), 'bot');
            } else {
                throw new Error('No response from AI');
            }
        } catch (error) {
            console.error('Chatbot Error:', error);
            // Remove typing indicator if error
            const typingEl = document.getElementById(typingId);
            if (typingEl) typingEl.remove();

            // Fallback response if API fails or no key
            let fallbackMsg = 'Maaf, lagi error nih. Coba nanti ya! 😔';
            if (error.message === 'Missing API Key') {
                fallbackMsg = 'Halo! Fitur AI Chatbot memerlukan API Key Google Gemini. Saat ini mode demo saja ya. Coba cari kuliner manual di menu Jelajahi! 😋 (Atau setting API key di localStorage)';
                // Simple keyword matching for demo
                const lowerText = text.toLowerCase();
                if (lowerText.includes('hallo') || lowerText.includes('halo') || lowerText.includes('hai')) {
                    fallbackMsg = "Halo! Ada yang bisa MakanBot bantu? Mau cari makan apa? 😋";
                } else if (lowerText.includes('pedas')) {
                    fallbackMsg = "Wah suka pedas ya? Coba cek Seblak Asgar atau Ayam Geprek digebuk tetangga! 🔥";
                } else if (lowerText.includes('murah')) {
                    fallbackMsg = "Yang murah meriah banyak! Ada Nasi Goreng 10rb an di sekitar alun-alun. 💰";
                }
            }

            appendMessage(chatMessages, fallbackMsg, 'bot');
        } finally {
            isTyping = false;
        }
    }

    // Append message to chat container
    function appendMessage(container, text, sender, id = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message message-' + sender;
        if (id) messageDiv.id = id;

        let content = `<div class="message-content">${text}</div>`;

        // Add timestamp only for non-loading messages
        if (!text.includes('fa-spin')) {
            content += `<div class="message-time">Baru saja</div>`;
        }

        messageDiv.innerHTML = content;
        container.appendChild(messageDiv);
        container.scrollTop = container.scrollHeight;
    }

    // Format text (simple markdown to HTML)
    function formatResponse(text) {
        if (!text) return "";
        // Convert **bold** to <b>
        let formatted = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        // Convert * to bullet points if in new line
        formatted = formatted.replace(/\n\*/g, '<br>•');
        // Convert newlines to <br>
        formatted = formatted.replace(/\n/g, '<br>');
        return formatted;
    }

    // Send Quick Message (Chips)
    function sendQuickMessage(text) {
        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            chatInput.value = text;
            sendMessage();
        }
    }

    // Expose functions to global scope for HTML inline handlers
    window.handleChatInput = handleChatInput;
    window.sendMessage = sendMessage;
    window.sendQuickMessage = sendQuickMessage;

    // Initialize
    function initChatbot() {
        console.log('Chatbot initialized');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();
