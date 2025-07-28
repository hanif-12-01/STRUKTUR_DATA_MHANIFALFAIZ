# Lapor Mangan! - Direktori Kuliner Purwokerto

Selamat datang di **Lapor Mangan!**, sebuah aplikasi web interaktif yang dirancang untuk membantu Anda menemukan dan menjelajahi berbagai kuliner khas di Purwokerto. Aplikasi ini menampilkan daftar kuliner, lokasi di peta, informasi cuaca terkini, dan chatbot AI untuk rekomendasi personal.

## Fitur Utama

-   **Daftar Kuliner Dinamis**: Menampilkan daftar kuliner yang diambil langsung dari Google Sheets, sehingga mudah untuk diperbarui.
-   **Pencarian dan Filter**: Pengguna dapat dengan mudah mencari kuliner berdasarkan nama atau memfilternya berdasarkan kategori yang tersedia.
-   **Peta Interaktif (Leaflet.js)**: Setiap lokasi kuliner ditandai di peta interaktif. Pengguna dapat mengklik pin untuk melihat detail singkat dan memusatkan peta pada lokasi tersebut.
-   **Informasi Cuaca (OpenWeatherMap API)**: Menampilkan kondisi cuaca terkini di Purwokerto, termasuk suhu, deskripsi cuaca, kelembapan, dan kecepatan angin.
-   **Rekomendasi Berbasis Cuaca**: Memberikan rekomendasi kuliner yang cocok dengan kondisi cuaca saat ini (misalnya, makanan hangat saat hujan atau minuman dingin saat panas).
-   **Chatbot AI (Google Gemini)**: Chatbot cerdas yang memberikan rekomendasi kuliner secara personal berdasarkan preferensi pengguna dan konteks seperti cuaca dan waktu.
-   **Desain Responsif**: Tampilan aplikasi dapat menyesuaikan diri dengan berbagai ukuran layar, baik di desktop maupun perangkat mobile.

## Struktur Proyek

```
.
├── index.html      # File utama HTML yang berisi struktur halaman
├── style.css       # File CSS untuk mengatur tampilan dan gaya halaman
├── script.js       # File JavaScript untuk logika aplikasi, interaksi, dan API
└── README.md       # File ini
```

## Cara Menjalankan Proyek

Proyek ini adalah aplikasi web statis dan tidak memerlukan server backend khusus untuk menjalankannya.

### 1. Clone Repositori

Pertama, clone repositori ini ke komputer lokal Anda menggunakan Git:

```bash
git clone https://github.com/hanif-12-01/LAPORMANGAN.git
```

### 2. Buka Direktori Proyek

Pindah ke direktori proyek yang baru saja Anda clone:

```bash
cd LAPORMANGAN
```

### 3. Konfigurasi API Key

Aplikasi ini menggunakan dua API eksternal yang memerlukan kunci (API Key):

1.  **OpenWeatherMap**: Untuk data cuaca. Kunci API sudah tersedia di `script.js`.
2.  **Google Gemini**: Untuk fungsionalitas chatbot AI. Anda perlu mengganti placeholder `YOUR_GEMINI_API_KEY` di dalam file `script.js` dengan kunci API Gemini Anda sendiri.

    Buka `script.js` dan cari baris berikut, lalu ganti dengan kunci Anda:
    ```javascript
    const API_KEY = 'YOUR_GEMINI_API_KEY'; // Ganti dengan kunci API Gemini Anda
    ```

### 4. Jalankan Aplikasi

Buka file `index.html` langsung di browser web pilihan Anda (seperti Google Chrome, Firefox, atau Safari).

## Sumber Data

Data kuliner untuk aplikasi ini dikelola melalui **Google Sheets** dan diakses menggunakan layanan [OpenSheet](https://opensheet.elk.sh/).

-   **URL Google Sheet**: `https://opensheet.elk.sh/1s1WgKAsoPLYvdoTKP0wGcenlcnGJQQv4ggY4JmZEUHE/Sheet1`

Jika Anda ingin menggunakan data Anda sendiri, buatlah salinan dari Google Sheet tersebut, publikasikan ke web, dan ganti URL di dalam `script.js` pada variabel `SHEET_URL`.
