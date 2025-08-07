// knowledge-base.js
// File ini berfungsi sebagai "otak" atau basis data untuk chatbot.
// Semua informasi yang bisa diakses oleh chatbot didefinisikan di sini.
// Perubahan pada file ini akan langsung mempengaruhi jawaban chatbot.
// Dibuat: 2025-08-07
// Diperbarui: 2025-08-07 - Menambahkan semua data kuliner dari index.html.

const KNOWLEDGE_BASE = {
  // 'categories' mendefinisikan kategori-kategori informasi yang ada.
  categories: {
    general:   { name: "Info Umum",     color: "#667eea", icon: "ℹ️" },
    kuliner:   { name: "Info Kuliner", color: "#f093fb", icon: "🍲" },
  },

  // 'faqs' adalah daftar pertanyaan dan jawaban.
  faqs: [
    {
      id: "faq_001",
      category: "general",
      keywords: ["apa", "itu", "lapormangan", "lapor", "mangan"],
      question: "Apa itu LaporMangan?",
      answer: "LaporMangan adalah sebuah platform berbasis web yang menampilkan peta persebaran kuliner UMKM di Purwokerto. Tujuannya adalah untuk membantu masyarakat menemukan kuliner favorit mereka dengan mudah dan mendukung UMKM lokal.",
      priority: 1
    },
    {
      id: "faq_002",
      category: "general",
      keywords: ["cara", "menggunakan", "peta", "cari"],
      question: "Bagaimana cara menggunakan peta?",
      answer: "Anda bisa mencari kuliner berdasarkan nama di kolom pencarian, atau memfilter berdasarkan kategori. Klik pada ikon di peta atau item di daftar untuk melihat detail lengkapnya.",
      priority: 1
    },
    {
      id: "faq_003",
      category: "general",
      keywords: ["tambah", "informasi", "kuliner", "baru"],
      question: "Bagaimana cara menambah informasi kuliner baru?",
      answer: "Anda dapat menambahkan informasi kuliner baru dengan menekan tombol '📋 Tambah Informasi'. Ini akan membuka Google Form di mana Anda bisa mengisi detail kuliner yang ingin Anda laporkan.",
      priority: 1
    },
    // Data kuliner dari index.html
    {"id":"kuliner-0","category":"kuliner","keywords":["soto","sokaraja"],"question":"Info Soto Sokaraja","answer":"Nama kuliner: Soto Sokaraja. Kategori: Soto. Alamat: Jl. Sokaraja. Jam buka: 07:00 - 15:00. Harga: Rp 12.000 - 20.000. Deskripsi: Kuah kaldu sapi + kacang, ketupat, kerupuk."},
    {"id":"kuliner-1","category":"kuliner","keywords":["soto","tauco"],"question":"Info Soto Tauco","answer":"Nama kuliner: Soto Tauco. Kategori: Soto. Alamat: Jl. Gerilya. Jam buka: 08:00 - 16:00. Harga: Rp 15.000 - 25.000. Deskripsi: Kuah tauco khas, tauge, ayam suwir."},
    {"id":"kuliner-2","category":"kuliner","keywords":["soto","kecik"],"question":"Info Soto Kecik","answer":"Nama kuliner: Soto Kecik. Kategori: Soto. Alamat: Jl. Kecik. Jam buka: 07:00 - 14:00. Harga: Rp 12.000 - 18:000. Deskripsi: Kuah bening, ayam kampung."},
    {"id":"kuliner-3","category":"kuliner","keywords":["soto","dower"],"question":"Info Soto Dower","answer":"Nama kuliner: Soto Dower. Kategori: Soto. Alamat: Jl. Dower. Jam buka: 08:00 - 16:00. Harga: Rp 13.000 - 20.000. Deskripsi: Kuah santan, bumbu rempah khas."},
    {"id":"kuliner-4","category":"kuliner","keywords":["soto","petirtaan"],"question":"Info Soto Petirtaan","answer":"Nama kuliner: Soto Petirtaan. Kategori: Soto. Alamat: Jl. Petirtaan. Jam buka: 07:00 - 14:00. Harga: Rp 12.000 - 18.000. Deskripsi: Kuah bening, ayam kampung."},
    {"id":"kuliner-5","category":"kuliner","keywords":["soto","bening"],"question":"Info Soto Bening","answer":"Nama kuliner: Soto Bening. Kategori: Soto. Alamat: Jl. Merdeka. Jam buka: 07:00 - 14:00. Harga: Rp 12.000 - 18.000. Deskripsi: Kuah bening, ayam kampung."},
    {"id":"kuliner-6","category":"kuliner","keywords":["tempe","mendoan"],"question":"Info Tempe Mendoan","answer":"Nama kuliner: Tempe Mendoan. Kategori: Gorengan. Alamat: Pasar Sokaraja. Jam buka: 06:00 - 18:00. Harga: Rp 2.000 - 5.000. Deskripsi: Digoreng setengah matang."},
    {"id":"kuliner-7","category":"kuliner","keywords":["tahu","brontak"],"question":"Info Tahu Brontak","answer":"Nama kuliner: Tahu Brontak. Kategori: Gorengan. Alamat: Pasar Sokaraja. Jam buka: 08:00 - 17:00. Harga: Rp 3.000 - 6.000. Deskripsi: Tahu isi sayuran."},
    {"id":"kuliner-8","category":"kuliner","keywords":["tahu","gimbal"],"question":"Info Tahu Gimbal","answer":"Nama kuliner: Tahu Gimbal. Kategori: Gorengan. Alamat: Alun-Alun Purwokerto. Jam buka: 15:00 - 22:00. Harga: Rp 10.000 - 15.000. Deskripsi: Tahu + udang goreng, bumbu kacang."},
    {"id":"kuliner-9","category":"kuliner","keywords":["tahu","gejrot"],"question":"Info Tahu Gejrot","answer":"Nama kuliner: Tahu Gejrot. Kategori: Gorengan. Alamat: Jl. Kolonel Sugiono. Jam buka: 15:00 - 22:00. Harga: Rp 8.000 - 12.000. Deskripsi: Tahu goreng kuah asam pedas."},
    {"id":"kuliner-10","category":"kuliner","keywords":["getuk","goreng"],"question":"Info Getuk Goreng","answer":"Nama kuliner: Getuk Goreng. Kategori: Jajanan Tradisional. Alamat: Jl. Sudirman. Jam buka: 08:00 - 17:00. Harga: Rp 5.000 - 10.000. Deskripsi: Singkong isi gula aren."},
    {"id":"kuliner-11","category":"kuliner","keywords":["cenil"],"question":"Info Cenil","answer":"Nama kuliner: Cenil. Kategori: Jajanan Tradisional. Alamat: Jl. Dr. Soeparno. Jam buka: 08:00 - 16:00. Harga: Rp 3.000 - 5.000. Deskripsi: Singkong berwarna-warni."},
    {"id":"kuliner-12","category":"kuliner","keywords":["gethuk","lindri"],"question":"Info Gethuk Lindri","answer":"Nama kuliner: Gethuk Lindri. Kategori: Jajanan Tradisional. Alamat: Jl. S. Parman. Jam buka: 08:00 - 17:00. Harga: Rp 7.000 - 12.000. Deskripsi: Getuk berwarna-warni."},
    {"id":"kuliner-13","category":"kuliner","keywords":["klepon"],"question":"Info Klepon","answer":"Nama kuliner: Klepon. Kategori: Jajanan Tradisional. Alamat: Pasar Kliwon. Jam buka: 08:00 - 16:00. Harga: Rp 2.000 - 3.000. Deskripsi: Bola ketan isi gula merah."},
    {"id":"kuliner-14","category":"kuliner","keywords":["onde-onde"],"question":"Info Onde-onde","answer":"Nama kuliner: Onde-onde. Kategori: Jajanan Tradisional. Alamat: Jl. Pramuka. Jam buka: 08:00 - 17:00. Harga: Rp 2.000 - 3.000. Deskripsi: Bola tepung ketan isi kacang."},
    {"id":"kuliner-15","category":"kuliner","keywords":["lupis"],"question":"Info Lupis","answer":"Nama kuliner: Lupis. Kategori: Jajanan Tradisional. Alamat: Pasar Pon. Jam buka: 07:00 - 14:00. Harga: Rp 3.000 - 5.000. Deskripsi: Ketan bungkus daun."},
    {"id":"kuliner-16","category":"kuliner","keywords":["gethuk"],"question":"Info Gethuk","answer":"Nama kuliner: Gethuk. Kategori: Jajanan Tradisional. Alamat: Jl. Sumpah Pemuda. Jam buka: 08:00 - 16:00. Harga: Rp 5.000 - 8.000. Deskripsi: Singkong halus + gula merah."},
    {"id":"kuliner-17","category":"kuliner","keywords":["lemper"],"question":"Info Lemper","answer":"Nama kuliner: Lemper. Kategori: Jajanan Tradisional. Alamat: Pasar Wage. Jam buka: 08:00 - 16:00. Harga: Rp 3.000 - 5.000. Deskripsi: Ketupat isi abon ayam."},
    {"id":"kuliner-18","category":"kuliner","keywords":["klanting"],"question":"Info Klanting","answer":"Nama kuliner: Klanting. Kategori: Camilan Kering. Alamat: Pasar Baru. Jam buka: 09:00 - 17:00. Harga: Rp 5.000 - 10.000. Deskripsi: Cemilan singkong berbentuk anting."},
    {"id":"kuliner-19","category":"kuliner","keywords":["lanting"],"question":"Info Lanting","answer":"Nama kuliner: Lanting. Kategori: Camilan Kering. Alamat: Pasar Kliwon. Jam buka: 08:00 - 16:00. Harga: Rp 10.000 - 15.000. Deskripsi: Ketan bulat kecil renyah."},
    {"id":"kuliner-20","category":"kuliner","keywords":["intip"],"question":"Info Intip","answer":"Nama kuliner: Intip. Kategori: Camilan Kering. Alamat: Pasar Pon. Jam buka: 07:00 - 14:00. Harga: Rp 5.000 - 10.000. Deskripsi: Kerak nasi kering digoreng."},
    {"id":"kuliner-21","category":"kuliner","keywords":["dage"],"question":"Info Dage","answer":"Nama kuliner: Dage. Kategori: Camilan Kering. Alamat: Jl. Sudirman. Jam buka: 09:00 - 16:00. Harga: Rp 5.000 - 8.000. Deskripsi: Ampas kacang + cabe rawit."},
    {"id":"kuliner-22","category":"kuliner","keywords":["nopia"],"question":"Info Nopia","answer":"Nama kuliner: Nopia. Kategori: Kue Tradisional. Alamat: Jl. Sudirman. Jam buka: 07:00 - 18:00. Harga: Rp 3.000 - 6.000. Deskripsi: Isi gula merah/kacang/cokelat."},
    {"id":"kuliner-23","category":"kuliner","keywords":["serabi","notosuman"],"question":"Info Serabi Notosuman","answer":"Nama kuliner: Serabi Notosuman. Kategori: Kue Tradisional. Alamat: Jl. Notosuman. Jam buka: 14:00 - 20:00. Harga: Rp 5.000 - 8.000. Deskripsi: Topping gula merah + santan."},
    {"id":"kuliner-24","category":"kuliner","keywords":["nagasari"],"question":"Info Nagasari","answer":"Nama kuliner: Nagasari. Kategori: Kue Tradisional. Alamat: Jl. Dr. Cipto. Jam buka: 08:00 - 16:00. Harga: Rp 2.000 - 3.000. Deskripsi: Tepung beras + pisang."},
    {"id":"kuliner-25","category":"kuliner","keywords":["kraca"],"question":"Info Kraca","answer":"Nama kuliner: Kraca. Kategori: Kuliner Unik. Alamat: Pasar Malam Purwokerto. Jam buka: 18:00 - 23:00. Harga: Rp 8.000 - 12.000. Deskripsi: Keong kecil masak pedas."},
    {"id":"kuliner-26","category":"kuliner","keywords":["kuluban","kluban"],"question":"Info Kuluban / Kluban","answer":"Nama kuliner: Kuluban / Kluban. Kategori: Sayuran. Alamat: Jl. HR Bunyamin. Jam buka: 10:00 - 15:00. Harga: Rp 8.000 - 12.000. Deskripsi: Sayuran rebus + sambal kelapa."},
    {"id":"kuliner-27","category":"kuliner","keywords":["jenang","jaket"],"question":"Info Jenang Jaket","answer":"Nama kuliner: Jenang Jaket. Kategori: Dodol. Alamat: Pasar Wage. Jam buka: 08:00 - 16:00. Harga: Rp 5.000 - 10.000. Deskripsi: Tepung ketan + santan + gula merah."},
    {"id":"kuliner-28","category":"kuliner","keywords":["jalabiya"],"question":"Info Jalabiya","answer":"Nama kuliner: Jalabiya. Kategori: Kue Kering. Alamat: Jl. Pramuka. Jam buka: 09:00 - 17:00. Harga: Rp 4.000 - 7.000. Deskripsi: Singkong isi gula merah."},
    {"id":"kuliner-29","category":"kuliner","keywords":["sahoun"],"question":"Info Sahoun","answer":"Nama kuliner: Sahoun. Kategori: Makanan Ringan. Alamat: Jl. Gatot Subroto. Jam buka: 10:00 - 16:00. Harga: Rp 8.000 - 12.000. Deskripsi: Soun berkuah ayam."},
    {"id":"kuliner-30","category":"kuliner","keywords":["lumpia","boom"],"question":"Info Lumpia Boom","answer":"Nama kuliner: Lumpia Boom. Kategori: Makanan Ringan. Alamat: Jl. Sudirman. Jam buka: 09:00 - 18:00. Harga: Rp 10.000 - 15.000. Deskripsi: Lumpia besar isi sayur/telur/ayam."},
    {"id":"kuliner-31","category":"kuliner","keywords":["combro"],"question":"Info Combro","answer":"Nama kuliner: Combro. Kategori: Camilan. Alamat: Jl. HR Bunyamin. Jam buka: 07:00 - 18:00. Harga: Rp 3.000 - 5.000. Deskripsi: Singkong isi oncom pedas."},
    {"id":"kuliner-32","category":"kuliner","keywords":["cimplung"],"question":"Info Cimplung","answer":"Nama kuliner: Cimplung. Kategori: Camilan. Alamat: Jl. Pramuka. Jam buka: 08:00 - 16:00. Harga: Rp 3.000 - 5.000. Deskripsi: Singkong + kelapa + gula aren."},
    {"id":"kuliner-33","category":"kuliner","keywords":["wajik","kletik"],"question":"Info Wajik Kletik","answer":"Nama kuliner: Wajik Kletik. Kategori: Camilan Manis. Alamat: Jl. Dr. Cipto. Jam buka: 08:00 - 17:00. Harga: Rp 3.000 - 6.000. Deskripsi: Wajik kenyal dari gula jawa."},
    {"id":"kuliner-34","category":"kuliner","keywords":["dawet","ayu"],"question":"Info Dawet Ayu","answer":"Nama kuliner: Dawet Ayu. Kategori: Minuman. Alamat: Pasar Wage. Jam buka: 08:00 - 17:00. Harga: Rp 5.000 - 8.000. Deskripsi: Cendol, santan, gula jawa."},
    {"id":"kuliner-35","category":"kuliner","keywords":["es","gempol"],"question":"Info Es Gempol","answer":"Nama kuliner: Es Gempol. Kategori: Minuman. Alamat: Pasar Wage. Jam buka: 10:00 - 18:00. Harga: Rp 7.000 - 10.000. Deskripsi: Gempol, santan, gula merah."},
    {"id":"kuliner-36","category":"kuliner","keywords":["es","cendol","dawet"],"question":"Info Es Cendol Dawet","answer":"Nama kuliner: Es Cendol Dawet. Kategori: Minuman. Alamat: Jl. Dr. Soeparno. Jam buka: 10:00 - 18:00. Harga: Rp 5.000 - 8.000. Deskripsi: Tepung beras, santan, gula merah."},
    {"id":"kuliner-37","category":"kuliner","keywords":["wedang","ronde"],"question":"Info Wedang Ronde","answer":"Nama kuliner: Wedang Ronde. Kategori: Minuman. Alamat: Pasar Malam Purwokerto. Jam buka: 18:00 - 23:00. Harga: Rp 8.000 - 12.000. Deskripsi: Bola ketan, jahe, kacang."},
    {"id":"kuliner-38","category":"kuliner","keywords":["es","puter"],"question":"Info Es Puter","answer":"Nama kuliner: Es Puter. Kategori: Minuman. Alamat: Jl. Sudirman. Jam buka: 10:00 - 18:00. Harga: Rp 5.000 - 10.000. Deskripsi: Es krim tradisional."},
    {"id":"kuliner-39","category":"kuliner","keywords":["sate","bebek","kaleng"],"question":"Info Sate Bebek Kaleng","answer":"Nama kuliner: Sate Bebek Kaleng. Kategori: Sate. Alamat: Jl. Perintis Kemerdekaan. Jam buka: 16:00 - 22:00. Harga: Rp 20.000 - 30.000. Deskripsi: Sate bebek + bumbu kacang."},
    {"id":"kuliner-40","category":"kuliner","keywords":["sate","ambal"],"question":"Info Sate Ambal","answer":"Nama kuliner: Sate Ambal. Kategori: Sate. Alamat: Jl. Ambal. Jam buka: 16:00 - 22:00. Harga: Rp 20.000 - 30.000. Deskripsi: Sate ayam bumbu kacang."},
    {"id":"kuliner-41","category":"kuliner","keywords":["sate","kelinci"],"question":"Info Sate Kelinci","answer":"Nama kuliner: Sate Kelinci. Kategori: Sate. Alamat: Jl. Karang Bolong. Jam buka: 17:00 - 23:00. Harga: Rp 25.000 - 35.000. Deskripsi: Daging kelinci bumbu kecap."},
    {"id":"kuliner-42","category":"kuliner","keywords":["sate","maranggi"],"question":"Info Sate Maranggi","answer":"Nama kuliner: Sate Maranggi. Kategori: Sate. Alamat: Jl. Maranggi. Jam buka: 16:00 - 22:00. Harga: Rp 25.000 - 35.000. Deskripsi: Daging sapi bumbu kecap/kacang."},
    {"id":"kuliner-43","category":"kuliner","keywords":["sate","kambing"],"question":"Info Sate Kambing","answer":"Nama kuliner: Sate Kambing. Kategori: Sate. Alamat: Jl. Ahmad Yani. Jam buka: 17:00 - 23:00. Harga: Rp 25.000 - 40.000. Deskripsi: Daging kambing + kecap."},
    {"id":"kuliner-44","category":"kuliner","keywords":["sate","ayam"],"question":"Info Sate Ayam","answer":"Nama kuliner: Sate Ayam. Kategori: Sate. Alamat: Alun-Alun Purwokerto. Jam buka: 17:00 - 23:00. Harga: Rp 15.000 - 25.000. Deskripsi: Ayam bumbu kacang/kecap."},
    {"id":"kuliner-45","category":"kuliner","keywords":["bakso","grabag"],"question":"Info Bakso Grabag","answer":"Nama kuliner: Bakso Grabag. Kategori: Bakso. Alamat: Jl. Gatot Subroto. Jam buka: 10:00 - 22:00. Harga: Rp 12.000 - 20.000. Deskripsi: Bakso urat + kaldu sapi."},
    {"id":"kuliner-46","category":"kuliner","keywords":["bakso","mercon"],"question":"Info Bakso Mercon","answer":"Nama kuliner: Bakso Mercon. Kategori: Bakso. Alamat: Jl. Jend. Sudirman. Jam buka: 10:00 - 22:00. Harga: Rp 15.000 - 25.000. Deskripsi: Bakso pedas level bisa dipilih."},
    {"id":"kuliner-47","category":"kuliner","keywords":["bakso","tusuk"],"question":"Info Bakso Tusuk","answer":"Nama kuliner: Bakso Tusuk. Kategori: Bakso. Alamat: Pasar Malam Purwokerto. Jam buka: 18:00 - 23:00. Harga: Rp 1.000 - 2.000/tusuk. Deskripsi: Bakso kecil saus kacang."},
    {"id":"kuliner-48","category":"kuliner","keywords":["bakso","urat"],"question":"Info Bakso Urat","answer":"Nama kuliner: Bakso Urat. Kategori: Bakso. Alamat: Jl. S. Parman. Jam buka: 10:00 - 22:00. Harga: Rp 15.000 - 25.000. Deskripsi: Bakso isi urat sapi."},
    {"id":"kuliner-49","category":"kuliner","keywords":["mie","ongklok"],"question":"Info Mie Ongklok","answer":"Nama kuliner: Mie Ongklok. Kategori: Mie. Alamat: Jl. Prof. HR. Bunyamin. Jam buka: 10:00 - 20:00. Harga: Rp 12.000 - 18.000. Deskripsi: Mie kuah kental tepung kanji."},
    {"id":"kuliner-50","category":"kuliner","keywords":["mie","lethek"],"question":"Info Mie Lethek","answer":"Nama kuliner: Mie Lethek. Kategori: Mie. Alamat: Jl. Pahlawan. Jam buka: 08:00 - 16:00. Harga: Rp 10.000 - 15.000. Deskripsi: Mie tradisional tepung singkong."},
    {"id":"kuliner-51","category":"kuliner","keywords":["empal","basah"],"question":"Info Empal Basah","answer":"Nama kuliner: Empal Basah. Kategori: Makanan Berat. Alamat: Warung Empal Bu Yati. Jam buka: 10:00 - 20:00. Harga: Rp 15.000 - 25.000. Deskripsi: Daging sapi kuah santan."},
    {"id":"kuliner-52","category":"kuliner","keywords":["grombyang"],"question":"Info Grombyang","answer":"Nama kuliner: Grombyang. Kategori: Makanan Berat. Alamat: Pasar Wage. Jam buka: 06:00 - 12:00. Harga: Rp 15.000 - 25.000. Deskripsi: Nasi + kuah santan + daging."},
    {"id":"kuliner-53","category":"kuliner","keywords":["nasi","penggel"],"question":"Info Nasi Penggel","answer":"Nama kuliner: Nasi Penggel. Kategori: Makanan Berat. Alamat: Jl. Pemuda. Jam buka: 17:00 - 23:00. Harga: Rp 15.000 - 25.000. Deskripsi: Ayam/bebek goreng + sambal."},
    {"id":"kuliner-54","category":"kuliner","keywords":["kupat","tahu"],"question":"Info Kupat Tahu","answer":"Nama kuliner: Kupat Tahu. Kategori: Makanan Berat. Alamat: Pasar Wage. Jam buka: 06:00 - 12:00. Harga: Rp 10.000 - 15.000. Deskripsi: Ketupat, tahu, tauge + bumbu."},
    {"id":"kuliner-55","category":"kuliner","keywords":["rujak","cingur"],"question":"Info Rujak Cingur","answer":"Nama kuliner: Rujak Cingur. Kategori: Makanan Berat. Alamat: Jl. S. Parman. Jam buka: 10:00 - 18:00. Harga: Rp 15.000 - 20.000. Deskripsi: Sayur + buah + cingur sapi."},
    {"id":"kuliner-56","category":"kuliner","keywords":["pecel","madiun"],"question":"Info Pecel Madiun","answer":"Nama kuliner: Pecel Madiun. Kategori: Makanan Berat. Alamat: Jl. Merdeka. Jam buka: 08:00 - 16:00. Harga: Rp 12.000 - 18.000. Deskripsi: Sayuran rebus + bumbu kacang."},
    {"id":"kuliner-57","category":"kuliner","keywords":["rawon"],"question":"Info Rawon","answer":"Nama kuliner: Rawon. Kategori: Makanan Berat. Alamat: Jl. Jend. Gatot Subroto. Jam buka: 10:00 - 20:00. Harga: Rp 20.000 - 30.000. Deskripsi: Sup daging kuah hitam keluak."},
    {"id":"kuliner-58","category":"kuliner","keywords":["nasi","goreng","mercon"],"question":"Info Nasi Goreng Mercon","answer":"Nama kuliner: Nasi Goreng Mercon. Kategori: Nasi Goreng. Alamat: Jl. Dr. Angka. Jam buka: 17:00 - 23:00. Harga: Rp 15.000 - 25.000. Deskripsi: Nasi goreng super pedas."}
  ],

  // 'fallbackResponses' adalah jawaban default jika tidak ada yang cocok.
  fallbackResponses: [
    "Maaf, saya tidak punya informasi itu. Coba tanya tentang kuliner atau cara penggunaan aplikasi.",
    "Saya tidak yakin—coba ulangi pertanyaan Anda atau tanyakan tentang info umum."
  ],

  // 'settings' untuk konfigurasi chatbot.
  settings: {
    caseSensitive: false,
    fuzzyMatching: true,
    typingDelay: 800,
    responseDelay: 400
  }
};
