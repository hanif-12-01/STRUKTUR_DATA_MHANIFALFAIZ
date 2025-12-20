
# 🍽 Lapor Mangan! - Purwokerto

**Lapor Mangan!** adalah aplikasi web untuk menemukan informasi kuliner UMKM di Purwokerto. Aplikasi ini membantu Anda menjelajahi dan mendukung usaha kuliner lokal dengan mudah!

---

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Cara Menggunakan](#-cara-menggunakan)
  - [1. Membuka Aplikasi](#1-membuka-aplikasi)
  - [2. Mencari Kuliner](#2-mencari-kuliner)
  - [3. Filter dan Urutkan](#3-filter-dan-urutkan)
  - [4. Menggunakan Peta Interaktif](#4-menggunakan-peta-interaktif)
  - [5. Melihat Detail Kuliner](#5-melihat-detail-kuliner)
  - [6. Fitur Cuaca](#6-fitur-cuaca)
  - [7. Menggunakan MakanBot (Chatbot)](#7-menggunakan-makanbot-chatbot)
  - [8. Menambah Kuliner Baru](#8-menambah-kuliner-baru)
- [Tips Penggunaan](#-tips-penggunaan)
- [FAQ (Pertanyaan Umum)](#-faq-pertanyaan-umum)
- [Instalasi untuk Developer](#-instalasi-untuk-developer)

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🗺 **Peta Interaktif** | Menampilkan lokasi setiap kuliner di peta Leaflet |
| 🔍 **Pencarian** | Cari kuliner berdasarkan nama |
| 🏷 **Filter Kategori** | Filter berdasarkan kategori (Soto, Sate, Bakso, dll.) |
| 📊 **Pengurutan** | Urutkan berdasarkan nama, rating, atau harga |
| 📍 **Terdekat** | Temukan kuliner terdekat dari lokasi Anda |
| 🎲 **Acak Pilihan** | Bingung mau makan apa? Gunakan fitur acak! |
| 🌤 **Info Cuaca** | Lihat cuaca terkini di Purwokerto |
| 🌧 **Rekomendasi Cuaca** | Dapatkan rekomendasi kuliner sesuai cuaca |
| 🤖 **MakanBot** | Chatbot AI untuk membantu mencari kuliner |
| ➕ **Tambah Kuliner** | Kontribusi dengan menambahkan kuliner baru |
| ⏰ **Filter Buka Sekarang** | Hanya tampilkan kuliner yang sedang buka |

---

## 🎯 Use Case (Skenario Penggunaan)

Berikut adalah 3 skenario penggunaan aplikasi Lapor Mangan! dari sudut pandang pengguna:

### Use Case 1: Mencari Makan Siang di Sekitar Lokasi

**Pengguna:** Andi, mahasiswa yang sedang lapar saat istirahat kuliah

**Situasi:** Andi baru selesai kuliah dan ingin mencari tempat makan siang yang dekat dari kampusnya. Dia tidak punya banyak waktu karena kuliah berikutnya dimulai 1 jam lagi.

**Langkah-langkah:**
1. Andi membuka aplikasi **Lapor Mangan!** di browser HP-nya
2. Browser meminta izin lokasi, Andi klik **"Izinkan"**
3. Andi klik tombol **📍 Terdekat** untuk mencari kuliner terdekat
4. Muncul daftar kuliner yang diurutkan berdasarkan jarak terdekat
5. Andi mengaktifkan filter **"Hanya tampilkan yang buka sekarang"** agar tidak kecewa
6. Andi melihat **Bakso President** hanya berjarak 500m dan sedang buka
7. Andi klik untuk melihat detail: alamat, jam buka, dan kisaran harga
8. Andi mengikuti rute di peta dan pergi ke lokasi

**Hasil:** Andi berhasil menemukan tempat makan siang yang dekat, buka, dan sesuai budget dalam waktu singkat.

---

### Use Case 2: Rekomendasi Makanan Saat Hujan

**Pengguna:** Sari, karyawan yang ingin makan malam bersama teman

**Situasi:** Sari dan temannya baru selesai kerja. Cuaca di luar sedang hujan deras dan mereka bingung mau makan apa yang cocok untuk cuaca dingin.

**Langkah-langkah:**
1. Sari membuka aplikasi **Lapor Mangan!**
2. Sari melihat ikon cuaca di header menunjukkan **🌧 Hujan, 24°C**
3. Sari klik tombol **🌤 Rekomendasi Cuaca**
4. Aplikasi menampilkan rekomendasi makanan hangat: **Soto Sokaraja**, **Bakso Mbah Lintang**, dan **Lontong Sayur**
5. Sari masih ragu, lalu membuka **MakanBot** (💬)
6. Sari bertanya: *"Mau makan yang hangat dan enak buat rame-rame"*
7. MakanBot menjawab: *"Kalau hujan begini, cocok banget makan Soto Sokaraja yang kuahnya gurih dan hangat. Atau coba Nasi Liwet Mbah Maimun yang porsinya pas untuk makan bareng!"*
8. Sari memilih **Nasi Liwet Mbah Maimun**, melihat detailnya, dan mengajak temannya ke sana

**Hasil:** Sari dan temannya menikmati makan malam dengan makanan yang cocok untuk cuaca hujan berdasarkan rekomendasi aplikasi.

---

### Use Case 3: Menambahkan Kuliner Favorit yang Belum Terdaftar

**Pengguna:** Budi, warga lokal Purwokerto yang suka kulineran

**Situasi:** Budi baru menemukan warung sate enak di dekat rumahnya yang belum ada di aplikasi Lapor Mangan. Dia ingin berbagi informasi agar orang lain juga bisa menikmatinya.

**Langkah-langkah:**
1. Budi membuka aplikasi **Lapor Mangan!**
2. Budi mencari "Sate Kambing Pak Eko" tapi tidak ditemukan
3. Budi klik tombol **➕** di bagian header untuk menambah kuliner baru
4. Form tambah kuliner terbuka, Budi mengisi:
   - **Nama:** Sate Kambing Pak Eko
   - **Kategori:** Sate
   - **Alamat:** Jl. Veteran No. 45, Purwokerto
   - **Jam Operasional:** 17:00 - 22:00
   - **Harga:** Rp 20.000 - Rp 35.000
   - **Deskripsi:** Sate kambing empuk dengan bumbu kacang khas, porsi besar dan harga terjangkau. Cocok untuk makan malam!
   - **URL Foto:** (Budi upload foto dari HP)
5. Budi klik **Simpan**
6. Kuliner baru muncul di daftar dan peta

**Hasil:** Budi berhasil berkontribusi menambahkan kuliner baru. Sekarang pengguna lain bisa menemukan Sate Kambing Pak Eko melalui aplikasi.

---

### Use Case 4: Bingung Mau Makan Apa? Pakai Fitur Acak!

**Pengguna:** Dina, anak kos yang bosan dengan menu yang itu-itu saja

**Situasi:** Dina sudah bosan makan di tempat yang sama setiap hari. Dia ingin mencoba sesuatu yang baru tapi tidak tahu mau makan apa.

**Langkah-langkah:**
1. Dina membuka aplikasi **Lapor Mangan!**
2. Dina melihat banyak pilihan tapi tetap bingung mau pilih yang mana
3. Dina klik tombol **🎲 Acak Pilihan**
4. Aplikasi secara random memilih **Gudeg Mbah Siti**
5. Dina melihat detail: foto makanan terlihat enak, harga Rp 20.000-30.000
6. Dina klik lagi **🎲 Acak Pilihan** untuk opsi lain
7. Muncul **Tempe Mendoan** - Dina tertarik karena murah dan belum pernah coba
8. Dina memutuskan untuk pergi ke Pasar Sokaraja mencoba mendoan

**Hasil:** Dina menemukan kuliner baru yang belum pernah dicoba berkat fitur acak, menghilangkan kebosanan menu harian.

---

### Use Case 5: Mencari Kuliner Murah untuk Anak Kos

**Pengguna:** Riko, mahasiswa dengan budget terbatas

**Situasi:** Akhir bulan, uang saku Riko tinggal sedikit. Dia butuh makan yang murah tapi tetap enak dan mengenyangkan.

**Langkah-langkah:**
1. Riko membuka aplikasi **Lapor Mangan!**
2. Riko klik dropdown **"Urutkan"** dan pilih **"Harga Terendah"**
3. Daftar kuliner berubah, menampilkan yang paling murah di atas
4. Riko melihat **Tempe Mendoan** (Rp 2.000-5.000) dan **Bakso Mbah Lintang** (Rp 8.000-15.000)
5. Riko ingin yang lebih spesifik, buka **MakanBot** (💬)
6. Riko bertanya: *"Mau makan murah tapi kenyang"*
7. MakanBot menjawab: *"Coba Lontong Sayur Mbah Rini (Rp 12.000-18.000), porsinya besar dan mengenyangkan! Atau Bakso Mbah Lintang yang murah meriah."*
8. Riko memilih Lontong Sayur dan pergi ke Jl. Ahmad Yani

**Hasil:** Riko berhasil menemukan makanan enak dengan harga ramah kantong mahasiswa.

---

### Use Case 6: Wisatawan Mencari Kuliner Legendaris Purwokerto

**Pengguna:** Tono, wisatawan dari Jakarta yang berkunjung ke Purwokerto

**Situasi:** Tono pertama kali ke Purwokerto dan ingin mencoba kuliner khas yang legendaris dan terkenal di kota ini.

**Langkah-langkah:**
1. Tono membuka aplikasi **Lapor Mangan!** setelah tiba di Purwokerto
2. Tono membuka **MakanBot** (💬) untuk bertanya
3. Tono bertanya: *"Kuliner legendaris Purwokerto apa ya?"*
4. MakanBot menjawab: *"Purwokerto punya banyak kuliner legendaris! Soto Sokaraja dan Sate Bebek Tambak adalah yang paling terkenal. Jangan lupa coba Tempe Mendoan juga!"*
5. Tono ketik "Soto Sokaraja" di kotak pencarian
6. Muncul detail **Soto Sokaraja** - Tono melihat alamat di Jl. Jend. Sudirman
7. Tono klik marker di peta untuk melihat lokasinya
8. Tono mengikuti rute dan menikmati soto legendaris Purwokerto

**Hasil:** Tono sebagai wisatawan berhasil menemukan dan mencoba kuliner ikonik Purwokerto dengan bantuan MakanBot.

---

### Use Case 7: Mencari Tempat Makan untuk Keluarga

**Pengguna:** Ibu Ratna, ibu rumah tangga yang ingin mengajak keluarga makan di luar

**Situasi:** Hari Minggu, Ibu Ratna ingin mengajak suami dan 2 anaknya makan di luar. Dia butuh tempat yang ada parkir dan tidak terlalu mahal.

**Langkah-langkah:**
1. Ibu Ratna membuka aplikasi **Lapor Mangan!**
2. Ibu Ratna pilih kategori **"Makanan Berat"** untuk menu lengkap
3. Ibu Ratna urutkan berdasarkan **"Harga Terendah"**
4. Muncul beberapa pilihan, Ibu Ratna klik **Nasi Liwet Mbah Maimun**
5. Di detail, Ibu Ratna mengecek:
   - ✅ Harga: Rp 18.000-25.000 (terjangkau untuk keluarga)
   - ✅ Parkir: Tersedia
   - ✅ Jam: 16:00-22:00 (cocok untuk makan malam)
6. Ibu Ratna juga cek **Ayam Bakar Pak Tono** sebagai alternatif
7. Keluarga memutuskan pergi ke Nasi Liwet Mbah Maimun

**Hasil:** Ibu Ratna menemukan tempat makan keluarga yang sesuai kriteria: ada parkir, harga terjangkau, dan porsi cocok untuk keluarga.

---

### Use Case 8: Mencari Makanan untuk Dibawa Pulang (Take Away)

**Pengguna:** Yoga, pekerja kantoran yang ingin bawa makanan pulang

**Situasi:** Yoga ingin membeli makanan untuk dibawa pulang sebagai makan malam bersama keluarga di rumah. Dia butuh yang praktis dan bisa dibungkus.

**Langkah-langkah:**
1. Yoga membuka aplikasi **Lapor Mangan!** saat jam pulang kantor
2. Yoga buka **MakanBot** dan bertanya: *"Makanan yang enak dibungkus bawa pulang apa ya?"*
3. MakanBot menjawab: *"Untuk dibawa pulang, Sate Bebek Tambak dan Ayam Bakar Pak Tono cocok banget! Praktis dan tetap enak dimakan di rumah."*
4. Yoga cari "Sate Bebek" di kotak pencarian
5. Yoga cek jam operasional: 16:00-22:00 (pas dengan jam pulang kantor)
6. Yoga lihat di peta, lokasinya searah dengan jalan pulang
7. Yoga mampir ke **Sate Bebek Tambak** dan membeli untuk dibungkus

**Hasil:** Yoga berhasil menemukan makanan yang cocok untuk take away dan lokasinya searah jalan pulang.

---

### Use Case 9: Mencari Jajanan untuk Oleh-Oleh

**Pengguna:** Maya, mahasiswi yang akan pulang kampung

**Situasi:** Maya akan pulang ke kampung halaman dan ingin membawa oleh-oleh khas Purwokerto untuk keluarga.

**Langkah-langkah:**
1. Maya membuka aplikasi **Lapor Mangan!**
2. Maya pilih filter kategori **"Jajanan Tradisional"**
3. Muncul **Tempe Mendoan** sebagai hasil utama
4. Maya buka **MakanBot** untuk bertanya lebih lanjut
5. Maya: *"Oleh-oleh khas Purwokerto apa yang awet?"*
6. MakanBot: *"Tempe Mendoan adalah oleh-oleh khas Purwokerto yang paling terkenal! Bisa dibeli dalam jumlah banyak dan tahan beberapa jam. Beli di Pasar Sokaraja untuk yang paling autentik."*
7. Maya melihat detail **Tempe Mendoan**: harga Rp 2.000-5.000 per porsi
8. Maya pergi ke Pasar Sokaraja dan membeli mendoan dalam jumlah banyak

**Hasil:** Maya berhasil menemukan jajanan khas Purwokerto yang cocok untuk oleh-oleh keluarga.

---

### Use Case 10: Mengecek Cuaca Sebelum Pergi Makan

**Pengguna:** Fajar, ojol (ojek online) yang ingin makan saat break

**Situasi:** Fajar sedang istirahat dari orderan dan ingin makan. Tapi dia khawatir cuaca karena harus parkir motor di luar.

**Langkah-langkah:**
1. Fajar membuka aplikasi **Lapor Mangan!**
2. Fajar klik **ikon cuaca** di pojok kanan atas
3. Detail cuaca muncul:
   - ☀️ Cerah, 32°C
   - Kelembapan: 65%
   - Tidak ada tanda hujan
4. Fajar merasa aman untuk makan di tempat yang parkirnya outdoor
5. Fajar klik **📍 Terdekat** untuk cari makan dekat lokasi
6. Muncul **Bakso President** dengan info parkir tersedia
7. Fajar pergi ke sana dengan tenang karena cuaca cerah

**Hasil:** Fajar bisa merencanakan makan dengan mempertimbangkan cuaca, menghindari kehujanan saat parkir motor.

---

## 📖 Cara Menggunakan

### 1. Membuka Aplikasi

1. Buka file `index.html` di browser Anda (Chrome, Firefox, Edge, dll.)
2. Atau akses melalui link website jika sudah di-deploy
3. Tunggu hingga peta dan daftar kuliner selesai dimuat

### 2. Mencari Kuliner

1. Gunakan **kotak pencarian** di bagian atas halaman
2. Ketik nama kuliner yang ingin dicari (contoh: "Soto", "Bakso", "Mendoan")
3. Hasil pencarian akan muncul secara otomatis

![Pencarian](https://via.placeholder.com/600x100?text=Kotak+Pencarian)

### 3. Filter dan Urutkan

#### Filter Kategori
- Klik dropdown **"Semua Kategori"**
- Pilih kategori yang diinginkan:
  - Soto
  - Sate
  - Bakso
  - Gudeg
  - Ayam
  - Lontong
  - Jajanan Tradisional
  - Makanan Berat

#### Urutkan
- Klik dropdown **"Urutkan"**
- Pilih opsi pengurutan:
  - **Nama A-Z** - Urutkan berdasarkan abjad
  - **Rating Tertinggi** - Tampilkan yang paling populer
  - **Harga Terendah** - Mulai dari yang paling murah
  - **Harga Tertinggi** - Mulai dari yang paling mahal

#### Filter Buka Sekarang
- Aktifkan toggle **"Hanya tampilkan yang buka sekarang"**
- Sistem akan menyaring berdasarkan jam operasional

### 4. Menggunakan Peta Interaktif

1. **Lihat Peta** - Peta menampilkan lokasi semua kuliner dengan marker
2. **Zoom In/Out** - Gunakan tombol +/- atau scroll mouse
3. **Klik Marker** - Klik ikon di peta untuk melihat info singkat
4. **Navigasi** - Drag peta untuk menjelajahi area lain

#### Tombol Fitur Peta:
| Tombol | Fungsi |
|--------|--------|
| 📍 **Terdekat** | Menemukan kuliner terdekat dari lokasi Anda |
| 🎲 **Acak Pilihan** | Memilih kuliner secara random |
| 🌤 **Rekomendasi Cuaca** | Saran kuliner berdasarkan cuaca saat ini |

### 5. Melihat Detail Kuliner

1. **Klik item** di daftar kuliner atau marker di peta
2. Popup detail akan muncul dengan informasi:
   - 📸 Foto kuliner
   - 📝 Nama dan deskripsi
   - 📍 Alamat lengkap
   - ⏰ Jam operasional
   - 💰 Kisaran harga
   - 🅿️ Informasi parkir
   - 🛵 Apakah tersedia keliling

3. Klik tombol **×** untuk menutup popup

### 6. Fitur Cuaca

#### Melihat Cuaca
1. Lihat **ikon cuaca** di pojok kanan atas header
2. Menampilkan suhu terkini di Purwokerto

#### Detail Cuaca
1. **Klik** pada info cuaca untuk melihat detail:
   - Suhu saat ini, minimum, dan maksimum
   - Kelembapan udara
   - Kecepatan angin
   - Waktu matahari terbit & terbenam
   - Kondisi cuaca

#### Rekomendasi Berdasarkan Cuaca
1. Klik tombol **🌤 Rekomendasi Cuaca**
2. Sistem akan menyarankan kuliner sesuai kondisi cuaca:
   - ☀️ **Cuaca Panas** → Minuman segar, es
   - 🌧 **Hujan** → Makanan hangat seperti soto, bakso
   - ❄️ **Dingin** → Makanan berkuah hangat

### 7. Menggunakan MakanBot (Chatbot)

MakanBot adalah asisten AI yang membantu Anda mencari rekomendasi kuliner!

#### Cara Menggunakan:
1. Klik tombol **💬** di pojok kanan bawah layar
2. Jendela chat akan terbuka
3. Ketik pertanyaan atau permintaan Anda
4. Tekan **Enter** atau klik tombol kirim
5. MakanBot akan memberikan respons

#### Contoh Percakapan:
```
Anda: "Halo"
Bot: "Halo! Selamat datang di LaporMangan. Ada yang bisa saya bantu? 😊"

Anda: "Rekomendasi sate dong"
Bot: "Untuk sate, saya rekomendasikan Sate Bebek Tambak di Jl. Tambak..."

Anda: "Mau yang murah"
Bot: "Banyak pilihan hemat! Coba cari 'jajanan tradisional'..."

Anda: "Makan apa ya kalau hujan?"
Bot: "Kalau hujan, cocok makan yang hangat-hangat seperti Soto Sokaraja..."
```

#### Kata Kunci yang Dipahami MakanBot:
- **Sapaan**: halo, hai, selamat pagi/siang/sore
- **Rekomendasi**: rekomendasi, sarankan, enak
- **Harga**: murah, terjangkau, hemat
- **Kategori**: soto, sate, bakso, gudeg, ayam
- **Legendaris**: legendaris, terkenal, ikonik
- **Cuaca**: panas, hujan, dingin

### 8. Menambah Kuliner Baru

Ingin menambahkan kuliner favorit Anda? Ikuti langkah berikut:

1. Klik tombol **+** di bagian header
2. Isi formulir dengan informasi:
   - **Nama Kuliner** (wajib)
   - **Kategori** (wajib)
   - **Alamat** (wajib)
   - **Jam Operasional** (wajib) - Format: `08:00 - 18:00`
   - **Harga** (wajib) - Format: `Rp 5.000 - 15.000`
   - **Deskripsi** (wajib)
   - **URL Foto** (opsional)
3. Klik **Simpan** untuk menambahkan

> ⚠️ **Catatan**: Data kuliner yang ditambahkan disimpan di browser (localStorage). Data akan hilang jika Anda membersihkan cache browser.

---

## 💡 Tips Penggunaan

1. **Izinkan Akses Lokasi** - Untuk fitur "Terdekat" bekerja optimal, izinkan browser mengakses lokasi Anda

2. **Gunakan Filter Kombinasi** - Kombinasikan pencarian + kategori + pengurutan untuk hasil terbaik

3. **Cek Jam Operasional** - Aktifkan "Buka Sekarang" agar tidak kecewa saat datang

4. **Manfaatkan MakanBot** - Jika bingung, tanya saja ke MakanBot untuk rekomendasi personal

5. **Perhatikan Cuaca** - Gunakan fitur rekomendasi cuaca untuk pengalaman makan yang lebih nyaman

---

## ❓ FAQ (Pertanyaan Umum)

### Apa itu Lapor Mangan?
Lapor Mangan adalah platform untuk menemukan kuliner UMKM di Purwokerto. Kami membantu Anda menjelajahi dan mendukung usaha kuliner lokal!

### Bagaimana cara kerja fitur "Terdekat"?
Fitur ini menggunakan GPS browser untuk mendeteksi lokasi Anda, kemudian menghitung jarak ke setiap kuliner dan mengurutkannya dari yang paling dekat.

### Apakah data kuliner selalu akurat?
Data kuliner dikumpulkan dari berbagai sumber dan kontribusi pengguna. Jam operasional dan harga bisa berubah, disarankan untuk menghubungi tempat terlebih dahulu.

### Bagaimana cara melaporkan informasi yang salah?
Gunakan fitur "Tambah Informasi" dengan form Google atau hubungi pengelola aplikasi.

### Apakah aplikasi ini gratis?
Ya! Lapor Mangan sepenuhnya gratis untuk digunakan.

### Mengapa peta tidak muncul?
Pastikan koneksi internet Anda stabil. Peta memerlukan koneksi untuk memuat data dari Leaflet.

---

## 🛠 Instalasi untuk Developer

### Clone Repository
```bash
git clone https://github.com/hanif-12-01/LAPORMANGAN.git
cd LAPORMANGAN
```

### Menjalankan Aplikasi
Cukup buka file `index.html` di browser. Tidak memerlukan server khusus.

### Struktur File
```
LAPORMANGAN/
├── index.html          # Halaman utama
├── style.css           # Stylesheet utama
├── styles.css          # Stylesheet tambahan
├── script.js           # JavaScript utama (data & logika)
├── chatbot.js          # Logika chatbot MakanBot
├── knowledge-base.js   # Basis pengetahuan chatbot
└── README.md           # Dokumentasi ini
```

### Teknologi yang Digunakan
- **HTML5** - Struktur halaman
- **CSS3** - Styling dan responsif
- **JavaScript (Vanilla)** - Logika aplikasi
- **Leaflet.js** - Peta interaktif
- **OpenWeatherMap API** - Data cuaca
- **Font Awesome** - Ikon
- **Google Fonts (Poppins)** - Typography

---

## 📞 Kontak & Dukungan

Jika Anda memiliki pertanyaan atau saran, silakan:
- Buka issue di [GitHub Repository](https://github.com/hanif-12-01/LAPORMANGAN/issues)
- Atau hubungi pengembang melalui GitHub

---

**Selamat menikmati kuliner Purwokerto! 🍽️**

*Dibuat dengan ❤️ untuk mendukung UMKM kuliner lokal*
=======
# TUBES-APPL
>>>>>>> c45819825bf0c4924c87c712ea9f4cefed76278c
