
// ============================================
// DATA KULINER PURWOKERTO (Restored)
// ============================================
const kulinerData = [
    {
        id: 1,
        nama: "Soto Kecik Sokaraja",
        kategori: "Soto",
        deskripsi: "Soto khas Sokaraja dengan kuah kacang yang gurih dan ketupat.",
        alamat: "Jl. Jend. Soedirman No. 12, Sokaraja",
        jam: "08.00 - 20.00",
        harga: "Rp 20.000 - Rp 35.000",
        lat: -7.4589,
        lng: 109.2890,
        gambar: "https://example.com/soto.jpg",
        rating: 4.8,
        reviews: []
    },
    {
        id: 2,
        nama: "Bakso Pekih",
        kategori: "Bakso",
        deskripsi: "Bakso legendaris di Purwokerto dengan tekstur daging asli yang padat.",
        alamat: "Jl. Pekih No. 10, Purwokerto",
        jam: "09.00 - 18.00",
        harga: "Rp 25.000 - Rp 40.000",
        lat: -7.4213,
        lng: 109.2345,
        gambar: "https://example.com/bakso.jpg",
        rating: 4.7,
        reviews: []
    },
    {
        id: 3,
        nama: "Sate Ayam Martawi",
        kategori: "Sate",
        deskripsi: "Sate ayam dengan potongan besar dan bumbu kacang kental khas.",
        alamat: "Jl. Masjid No. 4, Purwokerto",
        jam: "10.00 - 22.00",
        harga: "Rp 30.000 - Rp 50.000",
        lat: -7.4245,
        lng: 109.2312,
        gambar: "https://example.com/sate.jpg",
        rating: 4.6,
        reviews: []
    },
    {
        id: 4,
        nama: "Tempe Mendoan Eco 21",
        kategori: "Jajanan Tradisional",
        deskripsi: "Tempe mendoan hangat dengan sambal kecap pedas manis.",
        alamat: "Jl. HR Bunyamin, Purwokerto",
        jam: "15.00 - 23.00",
        harga: "Rp 3.000 / pcs",
        lat: -7.4012,
        lng: 109.2456,
        gambar: "https://example.com/mendoan.jpg",
        rating: 4.9,
        reviews: []
    },
    {
        id: 5,
        nama: "Gudeg Yu Djum (Cabang)",
        kategori: "Gudeg",
        deskripsi: "Gudeg kering khas Jogja yang hadir di Purwokerto.",
        alamat: "Jl. Overste Isdiman, Purwokerto",
        jam: "07.00 - 21.00",
        harga: "Rp 25.000 - Rp 60.000",
        lat: -7.4111,
        lng: 109.2399,
        gambar: "https://example.com/gudeg.jpg",
        rating: 4.5,
        reviews: []
    },
    {
        id: 6,
        nama: "Mie Ayam Palembang Afung",
        kategori: "Makanan Berat",
        deskripsi: "Mie ayam dengan tekstur kenyal dan kuah kaldu bening.",
        alamat: "Jl. Dr. Angka, Purwokerto",
        jam: "10.00 - 20.00",
        harga: "Rp 18.000 - Rp 30.000",
        lat: -7.4150,
        lng: 109.2420,
        gambar: "https://example.com/mie.jpg",
        rating: 4.6,
        reviews: []
    },
    {
        id: 7,
        nama: "Es Durian Kombinasi",
        kategori: "Minuman",
        deskripsi: "Es durian segar dengan toping melimpah di GOR Satria.",
        alamat: "Komplek GOR Satria",
        jam: "11.00 - 17.00",
        harga: "Rp 15.000 - Rp 25.000",
        lat: -7.4055,
        lng: 109.2510,
        gambar: "https://example.com/durian.jpg",
        rating: 4.8,
        reviews: []
    },
    {
        id: 8,
        nama: "Lontong Sayur Padang",
        kategori: "Lontong",
        deskripsi: "Sarapan lontong sayur kuah santan pedas.",
        alamat: "Jl. Kampus, Grendeng",
        jam: "06.00 - 11.00",
        harga: "Rp 12.000",
        lat: -7.4020,
        lng: 109.2460,
        gambar: "https://example.com/lontong.jpg",
        rating: 4.4,
        reviews: []
    },
    {
        id: 9,
        nama: "Ayam Goreng Tantene",
        kategori: "Ayam",
        deskripsi: "Ayam goreng kampung dengan sambal terasi super pedas.",
        alamat: "Jl. Supriyadi, Purwokerto",
        jam: "10.00 - 21.00",
        harga: "Rp 22.000 - Rp 40.000",
        lat: -7.4180,
        lng: 109.2480,
        gambar: "https://example.com/ayam.jpg",
        rating: 4.7,
        reviews: []
    }
];

// Helper untuk Akses Global
window.kulinerData = kulinerData;
window.getAllKulinerData = function () {
    return kulinerData;
};

// Navigasi hash untuk halaman khusus (news, promo, dsb)
function navigateToHash(path) {


// ============================================
// MAP FUNCTIONALITY (Restored)
// ============================================
let map, markers = [];

function initMap() {
    // Check if map container exists
    if (!document.getElementById('map')) return;

    // Purwokerto Coordinates
    const center = [-7.4245, 109.2302]; 

    // Initialize Map
    map = L.map('map', {
        center: center,
        zoom: 13,
        zoomControl: false, // Custom position if needed
        attributionControl: false
    });

    // Add Tile Layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Render Markers
    renderMarkers();

    console.log('Map initialized');
}

function renderMarkers() {
    if (!map) return;
    
    // Clear existing markers
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    // Add markers from kulinerData
    if (typeof kulinerData !== 'undefined') {
        kulinerData.forEach(item => {
            if (item.lat && item.lng) {
                const marker = L.marker([item.lat, item.lng])
                    .addTo(map)
                    .bindPopup('<b>' + item.nama + '</b><br>' + item.kategori);
                markers.push(marker);
            }
        });
    }
}

function locateUser() {
    if (!map) return;
    map.locate({ setView: true, maxZoom: 15 });
}

// Initialize Map on Load
document.addEventListener('DOMContentLoaded', initMap);

// FIX CHATBOT CLICK (Global & Robust)
window.addEventListener('load', () => {
    // Re-init map if missed
    if(!map) initMap();
    
    // Fix Chatbot
    const fab = document.querySelector('.chatbot-fab');
    if (fab) {
        fab.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (window.toggleChat) window.toggleChat();
        };
    }
});

