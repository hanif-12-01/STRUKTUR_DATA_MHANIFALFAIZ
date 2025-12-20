// ============================================
// LAPOR MANGAN! - Main Application Script
// Consolidated Logic for FR & NFR Compliance
// ============================================

// ============================================
// DATABASE (LocalStorage Simulation)
// ============================================
const DB = {
    get(key, defaultValue = []) {
        try {
            const data = localStorage.getItem(`lm_${key}`);
            return data ? JSON.parse(data) : defaultValue;
        } catch { return defaultValue; }
    },

    set(key, value) {
        localStorage.setItem(`lm_${key}`, JSON.stringify(value));
    },

    init() {
        if (!localStorage.getItem('lm_initialized')) {
            this.set('kuliner', initialKulinerData);
            this.set('berita', initialBeritaData);
            this.set('promo', initialPromoData);
            this.set('users', [{ id: 1, email: 'admin@lapormangan.id', name: 'Admin', role: 'admin' }]);
            this.set('submissions', []);
            this.set('initialized', true);
        }
    }
};

// ============================================
// INITIAL DATA
// ============================================
const initialKulinerData = [
    {
        id: 1,
        nama: "Soto Sokaraja",
        kategori: "Soto",
        alamat: "Jl. Jend. Sudirman No.58, Purwokerto",
        jam: "07:00 - 15:00",
        harga: "Rp15.000 - Rp20.000",
        deskripsi: "Kuah kental dengan irisan daging sapi, khas Sokaraja yang legendaris.",
        foto: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
        lat: -7.421, lng: 109.242,
        keliling: false,
        halal: "halal",
        kontak: "081234567890",
        parkir: "Tersedia luas",
        rute: "Area Sokaraja, dekat pasar",
        verified: true,
        reviews: [
            { userId: 1, name: "Budi", rating: 5, comment: "Soto terenak di Purwokerto!", date: "2025-12-10" },
            { userId: 2, name: "Ani", rating: 4, comment: "Kuahnya gurih, porsi pas", date: "2025-12-08" }
        ]
    },
    {
        id: 2,
        nama: "Sate Bebek Tambak",
        kategori: "Sate",
        alamat: "Jl. Tambak, Purwokerto",
        jam: "16:00 - 22:00",
        harga: "Rp25.000 - Rp40.000",
        deskripsi: "Sate bebek gurih dengan bumbu kacang dan arang khas, favorit malam hari.",
        foto: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400",
        lat: -7.423, lng: 109.240,
        keliling: false,
        halal: "halal",
        kontak: "081234567891",
        parkir: "Tersedia",
        rute: "Jl. Tambak",
        verified: true,
        reviews: [{ userId: 3, name: "Dimas", rating: 5, comment: "Wajib coba!", date: "2025-12-05" }]
    },
    {
        id: 3,
        nama: "Mendoan Bu Parti",
        kategori: "Jajanan Tradisional",
        alamat: "Pasar Sokaraja, Purwokerto",
        jam: "06:00 - 18:00",
        harga: "Rp2.000 - Rp5.000",
        deskripsi: "Tempe tipis digoreng renyah, disajikan dengan sambal kecap pedas.",
        foto: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400",
        lat: -7.420, lng: 109.230,
        keliling: true,
        halal: "halal-self",
        kontak: "081234567892",
        parkir: "Area Pasar",
        rute: "Berkeliling Pasar Sokaraja",
        verified: true,
        reviews: []
    },
    {
        id: 4,
        nama: "Nasi Liwet Mbah Maimun",
        kategori: "Makanan Berat",
        alamat: "Jl. Pahlawan No.123, Purwokerto",
        jam: "16:00 - 22:00",
        harga: "Rp18.000 - Rp25.000",
        deskripsi: "Nasi gurih santan dengan lauk ayam suwir, telur, dan tempe orek.",
        foto: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
        lat: -7.425, lng: 109.250,
        keliling: false,
        halal: "halal",
        kontak: "081234567893",
        parkir: "Tersedia",
        rute: "Jl. Pahlawan",
        verified: true,
        reviews: []
    },
    {
        id: 5,
        nama: "Bakso President",
        kategori: "Bakso",
        alamat: "Jl. Dr. Angka No.88, Purwokerto",
        jam: "08:00 - 21:00",
        harga: "Rp15.000 - Rp25.000",
        deskripsi: "Bakso besar dengan kuah gurih dan tekstur kenyal, ikonik di Purwokerto.",
        foto: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
        lat: -7.418, lng: 109.245,
        keliling: false,
        halal: "halal",
        kontak: "081234567894",
        parkir: "Luas",
        rute: "Jl. Dr. Angka",
        verified: true,
        reviews: []
    },
    {
        id: 6,
        nama: "Gudeg Mbah Siti",
        kategori: "Gudeg",
        alamat: "Jl. Slamet Riyadi No.45, Purwokerto",
        jam: "09:00 - 19:00",
        harga: "Rp20.000 - Rp30.000",
        deskripsi: "Gudeg manis khas Jawa dengan krengsengan ayam.",
        foto: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
        lat: -7.430, lng: 109.235,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567895",
        parkir: "Tersedia",
        rute: "Jl. Slamet Riyadi",
        verified: true,
        reviews: []
    },
    {
        id: 7,
        nama: "Cilok Bang Jali",
        kategori: "Jajanan Tradisional",
        alamat: "Keliling area GOR Satria",
        jam: "14:00 - 21:00",
        harga: "Rp5.000 - Rp10.000",
        deskripsi: "Cilok kenyal dengan bumbu kacang spesial.",
        foto: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400",
        lat: -7.424, lng: 109.244,
        keliling: true,
        halal: "unknown",
        kontak: "081234567896",
        parkir: "-",
        rute: "Keliling GOR Satria",
        verified: true,
        reviews: []
    },
    {
        id: 8,
        nama: "Es Dawet Ayu",
        kategori: "Minuman",
        alamat: "Alun-alun Purwokerto",
        jam: "10:00 - 22:00",
        harga: "Rp5.000 - Rp8.000",
        deskripsi: "Es dawet segar dengan santan dan gula merah.",
        foto: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
        lat: -7.422, lng: 109.241,
        keliling: true,
        halal: "halal-self",
        kontak: "081234567897",
        parkir: "Area Alun-alun",
        rute: "Alun-alun Purwokerto",
        verified: true,
        reviews: []
    },
    {
        id: 9,
        nama: "Ayam Bakar Pak Tono",
        kategori: "Ayam",
        alamat: "Jl. Diponegoro No.78, Purwokerto",
        jam: "11:00 - 23:00",
        harga: "Rp25.000 - Rp40.000",
        deskripsi: "Ayam bakar bumbu rempah dengan sambal matah.",
        foto: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400",
        lat: -7.422, lng: 109.248,
        keliling: false,
        halal: "halal",
        kontak: "081234567898",
        parkir: "Luas",
        rute: "Jl. Diponegoro",
        verified: true,
        reviews: []
    },
    {
        id: 10,
        nama: "Lontong Sayur Mbah Rini",
        kategori: "Lontong",
        alamat: "Jl. Ahmad Yani No.90, Purwokerto",
        jam: "07:00 - 14:00",
        harga: "Rp12.000 - Rp18.000",
        deskripsi: "Lontong dengan sayur labu siam santan.",
        foto: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400",
        lat: -7.415, lng: 109.240,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567899",
        parkir: "Tersedia",
        rute: "Jl. Ahmad Yani",
        verified: true,
        reviews: []
    }
];

const initialBeritaData = [
    {
        id: 1,
        judul: "Festival Kuliner Purwokerto 2025",
        konten: "Festival kuliner terbesar di Purwokerto akan diselenggarakan pada tanggal 20-25 Desember 2025 di Alun-alun Purwokerto.",
        gambar: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
        tanggal: "2025-12-15",
        kategori: "Event",
        author: "Admin"
    },
    {
        id: 2,
        judul: "Tips Mencari Kuliner Halal",
        konten: "Pastikan tempat makan memiliki sertifikat halal MUI atau minimal sudah dikenal masyarakat sebagai tempat makan halal.",
        gambar: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
        tanggal: "2025-12-12",
        kategori: "Tips",
        author: "Admin"
    }
];

const initialPromoData = [
    {
        id: 1,
        judul: "Diskon 20% Soto Sokaraja",
        deskripsi: "Dapatkan diskon 20% untuk pembelian minimal Rp50.000",
        kulinerId: 1,
        berlakuSampai: "2025-12-31",
        kode: "SOTO20",
        aktif: true
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================
let state = {
    currentUser: null,
    isAdmin: false, // Admin Simulation
    currentPage: 'home',
    kulinerData: [],
    favorites: new Set(),
    map: null,
    markers: [],
    weather: null
};

// ============================================
// ADMIN & BUSINESS LOGIC
// ============================================
const AdminManager = {
    toggle() {
        state.isAdmin = !state.isAdmin;
        showToast(state.isAdmin ? "Mode Admin: ON 🔧" : "Mode Admin: OFF");
        location.reload();
    },
    deleteKuliner(id) {
        if (!confirm("Hapus data kuliner ini? (Admin Only)")) return;
        state.kulinerData = state.kulinerData.filter(k => k.id !== id);
        DB.set('kuliner', state.kulinerData);
        showToast("Data berhasil dihapus");
        renderKulinerList();
        renderMarkers();
        closeModal();
    },
    approveSubmission(id, isApprove) {
        showToast(isApprove ? "Pengajuan disetujui 🟢" : "Pengajuan ditolak 🔴");
    },
    manageNews() {
        if (!state.isAdmin) return;
        const title = prompt("Judul Berita Baru:");
        if (title) {
            const berita = DB.get('berita') || [];
            berita.unshift({
                id: Date.now(),
                judul: title,
                konten: "Konten berita baru... (Edit di database untuk detail)",
                tanggal: new Date().toISOString().split('T')[0],
                kategori: "Info",
                author: "Admin"
            });
            DB.set('berita', berita);
            showToast("Berita berhasil ditambahkan");
            // If there's a renderNews function, call it. If not, reload.
            location.hash = '#/news';
            location.reload();
        }
    }
};

window.toggleAdmin = AdminManager.toggle;
window.AdminManager = AdminManager;

function claimBusiness(id) {
    const item = state.kulinerData.find(k => k.id === id);
    if (confirm(`Apakah Anda pemilik "${item.nama}"?\nKlaim bisnis ini untuk mengelola informasi.`)) {
        showToast("Klaim berhasil dikirim! Tim kami akan memverifikasi. ✅");
    }
}
window.claimBusiness = claimBusiness;

function setSessionCookie(token) {
    document.cookie = `session_token=${token}; path=/; SameSite=Strict; Secure;`;
    console.log("Secure cookie set:", document.cookie);
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    DB.init();
    loadState();
    initApp();
});

function loadState() {
    state.kulinerData = DB.get('kuliner', initialKulinerData);
    state.favorites = new Set(DB.get('favorites', []));
    state.currentUser = DB.get('currentUser', null);
}

function initApp() {
    initMap();
    renderKulinerList();
    populateFilters();
    fetchWeather();
    setupEventListeners();
    updateAuthUI();
    checkUrlHash();

    // Init Chatbot
    const fab = document.querySelector('.chatbot-fab') || document.querySelector('.chat-fab');
    if (fab) fab.onclick = toggleChat;
}

// ============================================
// MAP (FR-01, FR-02)
// ============================================
function initMap() {
    if (!document.getElementById('map')) return;
    state.map = L.map('map', { zoomControl: false }).setView([-7.4212, 109.2422], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(state.map);
    renderMarkers();

    // Re-locate user button
    const locateBtn = document.querySelector('.map-locate-btn');
    if (locateBtn) locateBtn.onclick = sortByDistance;
}

function renderMarkers(data = state.kulinerData) {
    if (!state.map) return;
    state.markers.forEach(m => state.map.removeLayer(m));
    state.markers = [];

    data.forEach((item) => {
        const icon = item.keliling ? '🛵' : '📍';
        const marker = L.marker([item.lat, item.lng], {
            icon: L.divIcon({
                html: `<div class="marker-icon ${item.keliling ? 'keliling' : ''}" style="background:white; padding:5px; border-radius:50%; box-shadow:0 2px 5px rgba(0,0,0,0.3); font-size:20px;">${icon}</div>`,
                className: '',
                iconSize: [32, 32]
            })
        }).addTo(state.map);

        marker.bindPopup(`<strong>${item.nama}</strong><br>${item.kategori}<br><button onclick="showDetail(${item.id})" class="btn-xs btn-primary" style="margin-top:5px;">Lihat Detail</button>`);
        marker.on('click', () => {
            // Optional: Center map
        });
        state.markers.push(marker);
    });
}

function sortByDistance() {
    if (!navigator.geolocation) {
        showToast('Geolocation tidak didukung', 'error');
        return;
    }

    showToast('Mencari lokasi...', 'info');
    navigator.geolocation.getCurrentPosition(pos => {
        const sorted = [...state.kulinerData].sort((a, b) => {
            const distA = getDistance(pos.coords.latitude, pos.coords.longitude, a.lat, a.lng);
            const distB = getDistance(pos.coords.latitude, pos.coords.longitude, b.lat, b.lng);
            return distA - distB;
        });
        renderKulinerList(sorted);
        renderMarkers(sorted);
        state.map.setView([pos.coords.latitude, pos.coords.longitude], 15);

        // Add user marker
        L.marker([pos.coords.latitude, pos.coords.longitude], {
            icon: L.divIcon({ html: '🔵', className: 'user-marker', iconSize: [20, 20] })
        }).addTo(state.map).bindPopup('Lokasi Anda').openPopup();

        showToast('Diurutkan berdasarkan jarak terdekat');
    }, () => {
        showToast('Gagal mengakses lokasi', 'error');
    });
}

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ============================================
// FILTERS & SORTING
// ============================================
function populateFilters() {
    const categories = ["Soto", "Sate", "Bakso", "Gudeg", "Ayam", "Lontong", "Jajanan Tradisional", "Makanan Berat", "Minuman"];
    const select = document.getElementById('categoryFilter');
    if (select) {
        select.innerHTML = '<option value="">Kategori</option>';
        categories.forEach(cat => {
            select.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }
}

function applyFilters() {
    const search = document.getElementById('searchInput')?.value?.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value || '';
    const type = document.getElementById('typeFilter')?.value || '';
    const halal = document.getElementById('halalFilter')?.value || '';
    const sort = document.getElementById('sortFilter')?.value || '';
    const openNow = document.getElementById('openNowFilter')?.checked || false;

    let filtered = state.kulinerData.filter(k => {
        const matchSearch = k.nama.toLowerCase().includes(search) || k.kategori.toLowerCase().includes(search);
        const matchCategory = !category || k.kategori === category;
        const matchType = !type || (type === 'tetap' ? !k.keliling : k.keliling);
        const matchHalal = !halal || k.halal === halal;
        const matchOpen = !openNow || isOpen(k.jam);
        return matchSearch && matchCategory && matchType && matchHalal && matchOpen;
    });

    // Sorting
    if (sort === 'nama') filtered.sort((a, b) => a.nama.localeCompare(b.nama, 'id'));
    else if (sort === 'rating') filtered.sort((a, b) => getAvgRating(b) - getAvgRating(a));
    else if (sort === 'harga-asc') filtered.sort((a, b) => parsePrice(a.harga) - parsePrice(b.harga));
    else if (sort === 'harga-desc') filtered.sort((a, b) => parsePrice(b.harga) - parsePrice(a.harga));

    renderKulinerList(filtered);
    renderMarkers(filtered);

    document.getElementById('resultCount').textContent = `${filtered.length} hasil`;
}

function isOpen(jam) {
    if (!jam) return false;
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const [start, end] = jam.split(' - ').map(t => {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + (m || 0);
    });
    return currentMinutes >= start && currentMinutes <= end;
}

function parsePrice(harga) {
    const match = harga.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
}

function getAvgRating(item) {
    if (!item.reviews || item.reviews.length === 0) return 0;
    return item.reviews.reduce((sum, r) => sum + r.rating, 0) / item.reviews.length;
}

function filterOpenNow() {
    const chk = document.getElementById('openNowFilter');
    if (chk) {
        chk.checked = !chk.checked;
        applyFilters();
    }
}

function showRandom() {
    const random = state.kulinerData[Math.floor(Math.random() * state.kulinerData.length)];
    if (random) showDetail(random.id);
}

// ============================================
// KULINER LIST & DETAIL
// ============================================
function renderKulinerList(data = state.kulinerData) {
    const list = document.getElementById('kulinerList');
    if (!list) return;

    if (data.length === 0) {
        list.innerHTML = '<div class="empty-state"><p>Tidak ada hasil ditemukan</p></div>';
        return;
    }

    list.innerHTML = data.map(item => `
        <div class="kuliner-card" onclick="showDetail(${item.id})" style="cursor:pointer; margin-bottom:15px; background:white; border-radius:10px; overflow:hidden; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
            <div style="height:120px; overflow:hidden;">
                <img src="${item.foto}" alt="${item.nama}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='https://via.placeholder.com/300x150?text=No+Image'">
            </div>
            <div class="card-body" style="padding:12px;">
                <h3 style="margin:0 0 5px 0; font-size:16px;">${item.nama}</h3>
                <p style="margin:0; color:#666; font-size:12px;">${item.kategori} • ${item.harga}</p>
                <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
                   <span style="font-size:12px; color:${isOpen(item.jam) ? 'green' : 'red'}">${isOpen(item.jam) ? '● Buka' : '○ Tutup'}</span>
                   <span style="color:#FF6B35; font-size:12px;">★ ${getAvgRating(item).toFixed(1)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function showDetail(id) {
    const item = state.kulinerData.find(k => k.id === id);
    if (!item) return;

    const isFav = state.favorites.has(id);
    const detailContent = document.getElementById('modalContent');
    const adminControls = state.isAdmin ?
        `<div style="background:#ffebee; padding:10px; margin-top:10px; border-radius:8px; border:1px solid red;">
            <b>🔧 Admin Zone</b><br>
            <button onclick="AdminManager.deleteKuliner(${item.id})" class="btn-xs" style="background:red; color:white; margin-top:5px;">Hapus Data</button>
         </div>` : '';

    detailContent.innerHTML = `
        <div style="position:relative;">
            <img src="${item.foto}" style="width:100%; height:200px; object-fit:cover; border-radius:10px;">
            <button onclick="toggleFavorite(${item.id})" style="position:absolute; top:10px; right:10px; background:white; border:none; border-radius:50%; width:40px; height:40px; box-shadow:0 2px 5px rgba(0,0,0,0.2); cursor:pointer;">
                <i class="${isFav ? 'fas' : 'far'} fa-heart" style="color:${isFav ? 'red' : '#333'}; font-size:20px;"></i>
            </button>
        </div>
        
        <div style="padding:15px 0;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
                <h2 style="margin:0;">${item.nama}</h2>
                <span style="background:#eee; padding:4px 8px; border-radius:4px; font-size:12px;">${item.kategori}</span>
            </div>
            
            <p style="color:#666; margin:5px 0;"><i class="fas fa-map-marker-alt"></i> ${item.alamat}</p>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:15px 0; background:#f9f9f9; padding:10px; border-radius:10px;">
                <div><small>Jam Buka</small><br><b>${item.jam}</b></div>
                <div><small>Harga</small><br><b>${item.harga}</b></div>
                <div><small>Parkir</small><br><b>${item.parkir || '-'}</b></div>
                <div><small>Tipe</small><br><b>${item.keliling ? 'Keliling 🛵' : 'Tetap 🏠'}</b></div>
            </div>

            <p style="color:#444; line-height:1.5;">${item.deskripsi}</p>
            
            <div style="display:flex; gap:10px; margin-top:15px;">
                <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lng}', '_blank')" class="btn btn-primary" style="flex:1; padding:12px;">
                    <i class="fas fa-directions"></i> Petunjuk Arah
                </button>
                 <button onclick="claimBusiness(${item.id})" class="btn btn-secondary" style="flex:1; padding:12px;">
                    <i class="fas fa-store-alt"></i> Klaim Bisnis
                </button>
            </div>
            ${adminControls}
        </div>
    `;

    document.getElementById('detailModal').classList.add('show');
    state.map.setView([item.lat, item.lng], 16);
}

function closeModal() {
    document.getElementById('detailModal').classList.remove('show');
}

// ============================================
// CHATBOT AI (MakanBot)
// ============================================
function toggleChat() {
    document.getElementById('chatPanel').classList.toggle('active'); // Changed to toggle Class
    // Ensure display logic in CSS handles .active
    const panel = document.getElementById('chatPanel');
    if (panel.style.display === 'flex') {
        panel.style.display = 'none';
        panel.classList.remove('active');
    } else {
        panel.style.display = 'flex';
        panel.classList.add('active');
    }
}

function sendChat() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg) return;

    const messages = document.getElementById('chatMessages');
    messages.innerHTML += `<div class="chat-msg user" style="align-self:flex-end; background:#dcf8c6; padding:8px 12px; border-radius:15px; margin:5px 0; max-width:80%;">${msg}</div>`;
    input.value = '';

    // Typing simulation
    const id = Date.now();
    messages.innerHTML += `<div id="typing-${id}" class="chat-msg bot" style="align-self:flex-start; background:white; padding:8px 12px; border-radius:15px; margin:5px 0; border:1px solid #eee;">...</div>`;
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
        document.getElementById(`typing-${id}`).remove();
        const reply = MakanBotAI.generateResponse(msg);
        messages.innerHTML += `<div class="chat-msg bot" style="align-self:flex-start; background:white; padding:8px 12px; border-radius:15px; margin:5px 0; border:1px solid #eee;">${reply.replace(/\n/g, '<br>')}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }, 800);
}

function handleChatKey(e) {
    if (e.key === 'Enter') sendChat();
}

const MakanBotAI = {
    intents: {
        greeting: ['halo', 'hai', 'hi', 'pagi', 'siang'],
        askFood: ['makan', 'kuliner', 'lapar', 'cari makan'],
        askCheap: ['murah', 'hemat', 'budget', 'terjangkau'],
        askOpen: ['buka', 'open', 'sekarang'],
        askLegendary: ['legendaris', 'legend', 'terkenal', 'hits'],
        askTakeaway: ['take away', 'bungkus', 'bawa pulang', 'dibungkus'],
        askSouvenir: ['oleh-oleh', 'buah tangan', 'khas'],
        askWeather: ['hujan', 'panas', 'cuaca'],
        askHelp: ['help', 'bantuan', 'bisa apa']
    },

    generateResponse(msg) {
        const lower = msg.toLowerCase();

        // Help
        if (this.match(lower, 'askHelp')) return "Aku bisa bantu cari kuliner:\n- 'Yang murah apa?'\n- 'Rekomendasi soto legendaris'\n- 'Oleh-oleh khas Purwokerto'\n- 'Makanan pas hujan'";

        // Greeting
        if (this.match(lower, 'greeting')) return "Halo! 👋 MakanBot di sini. Lagi cari kuliner apa?";

        // Legendary (Use Case 6)
        if (this.match(lower, 'askLegendary') || lower.includes('legendaris')) {
            const legends = state.kulinerData.filter(k => k.nama.includes('Soto') || k.nama.includes('Bebek') || k.nama.includes('President'));
            const pick = this.pick(legends);
            return `Purwokerto punya banyak kuliner legendaris! Salah satunya **${pick.nama}**. Wajib coba! 🌟`;
        }

        // Take Away (Use Case 8)
        if (this.match(lower, 'askTakeaway')) {
            return "Buat dibawa pulang, **Sate Bebek Tambak** atau **Ayam Bakar Pak Tono** paling pas! Praktis dan tetap enak sampai rumah. 🏠";
        }

        // Souvenir (Use Case 9)
        if (this.match(lower, 'askSouvenir')) {
            return "Oleh-oleh khas Purwokerto paling top ya **Tempe Mendoan**! Bisa beli mentah atau matang di Pasar Sokaraja (Mendoan Bu Parti). 🎁";
        }

        // Weather (Use Case 2)
        if (this.match(lower, 'askWeather') || lower.includes('hujan')) {
            if (lower.includes('hujan')) return "Wah lagi hujan ya? 🌧️ Enaknya makan yang anget-anget kayak **Soto Sokaraja** atau **Bakso President**! 🍜";
            return "Cek ikon cuaca di pojok kanan atas ya! Aku bisa kasih rekomendasi sesuai cuaca. 😉";
        }

        // Cheap (Use Case 5)
        if (this.match(lower, 'askCheap')) {
            const cheap = state.kulinerData.filter(k => parsePrice(k.harga) <= 15000);
            const pick = this.pick(cheap);
            return `Mau yang hemat? Coba **${pick.nama}** (${pick.harga}). Dijamin kenyang tapi dompet aman! 💸`;
        }

        // Default Logic
        if (lower.includes('soto')) return this.recommend('Soto');
        if (lower.includes('sate')) return this.recommend('Sate');
        if (lower.includes('makan')) return "Bingung mau makan apa? Coba fitur 'Acak' di menu filter, atau aku pilihkan **Gudeg Mbah Siti**? 😋";

        return "Maaf, aku kurang ngerti. Coba tanya 'kuliner legendaris' atau 'makan murah'. 😊";
    },

    match(text, intent) {
        return this.intents[intent].some(keyword => text.includes(keyword));
    },

    pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)] || arr[0];
    },

    recommend(cat) {
        const items = state.kulinerData.filter(k => k.kategori.includes(cat));
        if (!items.length) return `Belum ada data ${cat} nih.`;
        return `Rekomendasi ${cat}: **${items[0].nama}** di ${items[0].alamat}.`;
    }
};

// ============================================
// WEATHER & UTILS
// ============================================
async function fetchWeather() {
    try {
        const res = await fetch('https://wttr.in/Purwokerto?format=j1');
        const data = await res.json();
        const temp = data.current_condition[0].temp_C;
        const code = data.current_condition[0].weatherCode; // Wttr.in code

        state.weather = { temp, code };
        updateWeatherUI();
    } catch (e) {
        console.warn('Weather fetch failed');
        state.weather = { temp: 28, code: '113' }; // Fallback
        updateWeatherUI();
    }
}

function updateWeatherUI() {
    const el = document.getElementById('weatherWidget');
    if (!el || !state.weather) return;

    let icon = '☀️';
    // Simplified mapping
    if (['119', '122'].includes(state.weather.code)) icon = '☁️';
    if (['266', '296', '308'].includes(state.weather.code)) icon = '🌧️';

    el.innerHTML = `<span class="weather-icon">${icon}</span> <span class="weather-temp">${state.weather.temp}°C</span>`;
    el.onclick = getWeatherRecommendation;
}

function getWeatherRecommendation() {
    if (!state.weather) return;
    let msg = `Cuaca: ${state.weather.temp}°C. `;
    if (state.weather.temp < 26) {
        msg += "Adem nih! Makan Soto Sokaraja enak kayaknya.";
        alert(msg);
    } else {
        msg += "Panas ya? Minum Es Dawet Ayu seger banget!";
        alert(msg);
    }
}

function showToast(msg, type = 'info') {
    // Simple toast
    const div = document.createElement('div');
    div.className = 'toast show';
    div.innerText = msg;
    div.style.cssText = "position:fixed; bottom:20px; left:50%; transform:translateX(-50%); background:#333; color:white; padding:10px 20px; border-radius:20px; z-index:9999;";
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}

function showSubmitForm() {
    document.getElementById('submitModal').classList.add('show');
}
function closeSubmitModal() {
    document.getElementById('submitModal').classList.remove('show');
}
function submitKuliner(e) {
    e.preventDefault();
    showToast("Terima kasih! Data kuliner berhasil diajukan.");
    closeSubmitModal();
}

function loginWithGoogle() {
    setSessionCookie("simulated-secure-token-xyz123"); // NFR-01
    showToast("Login berhasil! (Simulasi Secure Cookie)");
    document.getElementById('authBtn').innerHTML = `<button onclick="location.reload()" class="btn-xs">Logout</button>`;
    document.getElementById('loginModal').classList.remove('show');

    // Simulate Admin Check (Simple hack for demo)
    if (prompt("Masukkan Kode Admin (Opsional)", "") === "admin123") {
        AdminManager.toggle();
    }
}
function closeLoginModal() { document.getElementById('loginModal').classList.remove('show'); }
function toggleAuthModal() { document.getElementById('loginModal').classList.add('show'); }

// Run
window.showDetail = showDetail; // Expose
window.navigate = (p) => showToast("Navigasi ke " + p);

// HTML Event Handlers
window.closeDetail = closeModal;
window.closeAddKulinerModal = closeSubmitModal;
window.toggleAuthModal = toggleAuthModal;
window.showRandomKuliner = showRandom;
window.showWeatherRec = getWeatherRecommendation;
window.locateUser = sortByDistance;

window.filterHalal = () => {
    const el = document.getElementById('halalFilter');
    if (el) { el.value = 'halal'; applyFilters(); }
};
window.sortPrice = () => {
    const el = document.getElementById('sortFilter');
    if (el) { el.value = 'harga-asc'; applyFilters(); }
};
window.sortRating = () => {
    const el = document.getElementById('sortFilter');
    if (el) { el.value = 'rating'; applyFilters(); }
};
window.quickFilter = (type) => {
    if (type === 'all') {
        document.querySelectorAll('select').forEach(s => s.value = '');
        const search = document.getElementById('searchInput');
        if (search) search.value = '';
        applyFilters();
    }
};

window.showAddKulinerModal = showSubmitForm;
window.toggleSidebar = () => {
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('sidebarOverlay');
    if (sb) sb.classList.toggle('active');
    if (ov) ov.classList.toggle('active');
};
window.toggleAdvancedFilters = () => {
    const el = document.getElementById('advancedFilters');
    const btn = document.querySelector('button[onclick="toggleAdvancedFilters()"]');
    if (el.style.display === 'none') {
        el.style.display = 'grid'; // Change to grid for better layout
        el.style.gridTemplateColumns = '1fr 1fr';
        el.style.gap = '10px';
        btn.innerHTML = '<i class="fas fa-chevron-up"></i> Sembunyikan Filter';
    } else {
        el.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-sliders-h"></i> Filter Lainnya';
    }
};

window.showPrivacyPolicy = () => alert("Kebijakan Privasi:\nData disimpan lokal di browser Anda. Kami menjamin keamanan data pengguna.");
