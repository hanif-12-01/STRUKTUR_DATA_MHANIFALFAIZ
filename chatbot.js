// Chatbot functionality for Lapor Mangan!
// Basic implementation to prevent loading errors

(function() {
    'use strict';
    
    // Initialize chatbot when DOM is ready
    function initChatbot() {
        console.log('Chatbot initialized');
        
        // Add event listener for chat input
        const chatInput = document.getElementById('chatInput');
        const chatSendBtn = document.getElementById('chatSendBtn');
        
        if (chatInput) {
            chatInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendChatMessage();
                }
            });
        }
        
        if (chatSendBtn) {
            chatSendBtn.addEventListener('click', sendChatMessage);
        }
    }
    
    // Send chat message
    function sendChatMessage() {
        const input = document.getElementById('chatInput');
        const messagesContainer = document.getElementById('chatMessages');
        
        if (!input || !messagesContainer) return;
        
        const message = input.value.trim();
        if (!message) return;
        
        // Add user message
        appendMessage(messagesContainer, message, 'user');
        input.value = '';
        
        // Generate bot response
        setTimeout(function() {
            const response = generateResponse(message);
            appendMessage(messagesContainer, response, 'bot');
        }, 500);
    }
    
    // Append message to chat container
    function appendMessage(container, text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message message-' + sender;
        messageDiv.innerHTML = '<div class="message-content">' + escapeHtml(text) + '</div>';
        container.appendChild(messageDiv);
        container.scrollTop = container.scrollHeight;
    }
    
    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Generate chatbot response
    function generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for greetings
        if (lowerMessage.includes('halo') || lowerMessage.includes('hai') || lowerMessage.includes('hi')) {
            return 'Halo! Selamat datang di Lapor Mangan! Ada yang bisa saya bantu hari ini?';
        }
        
        // Check for food recommendations
        if (lowerMessage.includes('rekomendasi') || lowerMessage.includes('saran')) {
            return 'Untuk rekomendasi kuliner, Anda bisa menggunakan fitur pencarian atau filter berdasarkan kategori. Apa jenis makanan yang Anda cari?';
        }
        
        // Check for location queries
        if (lowerMessage.includes('lokasi') || lowerMessage.includes('alamat') || lowerMessage.includes('dimana')) {
            return 'Gunakan fitur peta interaktif untuk melihat lokasi kuliner terdekat. Klik tombol "Peta" di menu navigasi!';
        }
        
        // Check for operating hours
        if (lowerMessage.includes('jam') || lowerMessage.includes('buka') || lowerMessage.includes('tutup')) {
            return 'Jam operasional setiap tempat berbeda-beda. Anda bisa melihat detail jam buka di halaman masing-masing kuliner.';
        }
        
        // Check for category queries
        if (lowerMessage.includes('kategori') || lowerMessage.includes('jenis')) {
            return 'Kami memiliki berbagai kategori: Makanan Berat, Makanan Ringan, Minuman, dan Dessert. Pilih kategori yang Anda inginkan!';
        }
        
        // Check for help
        if (lowerMessage.includes('bantuan') || lowerMessage.includes('help') || lowerMessage.includes('cara')) {
            return 'Saya bisa membantu Anda mencari kuliner di Purwokerto. Tanyakan saja tentang rekomendasi makanan, lokasi, atau jam buka!';
        }
        
        // Default response
        return 'Terima kasih atas pertanyaannya! Untuk informasi lebih lanjut, silakan jelajahi menu atau gunakan fitur pencarian kami.';
    }
    
    // Make functions globally available
    window.initChatbot = initChatbot;
    window.sendChatMessage = sendChatMessage;
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();
