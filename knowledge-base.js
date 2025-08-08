// knowledge-base.js
// File ini berfungsi sebagai "otak" atau basis data untuk chatbot.
// Semua informasi yang bisa diakses oleh chatbot didefinisikan di sini.
// Perubahan pada file ini akan langsung mempengaruhi jawaban chatbot.
// Dibuat: 2025-08-07
// Diperbarui: 2025-08-07 - Menambahkan semua data kuliner dari index.html.

const KNOWLEDGE_BASE = {
  categories: {
    general: { name: "Info Umum", color: "#667eea", icon: "ℹ️" },
    kuliner: { name: "Info Kuliner", color: "#f093fb", icon: "🍲" },
    greetings: { name: "Sapaan", color: "#f6e05e", icon: "👋" },
  },
  faqs: [
    // General Info
    {
      id: "faq_001",
      category: "general",
      keywords: ["apa", "itu", "lapormangan", "lapor", "mangan", "aplikasi", "website"],
      question: "Apa itu LaporMangan?",
      answer: "LaporMangan adalah platform untuk menemukan kuliner UMKM di Purwokerto. Kami membantu Anda menjelajahi dan mendukung usaha kuliner lokal! 探検 (tanken) - penjelajahan!",
      priority: 1
    },
    {
      id: "faq_002",
      category: "general",
      keywords: ["cara", "menggunakan", "peta", "navigasi", "mencari"],
      question: "Bagaimana cara menggunakan peta?",
      answer: "Gunakan kolom pencarian untuk nama kuliner, atau filter berdasarkan kategori. Klik ikon di peta atau item di daftar untuk detail. 簡単 (kantan) - mudah!",
      priority: 1
    },
    {
      id: "faq_003",
      category: "general",
      keywords: ["tambah", "kuliner", "baru", "daftarkan", "lapor"],
      question: "Bagaimana cara menambah informasi kuliner baru?",
      answer: "Klik tombol 'Tambah Informasi' untuk membuka form. Isi detailnya dan kami akan meninjaunya. ありがとう (arigatou) - terima kasih atas kontribusinya!",
      priority: 1
    },
    // Greetings & Small Talk
    {
      id: "greet_001",
      category: "greetings",
      keywords: ["halo", "hai", "selamat pagi", "siang", "sore", "malam"],
      question: "Sapaan",
      answer: "こんにちは (Konnichiwa)! Selamat datang di LaporMangan. Ada yang bisa saya bantu? 😊",
      priority: 2
    },
    {
      id: "greet_002",
      category: "greetings",
      keywords: ["terima kasih", "makasih", "thanks"],
      question: "Ucapan Terima Kasih",
      answer: "どういたしまして (Dou itashimashite)! Senang bisa membantu. Ada lagi? 😊",
      priority: 2
    },
    {
      id: "greet_003",
      category: "greetings",
      keywords: ["kabar", "apa kabar"],
      question: "Menanyakan Kabar",
      answer: "元気です (Genki desu)! Aku selalu bersemangat untuk membantumu menemukan makanan enak. Kamu sendiri bagaimana?",
      priority: 2
    },
    // Kuliner Specific
    {
      id: "kuliner_rec_1",
      category: "kuliner",
      keywords: ["rekomendasi", "sarankan", "enak", "makan apa"],
      question: "Minta rekomendasi kuliner",
      answer: "Tentu! Untuk rekomendasi yang lebih pas, coba tanya 'rekomendasi berdasarkan cuaca'. Atau, sebutkan jenis makanan yang kamu suka, misalnya 'sate' atau 'bakso'.",
      priority: 1
    },
    {
      id: "kuliner_rec_2",
      category: "kuliner",
      keywords: ["murah", "terjangkau", "hemat"],
      question: "Cari kuliner murah",
      answer: "Banyak pilihan hemat! Coba cari 'jajanan tradisional' atau 'gorengan'. Mendoan dan getuk goreng biasanya ramah di kantong!",
      priority: 1
    },
    {
      id: "kuliner_rec_3",
      category: "kuliner",
      keywords: ["legendaris", "terkenal", "ikonik"],
      question: "Cari kuliner legendaris",
      answer: "Purwokerto punya banyak kuliner legendaris! Soto Sokaraja dan Sate Bebek Tambak adalah beberapa yang paling terkenal. Coba cek di peta kami!",
      priority: 1
    }
  ],
  fallbackResponses: [
    "すみません (Sumimasen), saya tidak mengerti. Bisa coba tanyakan tentang kuliner atau fitur di aplikasi ini?",
    "Hmm, sepertinya itu di luar pengetahuanku. Coba tanya tentang 'soto', 'mendoan', atau 'rekomendasi'.",
    "Aku adalah MakanBot! Siap membantumu menemukan kuliner lezat di Purwokerto. Ada yang bisa kubantu?",
    "Aku masih belajar, tapi aku jago soal makanan! Coba tanya 'di mana sate enak?' atau 'rekomendasi minuman segar'."
  ],
  settings: {
    caseSensitive: false,
    fuzzyMatching: true,
    typingDelay: 600,
    responseDelay: 300
  }
};
