
// ============================================
// LAPOR MANGAN! - MAIN SCRIPT (RESTORATION)
// v5.0 - Emergency Fix
// ============================================

// 1. DATABASE LOKAL (LocalStorage)
const DB = {
    get(key, dev = []) {
        try { return JSON.parse(localStorage.getItem(`lm_${key}`)) || dev; }
        catch { return dev; }
    },
    set(key, val) {
        localStorage.setItem(`lm_${key}`, JSON.stringify(val));
    },
    init() {
        if (!localStorage.getItem('lm_init')) {
            this.set('users', []);
            localStorage.setItem('lm_init', 'true');
        }
    }
};
DB.init();

// 2. USER AUTH
let currentUser = null;

function checkUserSession() {
    currentUser = DB.get('current_user', null);
    updateUserUI(currentUser);
}

function updateUserUI(user) {
    const profile = document.getElementById('userProfileSection');
    const nameDisplay = document.getElementById('userNameDisplay');
    const emailDisplay = document.getElementById('userEmailDisplay');
    const loginBtn = document.getElementById('authBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (user) {
        if (nameDisplay) nameDisplay.textContent = user.name;
        if (emailDisplay) emailDisplay.textContent = user.email;
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block';
    } else {
        if (nameDisplay) nameDisplay.textContent = 'Tamu';
        if (emailDisplay) emailDisplay.textContent = 'Silakan Login';
        if (loginBtn) loginBtn.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

function loginWithGoogle() {
    // Simulasi Login
    const user = {
        id: 'user_' + Date.now(),
        name: 'Pengguna Baru',
        email: 'user@example.com',
        photo: 'https://via.placeholder.com/100'
    };
    DB.set('current_user', user);
    checkUserSession();
    closeAuthModal();
    alert('Berhasil login sebagai ' + user.name);
}

function signOut() {
    localStorage.removeItem('lm_current_user');
    checkUserSession();
    alert('Berhasil keluar');
}

// 3. KULINER DATA (REAL IMAGES)
window.kulinerData = [
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
        gambar: "https://images.unsplash.com/photo-1572656631137-7935297eff55?w=500&q=80", // Real Soto Image
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
        gambar: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&q=80", // Real Bakso Image
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
        gambar: "https://images.unsplash.com/photo-1529563021893-cc83c9123490?w=500&q=80", // Real Satay
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
        gambar: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80", // Fried Tempeh
        rating: 4.9,
        reviews: []
    },
    {
        id: 5,
        nama: "Gudeg Yu Djum",
        kategori: "Gudeg",
        deskripsi: "Gudeg kering khas Jogja yang hadir di Purwokerto.",
        alamat: "Jl. Overste Isdiman, Purwokerto",
        jam: "07.00 - 21.00",
        harga: "Rp 25.000 - Rp 60.000",
        lat: -7.4111,
        lng: 109.2399,
        gambar: "https://images.unsplash.com/photo-1626202157715-671c6dc0011d?w=500&q=80", // Gudeg like
        rating: 4.5,
        reviews: []
    }
];

window.getAllKulinerData = () => window.kulinerData;

// 4. MAP FUNCTIONALITY
let map, markers = [];

function initMap() {
    const mapEl = document.getElementById('map');
    if (!mapEl) return;

    // Default Purwokerto
    const center = [-7.4245, 109.2302];
    map = L.map('map', {
        center: center,
        zoom: 13,
        zoomControl: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 19
    }).addTo(map);

    renderMarkers();
    console.log('Map initialized');
}

function renderMarkers() {
    if (!map) return;
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    window.kulinerData.forEach(item => {
        if (item.lat && item.lng) {
            const m = L.marker([item.lat, item.lng])
                .addTo(map)
                .bindPopup(`<b>${item.nama}</b><br>${item.kategori}`);
            markers.push(m);
        }
    });
}

function locateUser() {
    if (map) map.locate({ setView: true, maxZoom: 15 });
}

// 5. RENDERING LIST
function getAverageRating(item) {
    if (!item.reviews || item.reviews.length === 0) return item.rating || 0;
    const sum = item.reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / item.reviews.length).toFixed(1);
}

window.renderKulinerList = function (data = window.kulinerData) {
    const list = document.getElementById('list');
    const count = document.getElementById('resultCount');
    if (!list) return;

    list.innerHTML = '';
    if (count) count.textContent = data.length + ' hasil';

    if (data.length === 0) {
        list.innerHTML = '<div class="empty-state">Tidak ditemukan</div>';
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => alert('Detail: ' + item.nama);

        card.innerHTML = `
            <div class="card-image" style="height:140px; overflow:hidden;">
                <img src="${item.gambar}" alt="${item.nama}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='https://via.placeholder.com/300'">
            </div>
            <div class="card-content" style="padding:12px;">
                <h3 style="margin:0; font-size:16px;">${item.nama}</h3>
                <span class="rating-badge" style="font-size:12px; color:#FF6B35;">★ ${getAverageRating(item)}</span>
                <p style="margin:4px 0; color:#666; font-size:13px;">${item.kategori} • ${item.harga}</p>
                <p style="margin:0; font-size:12px; color:#999;">📍 ${item.alamat}</p>
            </div>
        `;
        list.appendChild(card);
    });

    // Remove loading fallback
    const loading = document.querySelector('.loading');
    if (loading) loading.remove();
};

// 6. UI HELPERS
function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('sidebarOverlay');
    if (sb) sb.classList.toggle('active');
    if (ov) ov.classList.toggle('active');
}
window.toggleSidebar = toggleSidebar;

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('show');
}
window.closeAuthModal = closeAuthModal;

function showSection(id) {
    // Simple navigation
    console.log('Navigating to ' + id);
}
window.showSection = showSection;

// 7. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    checkUserSession();
    initMap();
    window.renderKulinerList();

    // Chatbot Fix Listener
    const fab = document.querySelector('.chatbot-fab');
    if (fab) {
        fab.onclick = (e) => {
            e.preventDefault();
            if (window.toggleChat) window.toggleChat();
        };
    }
});
