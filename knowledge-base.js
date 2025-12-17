// Knowledge Base for Lapor Mangan! Chatbot
// Placeholder file to prevent loading errors

const knowledgeBase = {
    greetings: [
        "Halo! Selamat datang di Lapor Mangan!",
        "Hai! Ada yang bisa saya bantu?",
        "Selamat datang! Mau cari kuliner apa hari ini?"
    ],
    
    categories: {
        "makanan berat": ["nasi goreng", "mie ayam", "soto", "gudeg", "rawon"],
        "makanan ringan": ["gorengan", "cilok", "batagor", "siomay"],
        "minuman": ["es teh", "es jeruk", "kopi", "jus"],
        "dessert": ["es krim", "puding", "kue"]
    },
    
    responses: {
        "rekomendasi": "Berikut beberapa rekomendasi kuliner populer di Purwokerto!",
        "jam buka": "Kebanyakan warung buka dari jam 08.00 - 21.00 WIB",
        "lokasi": "Gunakan fitur peta untuk melihat lokasi kuliner terdekat!",
        "default": "Maaf, saya belum memahami pertanyaan Anda. Coba tanyakan tentang rekomendasi makanan atau lokasi kuliner."
    }
};

// Export for use in chatbot
if (typeof module !== 'undefined' && module.exports) {
    module.exports = knowledgeBase;
}
