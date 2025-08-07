// chatbot.js
// File ini berisi semua logika untuk mengoperasikan chatbot.
// Ini menangani interaksi pengguna, mencari jawaban di basis data, dan menampilkan percakapan.
// Dibuat: 2025-08-07

class StaticChatbot {
  // 'constructor' adalah metode yang pertama kali dijalankan saat sebuah objek chatbot baru dibuat.
  constructor() {
    // Menyimpan referensi ke basis data dari file 'knowledge-base.js'.
    this.kb = KNOWLEDGE_BASE;
    
    // Mengambil elemen-elemen HTML dari DOM (Document Object Model) yang diperlukan untuk chatbot.
    this.container = document.getElementById("ragChatPopup"); // Kontainer utama popup chat.
    this.msgArea  = document.getElementById("rag-chat-messages"); // Area untuk menampilkan pesan.
    this.input    = document.getElementById("rag-q"); // Kotak input tempat pengguna mengetik.
    this.sendBtn  = document.querySelector("#rag-chat-form button"); // Tombol untuk mengirim pesan.
    this.toggle   = document.querySelector(".chatbot-toggler"); // Tombol untuk membuka/menutup chatbot.
    
    // Memanggil metode untuk mengikat (bind) semua event listener ke elemen-elemen HTML.
    this._bindEvents();
  }

  // '_bindEvents' bertanggung jawab untuk mengatur semua event listener yang diperlukan.
  _bindEvents() {
    // Menambahkan event listener untuk klik pada tombol kirim.
    this.sendBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Mencegah perilaku default form (yang akan me-reload halaman).
        this._onSend(); // Memanggil metode untuk mengirim pesan.
    });

    // Menambahkan event listener untuk penekanan tombol pada kotak input.
    this.input.addEventListener("keypress", e => {
      // Jika tombol yang ditekan adalah "Enter".
      if (e.key === "Enter") {
        e.preventDefault(); // Mencegah perilaku default (misalnya, baris baru di textarea).
        this._onSend(); // Memanggil metode untuk mengirim pesan.
      }
    });

    // Menambahkan event listener untuk klik pada tombol toggle chatbot.
    this.toggle.addEventListener("click", () => {
      // Memeriksa apakah chatbot sedang tersembunyi.
      const isHidden = !this.container.style.display || this.container.style.display === "none";
      // Mengubah status tampilan chatbot (tampil jika tersembunyi, dan sebaliknya).
      this.container.style.display = isHidden ? "flex" : "none";
    });
  }

  // '_onSend' dipanggil ketika pengguna mengirim pesan.
  _onSend() {
    // Mengambil teks dari kotak input dan menghapus spasi di awal/akhir.
    const text = this.input.value.trim();
    // Jika tidak ada teks, hentikan eksekusi.
    if (!text) return;
    
    // Menampilkan pesan pengguna di jendela chat.
    this._renderUser(text);
    // Mengosongkan kotak input.
    this.input.value = "";
    
    // Menjalankan timer untuk memberi jeda sebelum bot merespons, mensimulasikan waktu "berpikir".
    setTimeout(() => {
      // Mendapatkan respons dari basis data berdasarkan pesan pengguna.
      const resp = this._getResponse(text.toLowerCase());
      // Menampilkan respons bot di jendela chat.
      this._renderBot(resp);
    }, this.kb.settings.responseDelay);
  }

  // '_getResponse' adalah inti dari logika pencarian jawaban.
  _getResponse(message) {
    const matches = []; // Array untuk menyimpan semua FAQ yang cocok.
    
    // Melakukan iterasi pada setiap FAQ di dalam basis data.
    this.kb.faqs.forEach(faq => {
      let score = 0; // Skor kecocokan untuk FAQ saat ini.
      // Melakukan iterasi pada setiap kata kunci dalam FAQ.
      faq.keywords.forEach(k => {
        // Jika pesan pengguna mengandung kata kunci, tingkatkan skor.
        if (message.includes(k.toLowerCase())) score += 2;
      });
      // Jika skor lebih dari 0, berarti ada kecocokan.
      if (score > 0) matches.push({faq, score});
    });

    // Jika ada setidaknya satu kecocokan.
    if (matches.length) {
      // Mengurutkan kecocokan berdasarkan skor (tertinggi ke terendah) dan kemudian berdasarkan prioritas.
      matches.sort((a,b) => (b.score - a.score) || (a.faq.priority - b.faq.priority));
      // Mengembalikan jawaban dari FAQ dengan skor tertinggi.
      return matches[0].faq.answer;
    }
    
    // Jika tidak ada kecocokan, kembalikan salah satu respons fallback secara acak.
    return this._random(this.kb.fallbackResponses);
  }

  // '_renderUser' membuat dan menampilkan bubble chat untuk pesan pengguna.
  _renderUser(text) {
    const msg = document.createElement("div"); // Membuat elemen div baru.
    msg.className = "rag-msg rag-user"; // Menetapkan kelas CSS untuk styling.
    msg.textContent = text; // Mengisi teks pesan.
    this.msgArea.appendChild(msg); // Menambahkan pesan ke jendela chat.
    this.msgArea.scrollTop = this.msgArea.scrollHeight; // Otomatis scroll ke bawah.
  }

  // '_renderBot' membuat dan menampilkan bubble chat untuk pesan bot.
  _renderBot(text) {
    const msg = document.createElement("div"); // Membuat elemen div baru.
    msg.className = "rag-msg rag-bot"; // Menetapkan kelas CSS untuk styling.
    msg.innerHTML = text; // Mengisi teks pesan (menggunakan innerHTML untuk merender HTML jika ada).
    this.msgArea.appendChild(msg); // Menambahkan pesan ke jendela chat.
    this.msgArea.scrollTop = this.msgArea.scrollHeight; // Otomatis scroll ke bawah.
  }

  // '_random' adalah fungsi utilitas untuk memilih elemen acak dari sebuah array.
  _random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

// Menambahkan event listener yang akan menjalankan kode setelah seluruh konten halaman dimuat.
document.addEventListener("DOMContentLoaded", () => {
  // Membuat instance baru dari StaticChatbot, yang akan menginisialisasi dan menjalankan chatbot.
  new StaticChatbot();
});
