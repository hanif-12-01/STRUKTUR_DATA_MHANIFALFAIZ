// Navigasi hash untuk halaman khusus (news, promo, dsb)
function navigateToHash(path) {
    window.location.hash = path;
    handleHashChange();
}

function handleHashChange() {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (hash === 'news') {
        // Show News, Hide Home
        const homeSection = document.getElementById('homeSection');
        const newsSection = document.getElementById('newsSection');
        const favoritesSection = document.getElementById('favoritesSection');

        if (homeSection) homeSection.style.display = 'none';
        if (favoritesSection) favoritesSection.style.display = 'none';
        if (newsSection) {
            newsSection.style.display = 'block';
            if (typeof renderNewsList === 'function') renderNewsList();
        }
        window.scrollTo(0, 0);

        // Update sidebar active state
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const newsLink = document.querySelector('a[href="#/news"]');
        if (newsLink) newsLink.classList.add('active');

    } else {
        // Show Home (Default)
        const homeSection = document.getElementById('homeSection');
        const newsSection = document.getElementById('newsSection');

        if (newsSection) newsSection.style.display = 'none';
        if (homeSection) homeSection.style.display = 'block';

        // Ensure favorites is hidden unless specifically triggered? 
        // For now, simpler: Home shows HomeSection.
        const favoritesSection = document.getElementById('favoritesSection');
        if (favoritesSection) favoritesSection.style.display = 'none';
    }
}

window.addEventListener('hashchange', handleHashChange);
// Jalankan sekali saat load
setTimeout(handleHashChange, 1);
function loginWithGoogle() { return signInWithGoogle(); }
function submitKuliner(e) { e && e.preventDefault(); return submitNewKuliner(); }

// Generic navigation for app.html
function navigate(page) {
    try {
        // hide all pages with class 'page'
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById('page-' + page);
        if (target) target.classList.add('active');
        // for index.html style
        const sections = ['home', 'explore', 'favorites', 'news', 'map'];
        sections.forEach(s => {
            const el = document.getElementById(s + 'Section');
            if (el) el.style.display = (s === page) ? '' : 'none';
        });
    } catch (e) { console.warn('navigate error', e); }
}

function showSection(name) { try { navigate(name); } catch (e) { console.warn(e); } }

function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (!sb) return;
    const open = sb.classList.toggle('open');

    // Toggle body class to prevent scrolling
    if (open) {
        document.body.classList.add('sidebar-open');
    } else {
        document.body.classList.remove('sidebar-open');
    }

    // Toggle overlay
    if (overlay) {
        if (open) {
            overlay.classList.add('show');
            overlay.style.display = 'block';
        } else {
            overlay.classList.remove('show');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300); // Wait for transition
        }
    }
}

function toggleAuthModal() {
    const modal = document.getElementById('authModal') || document.getElementById('loginModal');
    if (!modal) return;
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

function closeLoginModal() { const m = document.getElementById('loginModal'); if (m) m.style.display = 'none'; }
function closeSubmitModal() { const m = document.getElementById('submitModal'); if (m) m.style.display = 'none'; }
function closeModal() { document.querySelectorAll('.modal').forEach(m => m.style.display = 'none'); }

function toggleChat() {
    // UPDATED: ID match with index.html
    const c = document.getElementById('chatbot') || document.querySelector('.chatbot-container');
    if (!c) {
        console.error('Chatbot container not found!');
        return;
    }
    // Check if class 'active' or display property is used. 
    // Usually purely CSS based toggle is better, but let's stick to inline first.
    // If using display none/block:
    const isHidden = window.getComputedStyle(c).display === 'none';

    if (isHidden) {
        c.style.display = 'flex';
        c.classList.add('active');
        const input = document.getElementById('chatInput');
        if (input) setTimeout(() => input.focus(), 100);
    } else {
        c.style.display = 'none';
        c.classList.remove('active');
    }
}

function sendChat() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    const msg = input.value.trim();
    if (!msg) return;
    // append simple message
    const container = document.getElementById('chatMessages');
    if (container) {
        const el = document.createElement('div'); el.className = 'message message-user'; el.innerHTML = `<div class='message-content'>${msg}</div>`; container.appendChild(el);
        input.value = '';
        // simple bot reply
        setTimeout(() => { const bot = document.createElement('div'); bot.className = 'message message-bot'; bot.innerHTML = `<div class='message-content'>Terima kasih! Kami akan merespon segera.</div>`; container.appendChild(bot); }, 600);
    }
}

function getWeatherRecommendation() { if (typeof showWeatherRec === 'function') return showWeatherRec(); if (typeof getWeatherBasedRecommendation === 'function') return getWeatherBasedRecommendation(); }

function applyFilters() { if (typeof filterAndSortList === 'function') return filterAndSortList(); }

function showSubmitForm() { const m = document.getElementById('submitModal') || document.getElementById('addKulinerModal'); if (m) m.style.display = 'block'; }

function showRandom() { if (typeof showRandomKuliner === 'function') return showRandomKuliner(); }

function filterOpenNow() { if (typeof isTempatBuka === 'function') { filterAndSortList && filterAndSortList(); } }

function sortByDistance() { if (typeof sortByDistance === 'function') return window.sortByDistance(); }

function showWeatherRec() { if (typeof showWeatherRec === 'function') return window.showWeatherRec(); }

// function startVoiceSearch() { showToast('Pencarian suara belum tersedia pada mode ini.', 'info'); }
// Ensure common UI functions exist as safe stubs to avoid broken onclick handlers
function ensureUIStubs() {
    const stubs = {
        showWeatherRec: () => showToast('Rekomendasi cuaca belum tersedia.', 'info'),
        quickFilter: (f) => { showToast('Filter cepat: ' + (f || ''), 'info'); applyFilters && applyFilters(f); },
        sortByDistance: () => showToast('Urutkan berdasarkan jarak belum tersedia.', 'info'),
        filterOpenNow: () => showToast('Filter buka sekarang diterapkan.', 'info'),
        showRandomKuliner: () => { showToast('Acak kuliner dipilih.', 'info'); },
        openSettings: () => showToast('Pengaturan belum diimplementasikan.', 'info')
    };
    Object.keys(stubs).forEach(k => { if (typeof window[k] !== 'function') window[k] = stubs[k]; });
}

ensureUIStubs();

// --- NEW FEATURES IMPLEMENTATION ---

// 1. Horizontal Menu Categories
function renderMenuCategories() {
    const categories = [
        { name: 'Soto', img: 'images/menu_soto_1766062986029.png', filter: 'Soto' },
        { name: 'Sate', img: 'images/menu_sate_1766063010119.png', filter: 'Sate' },
        { name: 'Bakso', img: 'images/menu_bakso_1766063033191.png', filter: 'Bakso' },
        { name: 'Gudeg', img: 'images/menu_gudeg_1766063057881.png', filter: 'Gudeg' },
        { name: 'Mendoan', img: 'images/menu_mendoan_1766063087752.png', filter: 'Jajanan Tradisional' },
        { name: 'Ayam', img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=150&q=80', filter: 'Ayam' },
        { name: 'Minuman', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=150&q=80', filter: 'Minuman' },
        { name: 'Dessert', img: 'https://images.unsplash.com/photo-1563729768-74915bd6bbf3?auto=format&fit=crop&w=150&q=80', filter: 'Dessert' },
    ];

    const container = document.getElementById('menuCategories');
    if (!container) return;

    let html = categories.map(cat => `
        <div class="menu-item" onclick="quickFilter('${cat.filter}')">
            <img src="${cat.img}" alt="${cat.name}" class="menu-item-img" onerror="this.src='https://via.placeholder.com/60'">
            <span class="menu-item-label">${cat.name}</span>
        </div>
    `).join('');

    container.innerHTML = html;
}

// 2. News Grid (CNN Indonesia Style - List Layout)
function renderNewsGrid() {
    const newsData = [
        {
            id: 1,
            title: "Festival Kuliner Purwokerto 2025: Ribuan Pengunjung Padati Alun-Alun",
            excerpt: "Antusiasme warga sangat tinggi dalam menyambut festival kuliner tahunan ini.",
            image: "images/news_festival_kuliner_1766062882321.png",
            tag: "NASIONAL",
            date: "2 Jam lalu"
        },
        {
            id: 2,
            title: "5 Warung Legendaris di Purwokerto yang Wajib Dikunjungi Wisatawan",
            excerpt: "Mulai dari Soto Jalan Bank hingga Sate Bebek Tambak yang menggugah selera.",
            image: "images/news_warung_legendaris_1766062930995.png",
            tag: "REKOMENDASI",
            date: "4 Jam lalu"
        },
        {
            id: 3,
            title: "Daftar Promo Kuliner Akhir Tahun: Diskon hingga 50%!",
            excerpt: "Simak daftar restoran yang memberikan diskon besar-besaran minggu ini.",
            image: "images/news_diskon_spesial_1766062958138.png",
            tag: "PROMO",
            date: "Hari ini"
        },
        {
            id: 4,
            title: "Resep Rahasia Mendoan Crispy Tahan Lama ala Chef Juna",
            excerpt: "Tips dan trik membuat mendoan agar tetap renyah seharian.",
            image: "images/menu_mendoan_1766063087752.png",
            tag: "TIPS",
            date: "1 Hari lalu"
        },
        {
            id: 5,
            title: "Menikmati Sore di Kedai Kopi Kekinian Purwokerto",
            excerpt: "Deretan coffee shop instagramable yang cocok buat nongkrong anak muda.",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80",
            tag: "LIFESTYLE",
            date: "2 Hari lalu"
        }
    ];

    const container = document.getElementById('newsGrid');
    if (!container) return;

    // Reset container class for list styling
    container.className = 'news-list-container';

    let html = newsData.map(news => `
        <article class="news-item" onclick="showNewsDetail(${news.id})">
            <div class="news-thumb">
                <img src="${news.image}" alt="${news.title}" onerror="this.src='https://via.placeholder.com/150'">
            </div>
            <div class="news-details">
                <div class="news-meta">
                    <span class="news-category">${news.tag}</span>
                    <span class="news-time">${news.date}</span>
                </div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-summary">${news.excerpt}</p>
            </div>
        </article>
    `).join('');

    container.innerHTML = html;
}

// 3. Google Auth Simulation
function toggleAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

async function loginWithGoogle() {
    const btn = document.querySelector('.google-btn');
    if (btn) btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Menghubungkan...';

    // Try Real Firebase Auth first
    if (window.firebaseAuth && window.GoogleAuthProvider && window.signInWithPopup) {
        try {
            const provider = new window.GoogleAuthProvider();
            const result = await window.signInWithPopup(window.firebaseAuth, provider);
            const user = result.user;

            const userData = {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid
            };

            localStorage.setItem('currentUser', JSON.stringify(userData));
            window.currentUser = userData;

            showToast("Berhasil masuk sebagai " + userData.displayName);
            updateAuthUI();
            closeAuthModal();

            if (btn) btn.innerHTML = '<img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google"> Masuk dengan Google';
            return;
        } catch (error) {
            console.error("Login failed:", error);
            showToast("Login Gagal: Pastikan konfigurasi Firebase benar.", "error");
            if (btn) btn.innerHTML = '<img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google"> Masuk dengan Google';
        }
    } else {
        // Enforce Login
        showToast("Error: Konfigurasi Login belum terpasang.", "error");
        console.error("Firebase config missing. Cannot login.");
        if (btn) btn.innerHTML = '<img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google"> Masuk dengan Google';
    }
}

function updateAuthUI() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const loginBtn = document.querySelector('.auth-btn');

    if (user) {
        if (loginBtn) loginBtn.style.display = 'none';
    } else {
        if (loginBtn) loginBtn.style.display = 'block';
    }
}

// Expose functions globally
window.toggleAuthModal = toggleAuthModal;
window.closeAuthModal = closeAuthModal;
window.loginWithGoogle = loginWithGoogle;

const initialKulinerData = [
    {
        nama: "Gudeg Mbah Siti",
        kategori: "Gudeg",
        alamat: "Jl. Pramuka No.12, Purwokerto",
        jam: "06:00 - 12:00",
        harga: "Rp15.000-Rp25.000",
        deskripsi: "Gudeg kering khas Purwokerto dengan sambal goreng krecek pedas.",
        foto: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
        parkir: "Ya",
        rute: "Jl. Pramuka No.12",
        lat: -7.430,
        lng: 109.235,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567895"
    },
    {
        nama: "Ayam Bakar Pak Tono",
        kategori: "Ayam",
        alamat: "Jl. Diponegoro No.78, Purwokerto",
        jam: "11:00 - 23:00",
        harga: "Rp25.000-Rp40.000",
        deskripsi: "Ayam bakar bumbu rempah, disajikan dengan sambal matah dan lalapan.",
        foto: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800",
        parkir: "Ya",
        rute: "Jl. Diponegoro No.78",
        lat: -7.422,
        lng: 109.248,
        keliling: false,
        halal: "halal",
        kontak: "081234567896"
    },
    {
        nama: "Lontong Sayur Mbah Rini",
        kategori: "Lontong",
        alamat: "Jl. Ahmad Yani No.90, Purwokerto",
        jam: "07:00 - 14:00",
        harga: "Rp12.000-Rp18.000",
        deskripsi: "Lontong dengan sayur labu siam santan, tahu, dan telur.",
        foto: "https://images.unsplash.com/photo-1596040033229-a0b3b9f5b14c?w=800",
        parkir: "Ya",
        rute: "Jl. Ahmad Yani No.90",
        lat: -7.415,
        lng: 109.240,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567897"
    },
    {
        nama: "Sate Kere Mbah Haji",
        kategori: "Sate",
        alamat: "Jl. Raden Intan No.67, Purwokerto",
        jam: "10:00 - 20:00",
        harga: "Rp10.000-Rp15.000",
        deskripsi: "Sate kambing murah meriah dengan bumbu kacang dan kecap.",
        foto: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800",
        parkir: "Ya",
        rute: "Jl. Raden Intan No.67",
        lat: -7.428,
        lng: 109.255,
        keliling: false,
        halal: "halal",
        kontak: "081234567898"
    },
    {
        nama: "Bakso Mbah Lintang",
        kategori: "Bakso",
        alamat: "Jl. KH. Mas Mansyur No.34, Purwokerto",
        jam: "08:00 - 17:00",
        harga: "Rp8.000-Rp15.000",
        deskripsi: "Bakso urat besar dengan kuah kaldu sapi yang sangat gurih.",
        foto: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=800",
        parkir: "Ya",
        rute: "Jl. KH. Mas Mansyur No.34",
        lat: -7.420,
        lng: 109.238,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567899"
    },
    {
        nama: "Mie Ayam Tumini",
        kategori: "Mie",
        alamat: "Jl. Gatot Subroto No.12, Purwokerto",
        jam: "08:00 - 20:00",
        harga: "Rp12.000-Rp18.000",
        deskripsi: "Mie kuning lembut dengan topping ayam cincang, pangsit goreng, dan bakso.",
        foto: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
        parkir: "Ya",
        rute: "Jl. Gatot Subroto No.12",
        lat: -7.419,
        lng: 109.243,
        keliling: false,
        halal: "halal",
        kontak: "081234567800"
    },
    {
        nama: "Pecel Lele Lela",
        kategori: "Seafood",
        alamat: "Jl. Veteran No.23, Purwokerto",
        jam: "10:00 - 22:00",
        harga: "Rp18.000-Rp30.000",
        deskripsi: "Lele goreng crispy dengan sambal terasi pedas, lalapan, dan nasi hangat.",
        foto: "https://images.unsplash.com/photo-1580554530778-ca36943938b2?w=800",
        parkir: "Ya",
        rute: "Jl. Veteran No.23",
        lat: -7.424,
        lng: 109.247,
        keliling: false,
        halal: "halal",
        kontak: "081234567801"
    },
    {
        nama: "Nasi Goreng Babat",
        kategori: "Nasi Goreng",
        alamat: "Alun-Alun Purwokerto",
        jam: "18:00 - 02:00",
        harga: "Rp15.000-Rp25.000",
        deskripsi: "Nasi goreng dengan topping babat empuk, telur ceplok, dan acar.",
        foto: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
        parkir: "Ya",
        rute: "Alun-Alun Purwokerto",
        lat: -7.422,
        lng: 109.239,
        keliling: false,
        halal: "halal",
        kontak: "081234567802"
    },
    {
        nama: "Gethuk Goreng Sokaraja",
        kategori: "Dessert",
        alamat: "Jl. Sokaraja Kidul No.56, Purwokerto",
        jam: "07:00 - 17:00",
        harga: "Rp10.000-Rp15.000",
        deskripsi: "Gethuk singkong digoreng renyah, ditaburi kelapa parut dan gula merah.",
        foto: "https://images.unsplash.com/photo-1587241321921-91a834d82e01?w=800",
        parkir: "Ya",
        rute: "Jl. Sokaraja Kidul No.56",
        lat: -7.426,
        lng: 109.232,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567803"
    },
    {
        nama: "Sop Buntut Mang Ade",
        kategori: "Sop",
        alamat: "Jl. Jenderal Sudirman No.89, Purwokerto",
        jam: "11:00 - 21:00",
        harga: "Rp35.000-Rp50.000",
        deskripsi: "Sop buntut sapi empuk dengan kuah bening dan sayuran segar.",
        foto: "https://images.unsplash.com/photo-1547928576-e4149e3a7d80?w=800",
        parkir: "Ya",
        rute: "Jl. Jenderal Sudirman No.89",
        lat: -7.417,
        lng: 109.246,
        keliling: false,
        halal: "halal",
        kontak: "081234567804"
    },
    {
        nama: "Es Cao Angkrek",
        kategori: "Minuman",
        alamat: "Jl. Purwabakti No.34, Purwokerto",
        jam: "09:00 - 21:00",
        harga: "Rp8.000-Rp15.000",
        deskripsi: "Es campur cincau hitam dengan sirup coklat dan susu kental manis.",
        foto: "https://images.unsplash.com/photo-1546173159-315724a31696?w=800",
        parkir: "Ya",
        rute: "Jl. Purwabakti No.34",
        lat: -7.423,
        lng: 109.241,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567805"
    },
    {
        nama: "Lotek Kalibata",
        kategori: "Salad",
        alamat: "Pasar Wage, Purwokerto",
        jam: "06:00 - 13:00",
        harga: "Rp10.000-Rp15.000",
        deskripsi: "Sayuran rebus dengan bumbu kacang kental, lontong, dan kerupuk.",
        foto: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
        parkir: "Ya",
        rute: "Pasar Wage",
        lat: -7.425,
        lng: 109.234,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567806"
    },
    {
        nama: "Rawon Setan Pak Karno",
        kategori: "Rawon",
        alamat: "Jl. Pramuka No.67, Purwokerto",
        jam: "05:00 - 11:00",
        harga: "Rp18.000-Rp28.000",
        deskripsi: "Rawon daging hitam pekat dengan sambal pedas, cocok untuk sarapan.",
        foto: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
        parkir: "Ya",
        rute: "Jl. Pramuka No.67",
        lat: -7.418,
        lng: 109.237,
        keliling: false,
        halal: "halal",
        kontak: "081234567807"
    },
    {
        nama: "Kupat Tahu Magelang",
        kategori: "Tahu",
        alamat: "Jl. Prof. HR Bunyamin No.45, Purwokerto",
        jam: "07:00 - 16:00",
        harga: "Rp10.000-Rp15.000",
        deskripsi: "Ketupat dengan tahu goreng, bumbu kacang, dan kecap manis.",
        foto: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800",
        parkir: "Ya",
        rute: "Jl. Prof. HR Bunyamin No.45",
        lat: -7.421,
        lng: 109.244,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567808"
    },
    {
        nama: "Martabak Har 88",
        kategori: "Dessert",
        alamat: "Jl. Overste Isdiman No.78, Purwokerto",
        jam: "15:00 - 23:00",
        harga: "Rp25.000-Rp60.000",
        deskripsi: "Martabak manis tebal dengan berbagai topping: coklat, keju, kacang.",
        foto: "https://images.unsplash.com/photo-1612182062345-a6c625bcb5a6?w=800",
        parkir: "Ya",
        rute: "Jl. Overste Isdiman No.78",
        lat: -7.416,
        lng: 109.249,
        keliling: false,
        halal: "halal",
        kontak: "081234567809"
    },
    {
        nama: "Coto Makassar Daeng",
        kategori: "Coto",
        alamat: "Jl. Supriyadi No.90, Purwokerto",
        jam: "08:00 - 20:00",
        harga: "Rp20.000-Rp30.000",
        deskripsi: "Coto Makassar dengan jeroan sapi empuk, kuah rempah kental.",
        foto: "https://images.unsplash.com/photo-1581690716396-8f3c0e086b9f?w=800",
        parkir: "Ya",
        rute: "Jl. Supriyadi No.90",
        lat: -7.427,
        lng: 109.251,
        keliling: false,
        halal: "halal",
        kontak: "081234567810"
    },
    {
        nama: "Kopi Angkringan Lik Man",
        kategori: "Minuman",
        alamat: "Jl. Senopati No.12, Purwokerto",
        jam: "17:00 - 01:00",
        harga: "Rp5.000-Rp10.000",
        deskripsi: "Kopi tubruk tradisional dengan gorengan dan nasi kucing.",
        foto: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
        parkir: "Ya",
        rute: "Jl. Senopati No.12",
        lat: -7.420,
        lng: 109.236,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567811"
    },
    {
        nama: "Wedang Ronde Pak Tarno",
        kategori: "Minuman",
        alamat: "Jl. Kartini No.23, Purwokerto",
        jam: "16:00 - 23:00",
        harga: "Rp8.000-Rp12.000",
        deskripsi: "Wedang jahe hangat dengan bola isi kacang, cocok di malam hari.",
        foto: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800",
        parkir: "Ya",
        rute: "Jl. Kartini No.23",
        lat: -7.419,
        lng: 109.245,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567812"
    },
    {
        nama: "Cimol Keliling 'Mas Bagas'",
        kategori: "Jajanan",
        alamat: "Sekitar Unsoed, Purwokerto",
        jam: "10:00 - 17:00",
        harga: "Rp5.000-Rp10.000",
        deskripsi: "Cimol kenyal tabur bumbu balado, muter area kampus.",
        foto: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800",
        parkir: "Tidak",
        rute: "Area Kampus Unsoed",
        lat: -7.400,
        lng: 109.250,
        keliling: true,
        halal: "halal-self",
        kontak: "081234567900"
    },
    {
        nama: "Bakso Tusuk 'Pak Yanto'",
        kategori: "Bakso",
        alamat: "Keliling Alun-Alun, Purwokerto",
        jam: "15:00 - 22:00",
        harga: "Rp1.000/tusuk",
        deskripsi: "Bakso tusuk daging sapi asli dengan saus kacang pedas.",
        foto: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=800",
        parkir: "Tidak",
        rute: "Sekitar Alun-Alun",
        lat: -7.423,
        lng: 109.238,
        keliling: true,
        halal: "halal",
        kontak: "081234567901"
    },
    {
        nama: "Es Puter 'Kang Asep'",
        kategori: "Minuman",
        alamat: "Keliling GOR Satria, Purwokerto",
        jam: "11:00 - 18:00",
        harga: "Rp5.000-Rp12.000",
        deskripsi: "Es puter tradisional rasa kelapa muda dan nangka, segar!",
        foto: "https://images.unsplash.com/photo-1560505191-03738018e6ce?w=800",
        parkir: "Tidak",
        rute: "Area GOR Satria",
        lat: -7.410,
        lng: 109.245,
        keliling: true,
        halal: "halal-self",
        kontak: "081234567902"
    },
    {
        nama: "Geprek Bensu",
        kategori: "Ayam",
        alamat: "Jl. Gerilya No.56, Purwokerto",
        jam: "10:00 - 22:00",
        harga: "Rp15.000-Rp25.000",
        deskripsi: "Ayam goreng crispy digeprek dengan sambal bawang super pedas.",
        foto: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800",
        parkir: "Ya",
        rute: "Jl. Gerilya No.56",
        lat: -7.422,
        lng: 109.252,
        keliling: false,
        halal: "halal",
        kontak: "081234567813"
    },
    {
        nama: "Nasi Uduk Bu Tini",
        kategori: "Makanan Berat",
        alamat: "Jl. Letjen Suprapto No.34, Purwokerto",
        jam: "05:00 - 12:00",
        harga: "Rp12.000-Rp20.000",
        deskripsi: "Nasi gurih santan dengan ayam goreng, tempe orek, dan telur balado.",
        foto: "https://images.unsplash.com/photo-1596040033229-a0b3b9f5b14c?w=800",
        parkir: "Ya",
        rute: "Jl. Letjen Suprapto No.34",
        lat: -7.424,
        lng: 109.240,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567814"
    },
    {
        nama: "Tahu Gejrot Cirebon",
        kategori: "Jajanan Tradisional",
        alamat: "Pasar Manis, Purwokerto",
        jam: "08:00 - 17:00",
        harga: "Rp5.000-Rp10.000",
        deskripsi: "Tahu goreng dengan kuah pedas manis asam segar.",
        foto: "https://images.unsplash.com/photo-1633945274810-a8e118d6ea16?w=800",
        parkir: "Ya",
        rute: "Pasar Manis",
        lat: -7.426,
        lng: 109.238,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567815"
    },
    {
        nama: "Soto Kaki Sapi H. Jono",
        kategori: "Soto",
        alamat: "Jl. Mayjend Sungkono No.89, Purwokerto",
        jam: "07:00 - 15:00",
        harga: "Rp20.000-Rp30.000",
        deskripsi: "Soto kaki sapi empuk dengan kuah bening, irisan tomat dan daun bawang.",
        foto: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=800",
        parkir: "Ya",
        rute: "Jl. Mayjend Sungkono No.89",
        lat: -7.418,
        lng: 109.233,
        keliling: false,
        halal: "halal",
        kontak: "081234567816"
    },
    {
        nama: "Klepon Pasar Wage",
        kategori: "Dessert",
        alamat: "Pasar Wage, Purwokerto",
        jam: "06:00 - 14:00",
        harga: "Rp5.000-Rp10.000",
        deskripsi: "Kue klepon isi gula merah cair, dibalut kelapa parut.",
        foto: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
        parkir: "Ya",
        rute: "Pasar Wage",
        lat: -7.425,
        lng: 109.234,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567817"
    },
    {
        nama: "Sushi Tei Plaza Asia",
        kategori: "Jepang",
        alamat: "Plaza Asia, Jl. MT Haryono, Purwokerto",
        jam: "10:00 - 22:00",
        harga: "Rp50.000-Rp150.000",
        deskripsi: "Japanese restaurant dengan menu sushi, ramen, dan donburi.",
        foto: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800",
        parkir: "Ya",
        rute: "Plaza Asia",
        lat: -7.423,
        lng: 109.248,
        keliling: false,
        halal: "non-halal",
        kontak: "081234567818"
    },
    {
        nama: "Warung Tegal Bu Sri",
        kategori: "Makanan Berat",
        alamat: "Jl. Sudirman No.123, Purwokerto",
        jam: "24 Jam",
        harga: "Rp15.000-Rp35.000",
        deskripsi: "Warteg lengkap dengan lauk nasi, sayur asem, tempe, tahu, ayam.",
        foto: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
        parkir: "Ya",
        rute: "Jl. Sudirman No.123",
        lat: -7.421,
        lng: 109.242,
        keliling: false,
        halal: "halal",
        kontak: "081234567819"
    }
];

let kulinerData = [];
let favoriteKuliner = new Set(JSON.parse(localStorage.getItem('favoriteKuliner')) || []);

function loadData() {
    console.log('Loading data...');
    try {
        const storedData = localStorage.getItem('kulinerData');
        if (storedData) {
            const parsed = JSON.parse(storedData);
            if (parsed && parsed.length > 0) {
                kulinerData = parsed;
                console.log('Loaded from localStorage:', kulinerData.length, 'items');
                return;
            }
        }
    } catch (e) {
        console.error('Error loading from localStorage:', e);
    }

    // Use initial data if localStorage is empty or error
    console.log('Using initialKulinerData');
    kulinerData = initialKulinerData.map(item => ({
        ...item,
        reviews: item.reviews || [
            { name: "Admin", rating: 5, comment: "Tempat yang sangat direkomendasikan!" },
            { name: "Pengunjung", rating: 4, comment: "Makanannya enak, suasana nyaman." }
        ]
    }));

    // Save to localStorage
    try {
        localStorage.setItem('kulinerData', JSON.stringify(kulinerData));
        console.log('Saved initial data to localStorage');
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }

    console.log('Data loaded successfully:', kulinerData.length, 'items');
}

let map;
let markers = [];
let currentWeatherData = null;

// Inisialisasi Map
function initMap() {
    try {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) {
            console.warn('Map container not found');
            return;
        }

        map = L.map('map').setView([-7.4212, 109.2422], 14);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        renderMap();
        console.log('Map initialized successfully');
    } catch (error) {
        console.error('Error initializing map:', error);
    }
}

// Inisialisasi DOM
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded - initializing app');
    initializeApp();
    initializeNewsData();
});

function initializeApp() {
    console.log('Initializing app...');
    try {
        loadData();
        console.log('Data loaded:', kulinerData.length, 'items');
        populateCategoryDropdowns();
        initMap();
        renderList();
        setupEventListeners();

        // Fetch weather async - don't block app initialization
        fetchWeather().catch(err => {
            console.error('Weather fetch failed:', err);
            simulateWeather();
        });

        console.log('App initialized successfully!');
    } catch (error) {
        console.error('Error initializing app:', error);
        alert('Error loading app: ' + error.message);
    }
}

// Initialize news data if empty
function initializeNewsData() {
    const existingNews = getNewsData();
    if (existingNews.length === 0) {
        const initialNews = [
            {
                newsId: Date.now() + 1,
                title: "Festival Kuliner Purwokerto 2025 Akan Digelar di Alun-Alun",
                category: "Event",
                content: "Pemerintah Kota Purwokerto akan menggelar Festival Kuliner Nusantara pada 20-25 Januari 2025 di Alun-Alun Purwokerto. Acara ini akan menampilkan lebih dari 100 stan UMKM kuliner khas Purwokerto dan sekitarnya. Pengunjung bisa menikmati berbagai hidangan tradisional seperti Soto Sokaraja, Sate Bebek Tambak, Tempe Mendoan, hingga dessert khas seperti Gethuk Goreng. Acara ini gratis untuk umum dan akan dibuka langsung oleh Walikota Purwokerto. Selain kuliner, akan ada live music, lomba masak, dan demo cooking dari chef ternama.",
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
                author: "Admin Lapor Mangan",
                date: new Date().toISOString(),
                tags: ["event", "festival", "kuliner", "purwokerto"]
            },
            {
                newsId: Date.now() + 2,
                title: "Soto Sokaraja Masuk 10 Besar Kuliner Terfavorit Jawa Tengah",
                category: "Info",
                content: "Berdasarkan survei Asosiasi Kuliner Indonesia, Soto Sokaraja berhasil masuk dalam 10 besar kuliner terfavorit di Jawa Tengah tahun 2024. Soto khas Purwokerto ini dikenal dengan kuah kentalnya yang gurih dan irisan daging sapi yang empuk. Warung Soto Sokaraja di Jl. Jend. Sudirman No.58 menjadi salah satu yang paling ramai dikunjungi, terutama saat pagi hari. Harga yang terjangkau mulai Rp15.000 membuat soto ini menjadi favorit masyarakat dari berbagai kalangan.",
                image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800",
                author: "Redaksi",
                date: new Date(Date.now() - 86400000).toISOString(),
                tags: ["soto", "kuliner", "jawa tengah", "award"]
            },
            {
                newsId: Date.now() + 3,
                title: "Tips Memilih Tempat Kuliner yang Aman dan Higienis",
                category: "Tips",
                content: "Dalam memilih tempat makan, ada beberapa hal yang perlu diperhatikan untuk menjaga kesehatan. Pertama, perhatikan kebersihan tempat dan peralatan makan. Kedua, pastikan makanan disajikan dalam keadaan panas atau dingin sesuai jenisnya. Ketiga, cek sertifikat halal jika Anda muslim. Keempat, baca review dari pengunjung sebelumnya. Kelima, perhatikan cara penyimpanan bahan makanan mentah. Aplikasi Lapor Mangan! hadir untuk memudahkan Anda menemukan kuliner berkualitas di Purwokerto dengan fitur review dan rating dari pengguna.",
                image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
                author: "Tim Kesehatan",
                date: new Date(Date.now() - 172800000).toISOString(),
                tags: ["tips", "kesehatan", "kuliner", "higienis"]
            },
            {
                newsId: Date.now() + 4,
                title: "UMKM Kuliner Purwokerto Bangkit Pasca Pandemi",
                category: "Info",
                content: "Sektor UMKM kuliner di Purwokerto menunjukkan tren positif di tahun 2024. Menurut data Dinas Koperasi dan UKM, terdapat peningkatan 35% jumlah UMKM kuliner baru dibanding tahun lalu. Banyak pelaku usaha yang mulai merambah platform digital untuk memperluas jangkauan pasar. Aplikasi seperti Lapor Mangan! membantu UMKM untuk lebih dikenal masyarakat luas. Pemerintah juga memberikan berbagai pelatihan dan pendampingan untuk meningkatkan kualitas produk dan layanan UMKM kuliner.",
                image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
                author: "Reporter Ekonomi",
                date: new Date(Date.now() - 259200000).toISOString(),
                tags: ["umkm", "ekonomi", "purwokerto", "recovery"]
            },
            {
                newsId: Date.now() + 5,
                title: "Rekomendasi 5 Tempat Sarapan Pagi Terbaik di Purwokerto",
                category: "Review",
                content: "Mulai hari dengan sarapan lezat! Berikut 5 rekomendasi tempat sarapan di Purwokerto: 1) Soto Sokaraja - kuah gurih untuk pagi hari (Rp15.000), 2) Nasi Uduk Bu Tini - gurih santan lengkap (Rp12.000), 3) Rawon Setan Pak Karno - pedas menggugah selera (Rp18.000), 4) Lontong Sayur Mbah Rini - hangat menyehatkan (Rp12.000), 5) Bubur Ayam Khas - lembut dan praktis (Rp10.000). Semua tempat ini buka pukul 05:00-11:00 pagi dan mudah diakses.",
                image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
                author: "Food Blogger",
                date: new Date(Date.now() - 345600000).toISOString(),
                tags: ["rekomendasi", "sarapan", "kuliner", "pagi"]
            },
            {
                newsId: Date.now() + 6,
                title: "Tempe Mendoan: Jajanan Khas yang Mendunia",
                category: "Info",
                content: "Tempe Mendoan, jajanan khas Banyumas, kini mulai dikenal hingga mancanegara. Tempe tipis yang digoreng setengah matang ini memiliki tekstur lembut di dalam dan renyah di luar. Bumbu tepung berbumbu yang khas membuat Mendoan berbeda dari gorengan tempe biasa. Di Purwokerto, Anda bisa menemukan Mendoan di hampir setiap sudut kota, terutama di Pasar Sokaraja. Harganya sangat terjangkau, hanya Rp2.000-Rp5.000 per potong. Cocok untuk camilan sore dengan teh atau kopi hangat.",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
                author: "Kuliner Nusantara",
                date: new Date(Date.now() - 432000000).toISOString(),
                tags: ["mendoan", "tempe", "tradisional", "banyumas"]
            },
            {
                newsId: Date.now() + 7,
                title: "Cara Mudah Menemukan Kuliner Halal di Purwokerto",
                category: "Tips",
                content: "Bagi wisatawan muslim, menemukan kuliner halal adalah prioritas. Di aplikasi Lapor Mangan!, setiap tempat kuliner sudah dilengkapi label halal: 'Halal Certified' untuk yang bersertifikat MUI, 'Halal Self-Declared' untuk yang belum bersertifikat tapi tidak menggunakan bahan haram, dan 'Non-Halal' untuk yang jelas tidak halal. Anda juga bisa menggunakan fitur filter untuk menampilkan hanya kuliner halal. Mayoritas UMKM di Purwokerto adalah halal, terutama warung tradisional dan warteg.",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
                author: "Tim Redaksi",
                date: new Date(Date.now() - 518400000).toISOString(),
                tags: ["halal", "tips", "muslim", "kuliner"]
            },
            {
                newsId: Date.now() + 8,
                title: "Kuliner Malam di Purwokerto: Surga Pecinta Makanan",
                category: "Review",
                content: "Purwokerto menawarkan berbagai pilihan kuliner malam yang sayang untuk dilewatkan. Mulai dari Nasi Goreng Babat di Alun-Alun yang buka hingga dini hari, Sate Bebek Tambak yang ramai setelah maghrib, hingga Angkringan Lik Man yang menyajikan kopi tubruk dengan gorengan. Untuk yang suka manis, Martabak Har 88 buka hingga tengah malam. Suasana malam Purwokerto yang sejuk membuat makan di luar ruangan semakin nikmat. Jangan lupa coba juga wedang ronde untuk menghangatkan badan!",
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
                author: "Night Food Hunter",
                date: new Date(Date.now() - 604800000).toISOString(),
                tags: ["malam", "kuliner", "nightlife", "purwokerto"]
            }
        ];

        setNewsData(initialNews);
        console.log('Initial news data loaded:', initialNews.length, 'articles');
    }
}

function hideSplashScreen() {
    const splash = document.getElementById('splashScreen');
    if (splash) {
        splash.style.display = 'none';
    }
}

function setupEventListeners() {
    // Tombol Weather Recommendation
    const weatherBtn = document.getElementById('weatherRecBtn');
    if (weatherBtn) {
        weatherBtn.addEventListener('click', showWeatherRec);
    }

    // Tombol Google Form
    const googleFormBtn = document.getElementById('googleFormBtn');
    if (googleFormBtn) {
        googleFormBtn.addEventListener('click', openGoogleForm);
    }

    // Tombol Tambah Kuliner
    const addBtn = document.querySelector('.add-kuliner-btn');
    if (addBtn) {
        addBtn.addEventListener('click', openAddKulinerModal);
    }

    // New buttons
    const nearbyBtn = document.getElementById('nearbyBtn');
    if (nearbyBtn) {
        nearbyBtn.addEventListener('click', sortByDistance);
    }

    const randomBtn = document.getElementById('randomBtn');
    if (randomBtn) {
        randomBtn.addEventListener('click', showRandomKuliner);
    }

    const openNowFilter = document.getElementById('openNowFilter');
    if (openNowFilter) {
        openNowFilter.addEventListener('change', filterAndSortList);
    }

    // Event listener untuk search dan filter
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');
    const sortSelect = document.getElementById('sort');

    if (searchInput) searchInput.addEventListener('input', filterAndSortList);
    if (filterSelect) filterSelect.addEventListener('change', filterAndSortList);
    if (sortSelect) sortSelect.addEventListener('change', filterAndSortList);

    // Filter tipe penjual (FR-05) dan kehalalan (FR-19)
    const filterTipe = document.getElementById('filterTipe');
    const filterHalal = document.getElementById('filterHalal');
    if (filterTipe) filterTipe.addEventListener('change', filterAndSortList);
    if (filterHalal) filterHalal.addEventListener('change', filterAndSortList);

    // Close modals when clicking outside
    document.addEventListener('click', function (e) {
        const weatherDetails = document.getElementById('weatherDetails');
        const weatherWidget = document.getElementById('weatherWidget');

        if (weatherDetails && weatherDetails.classList.contains('show')) {
            // Check if click is outside weather widget and details
            if (!e.target.closest('#weatherWidget') && !e.target.closest('#weatherDetails')) {
                weatherDetails.classList.remove('show');
                if (weatherWidget) weatherWidget.classList.remove('active');
            }
        }
    });
}

function populateCategoryDropdowns() {
    const uniqueCategories = [...new Set(kulinerData.map(item => item.kategori))];
    const filterSelect = document.getElementById('filter');
    const addKategoriSelect = document.getElementById('add-kategori');

    if (filterSelect) {
        filterSelect.innerHTML = '<option value=""> Semua Kategori</option>';
        uniqueCategories.sort().forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            filterSelect.appendChild(option);
        });
    }

    if (addKategoriSelect) {
        addKategoriSelect.innerHTML = '<option value="">Pilih Kategori *</option>';
        uniqueCategories.sort().forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            addKategoriSelect.appendChild(option);
        });
    }
}


// Initialize Event Listeners for Filters
function initFilterListeners() {
    ['filter', 'filterTipe', 'filterHalal', 'sort'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', () => {
                filterAndSortList();
            });
        }
    });

    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            filterAndSortList();
        });
    }
}

// Call init once
document.addEventListener('DOMContentLoaded', initFilterListeners);

function renderMap() {
    try {
        markers.forEach(m => map.removeLayer(m));
        markers = [];
        // Filter filteredData if it exists, otherwise full data
        // For map, usually we want to show what's in the list
        // Let's use the global 'filteredKuliner' if available or just kulinerData
        // ideally map should reflect the list. 
        // But for now let's stick to kulinerData or create a way to sync.
        // Actually, let's use the currently displayed list logic if possible.
        // But the previous implementation used kulinerData. 
        // Let's stick to kulinerData but maybe we should filter it?
        // Let's use the filtered list if available.

        const dataToRender = window.filteredKuliner || kulinerData;

        dataToRender.forEach((item, index) => {
            const iconEmoji = item.keliling ? '🛵' : '🏠';
            const animationClass = item.keliling ? 'keliling' : 'tetap';

            const marker = L.marker([item.lat, item.lng], {
                icon: L.divIcon({
                    html: `<div class="marker-icon ${animationClass}" style="font-size: 30px; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; background: white; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">${iconEmoji}</div>`,
                    className: 'marker-container',
                    iconSize: [60, 60], // ENLARGED ICON
                    iconAnchor: [30, 60],
                    popupAnchor: [0, -60]
                })
            }).addTo(map)
                .bindPopup(`
                      <div class="popup-content">
                          <b>${item.nama}</b>
                          <span class="popup-badge ${item.keliling ? 'keliling' : 'tetap'}">
                              ${item.keliling ? '🛵 Keliling' : '🏠 Tetap'}
                          </span>
                          <p>${item.kategori}</p>
                          <p><i class="fas fa-map-marker-alt"></i> ${item.alamat}</p>
                      </div>
                  `)
                .on('click', () => showDetail(index));
            markers.push(marker);
        });
    } catch (error) {
        console.error('Error rendering map:', error);
    }
}

// Map zoom helper functions (global) for UI buttons: persempit (zoom in) / perlebar (zoom out)
function mapZoomIn() {
    try {
        if (map) map.zoomIn();
    } catch (e) { console.warn('mapZoomIn error', e); }
}

function mapZoomOut() {
    try {
        if (map) map.zoomOut();
    } catch (e) { console.warn('mapZoomOut error', e); }
}

// Narrow the map to focus on markers (zoom in to bounds), or widen (zoom out a step)
function narrowMap() {
    try {
        if (!map || markers.length === 0) return;
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds(), { padding: [50, 50], maxZoom: 16 });
    } catch (e) { console.warn('narrowMap error', e); }
}

function widenMap() {
    try {
        if (!map) return;
        map.zoomOut();
    } catch (e) { console.warn('widenMap error', e); }
}

function filterAndSortList() {
    const searchTerm = document.getElementById('search')?.value || '';
    const category = document.getElementById('filter')?.value || '';
    const sortOption = document.getElementById('sort')?.value || '';
    const openNow = document.getElementById('openNowFilter')?.checked || false;
    const tipeFilter = document.getElementById('filterTipe')?.value || '';
    const halalFilter = document.getElementById('filterHalal')?.value || '';

    renderList(searchTerm, category, sortOption, openNow, tipeFilter, halalFilter);
    // Trigger map update after filtering
    // Note: renderList should ideally populate window.filteredKuliner
    // We will ensure renderList does that in the next step if needed, 
    // but looking at logic it usually filters inside.
    // Let's modify renderList to export the filtered data or just call renderMap inside it.
    // For now, let's assume renderList handles UI, and we might need to sync map.
    // Actually, calling renderMap() here relies on the global window.filteredKuliner being set.
    // Let's make sure renderList sets it.
}

function renderList(search = "", category = "", sortOption = "", openNow = false, tipeFilter = "", halalFilter = "") {
    console.log('renderList called');
    const list = document.getElementById("list");
    if (!list) {
        console.error('List element not found!');
        return;
    }

    try {
        console.log('Rendering list with', kulinerData.length, 'items');
        list.innerHTML = "";

        // Check if data exists
        if (!kulinerData || kulinerData.length === 0) {
            list.innerHTML = `
                    <div class="not-found">
                        <i class="fas fa-utensils"></i>
                        <h3>Belum ada data kuliner</h3>
                        <p>Data sedang dimuat...</p>
                    </div>
                `;
            return;
        }

        let filteredData = kulinerData.filter(d => {
            try {
                const matchSearch = d.nama && d.nama.toLowerCase().includes(search.toLowerCase());
                const matchCategory = category === "" || d.kategori === category;
                const matchOpenNow = !openNow || (d.jam && isTempatBuka(d.jam));

                let matchTipe = true;
                if (tipeFilter === "tetap") {
                    matchTipe = !d.keliling;
                } else if (tipeFilter === "keliling") {
                    matchTipe = d.keliling === true;
                }

                let matchHalal = true;
                if (halalFilter !== "") {
                    matchHalal = d.halal === halalFilter;
                }

                return matchSearch && matchCategory && matchOpenNow && matchTipe && matchHalal;
            } catch (e) {
                console.error('Error filtering item:', e);
                return false;
            }
        });

        // Expose filtered data for Map
        window.filteredKuliner = filteredData;
        window.renderMap && window.renderMap();

        if (sortOption === "nama") {
            filteredData.sort((a, b) => (a.nama || '').localeCompare(b.nama || '', 'id'));
        } else if (sortOption === "rating") {
            filteredData.sort((a, b) => (getAverageRating(b) || 0) - (getAverageRating(a) || 0));
        } else if (sortOption === "harga-asc" || sortOption === "harga-desc") {
            filteredData.sort((a, b) => {
                const priceA = parseFloat((a.harga || '').replace(/[^0-9,-]/g, '').split('-')[0]) || 0;
                const priceB = parseFloat((b.harga || '').replace(/[^0-9,-]/g, '').split('-')[0]) || 0;
                return sortOption === "harga-asc" ? priceA - priceB : priceB - priceA;
            });
        }

        if (filteredData.length === 0) {
            list.innerHTML = `
                    <div class="not-found">
                        <i class="fas fa-utensils"></i>
                        <h3>Tidak ada hasil ditemukan</h3>
                        <p>Coba kata kunci atau kategori yang berbeda.</p>
                    </div>
                `;
            return;
        }

        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';


        // Helper for average rating
        function getAverageRating(item) {
            if (!item.reviews || !Array.isArray(item.reviews) || item.reviews.length === 0) return 0;
            const total = item.reviews.reduce((acc, curr) => acc + (parseFloat(curr.rating) || 0), 0);
            return total / item.reviews.length;
        }

        filteredData.forEach((d, i) => {
            try {
                const div = document.createElement("div");
                div.className = "card";
                const rawRating = getAverageRating(d);
                const avgRating = (typeof rawRating === 'number' && !isNaN(rawRating)) ? rawRating : 0;

                div.innerHTML = `
                      <h3>${d.nama || 'Tanpa Nama'}</h3>
                      <p><i class="fas fa-tag"></i> ${d.kategori || 'Umum'}</p>
                      <p><i class="fas fa-map-marker-alt"></i> ${d.alamat || 'Alamat tidak tersedia'}</p>
                      <div class="card-footer">
                        <small><i class="fas fa-clock"></i> ${d.jam || 'Jam tidak tersedia'}</small>
                        <div class="rating">${avgRating.toFixed(1)} <i class="fas fa-star"></i></div>
                      </div>
                    `;
                div.onclick = () => showDetail(kulinerData.indexOf(d));
                cardContainer.appendChild(div);
            } catch (e) {
                console.error('Error creating card:', e);
            }
        });

        list.appendChild(cardContainer);
        console.log('List rendered successfully with', filteredData.length, 'items');
    } catch (error) {
        console.error('Error rendering list:', error);
        list.innerHTML = `
                <div class="not-found">
                    <h3>Terjadi kesalahan</h3>
                    <p>${error.message}</p>
                    <button onclick="location.reload()">Refresh Halaman</button>
                </div>
            `;
    }
}

function showDetail(index) {
    try {
        const item = kulinerData[index];

        // Helper untuk status halal
        const getHalalLabel = (halal) => {
            switch (halal) {
                case 'halal': return '<span class="halal-badge halal-mui">✅ Halal MUI</span>';
                case 'halal-self': return '<span class="halal-badge halal-self">🕌 Halal (Self-Declared)</span>';
                default: return '<span class="halal-badge halal-unknown">❓ Belum Diketahui</span>';
            }
        };

        let ownerBadge = '';
        let claimBtn = '';
        if (item.ownedBy) {
            ownerBadge = `<span class='owner-badge'><i class='fas fa-crown'></i> Dimiliki oleh ${item.ownerName || item.ownedBy}</span>`;
        } else if (window.currentUser && window.currentUser.email) {
            claimBtn = `<button class='btn btn-warning' onclick='claimBusiness(${item.id})'><i class='fas fa-handshake'></i> Klaim Bisnis Ini</button>`;
        }
        const content = `
                <h3>${item.nama}</h3>
                <div class="detail-badges">
                    ${getHalalLabel(item.halal)}
                    <span class="tipe-badge ${item.keliling ? 'keliling' : 'tetap'}">${item.keliling ? '🚚 Keliling' : '🏠 Tetap'}</span>
                    ${ownerBadge}
                </div>
                <p><strong><i class="fas fa-tag"></i> Kategori:</strong> ${item.kategori}</p>
                <p><strong><i class="fas fa-map-marker-alt"></i> Alamat:</strong> ${item.alamat}</p>
                <p><strong><i class="fas fa-clock"></i> Jam Operasional:</strong> ${item.jam}</p>
                <p><strong><i class="fas fa-money-bill-wave"></i> Harga:</strong> ${item.harga}</p>
                <p><strong><i class="fas fa-align-left"></i> Deskripsi:</strong> ${item.deskripsi}</p>
                <p><strong><i class="fas fa-parking"></i> Parkir:</strong> ${item.parkir}</p>
                <p><strong><i class="fas fa-route"></i> Rute:</strong> ${item.rute}</p>
                ${item.kontak ? `<p><strong><i class="fas fa-phone"></i> Kontak:</strong> <a href="tel:${item.kontak}">${item.kontak}</a></p>` : ''}
                <img src="${item.foto}" alt="${item.nama}" onerror="this.src='https://via.placeholder.com/400x200?text=Gambar+Tidak+Tersedia';">
                <div class='claim-business-section'>${claimBtn}</div>
                <div class="detail-actions">
                    <button onclick="openGoogleMaps(${item.lat}, ${item.lng})"><i class="fas fa-map"></i> Lihat Peta</button>
                    <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lng}', '_blank')"><i class="fas fa-directions"></i> Rute</button>
                    ${item.kontak ? `<button onclick="window.open('https://wa.me/${item.kontak.replace(/^0/, '62')}', '_blank')"><i class="fab fa-whatsapp"></i> WhatsApp</button>` : ''}
                    <button onclick="toggleFavorite(${index})" class="${favoriteKuliner.has(item.nama) ? 'favorited' : ''}">
                        <i class="fas fa-heart"></i> ${favoriteKuliner.has(item.nama) ? 'Favorit' : 'Simpan'}
                    </button>
                </div>
                <hr>
                <div class="reviews-section">
                    <h4>Ulasan Pengguna (${item.reviews ? item.reviews.length : 0})</h4>
                    <div class="average-rating">Rating: ${getAverageRating(item)} <i class="fas fa-star"></i></div>
                    <div id="reviews-list">
                        ${item.reviews ? item.reviews.map(review => `
                            <div class="review">
                                <strong>${review.name}</strong>
                                <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                                <p>${review.comment}</p>
                            </div>
                        `).join('') : '<p>Belum ada ulasan</p>'}
                    </div>
                    <div class="add-review">
                        <h5>Tulis Ulasan Anda</h5>
                        <input type="text" id="review-name" placeholder="Nama Anda">
                        <select id="review-rating">
                            <option value="5">★★★★★</option>
                            <option value="4">★★★★☆</option>
                            <option value="3">★★★☆☆</option>
                            <option value="2">★★☆☆☆</option>
                            <option value="1">★☆☆☆☆</option>
                        </select>
                        <textarea id="review-comment" placeholder="Komentar Anda..."></textarea>
                        <button onclick="submitReview(${index})">Kirim Ulasan</button>
                    </div>
                </div>
            `;
        const popup = document.getElementById("detailPopup");
        if (popup) {
            document.getElementById("detailContent").innerHTML = content;
            popup.style.display = 'block';
        }
        if (map) {
            map.setView([item.lat, item.lng], 16);
        }
    } catch (error) {
        console.error('Error showing detail:', error);
    }
}

function closeDetail() {
    const popup = document.getElementById('detailPopup');
    if (popup) popup.style.display = 'none';
}

function openGoogleForm() {
    try {
        const modal = document.getElementById('googleFormModal');
        if (modal) {
            modal.style.display = 'block';
        } else {
            window.open('https://docs.google.com/forms/d/e/1FAIpQLScJ8tkZau-NVdhbmd0cWFKY25VBm0Ajjxvqo-rLYAO_iGb2qg/viewform', '_blank');
        }
    } catch (error) {
        console.error('Error opening Google Form:', error);
        window.open('https://docs.google.com/forms/d/e/1FAIpQLScJ8tkZau-NVdhbmd0cWFKY25VBm0Ajjxvqo-rLYAO_iGb2qg/viewform', '_blank');
    }
}

function closeGoogleForm() {
    const modal = document.getElementById('googleFormModal');
    if (modal) modal.style.display = 'none';
}

function openAddKulinerModal() {
    const modal = document.getElementById('addKulinerModal');
    if (modal) modal.style.display = 'block';
}

function closeAddKulinerModal() {
    const modal = document.getElementById('addKulinerModal');
    if (modal) {
        modal.style.display = 'none';
        // Reset form
        const inputs = modal.querySelectorAll('input, select, textarea');
        inputs.forEach(input => input.value = '');
    }
}

function submitNewKuliner() {
    try {
        const formData = {
            id: Date.now(),
            nama: document.getElementById('add-nama')?.value?.trim() || '',
            kategori: document.getElementById('add-kategori')?.value || '',
            alamat: document.getElementById('add-alamat')?.value?.trim() || '',
            jam: document.getElementById('add-jam')?.value?.trim() || '',
            harga: document.getElementById('add-harga')?.value?.trim() || '',
            deskripsi: document.getElementById('add-deskripsi')?.value?.trim() || '',
            foto: document.getElementById('add-foto')?.value?.trim() || 'https://i.imgur.com/8z3L5kL.jpg',
            parkir: document.getElementById('add-parkir')?.value?.trim() || '',
            rute: document.getElementById('add-rute')?.value?.trim() || "Tidak disebutkan",
            lat: parseFloat(document.getElementById('add-lat')?.value) || 0,
            lng: parseFloat(document.getElementById('add-lng')?.value) || 0,
            keliling: document.getElementById('add-tipe')?.value === 'true',
            halal: document.getElementById('add-halal')?.value || '',
            kontak: document.getElementById('add-kontak')?.value?.trim() || '',
            reviews: [],
            status: 'pending',
            submittedBy: (window.currentUser && window.currentUser.email) ? window.currentUser.email : 'anonymous',
            submittedAt: Date.now(),
            rejectionReason: null
        };

        if (!formData.nama || !formData.kategori || !formData.alamat || !formData.lat || !formData.lng) {
            alert('Harap isi semua field yang wajib (bertanda *)');
            return;
        }

        // SIMULATION: Directly add to main list for Demo purposes
        // In real app, this would go to Admin for approval
        formData.status = 'approved';
        kulinerData.unshift(formData); // Add to top

        // Save to storage
        saveDataToLocalStorage();

        // Refresh UI
        filterAndSortList();

        closeAddKulinerModal();
        showToast('Kuliner berhasil ditambahkan! (Mode Demo: Langsung Tampil)', 'success');
    } catch (error) {
        console.error('Error submitting new kuliner:', error);
        alert('Terjadi kesalahan saat menambahkan kuliner');
    }
}

function saveDataToLocalStorage() {
    localStorage.setItem('kulinerData', JSON.stringify(kulinerData));
    localStorage.setItem('favoriteKuliner', JSON.stringify([...favoriteKuliner]));
}

function getAverageRating(item) {
    if (!item.reviews || item.reviews.length === 0) return "N/A";
    const total = item.reviews.reduce((acc, review) => acc + review.rating, 0);
    return (total / item.reviews.length).toFixed(1);
}

function submitReview(index) {
    const name = document.getElementById('review-name').value.trim();
    const rating = parseInt(document.getElementById('review-rating').value);
    const comment = document.getElementById('review-comment').value.trim();

    if (!name || !comment) {
        alert("Nama dan komentar tidak boleh kosong!");
        return;
    }

    const newReview = { name, rating, comment };
    kulinerData[index].reviews.push(newReview);
    saveDataToLocalStorage();
    showDetail(index); // Refresh the detail view
}

function toggleFavorite(index) {
    const itemName = kulinerData[index].nama;
    if (favoriteKuliner.has(itemName)) {
        favoriteKuliner.delete(itemName);
    } else {
        favoriteKuliner.add(itemName);
    }
    saveDataToLocalStorage();
    showDetail(index); // Refresh the detail view to update button
    filterAndSortList(); // Refresh list to show favorite status
}

function toggleChat() {
    const chat = document.getElementById("chatPopup");
    if (chat) {
        const isVisible = chat.style.display === "flex";
        chat.style.display = isVisible ? "none" : "flex";
        if (!isVisible) {
            const input = document.getElementById("chatInput");
            if (input) input.focus();
        }
    }
}

function sendChat() {
    try {
        const input = document.getElementById("chatInput");
        const chatMessages = document.getElementById("chatMessages");
        if (!input || !chatMessages) return;

        const message = input.value.trim();
        if (!message) return;

        const now = new Date();
        const timeString = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');

        // User message
        chatMessages.innerHTML += `
                <div class="message message-user">
                    ${message}
                    <div class="message-time">${timeString}</div>
                </div>
            `;
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Show typing
        const typing = document.createElement('div');
        typing.className = 'message message-bot typing-indicator';
        typing.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
        chatMessages.appendChild(typing);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Generate response
        setTimeout(() => {
            if (chatMessages.contains(typing)) {
                chatMessages.removeChild(typing);
            }

            const reply = generateResponse(message);
            chatMessages.innerHTML += `
                    <div class="message message-bot">
                        ${reply}
                        <div class="message-time">${timeString}</div>
                    </div>
                `;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    } catch (error) {
        console.error('Error sending chat:', error);
    }
}

function getDynamicResponse(input) {
    const text = input.toLowerCase().trim();

    // Check for weather recommendations
    if (text.includes('cuaca') || text.includes('rekomendasi')) {
        return getWeatherBasedRecommendation(currentWeatherData);
    }

    // Search in knowledge base
    const allData = [...KNOWLEDGE_BASE.faqs, ...kulinerData.map(k => ({
        question: `Info ${k.nama}`,
        answer: `Tentu! ${k.nama} adalah ${k.kategori} yang berlokasi di ${k.alamat}. Buka dari jam ${k.jam} dengan kisaran harga ${k.harga}. ${k.deskripsi}`,
        keywords: k.nama.toLowerCase().split(' ')
    }))];

    let bestMatch = null;
    let maxScore = 0;

    allData.forEach(item => {
        const score = item.keywords.reduce((acc, keyword) => {
            return text.includes(keyword) ? acc + 1 : acc;
        }, 0);

        if (score > maxScore) {
            maxScore = score;
            bestMatch = item;
        }
    });

    if (bestMatch && maxScore > 0) {
        return bestMatch.answer;
    }

    // Fallback responses
    const fallbacks = [
        "Maaf, aku belum mengerti. Bisa coba tanyakan hal lain tentang kuliner Purwokerto?",
        "Hmm, sepertinya aku butuh belajar lagi. Mungkin kamu bisa tanya tentang soto atau mendoan?",
        "Aku siap bantu cari info kuliner. Coba sebutkan nama makanan yang kamu cari."
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

function toggleWeatherDetails() {
    const details = document.getElementById("weatherDetails");
    const widget = document.getElementById("weatherWidget");

    if (details) {
        details.classList.toggle("show");
        if (widget) {
            widget.classList.toggle("active");
        }
    }
}

function showWeatherRec() {
    try {
        toggleChat();
        const chatMessages = document.getElementById("chatMessages");
        if (!chatMessages) return;

        const now = new Date();
        const timeString = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');

        // Tambahkan pesan user
        chatMessages.innerHTML += `
                <div class="message message-user">
                    Rekomendasi Cuaca
                    <div class="message-time">${timeString}</div>
                </div>
            `;

        // Show typing
        const typing = document.createElement('div');
        typing.className = 'message message-bot typing-indicator';
        typing.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
        chatMessages.appendChild(typing);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Generate response
        setTimeout(() => {
            if (chatMessages.contains(typing)) {
                chatMessages.removeChild(typing);
            }

            const reply = getWeatherBasedRecommendation(currentWeatherData) ||
                "Maaf, rekomendasi cuaca tidak tersedia saat ini.";

            chatMessages.innerHTML += `
                    <div class="message message-bot">
                        ${reply}
                        <div class="message-time">${timeString}</div>
                    </div>
                `;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1500);

    } catch (error) {
        console.error('Error in showWeatherRec:', error);
    }
}

function getWeatherBasedRecommendation(weatherData) {
    if (!weatherData) {
        return "Maaf, data cuaca tidak tersedia saat ini.";
    }

    const hours = new Date().getHours();
    const isDay = hours >= 6 && hours < 18;
    const temp = weatherData.main?.temp || 28;
    const condition = weatherData.weather?.[0]?.main?.toLowerCase() || 'clear';

    let recommendation = "";
    let recommendedItems = [];

    if (isDay) {
        if (condition.includes('rain')) {
            recommendation = "🌧️ Hujan di siang hari? Waktunya menikmati yang hangat! Ini rekomendasinya:";
            recommendedItems = kulinerData.filter(item => ["Soto", "Bakso", "Makanan Berat"].includes(item.kategori) && !item.keliling);
        } else if (temp > 29) {
            recommendation = "☀️ Terik sekali! Segarkan diri dengan yang dingin dan menyegarkan:";
            recommendedItems = kulinerData.filter(item => item.kategori === "Minuman" || item.nama.toLowerCase().includes("es"));
        } else {
            recommendation = "🌞 Cuaca cerah! Ini beberapa pilihan kuliner yang cocok dinikmati siang ini:";
            recommendedItems = kulinerData.filter(item => !item.keliling).slice(0, 10);
        }
    } else { // Night
        if (condition.includes('rain')) {
            recommendation = "🌃 Hujan malam-malam, enaknya makan yang berkuah dan hangat. Coba ini:";
            recommendedItems = kulinerData.filter(item => ["Soto", "Bakso", "Sate"].includes(item.kategori) && !item.keliling);
        } else {
            recommendation = "🌙 Malam yang indah untuk kulineran! Ini beberapa rekomendasi hangat untukmu:";
            recommendedItems = kulinerData.filter(item => ["Sate", "Ayam", "Nasi Goreng", "Makanan Berat"].includes(item.kategori) && !item.keliling);
        }
    }

    if (recommendedItems.length > 0) {
        const selectedItems = recommendedItems.sort(() => 0.5 - Math.random()).slice(0, 2);
        let itemText = selectedItems.map(item => `<br>🔥 <b>${item.nama}</b> (${item.kategori})`).join('');
        return `${recommendation}${itemText}`;
    } else {
        return "Maaf, tidak ada rekomendasi yang cocok saat ini. Coba jelajahi peta untuk melihat semua pilihan.";
    }
}

function openGoogleMaps(lat, lng) {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
}

async function fetchWeather() {
    console.log('Fetching weather...');
    try {
        const API_KEY = '80fa2675a270d693f2a2ac21865a6eba';
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Purwokerto,id&appid=${API_KEY}&units=metric&lang=id`, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
            console.warn('Weather API response not ok:', response.status);
            throw new Error('Gagal mengambil data cuaca');
        }

        const data = await response.json();
        currentWeatherData = data;

        console.log('Weather data received:', data);

        const tempElement = document.getElementById("weatherTemp");
        if (tempElement) tempElement.textContent = `${Math.round(data.main.temp)}°C`;

        const detailsTempElement = document.getElementById("weatherDetailsTemp");
        if (detailsTempElement) detailsTempElement.textContent = `${Math.round(data.main.temp)}°C`;

        const minTempElement = document.getElementById("weatherMinTemp");
        if (minTempElement) minTempElement.textContent = `${Math.round(data.main.temp_min)}°C`;

        const maxTempElement = document.getElementById("weatherMaxTemp");
        if (maxTempElement) maxTempElement.textContent = `${Math.round(data.main.temp_max)}°C`;

        const humidityElement = document.getElementById("weatherHumidity");
        if (humidityElement) humidityElement.textContent = `${data.main.humidity}%`;

        const windElement = document.getElementById("weatherWind");
        if (windElement) windElement.textContent = `${data.wind.speed} m/s`;

        const descElement = document.getElementById("weatherDetailsDesc");
        if (descElement) descElement.textContent = data.weather[0].description;

        const conditionElement = document.getElementById("weatherCondition");
        if (conditionElement) conditionElement.textContent = data.weather[0].main;

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        const iconElement = document.getElementById("weatherIcon");
        if (iconElement) iconElement.outerHTML = `<img src="${iconUrl}" class="weather-icon" style="width:22px;height:22px;" alt="weather">`;

        const detailsIconElement = document.getElementById("weatherDetailsIcon");
        if (detailsIconElement) detailsIconElement.outerHTML = `<img src="${iconUrl}" class="weather-details-icon" style="width:45px;height:45px;" alt="weather">`;

        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateElement = document.getElementById("weatherDate");
        if (dateElement) dateElement.textContent = today.toLocaleDateString('id-ID', options);

        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);
        const formatTime = (date) => {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${hours}:${minutes}`;
        };

        const sunriseElement = document.getElementById("weatherSunrise");
        if (sunriseElement) sunriseElement.textContent = formatTime(sunrise);

        const sunsetElement = document.getElementById("weatherSunset");
        if (sunsetElement) sunsetElement.textContent = formatTime(sunset);

        console.log('Weather updated successfully');

    } catch (error) {
        console.error('Error fetching weather:', error);
        simulateWeather();
    }
}

function simulateWeather() {
    console.log('Using simulated weather data');
    const weatherData = {
        main: { temp: 28, temp_min: 22, temp_max: 32, humidity: 75 },
        wind: { speed: 2.5 },
        weather: [{ main: "Clouds", description: "Berawan", icon: "04d" }],
        sys: { sunrise: new Date().setHours(6, 0, 0, 0) / 1000, sunset: new Date().setHours(18, 0, 0, 0) / 1000 }
    };
    currentWeatherData = weatherData;

    try {
        const tempElement = document.getElementById("weatherTemp");
        if (tempElement) tempElement.textContent = `${Math.round(weatherData.main.temp)}°C`;

        const detailsTempElement = document.getElementById("weatherDetailsTemp");
        if (detailsTempElement) detailsTempElement.textContent = `${Math.round(weatherData.main.temp)}°C`;

        console.log('Simulated weather applied');
    } catch (e) {
        console.error('Error applying simulated weather:', e);
    }
}

function isTempatBuka(jamString) {
    if (!jamString || jamString.toLowerCase() === '24 jam') return true;

    const parts = jamString.replace(/ /g, '').split('-');
    if (parts.length !== 2) return true; // Anggap buka jika format salah

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const [startHour, startMinute] = parts[0].split(':').map(Number);
    const [endHour, endMinute] = parts[1].split(':').map(Number);

    let startTime = startHour * 60 + startMinute;
    let endTime = endHour * 60 + endMinute;

    if (endTime < startTime) { // Lewat tengah malam
        return currentTime >= startTime || currentTime < endTime;
    } else {
        return currentTime >= startTime && currentTime < endTime;
    }
}

function sortByDistance() {
    if (!navigator.geolocation) {
        alert("Geolocation tidak didukung oleh browser Anda.");
        return;
    }

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        kulinerData.forEach(item => {
            item.distance = getDistance(latitude, longitude, item.lat, item.lng);
        });

        kulinerData.sort((a, b) => a.distance - b.distance);
        renderList();
        alert("Daftar kuliner telah diurutkan berdasarkan lokasi terdekat!");

    }, () => {
        alert("Tidak dapat mengakses lokasi Anda. Pastikan Anda mengizinkan akses lokasi.");
    });
}

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius bumi dalam km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function showRandomKuliner() {
    const randomIndex = Math.floor(Math.random() * kulinerData.length);
    showDetail(randomIndex);
}

// ========================================
// PWA INSTALL PROMPT & OFFLINE HANDLING
// ========================================

let deferredPrompt;

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPrompt();
});

function showInstallPrompt() {
    const prompt = document.getElementById('pwaInstallPrompt');
    if (prompt) {
        prompt.classList.add('show');
    }
}

function hideInstallPrompt() {
    const prompt = document.getElementById('pwaInstallPrompt');
    if (prompt) {
        prompt.classList.remove('show');
    }
}

async function installPWA() {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
        showToast('Aplikasi berhasil diinstall! 🎉', 'success');
    }

    deferredPrompt = null;
    hideInstallPrompt();
}

// Offline/Online handling
window.addEventListener('online', () => {
    hideOfflineIndicator();
    showToast('Kamu kembali online! 🌐', 'success');
});

window.addEventListener('offline', () => {
    showOfflineIndicator();
    showToast('Kamu sedang offline 📡', 'warning');
});

function showOfflineIndicator() {
    const indicator = document.getElementById('offlineIndicator');
    if (indicator) indicator.classList.add('show');
}

function hideOfflineIndicator() {
    const indicator = document.getElementById('offlineIndicator');
    if (indicator) indicator.classList.remove('show');
}

// Toast notification helper
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">×</button>
        `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Sidebar toggle function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (sidebar) sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('show');
    // adjust map controls after toggling sidebar
    try { if (window.LM_adjustMapControls) window.LM_adjustMapControls(); } catch (e) { }
}

// Quick filter function
function quickFilter(filterType) {
    const chips = document.querySelectorAll('.filter-chips .chip');
    chips.forEach(chip => chip.classList.remove('active'));

    const activeChip = document.querySelector(`.chip[data-filter="${filterType}"]`);
    if (activeChip) activeChip.classList.add('active');

    if (filterType === 'all') {
        document.getElementById('filter').value = '';
        document.getElementById('filterTipe').value = '';
        document.getElementById('filterHalal').value = '';
        document.getElementById('openNowFilter').checked = false;
        filterAndSortList();
    }
}

// Filter open now
function filterOpenNow() {
    const checkbox = document.getElementById('openNowFilter');
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
        filterAndSortList();
    }
}

// Locate user on map
function locateUser() {
    if (!navigator.geolocation) {
        showToast('Geolocation tidak didukung browser Anda', 'error');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            if (map) {
                map.setView([latitude, longitude], 15);

                // Add user marker
                L.marker([latitude, longitude], {
                    icon: L.divIcon({
                        html: '<div class="user-marker">📍</div>',
                        className: '',
                        iconSize: [40, 40]
                    })
                }).addTo(map).bindPopup('Lokasi Anda').openPopup();
            }
            showToast('Lokasi ditemukan! 📍', 'success');
        },
        () => {
            showToast('Tidak dapat mengakses lokasi', 'error');
        }
    );
}

// Voice search placeholder
function startVoiceSearch() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.lang = 'id-ID';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const searchInput = document.getElementById('search');
            if (searchInput) {
                searchInput.value = event.results[0][0].transcript;
                filterAndSortList();
            }
        };

        recognition.onerror = () => {
            showToast('Pencarian suara gagal', 'error');
        };

        recognition.start();
        showToast('Mendengarkan... 🎤', 'info');
    } else {
        showToast('Browser tidak mendukung pencarian suara', 'warning');
    }
}

// Show section (for sidebar navigation)
function showSection(section) {
    toggleSidebar();

    // Update active nav item
    document.querySelectorAll('.sidebar .nav-item, .bottom-nav .nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Find and activate clicked item
    const sectionMap = {
        'home': 0,
        'explore': 1,
        'favorites': 2,
        'news': 3,
        'map': 4
    };

    const navItems = document.querySelectorAll('.sidebar .nav-item');
    if (navItems[sectionMap[section]]) {
        navItems[sectionMap[section]].classList.add('active');
    }

    switch (section) {
        case 'home':
            document.getElementById('filter').value = '';
            document.getElementById('filterTipe').value = '';
            document.getElementById('filterHalal').value = '';
            document.getElementById('openNowFilter').checked = false;
            document.getElementById('search').value = '';
            filterAndSortList();
            showToast('Beranda 🏠', 'info');
            break;
        case 'explore':
            showExplore();
            break;
        case 'favorites':
            showFavorites();
            break;
        case 'news':
            showNews();
            break;
        case 'map':
            scrollToMap();
            break;
        default:
            filterAndSortList();
    }
}

// Scroll to map section and toggle fullscreen
function scrollToMap() {
    const mapSection = document.querySelector('.map-section');
    if (mapSection) {
        // Scroll first
        mapSection.scrollIntoView({ behavior: 'smooth' });

        // Then toggle fullscreen
        toggleMapFullscreen(true);

        if (map) {
            setTimeout(() => map.invalidateSize(), 300);
        }
    }
    showToast('Mode Peta Layar Penuh 🗺️', 'info');
}

// Toggle Map Fullscreen
function toggleMapFullscreen(show) {
    const mapSection = document.querySelector('.map-section');
    if (!mapSection) return;

    // Inject close button if not exists
    if (!document.querySelector('.map-close-btn')) {
        const btn = document.createElement('button');
        btn.className = 'map-close-btn';
        btn.innerHTML = '<i class="fas fa-times"></i>';
        btn.onclick = () => toggleMapFullscreen(false);
        mapSection.appendChild(btn);
    }

    if (show) {
        mapSection.classList.add('map-fullscreen');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
        mapSection.classList.remove('map-fullscreen');
        document.body.style.overflow = ''; // Restore scrolling
        setTimeout(() => {
            if (map) map.invalidateSize();
        }, 300);
    }

    if (map) {
        setTimeout(() => map.invalidateSize(), 100);
    }
}

// Show explore - random categories
function showExplore() {
    const list = document.getElementById('list');
    if (!list) return;

    // Get unique categories
    const categories = [...new Set(kulinerData.map(item => item.kategori))];

    list.innerHTML = `
            <div class="explore-section">
                <h3 style="padding: 16px; color: var(--primary);">🧭 Jelajahi Kategori</h3>
                <div class="category-grid">
                    ${categories.map(cat => `
                        <div class="category-card" onclick="filterByCategory('${cat}')">
                            <span class="category-icon">${getCategoryIcon(cat)}</span>
                            <span class="category-name">${cat}</span>
                            <span class="category-count">${kulinerData.filter(k => k.kategori === cat).length} tempat</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    showToast('Jelajahi Kategori 🧭', 'info');
}

// Get category icon
// Get category icon
function getCategoryIcon(category) {
    const icons = {
        'Soto': '🍜',
        'Sate': '🍢',
        'Bakso': '🥣',
        'Ayam': '🍗',
        'Gudeg': '🍛',
        'Lontong': '🥢',
        'Jajanan Tradisional': '🥮',
        'Makanan Berat': '🍱',
        'Minuman': '🥤',
        'Nasi Goreng': '🍳',
        'Seafood': '🦀',
        'Dessert': '🍨',
        'Sop': '🍲',
        'Salad': '🥗',
        'Rawon': '🥘',
        'Tahu': '🧈',
        'Coto': '🥣',
        'Jepang': '🍣',
        'Mie': '🍜',
        'Chinese': '🥡',
        'Padang': '🍛',
        'Kopi': '☕',
        'Martabak': '🥞',
        'Pecel': '🥗',
        'Penyetan': '🌶️'
    };
    return icons[category] || '🍽️';
}

// Filter by category (from explore)
function filterByCategory(category) {
    document.getElementById('filter').value = category;
    filterAndSortList();
    showToast(`Filter: ${category}`, 'success');
}

// Show favorites
function showFavorites() {
    const favData = kulinerData.filter(item => favoriteKuliner.has(item.nama));

    const list = document.getElementById('list');
    if (!list) return;

    if (favData.length === 0) {
        list.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon"><i class="fas fa-heart-broken"></i></div>
                    <h3>Belum Ada Favorit</h3>
                    <p>Simpan kuliner favoritmu dengan menekan tombol <i class="fas fa-heart" style="color:#FF5722"></i> di halaman detail.</p>
                    <button onclick="showSection('home')" class="btn-primary">Jelajahi Kuliner</button>
                </div>
            `;
        return;
    }

    list.innerHTML = '<h3 style="padding: 16px; color: var(--primary);">❤️ Kuliner Favorit Kamu</h3>';

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    favData.forEach((d) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
                <h3>${d.nama}</h3>
                <p><i class="fas fa-tag"></i> ${d.kategori}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${d.alamat}</p>
                <div class="card-footer">
                    <small><i class="fas fa-clock"></i> ${d.jam}</small>
                    <div class="rating">${getAverageRating(d)} <i class="fas fa-star"></i></div>
                </div>
            `;
        div.onclick = () => showDetail(kulinerData.indexOf(d));
        cardContainer.appendChild(div);
    });

    list.appendChild(cardContainer);
    showToast(`${favData.length} Favorit ❤️`, 'success');
}

// Show news and promo section
function showNews() {
    const list = document.getElementById('list');
    if (!list) return;

    // inject simple news styles once
    if (!document.getElementById('lm-news-style')) {
        const s = document.createElement('style');
        s.id = 'lm-news-style';
        s.innerHTML = `
                .lm-news-hero { padding:18px 16px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center }
                .lm-news-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:16px; padding:16px }
                .lm-news-card { background:#fff; border-radius:8px; padding:12px; box-shadow:0 1px 6px rgba(0,0,0,0.04); }
                .lm-news-card img{ width:100%; height:140px; object-fit:cover; border-radius:6px }
                .lm-news-detail { padding:16px }
                .lm-news-back { margin-bottom:12px }
            `;
        document.head.appendChild(s);
    }

    const news = getNewsData().filter(n => n.status === 'published').sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0));

    if (news.length === 0) {
        list.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📰</div>
                    <h3>Belum ada Berita & Promo</h3>
                    <p>Belum ada berita yang dipublikasikan. Cek kembali nanti atau tambahkan dari panel admin.</p>
                </div>
            `;
        showToast('Belum ada Berita & Promo', 'info');
        return;
    }

    // build grid of articles
    let html = `
            <div class="lm-news-hero">
                <h2>📰 Berita & Promo</h2>
                <div>
                    <button class="btn" onclick="showSection('home')">Kembali</button>
                </div>
            </div>
            <div class="lm-news-grid">
                ${news.map(n => `
                    <article class="lm-news-card" role="article">
                        ${n.featuredImage ? `<img src="${n.featuredImage}" alt="${n.title}">` : ''}
                        <h3>${n.title}</h3>
                        <div class="news-meta">${n.category} • ${new Date(n.publishedAt).toLocaleDateString('id-ID')}</div>
                        <p>${(n.summary || n.content || '').slice(0, 180)}${(n.content || '').length > 180 ? '...' : ''}</p>
                        <p><a href="#" onclick="showNewsDetail(${n.newsId});return false;">Baca selengkapnya →</a></p>
                    </article>
                `).join('')}
            </div>
        `;

    list.innerHTML = html;
    showToast('Berita & Promo 📰', 'info');
}

function showNewsDetail(newsId) {
    const list = document.getElementById('list');
    if (!list) return;

    // simplistic find
    const news = getNewsData().find(n => n.newsId == newsId);
    if (!news) {
        showToast('Berita tidak ditemukan', 'error');
        return;
    }

    list.innerHTML = `
        <div class="lm-news-detail">
            <div class="lm-news-back">
               <button class="btn" onclick="showNews()">← Kembali</button>
            </div>
            <h1>${news.title}</h1>
            <div class="news-meta" style="color:#666; margin-bottom:16px">${news.category} • ${new Date(news.publishedAt).toLocaleDateString('id-ID')}</div>
            ${news.featuredImage ? `<img src="${news.featuredImage}" style="width:100%; border-radius:8px; margin-bottom:16px" alt="${news.title}">` : ''}
            <div class="news-body" style="line-height:1.6">
                ${(news.content || news.summary).split('\n').map(p => `<p style="margin-bottom:12px">${p}</p>`).join('')}
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

// === RESTORING MISSING NEWS DATA & GRID ===
function getNewsData() {
    return [
        {
            newsId: 101,
            title: "Festival Kuliner Banyumas 2025",
            category: "Event",
            publishedAt: new Date('2025-12-20').getTime(),
            status: "published",
            summary: "Saksikan festival kuliner terbesar tahun ini! Berbagai makanan khas Banyumas akan hadir di Alun-Alun Purwokerto.",
            content: "Saksikan festival kuliner terbesar tahun ini! Berbagai makanan khas Banyumas akan hadir di Alun-Alun Purwokerto. Acara ini akan dimeriahkan oleh chef terkenal dan hiburan musik lokal. Jangan lewatkan kesempatan untuk mencicipi mendoan raksasa dan gethuk goreng aneka rasa.",
            featuredImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
            keywords: ["festival", "kuliner", "event"]
        },
        {
            newsId: 102,
            title: "Diskon 50% Hari Jadi Purwokerto",
            category: "Promo",
            publishedAt: new Date('2026-01-01').getTime(),
            status: "published",
            summary: "Rayakan ulang tahun kota tercinta dengan diskon setengah harga di 20 restoran terpilih!",
            content: "Rayakan ulang tahun kota tercinta dengan diskon setengah harga di 20 restoran terpilih! Syarat dan ketentuan berlaku. Berlaku untuk makan di tempat saja.",
            featuredImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
            keywords: ["diskon", "promo", "ultah"]
        },
        {
            newsId: 103,
            title: "Lomba Masak Mendoan Terenak",
            category: "Kompetisi",
            publishedAt: new Date('2026-01-15').getTime(),
            status: "published",
            summary: "Punya resep mendoan rahasia? Ikuti kompetisi ini dan menangkan total hadiah 10 juta rupiah!",
            content: "Punya resep mendoan rahasia? Ikuti kompetisi ini dan menangkan total hadiah 10 juta rupiah! Pendaftaran gratis.",
            featuredImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
            keywords: ["lomba", "masak", "mendoan"]
        }
    ];
}

function renderNewsGrid() {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;

    const data = getNewsData();
    grid.innerHTML = data.slice(0, 3).map(item => `
        <div class="news-card" onclick="showNewsDetail(${item.newsId})">
            <div class="news-image" style="background-image: url('${item.featuredImage}'); height: 140px; background-size: cover; background-position: center; border-radius: 8px 8px 0 0;"></div>
            <div class="news-content" style="padding: 12px;">
                <span class="news-category badge" style="font-size: 10px; margin-bottom: 5px; display: inline-block;">${item.category}</span>
                <h3 style="font-size: 14px; margin: 4px 0;">${item.title}</h3>
                <p style="font-size: 12px; color: #666; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.summary}</p>
            </div>
        </div>
    `).join('');
}

// Ensure rendering happens on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNewsGrid);
} else {
    renderNewsGrid();
}
// Basic accessibility helpers: ARIA attributes + Escape-to-close + aria-hidden observer
function initAccessibility() {
    try {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(m => {
            // set role and initial aria state
            if (!m.hasAttribute('role')) m.setAttribute('role', 'dialog');
            if (!m.hasAttribute('aria-modal')) m.setAttribute('aria-modal', 'true');
            if (!m.hasAttribute('aria-hidden')) m.setAttribute('aria-hidden', m.style.display === 'none' ? 'true' : 'false');

            // observe style changes to update aria-hidden
            const obs = new MutationObserver(() => {
                const hidden = (m.style.display === 'none' || window.getComputedStyle(m).display === 'none');
                m.setAttribute('aria-hidden', hidden ? 'true' : 'false');
            });
            obs.observe(m, { attributes: true, attributeFilter: ['style', 'class'] });
        });

        // Close common modals on Escape key
        // Close common modals on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' || e.key === 'Esc') {
                if (typeof closeDetail === 'function') closeDetail();
                if (typeof closeAddKulinerModal === 'function') closeAddKulinerModal();
                if (typeof closeAuthModal === 'function') closeAuthModal();
                // attempt to close other UI pieces safely
                try { const chat = document.getElementById('chatPopup'); if (chat && chat.style.display !== 'none' && typeof toggleChat === 'function') toggleChat(); } catch (e) { }
            }
        });

        // Tweak sidebar & list styles to be more compact/simple
        if (!document.getElementById('lm-compact-style')) {
            const cs = document.createElement('style');
            cs.id = 'lm-compact-style';
            cs.innerHTML = `
                    /* Compact sidebar items */
                    .sidebar .nav-item { padding: 8px 10px; font-size: 14px; }
                    .sidebar .nav-item i { margin-right: 8px; }
                    .sidebar { width: 200px; }
                    .sidebar { z-index: 1000; }
                    /* Compact kuliner list cards */
                    .kuliner-list .card, .kuliner-list .kuliner-card, .kuliner-list .list-item { margin-bottom: 8px; padding:10px; border-radius:8px }
                    .kuliner-list .card h3, .kuliner-list .kuliner-card h3 { font-size:15px; margin-bottom:4px }
                    /* Reduce visual clutter */
                    .promo-badge, .popup-badge { font-size:12px; padding:4px 6px }
                    /* Make map controls more compact */
                    #lm-map-controls button { width:32px; height:32px; font-size:16px }

                    /* Force map controls to top-right below header and prevent centering */
                    #lm-map-controls {
                        position: fixed !important;
                        right: 12px !important;
                        left: auto !important;
                        top: calc(60px + 8px) !important; /* header height + gap */
                        transform: none !important;
                        margin: 0 !important;
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 8px !important;
                        z-index: 999999 !important;
                        pointer-events: auto !important;
                    }
                    /* Ensure individual buttons are stacked and visible */
                    #lm-map-controls button { display: block !important; box-shadow: 0 6px 18px rgba(0,0,0,0.12) !important; border-radius:8px !important; background:#fff !important; color:#222 !important; }

                    /* Mobile: keep controls bottom-left but still override transforms */
                    @media (max-width: 899px) {
                        #lm-map-controls { right: auto !important; left: 8px !important; top: auto !important; bottom: 12px !important; flex-direction: row !important; }
                    }

                    /* Center Add Kuliner modal */
                    #addKulinerModal .modal-content {
                        position: fixed !important;
                        left: 50% !important;
                        top: 50% !important;
                        transform: translate(-50%, -50%) !important;
                        width: min(760px, 95%) !important;
                        max-height: calc(100vh - 48px) !important;
                        overflow: auto !important;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
                    }
                    /* Ensure overlay covers viewport and modal is above it */
                    #addKulinerModal { 
                        display: none; 
                        position: fixed; 
                        inset: 0; 
                        z-index: 99999;
                        background: rgba(0,0,0,0.5);
                    }
                    #addKulinerModal.show, #addKulinerModal[style*="display: block"] { display: block !important; }
                `;
            document.head.appendChild(cs);
        }
    } catch (err) {
        console.warn('initAccessibility error', err);
    }
}

// Run accessibility init after DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccessibility);
} else {
    initAccessibility();
}

// Sign Out Function
async function signOut() {
    // Clear Local Storage
    localStorage.removeItem('currentUser');
    window.currentUser = null;

    // Clear Firebase Auth if available
    if (window.firebaseAuth && window.fbSignOut) {
        try {
            await window.fbSignOut(window.firebaseAuth);
            console.log("Firebase signed out");
        } catch (e) {
            console.warn("Firebase sign out error", e);
        }
    }

    // Update UI
    showToast("Berhasil keluar.");
    updateAuthUI();

    // Close dropdown
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) dropdown.classList.remove('active');

    // Refresh page to ensure clean state
    setTimeout(() => window.location.reload(), 1000);
}
window.signOut = signOut;

// === EXPOSE DATA TO GLOBAL SCOPE FOR CHATBOT ===
// Check if initialKulinerData is available, otherwise try to use the rendered list data
window.getAllKulinerData = function () {
    // If 'initialKulinerData' is defined in this scope but not global, good.
    // However, it seems 'initialKulinerData' was defined at top level, so it should be visible.
    // We add a fallback to 'kulinerData' which is often the working copy.
    if (typeof kulinerData !== 'undefined' && Array.isArray(kulinerData)) {
        return kulinerData;
    }
    if (typeof initialKulinerData !== 'undefined' && Array.isArray(initialKulinerData)) {
        return initialKulinerData;
    }
    return [];
};

// Privacy Policy Controls
function showPrivacyPolicy() {
    const m = document.getElementById('privacyModal');
    if (m) {
        m.style.display = 'block';
        m.style.zIndex = '9999'; // Ensure top
    }
}

function closePrivacyPolicy() {
    const m = document.getElementById('privacyModal');
    if (m) m.style.display = 'none';
}

window.showPrivacyPolicy = showPrivacyPolicy;
window.closePrivacyPolicy = closePrivacyPolicy;

