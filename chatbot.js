// chatbot.js
// File ini berisi semua logika untuk mengoperasikan chatbot.
// Ini menangani interaksi pengguna, mencari jawaban di basis data, dan menampilkan percakapan.
// Dibuat: 2025-08-07

class StaticChatbot {
  constructor() {
    this.kb = KNOWLEDGE_BASE;
    // Defer element selection until the DOM is ready
    document.addEventListener("DOMContentLoaded", () => {
      this.container = document.getElementById("chatPopup");
      this.msgArea = document.getElementById("chatMessages");
      this.input = document.getElementById("chatInput");
      this.sendBtn = document.querySelector(".chat-send");
      this.toggle = document.querySelector(".chatbot");
      
      if (this.input && this.sendBtn && this.toggle) {
        this._bindEvents();
      } else {
        console.error("Chatbot elements not found!");
      }
    });
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
    this.toggle.addEventListener("click", () => this._toggleChat());
    this.container.querySelector(".chat-close").addEventListener("click", () => this._toggleChat());
  }

  _toggleChat() {
    const isVisible = this.container.style.display === "flex";
    this.container.style.display = isVisible ? "none" : "flex";
    if (!isVisible) {
      this.input.focus();
    }
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

  // '_getResponse' sekarang menggunakan fungsi getDynamicResponse dari script.js
  _getResponse(message) {
    // Memastikan fungsi getDynamicResponse tersedia secara global
    if (typeof getDynamicResponse === 'function') {
      return getDynamicResponse(message);
    } else {
      // Fallback jika fungsi tidak ditemukan
      return "Maaf, sepertinya ada masalah teknis. Fungsi chatbot tidak dapat diakses.";
    }
  }

  // '_renderUser' membuat dan menampilkan bubble chat untuk pesan pengguna.
  _renderUser(text) {
    const msg = document.createElement("div"); // Membuat elemen div baru.
    msg.className = "message message-user"; // Menetapkan kelas CSS untuk styling.
    msg.textContent = text; // Mengisi teks pesan.
    this.msgArea.appendChild(msg); // Menambahkan pesan ke jendela chat.
    this.msgArea.scrollTop = this.msgArea.scrollHeight; // Otomatis scroll ke bawah.
  }

  // '_renderBot' membuat dan menampilkan bubble chat untuk pesan bot.
  _renderBot(text) {
    const msg = document.createElement("div"); // Membuat elemen div baru.
    msg.className = "message message-bot"; // Menetapkan kelas CSS untuk styling.
    msg.innerHTML = text; // Mengisi teks pesan (menggunakan innerHTML untuk merender HTML jika ada).
    this.msgArea.appendChild(msg); // Menambahkan pesan ke jendela chat.
    this.msgArea.scrollTop = this.msgArea.scrollHeight; // Otomatis scroll ke bawah.
  }

  // '_random' adalah fungsi utilitas untuk memilih elemen acak dari sebuah array.
  _random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

// Initialize the chatbot
new StaticChatbot();
