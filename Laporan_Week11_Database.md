# LAPORAN PERANCANGAN BASIS DATA

## APLIKASI PENCARIAN KULINER UMKM
### "LAPOR MANGAN! - PURWOKERTO"

---

**Kelompok:**
- [NIM 1] - [Nama Anggota 1]
- [NIM 2] - [Nama Anggota 2]
- [NIM 3] - [Nama Anggota 3]
- [NIM 4] - [Nama Anggota 4]

**Mata Kuliah:** Analisis Perancangan Perangkat Lunak (APPL)

**Dosen Pengampu:** [Nama Dosen]

**Program Studi:** [Program Studi]

**Universitas:** [Nama Universitas]

**Tahun:** 2025

---

<div style="page-break-after: always;"></div>

## DAFTAR ISI

1. Pendahuluan
2. Entity Relationship Diagram (ERD)
3. Skema Relasi Database
4. Penjelasan Atribut
5. Referensi

---

<div style="page-break-after: always;"></div>

## 1. PENDAHULUAN

### 1.1 Latar Belakang
Aplikasi "Lapor Mangan!" merupakan Progressive Web Application (PWA) yang dirancang untuk membantu masyarakat Purwokerto dalam mencari informasi kuliner UMKM di wilayah Purwokerto. Aplikasi ini menyediakan fitur pencarian, filter, rekomendasi berbasis cuaca, dan peta interaktif.

### 1.2 Tujuan Perancangan Database
Perancangan basis data ini bertujuan untuk:
- Menyimpan data kuliner UMKM secara terstruktur
- Mengelola data pengguna dan autentikasi
- Menyimpan review dan rating dari pengguna
- Mengelola data submission (kontribusi) dari pengguna
- Mengelola konten berita dan promo
- Mendukung fitur favorit dan klaim bisnis

### 1.3 Teknologi yang Digunakan
- **Database:** LocalStorage (Browser Storage) untuk prototype
- **Future Implementation:** Firebase Firestore / MySQL
- **Data Format:** JSON

---

<div style="page-break-after: always;"></div>

## 2. ENTITY RELATIONSHIP DIAGRAM (ERD)

### 2.1 Entitas Utama
Sistem "Lapor Mangan!" memiliki entitas-entitas berikut:

1. **User** - Data pengguna aplikasi
2. **Kuliner** - Data tempat kuliner/UMKM
3. **Review** - Ulasan dan rating dari pengguna
4. **Submission** - Kontribusi data kuliner dari pengguna
5. **News** - Berita terkait kuliner
6. **Promo** - Informasi promo dari tempat kuliner
7. **Favorite** - Daftar favorit pengguna

### 2.2 Relasi Antar Entitas

```
┌─────────────┐
│    USER     │
└──────┬──────┘
       │
       │ 1
       │
       ▼ M
┌─────────────┐         M ┌─────────────┐ 1        ┌─────────────┐
│   REVIEW    │◄──────────┤   KULINER   ├─────────►│   OWNER     │
└─────────────┘           └──────┬──────┘          └─────────────┘
                                 │
                           1     │
                                 │
                                 ▼ M
                          ┌─────────────┐
                          │    PROMO    │
                          └─────────────┘

┌─────────────┐
│    USER     │
└──────┬──────┘
       │
       │ 1
       │
       ▼ M
┌─────────────┐
│  FAVORITE   │
└──────┬──────┘
       │
       │ M
       │
       ▼ 1
┌─────────────┐
│   KULINER   │
└─────────────┘

┌─────────────┐
│    USER     │
└──────┬──────┘
       │
       │ 1
       │
       ▼ M
┌─────────────┐
│ SUBMISSION  │
└─────────────┘

┌─────────────┐
│   ADMIN     │
└──────┬──────┘
       │
       │ 1
       │
       ▼ M
┌─────────────┐
│    NEWS     │
└─────────────┘
```

### 2.3 Kardinalitas Relasi

| Relasi | Kardinalitas | Deskripsi |
|--------|--------------|-----------|
| User - Review | 1:M | Satu user dapat membuat banyak review |
| Kuliner - Review | 1:M | Satu tempat kuliner dapat memiliki banyak review |
| Kuliner - Promo | 1:M | Satu tempat kuliner dapat memiliki banyak promo |
| User - Favorite | 1:M | Satu user dapat memiliki banyak favorit |
| Kuliner - Favorite | 1:M | Satu tempat kuliner dapat difavoritkan banyak user |
| User - Submission | 1:M | Satu user dapat membuat banyak submission |
| Kuliner - Owner | 1:1 | Satu tempat kuliner dimiliki oleh satu owner |
| Admin - News | 1:M | Satu admin dapat membuat banyak berita |

---

<div style="page-break-after: always;"></div>

## 3. SKEMA RELASI DATABASE

### 3.1 Tabel KULINER
**Primary Key:** id

| Atribut | Tipe Data | Constraint | Deskripsi |
|---------|-----------|------------|-----------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | ID unik kuliner |
| nama | VARCHAR(255) | NOT NULL | Nama tempat kuliner |
| kategori | VARCHAR(100) | NOT NULL | Kategori makanan (Soto, Bakso, dll) |
| alamat | TEXT | NOT NULL | Alamat lengkap |
| lat | DECIMAL(10,8) | NOT NULL | Latitude koordinat |
| lng | DECIMAL(11,8) | NOT NULL | Longitude koordinat |
| jam | VARCHAR(50) | NOT NULL | Jam operasional |
| harga | VARCHAR(100) | NOT NULL | Kisaran harga |
| deskripsi | TEXT | NOT NULL | Deskripsi tempat kuliner |
| foto | TEXT | NOT NULL | URL foto |
| parkir | VARCHAR(50) | | Informasi parkir |
| rute | TEXT | | Informasi rute |
| keliling | BOOLEAN | DEFAULT FALSE | Penjual keliling atau tetap |
| halal | VARCHAR(50) | | Status halal (halal, halal-self, unknown) |
| kontak | VARCHAR(20) | | Nomor kontak/WhatsApp |
| ownedBy | VARCHAR(255) | FOREIGN KEY | Email owner (relasi ke User) |
| ownerName | VARCHAR(255) | | Nama owner |
| createdAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Waktu dibuat |
| updatedAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE | Waktu update terakhir |

### 3.2 Tabel USER
**Primary Key:** uid

| Atribut | Tipe Data | Constraint | Deskripsi |
|---------|-----------|------------|-----------|
| uid | VARCHAR(255) | PRIMARY KEY | User ID dari Firebase Auth |
| email | VARCHAR(255) | UNIQUE, NOT NULL | Email user |
| name | VARCHAR(255) | NOT NULL | Nama lengkap user |
| photo | TEXT | | URL foto profil |
| role | VARCHAR(50) | DEFAULT 'user' | Role (user/admin) |
| createdAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Waktu registrasi |
| lastLogin | TIMESTAMP | | Login terakhir |

### 3.3 Tabel REVIEW
**Primary Key:** id
**Foreign Key:** kulinerId, userId

| Atribut | Tipe Data | Constraint | Deskripsi |
|---------|-----------|------------|-----------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | ID unik review |
| kulinerId | INTEGER | FOREIGN KEY, NOT NULL | Relasi ke tabel Kuliner |
| userId | VARCHAR(255) | FOREIGN KEY | Relasi ke tabel User (nullable untuk guest) |
| name | VARCHAR(255) | NOT NULL | Nama reviewer |
| rating | INTEGER | NOT NULL, CHECK (1-5) | Rating 1-5 bintang |
| comment | TEXT | NOT NULL | Komentar/ulasan |
| createdAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Waktu review dibuat |

### 3.4 Tabel SUBMISSION
**Primary Key:** id
**Foreign Key:** submittedBy

| Atribut | Tipe Data | Constraint | Deskripsi |
|---------|-----------|------------|-----------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | ID unik submission |
| nama | VARCHAR(255) | NOT NULL | Nama tempat kuliner |
| kategori | VARCHAR(100) | NOT NULL | Kategori |
| alamat | TEXT | NOT NULL | Alamat |
| lat | DECIMAL(10,8) | NOT NULL | Latitude |
| lng | DECIMAL(11,8) | NOT NULL | Longitude |
| jam | VARCHAR(50) | | Jam operasional |
| harga | VARCHAR(100) | | Kisaran harga |
| deskripsi | TEXT | | Deskripsi |
| foto | TEXT | | URL foto |
| keliling | BOOLEAN | DEFAULT FALSE | Penjual keliling |
| halal | VARCHAR(50) | | Status halal |
| kontak | VARCHAR(20) | | Nomor kontak |
| submittedBy | VARCHAR(255) | FOREIGN KEY, NOT NULL | Email user yang submit |
| submittedAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Waktu submission |
| status | VARCHAR(50) | DEFAULT 'pending' | Status (pending/approved/rejected) |
| reviewedBy | VARCHAR(255) | FOREIGN KEY | Admin yang review |
| reviewedAt | TIMESTAMP | | Waktu direview |
| rejectionReason | TEXT | | Alasan reject (jika ditolak) |

### 3.5 Tabel FAVORITE
**Primary Key:** id
**Foreign Key:** userId, kulinerId

| Atribut | Tipe Data | Constraint | Deskripsi |
|---------|-----------|------------|-----------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | ID unik |
| userId | VARCHAR(255) | FOREIGN KEY, NOT NULL | Relasi ke User |
| kulinerId | INTEGER | FOREIGN KEY, NOT NULL | Relasi ke Kuliner |
| createdAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Waktu ditambahkan |

**Constraint Unik:** UNIQUE(userId, kulinerId) - User tidak bisa favorite tempat yang sama 2x

### 3.6 Tabel NEWS
**Primary Key:** newsId
**Foreign Key:** author

| Atribut | Tipe Data | Constraint | Deskripsi |
|---------|-----------|------------|-----------|
| newsId | INTEGER | PRIMARY KEY, AUTO_INCREMENT | ID unik berita |
| title | VARCHAR(255) | NOT NULL | Judul berita |
| content | TEXT | NOT NULL | Isi berita |
| category | VARCHAR(100) | NOT NULL | Kategori berita |
| featuredImage | TEXT | | URL gambar utama |
| author | VARCHAR(255) | FOREIGN KEY, NOT NULL | Author/admin yang buat |
| status | VARCHAR(50) | DEFAULT 'draft' | Status (draft/published/archived) |
| tags | JSON | | Array tag berita |
| publishedAt | TIMESTAMP | | Waktu publish |
| createdAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Waktu dibuat |
| updatedAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE | Waktu update |

### 3.7 Tabel PROMO
**Primary Key:** promoId
**Foreign Key:** kulinerId

| Atribut | Tipe Data | Constraint | Deskripsi |
|---------|-----------|------------|-----------|
| promoId | INTEGER | PRIMARY KEY, AUTO_INCREMENT | ID unik promo |
| kulinerId | INTEGER | FOREIGN KEY, NOT NULL | Relasi ke Kuliner |
| title | VARCHAR(255) | NOT NULL | Judul promo |
| description | TEXT | NOT NULL | Deskripsi promo |
| discount | VARCHAR(100) | NOT NULL | Diskon (contoh: "20%", "Rp10.000") |
| promoCode | VARCHAR(50) | | Kode promo (jika ada) |
| validFrom | DATE | NOT NULL | Tanggal mulai berlaku |
| validUntil | DATE | NOT NULL | Tanggal berakhir |
| status | VARCHAR(50) | DEFAULT 'active' | Status (active/paused/expired) |
| createdAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Waktu dibuat |
| updatedAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE | Waktu update |

---

<div style="page-break-after: always;"></div>

## 4. PENJELASAN ATRIBUT

### 4.1 Penjelasan Atribut Penting

#### Tabel KULINER
- **keliling**: Boolean untuk membedakan penjual keliling (true) atau tempat tetap (false)
- **halal**: Tiga nilai - "halal" (sertifikat MUI), "halal-self" (self-declared), "unknown"
- **lat/lng**: Koordinat GPS untuk tampilan peta dan perhitungan jarak

#### Tabel REVIEW
- **rating**: Nilai 1-5, digunakan untuk menghitung rata-rata rating tempat kuliner
- **userId**: Nullable agar guest user bisa memberikan review tanpa login

#### Tabel SUBMISSION
- **status**: 
  - "pending" - Menunggu review admin
  - "approved" - Disetujui, data dipindah ke tabel Kuliner
  - "rejected" - Ditolak oleh admin
- **rejectionReason**: Wajib diisi jika status = rejected

#### Tabel FAVORITE
- **UNIQUE constraint**: Mencegah user mem-favorite tempat yang sama berkali-kali

#### Tabel NEWS
- **status**:
  - "draft" - Masih dalam pengeditan
  - "published" - Sudah dipublikasikan
  - "archived" - Diarsipkan (tidak ditampilkan)
- **tags**: JSON array untuk flexible tagging

#### Tabel PROMO
- **status**:
  - "active" - Promo aktif
  - "paused" - Promo dijeda sementara
  - "expired" - Promo sudah kadaluarsa

### 4.2 Normalisasi Database
Database telah dinormalisasi hingga **Third Normal Form (3NF)**:

1. **1NF**: Setiap kolom berisi atomic value, tidak ada repeating groups
2. **2NF**: Semua atribut non-key fully dependent pada primary key
3. **3NF**: Tidak ada transitive dependency antar atribut non-key

### 4.3 Index untuk Optimasi
Index yang direkomendasikan:

```sql
-- Index untuk pencarian
CREATE INDEX idx_kuliner_nama ON Kuliner(nama);
CREATE INDEX idx_kuliner_kategori ON Kuliner(kategori);
CREATE INDEX idx_kuliner_location ON Kuliner(lat, lng);

-- Index untuk foreign keys
CREATE INDEX idx_review_kuliner ON Review(kulinerId);
CREATE INDEX idx_review_user ON Review(userId);
CREATE INDEX idx_submission_user ON Submission(submittedBy);
CREATE INDEX idx_favorite_user ON Favorite(userId);
CREATE INDEX idx_favorite_kuliner ON Favorite(kulinerId);
CREATE INDEX idx_promo_kuliner ON Promo(kulinerId);

-- Index untuk status queries
CREATE INDEX idx_submission_status ON Submission(status);
CREATE INDEX idx_news_status ON News(status);
CREATE INDEX idx_promo_status ON Promo(status);
```

---

<div style="page-break-after: always;"></div>

## 5. REFERENSI

### 5.1 Use Case yang Tercakup

Database ini mendukung semua Use Case Scenario berikut:

#### UC-01: Pencarian Kuliner Berdasarkan Kategori
- Tabel: **Kuliner**
- Query: Filter berdasarkan kolom `kategori`

#### UC-02: Sorting Berdasarkan Jarak
- Tabel: **Kuliner**
- Query: Perhitungan jarak menggunakan `lat` dan `lng`

#### UC-03: Sorting Berdasarkan Nama
- Tabel: **Kuliner**
- Query: ORDER BY `nama`

#### UC-04: Filter Buka Sekarang
- Tabel: **Kuliner**
- Query: Parse kolom `jam` dan bandingkan dengan waktu sekarang

#### UC-05: Filter Tipe Penjual
- Tabel: **Kuliner**
- Query: Filter berdasarkan kolom `keliling`

#### UC-06: Sorting Berdasarkan Harga
- Tabel: **Kuliner**
- Query: Parse kolom `harga` dan ORDER BY

#### UC-07: Login dengan Google OAuth
- Tabel: **User**
- Data: `uid`, `email`, `name`, `photo` dari Firebase Auth

#### UC-08: Melihat Detail Kuliner di Peta
- Tabel: **Kuliner**
- Data: `lat`, `lng`, `nama`, `kategori`, `alamat`

#### UC-09: Navigasi Rute ke Tempat Kuliner
- Tabel: **Kuliner**
- Data: `lat`, `lng`, `rute`

#### UC-10: Melihat Review dan Rating
- Tabel: **Review**, **Kuliner**
- JOIN: Review.kulinerId = Kuliner.id

#### UC-11: Menambah Review
- Tabel: **Review**
- Data: `kulinerId`, `userId`, `name`, `rating`, `comment`

#### UC-12: Melihat Info Cuaca
- Data: Fetched dari External API (OpenWeatherMap)
- Tidak disimpan di database

#### UC-13: Rekomendasi Random
- Tabel: **Kuliner**
- Query: SELECT random

#### UC-14: Rekomendasi Berdasarkan Cuaca
- Tabel: **Kuliner**
- Logic: Filter `kategori` berdasarkan kondisi cuaca

#### UC-15: Fitur Chatbot
- Data: Static knowledge base (tidak di database)
- Future: Bisa simpan chat history di tabel terpisah

#### UC-16: Google Form Submission
- Tabel: **Submission**
- Data: Semua field submission + status

#### UC-17: Submit Kontribusi Kuliner
- Tabel: **Submission**
- Data: Data kuliner baru dengan status "pending"

#### UC-18: Admin Moderasi
- Tabel: **Submission**, **Kuliner**
- Logic: Admin review submission, approve/reject

#### UC-19: Filter Status Halal
- Tabel: **Kuliner**
- Query: Filter berdasarkan kolom `halal`

#### UC-20: Klaim Bisnis
- Tabel: **Kuliner**
- Data: Update `ownedBy` dan `ownerName`

#### UC-21: Melihat Kontribusi Saya
- Tabel: **Submission**
- Query: Filter by `submittedBy` = current user

#### UC-22: Simpan Favorit
- Tabel: **Favorite**
- Data: `userId`, `kulinerId`

#### UC-23: Lihat Daftar Favorit
- Tabel: **Favorite**, **Kuliner**
- JOIN: Favorite.kulinerId = Kuliner.id WHERE Favorite.userId = current user

#### UC-24: Berita & Promo
- Tabel: **News**, **Promo**, **Kuliner**
- Query: JOIN untuk tampilkan promo dengan info kuliner

### 5.2 Konsistensi dengan Use Case Scenario
Semua file basis data (ER Diagram dan skema relasi) konsisten dengan Use Case Scenario yang telah didefinisikan sebelumnya. Setiap tabel dan atribut dirancang untuk mendukung fitur-fitur spesifik dalam aplikasi.

### 5.3 Daftar Referensi

1. Silberschatz, A., Korth, H. F., & Sudarshan, S. (2019). *Database System Concepts* (7th ed.). McGraw-Hill Education.

2. Elmasri, R., & Navathe, S. B. (2016). *Fundamentals of Database Systems* (7th ed.). Pearson.

3. Date, C. J. (2004). *An Introduction to Database Systems* (8th ed.). Addison-Wesley.

4. Connolly, T., & Begg, C. (2014). *Database Systems: A Practical Approach to Design, Implementation, and Management* (6th ed.). Pearson.

5. Firebase Documentation. (2024). *Cloud Firestore*. Retrieved from https://firebase.google.com/docs/firestore

6. OpenWeatherMap API Documentation. (2024). *Weather API*. Retrieved from https://openweathermap.org/api

7. Leaflet.js Documentation. (2024). *Interactive Maps*. Retrieved from https://leafletjs.com/

8. Mozilla Developer Network. (2024). *LocalStorage API*. Retrieved from https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

9. Sommerville, I. (2015). *Software Engineering* (10th ed.). Pearson.

10. Pressman, R. S., & Maxim, B. R. (2014). *Software Engineering: A Practitioner's Approach* (8th ed.). McGraw-Hill Education.

---

## LAMPIRAN

### A. Contoh Query SQL

#### Query 1: Mencari kuliner berdasarkan kategori
```sql
SELECT * FROM Kuliner 
WHERE kategori = 'Soto' 
ORDER BY nama ASC;
```

#### Query 2: Menampilkan kuliner dengan rating tertinggi
```sql
SELECT k.*, AVG(r.rating) as avg_rating
FROM Kuliner k
LEFT JOIN Review r ON k.id = r.kulinerId
GROUP BY k.id
ORDER BY avg_rating DESC
LIMIT 10;
```

#### Query 3: Menampilkan submission pending
```sql
SELECT s.*, u.name as submitter_name
FROM Submission s
JOIN User u ON s.submittedBy = u.email
WHERE s.status = 'pending'
ORDER BY s.submittedAt ASC;
```

#### Query 4: Menampilkan favorit user
```sql
SELECT k.*
FROM Kuliner k
JOIN Favorite f ON k.id = f.kulinerId
WHERE f.userId = 'user123'
ORDER BY f.createdAt DESC;
```

#### Query 5: Menampilkan promo aktif
```sql
SELECT p.*, k.nama as kuliner_name
FROM Promo p
JOIN Kuliner k ON p.kulinerId = k.id
WHERE p.status = 'active'
  AND CURDATE() BETWEEN p.validFrom AND p.validUntil
ORDER BY p.validUntil ASC;
```

---

**Catatan:** 
- Laporan ini merupakan bagian dari tugas Analisis Perancangan Perangkat Lunak (APPL)
- Database design dapat diimplementasikan menggunakan MySQL, PostgreSQL, atau Firebase Firestore
- Prototype saat ini menggunakan LocalStorage untuk demonstrasi

---

**Disusun oleh Kelompok [Nomor Kelompok]**  
**Tanggal:** Desember 2025
