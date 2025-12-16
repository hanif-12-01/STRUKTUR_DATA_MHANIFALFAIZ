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
        const sections = ['home','explore','favorites','news','map'];
        sections.forEach(s => {
            const el = document.getElementById(s + 'Section');
            if (el) el.style.display = (s === page) ? '' : 'none';
        });
    } catch (e) { console.warn('navigate error', e); }
}

function showSection(name) { try { navigate(name); } catch(e) { console.warn(e); } }

function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (!sb) return;
    const open = sb.classList.toggle('open');
    if (overlay) overlay.style.display = open ? 'block' : 'none';
}

function toggleAuthModal() {
    const modal = document.getElementById('authModal') || document.getElementById('loginModal');
    if (!modal) return;
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

function closeLoginModal() { const m = document.getElementById('loginModal'); if (m) m.style.display = 'none'; }
function closeSubmitModal() { const m = document.getElementById('submitModal'); if (m) m.style.display = 'none'; }
function closeModal() { document.querySelectorAll('.modal').forEach(m=>m.style.display='none'); }

function toggleChat() {
    const c = document.getElementById('chatPopup') || document.querySelector('.chat-popup');
    if (!c) return;
    c.style.display = (c.style.display === 'block') ? 'none' : 'block';
}

function sendChat() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    const msg = input.value.trim();
    if (!msg) return;
    // append simple message
    const container = document.getElementById('chatMessages');
    if (container) {
        const el = document.createElement('div'); el.className='message message-user'; el.innerHTML = `<div class='message-content'>${msg}</div>`; container.appendChild(el);
        input.value = '';
        // simple bot reply
        setTimeout(()=>{ const bot = document.createElement('div'); bot.className='message message-bot'; bot.innerHTML = `<div class='message-content'>Terima kasih! Kami akan merespon segera.</div>`; container.appendChild(bot); }, 600);
    }
}

function getWeatherRecommendation() { if (typeof showWeatherRec === 'function') return showWeatherRec(); if (typeof getWeatherBasedRecommendation === 'function') return getWeatherBasedRecommendation(); }

function applyFilters() { if (typeof filterAndSortList === 'function') return filterAndSortList(); }

function showSubmitForm() { const m = document.getElementById('submitModal') || document.getElementById('addKulinerModal'); if (m) m.style.display='block'; }

function showRandom() { if (typeof showRandomKuliner === 'function') return showRandomKuliner(); }

function filterOpenNow() { if (typeof isTempatBuka === 'function') { filterAndSortList && filterAndSortList(); } }

function sortByDistance() { if (typeof sortByDistance === 'function') return window.sortByDistance(); }

function showWeatherRec() { if (typeof showWeatherRec === 'function') return window.showWeatherRec(); }

function startVoiceSearch() { showToast('Pencarian suara belum tersedia pada mode ini.', 'info'); }
// Ensure common UI functions exist as safe stubs to avoid broken onclick handlers
function ensureUIStubs() {
    const stubs = {
        showWeatherRec: () => showToast('Rekomendasi cuaca belum tersedia.', 'info'),
        quickFilter: (f) => { showToast('Filter cepat: '+(f||'') , 'info'); applyFilters && applyFilters(f); },
        sortByDistance: () => showToast('Urutkan berdasarkan jarak belum tersedia.', 'info'),
        filterOpenNow: () => showToast('Filter buka sekarang diterapkan.', 'info'),
        showRandomKuliner: () => { showToast('Acak kuliner dipilih.', 'info'); },
        openSettings: () => showToast('Pengaturan belum diimplementasikan.', 'info')
    };
    Object.keys(stubs).forEach(k => { if (typeof window[k] !== 'function') window[k] = stubs[k]; });
}

ensureUIStubs();

function quickFilter(name) { try { document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active')); const btn = document.querySelector(`.chip[data-filter="${name}"]`); if (btn) btn.classList.add('active'); applyFilters && applyFilters(); } catch(e){} }

function locateUser() { if (typeof locateUser === 'function') return window.locateUser(); if (navigator.geolocation) navigator.geolocation.getCurrentPosition(pos=>{ if (map) map.setView([pos.coords.latitude, pos.coords.longitude], 15); }); }

function openSettings() { showToast('Settings belum diimplementasikan.', 'info'); }

function showMyReviews() { showToast('Fitur Ulasan Saya belum diimplementasikan.', 'info'); }

function sendSuggestion(text) { const input = document.getElementById('chatInput'); if (input) { input.value = text; sendChat(); } }

// Error handling wrapper untuk localStorage
function safeGetItem(key) {
    try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; }
}
function safeSetItem(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { showToast('Gagal menyimpan data: ' + e.message, 'error'); }
}

// Validasi input form utama (contoh: submitNewKuliner)
function validateKulinerForm(formData) {
    if (!formData.nama || !formData.kategori || !formData.alamat || !formData.lat || !formData.lng) {
        showToast('Harap isi semua field yang wajib (bertanda *)', 'error');
        return false;
    }
    if (isNaN(formData.lat) || isNaN(formData.lng)) {
        showToast('Koordinat tidak valid.', 'error');
        return false;
    }
    return true;
}
// Accessibility: Tambah ARIA label pada elemen dinamis
function addAriaLabels() {
    // Tombol favorit
    document.querySelectorAll('button[onclick*="toggleFavorite"]').forEach(btn => {
        btn.setAttribute('aria-label', 'Tambah atau hapus dari favorit');
    });
    // Tombol klaim bisnis
    document.querySelectorAll('button[onclick*="claimBusiness"]').forEach(btn => {
        btn.setAttribute('aria-label', 'Klaim bisnis ini');
    });
    // Tombol approve/reject
    document.querySelectorAll('button[onclick*="approveSubmission"]').forEach(btn => {
        btn.setAttribute('aria-label', 'Setujui kontribusi');
    });
    document.querySelectorAll('button[onclick*="openRejectModal"]').forEach(btn => {
        btn.setAttribute('aria-label', 'Tolak kontribusi');
    });
    // Modal close
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.setAttribute('aria-label', 'Tutup dialog');
    });
    // Chatbot
    const chatInput = document.getElementById('chatInput');
    if (chatInput) chatInput.setAttribute('aria-label', 'Ketik pesan chat');
}

// Panggil setelah render dinamis
setTimeout(addAriaLabels, 1000);
// Universal Toast Notification
function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return alert(msg);
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.add('show'); }, 10);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(()=>toast.remove(), 300); }, 3000);
}

// Empty state helper
function showEmptyState(selector, message) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = `<div class='empty-state'>${message}</div>`;
}

// Loading state helper
function showLoadingState(selector, message = 'Memuat...') {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = `<div class='loading'><div class='spinner'></div><p>${message}</p></div>`;
}
// Admin CMS Panel (Berita & Promo)
function renderAdminCMS() {
    const adminContent = document.getElementById('adminContent');
    if (!adminContent) return;
    let tab = window.cmsTab || 'news';
    let html = `<div class='admin-tabs'>
        <button class='tab-btn${tab==='news'?' active':''}' onclick="switchCMSTab('news')">Berita</button>
        <button class='tab-btn${tab==='promo'?' active':''}' onclick="switchCMSTab('promo')">Promo</button>
    </div>`;
    if (tab === 'news') {
        const news = getNewsData();
        html += `<div class='cms-list'>`;
        html += `<button class='btn btn-primary' onclick='showNewsForm()'>Tambah Berita</button>`;
        if (news.length === 0) html += `<div class='empty-state'>Belum ada berita.</div>`;
        else html += news.map(n => `<div class='news-card'><h4>${n.title}</h4><div class='news-meta'>${n.category} | ${n.status}</div><button onclick='editNews(${n.newsId})'>Edit</button><button onclick='deleteNews(${n.newsId})'>Arsipkan</button>${n.status==='draft'?`<button onclick='publishNews(${n.newsId})'>Publish</button>`:''}${n.status==='published'?`<button onclick='unpublishNews(${n.newsId})'>Unpublish</button>`:''}</div>`).join('');
        html += `</div>`;
    } else if (tab === 'promo') {
        const promos = getPromoData();
        html += `<div class='cms-list'>`;
        html += `<button class='btn btn-primary' onclick='showPromoForm()'>Tambah Promo</button>`;
        if (promos.length === 0) html += `<div class='empty-state'>Belum ada promo.</div>`;
        else html += promos.map(p => `<div class='promo-card'><h4>${p.title}</h4><div class='promo-meta'>${p.discount} | ${p.status}</div><button onclick='editPromo(${p.promoId})'>Edit</button><button onclick='deletePromo(${p.promoId})'>Hapus</button>${p.status==='paused'?`<button onclick='activatePromo(${p.promoId})'>Aktifkan</button>`:''}${p.status==='active'?`<button onclick='pausePromo(${p.promoId})'>Pause</button>`:''}</div>`).join('');
        html += `</div>`;
    }
    adminContent.innerHTML = html;
}

function switchCMSTab(tabName) {
    window.cmsTab = tabName;
    renderAdminCMS();
}

function showNewsForm(newsId) {
    // Simple form for demo (replace with WYSIWYG for production)
    let n = newsId ? getNewsData().find(x=>x.newsId===newsId) : {};
    let html = `<div class='modal show' id='newsFormModal' style='display:block;'>
        <div class='modal-content'>
            <h2>${newsId?'Edit':'Tambah'} Berita</h2>
            <form id='newsForm'>
                <input type='text' id='newsTitle' placeholder='Judul' value='${n?.title||''}' required><br>
                <input type='text' id='newsCategory' placeholder='Kategori' value='${n?.category||''}' required><br>
                <input type='url' id='newsImage' placeholder='URL Gambar' value='${n?.featuredImage||''}'><br>
                <textarea id='newsContent' placeholder='Konten'>${n?.content||''}</textarea><br>
                <button type='submit' class='btn btn-primary'>${newsId?'Update':'Tambah'}</button>
                <button type='button' class='btn btn-secondary' onclick='closeNewsForm()'>Batal</button>
            </form>
        </div>
    </div>`;
    let modalDiv = document.createElement('div');
    modalDiv.innerHTML = html;
    document.body.appendChild(modalDiv);
    window.closeNewsForm = function() { modalDiv.remove(); };
    document.getElementById('newsForm').onsubmit = function(e) {
        e.preventDefault();
        const data = {
            title: document.getElementById('newsTitle').value,
            category: document.getElementById('newsCategory').value,
            featuredImage: document.getElementById('newsImage').value,
            content: document.getElementById('newsContent').value,
            author: window.currentUser?.name || window.currentUser?.email || 'admin',
            publishedAt: Date.now(),
            status: 'draft',
            tags: []
        };
        if (newsId) updateNews(newsId, data); else createNews(data);
        closeNewsForm();
    };
}

function editNews(newsId) { showNewsForm(newsId); }

function showPromoForm(promoId) {
    let p = promoId ? getPromoData().find(x=>x.promoId===promoId) : {};
    let html = `<div class='modal show' id='promoFormModal' style='display:block;'>
        <div class='modal-content'>
            <h2>${promoId?'Edit':'Tambah'} Promo</h2>
            <form id='promoForm'>
                <input type='text' id='promoTitle' placeholder='Judul' value='${p?.title||''}' required><br>
                <input type='text' id='promoDiscount' placeholder='Diskon' value='${p?.discount||''}' required><br>
                <input type='text' id='promoCode' placeholder='Kode Promo' value='${p?.promoCode||''}'><br>
                <input type='date' id='promoFrom' value='${p?.validFrom?new Date(p.validFrom).toISOString().slice(0,10):''}'><br>
                <input type='date' id='promoUntil' value='${p?.validUntil?new Date(p.validUntil).toISOString().slice(0,10):''}'><br>
                <textarea id='promoDesc' placeholder='Deskripsi'>${p?.description||''}</textarea><br>
                <button type='submit' class='btn btn-primary'>${promoId?'Update':'Tambah'}</button>
                <button type='button' class='btn btn-secondary' onclick='closePromoForm()'>Batal</button>
            </form>
        </div>
    </div>`;
    let modalDiv = document.createElement('div');
    modalDiv.innerHTML = html;
    document.body.appendChild(modalDiv);
    window.closePromoForm = function() { modalDiv.remove(); };
    document.getElementById('promoForm').onsubmit = function(e) {
        e.preventDefault();
        const data = {
            title: document.getElementById('promoTitle').value,
            discount: document.getElementById('promoDiscount').value,
            promoCode: document.getElementById('promoCode').value,
            validFrom: document.getElementById('promoFrom').value ? new Date(document.getElementById('promoFrom').value).getTime() : Date.now(),
            validUntil: document.getElementById('promoUntil').value ? new Date(document.getElementById('promoUntil').value).getTime() : Date.now(),
            description: document.getElementById('promoDesc').value,
            status: 'active',
            linkedBusiness: null,
            terms: ''
        };
        if (promoId) updatePromo(promoId, data); else createPromo(data);
        closePromoForm();
    };
}

function editPromo(promoId) { showPromoForm(promoId); }
// FR-22/23/24: CMS Berita & Promo
// --- News ---
function getNewsData() { try { return JSON.parse(localStorage.getItem('newsData')) || []; } catch { return []; } }
function setNewsData(news) { localStorage.setItem('newsData', JSON.stringify(news)); }
function createNews(newsData) {
    let news = getNewsData();
    newsData.newsId = Date.now();
    news.push(newsData);
    setNewsData(news);
    showToast('Berita berhasil ditambahkan!', 'success');
    renderAdminCMS && renderAdminCMS();
}
function updateNews(newsId, updatedData) {
    let news = getNewsData();
    const idx = news.findIndex(n => n.newsId === newsId);
    if (idx === -1) return showToast('Berita tidak ditemukan.', 'error');
    news[idx] = { ...news[idx], ...updatedData };
    setNewsData(news);
    showToast('Berita berhasil diupdate!', 'success');
    renderAdminCMS && renderAdminCMS();
}
function deleteNews(newsId) {
    let news = getNewsData();
    const idx = news.findIndex(n => n.newsId === newsId);
    if (idx === -1) return showToast('Berita tidak ditemukan.', 'error');
    news[idx].status = 'archived';
    setNewsData(news);
    showToast('Berita diarsipkan.', 'info');
    renderAdminCMS && renderAdminCMS();
}
function publishNews(newsId) { updateNews(newsId, { status: 'published' }); }
function unpublishNews(newsId) { updateNews(newsId, { status: 'draft' }); }
function renderNewsList() {
    const news = getNewsData().filter(n => n.status === 'published');
    let html = '';
    if (news.length === 0) html = '<div class="empty-state">Belum ada berita.</div>';
    else html = news.map(n => `<div class='news-card'><img src='${n.featuredImage||''}' alt=''><h4>${n.title}</h4><div class='news-meta'>${n.category} | ${new Date(n.publishedAt).toLocaleDateString('id-ID')}</div><div class='news-content'>${n.content}</div></div>`).join('');
    const newsList = document.getElementById('newsList');
    if (newsList) newsList.innerHTML = html;
}

// --- Promo ---
function getPromoData() { try { return JSON.parse(localStorage.getItem('promoData')) || []; } catch { return []; } }
function setPromoData(promos) { localStorage.setItem('promoData', JSON.stringify(promos)); }
function createPromo(promoData) {
    let promos = getPromoData();
    promoData.promoId = Date.now();
    promos.push(promoData);
    setPromoData(promos);
    showToast('Promo berhasil ditambahkan!', 'success');
    renderAdminCMS && renderAdminCMS();
}
function updatePromo(promoId, updatedData) {
    let promos = getPromoData();
    const idx = promos.findIndex(p => p.promoId === promoId);
    if (idx === -1) return showToast('Promo tidak ditemukan.', 'error');
    promos[idx] = { ...promos[idx], ...updatedData };
    setPromoData(promos);
    showToast('Promo berhasil diupdate!', 'success');
    renderAdminCMS && renderAdminCMS();
}
function deletePromo(promoId) {
    let promos = getPromoData();
    const idx = promos.findIndex(p => p.promoId === promoId);
    if (idx === -1) return showToast('Promo tidak ditemukan.', 'error');
    promos[idx].status = 'expired';
    setPromoData(promos);
    showToast('Promo dihapus.', 'info');
    renderAdminCMS && renderAdminCMS();
}
function activatePromo(promoId) { updatePromo(promoId, { status: 'active' }); }
function pausePromo(promoId) { updatePromo(promoId, { status: 'paused' }); }
function renderActivePromos() {
    const promos = getPromoData().filter(p => p.status === 'active');
    let html = '';
    if (promos.length === 0) html = '<div class="empty-state">Belum ada promo aktif.</div>';
    else html = promos.map(p => `<div class='promo-card'><h4>${p.title}</h4><div class='promo-meta'>${p.discount} | Berlaku s/d ${new Date(p.validUntil).toLocaleDateString('id-ID')}</div><div class='promo-desc'>${p.description}</div><div class='promo-code'>${p.promoCode ? `<button onclick="navigator.clipboard.writeText('${p.promoCode}');showToast('Kode promo disalin!','success')">${p.promoCode}</button>` : ''}</div></div>`).join('');
    const newsList = document.getElementById('newsList');
    if (newsList) newsList.innerHTML += html;
}
// FR-20: Business Claim Portal
function getBusinessClaims() {
    try { return JSON.parse(localStorage.getItem('pendingClaims')) || []; } catch { return []; }
}
function setBusinessClaims(claims) {
    localStorage.setItem('pendingClaims', JSON.stringify(claims));
}
function getClaimHistory() {
    try { return JSON.parse(localStorage.getItem('claimHistory')) || []; } catch { return []; }
}
function setClaimHistory(history) {
    localStorage.setItem('claimHistory', JSON.stringify(history));
}

function claimBusiness(businessId) {
    if (!window.currentUser) { showToast('Anda harus login untuk klaim bisnis.', 'info'); return; }
    const kuliner = kulinerData.find(k => k.id === businessId);
    if (!kuliner) return showToast('Bisnis tidak ditemukan.', 'error');
    // Modal form klaim
    let html = `<div class='modal show' id='claimModal' style='display:block;'>
        <div class='modal-content'>
            <h2>Klaim Bisnis: ${kuliner.nama}</h2>
            <form id='claimForm'>
                <div class='form-group'><label>Nama Pemilik</label><input type='text' id='ownerName' required></div>
                <div class='form-group'><label>No. HP</label><input type='tel' id='ownerPhone' required></div>
                <div class='form-group'><label>Pesan Kepemilikan</label><textarea id='claimMsg' required></textarea></div>
                <div class='form-group'><label>Upload Dokumen (opsional)</label><input type='file' id='claimDocs'></div>
                <div class='form-actions'>
                    <button type='button' class='btn btn-secondary' onclick='closeClaimModal()'>Batal</button>
                    <button type='submit' class='btn btn-primary'>Ajukan Klaim</button>
                </div>
            </form>
        </div>
    </div>`;
    let modalDiv = document.createElement('div');
    modalDiv.innerHTML = html;
    document.body.appendChild(modalDiv);
    window.closeClaimModal = function() { modalDiv.remove(); };
    document.getElementById('claimForm').onsubmit = function(e) {
        e.preventDefault();
        const claimData = {
            claimId: Date.now(),
            businessId: kuliner.id,
            businessName: kuliner.nama,
            claimedBy: window.currentUser.email,
            ownerName: document.getElementById('ownerName').value,
            ownerPhone: document.getElementById('ownerPhone').value,
            message: document.getElementById('claimMsg').value,
            verificationDocs: '', // File upload handling (optional)
            claimedAt: Date.now(),
            status: 'pending'
        };
        submitBusinessClaim(claimData);
        closeClaimModal();
    };
}

function submitBusinessClaim(claimData) {
    if (!claimData.ownerName || !claimData.ownerPhone || !claimData.message) {
        showToast('Semua field wajib diisi.', 'error'); return;
    }
    let claims = getBusinessClaims();
    // Satu bisnis hanya bisa di-claim satu owner
    if (claims.some(c => c.businessId === claimData.businessId && c.status === 'pending')) {
        showToast('Bisnis ini sudah dalam proses klaim.', 'info'); return;
    }
    claims.push(claimData);
    setBusinessClaims(claims);
    showToast('Klaim bisnis berhasil diajukan! Admin akan memproses klaim Anda.', 'success');
}

function approveBusinessClaim(claimId) {
    let claims = getBusinessClaims();
    let history = getClaimHistory();
    const idx = claims.findIndex(c => c.claimId === claimId);
    if (idx === -1) return showToast('Klaim tidak ditemukan.', 'error');
    const claim = { ...claims[idx], status: 'approved', approvedAt: Date.now() };
    // Link owner ke bisnis
    const kulinerIdx = kulinerData.findIndex(k => k.id === claim.businessId);
    if (kulinerIdx !== -1) {
        kulinerData[kulinerIdx].ownedBy = claim.claimedBy;
        kulinerData[kulinerIdx].ownerName = claim.ownerName;
        kulinerData[kulinerIdx].ownerPhone = claim.ownerPhone;
        saveDataToLocalStorage();
    }
    history.push(claim);
    claims.splice(idx, 1);
    setBusinessClaims(claims);
    setClaimHistory(history);
    showToast('Klaim bisnis disetujui.', 'success');
    renderAdminPanel && renderAdminPanel();
}

function rejectBusinessClaim(claimId, reason) {
    let claims = getBusinessClaims();
    let history = getClaimHistory();
    const idx = claims.findIndex(c => c.claimId === claimId);
    if (idx === -1) return showToast('Klaim tidak ditemukan.', 'error');
    const claim = { ...claims[idx], status: 'rejected', rejectionReason: reason, rejectedAt: Date.now() };
    history.push(claim);
    claims.splice(idx, 1);
    setBusinessClaims(claims);
    setClaimHistory(history);
    showToast('Klaim bisnis ditolak.', 'info');
    renderAdminPanel && renderAdminPanel();
}

function ownerPanel() {
    if (!window.currentUser) return;
    const myBusinesses = kulinerData.filter(k => k.ownedBy === window.currentUser.email);
    let html = `<h3>Bisnis Saya</h3>`;
    if (myBusinesses.length === 0) {
        html += `<div class='empty-state'>Anda belum memiliki bisnis yang diklaim.</div>`;
    } else {
        html += myBusinesses.map(k => `
            <div class='owner-card'>
                <h4>${k.nama}</h4>
                <p>${k.alamat}</p>
                <button class='btn btn-info' onclick='editMyBusiness(${k.id})'>Edit Info</button>
            </div>
        `).join('');
    }
    const listDiv = document.getElementById('list');
    if (listDiv) listDiv.innerHTML = html;
}

function editMyBusiness(businessId) {
    const k = kulinerData.find(x => x.id === businessId);
    if (!k) return showToast('Bisnis tidak ditemukan.', 'error');
    let html = `<div class='modal show' id='editBusinessModal' style='display:block;'>
        <div class='modal-content'>
            <h2>Edit Bisnis: ${k.nama}</h2>
            <form id='editBusinessForm'>
                <div class='form-group'><label>Jam Operasional</label><input type='text' id='editJam' value='${k.jam||''}'></div>
                <div class='form-group'><label>Kontak</label><input type='text' id='editKontak' value='${k.kontak||''}'></div>
                <div class='form-group'><label>Deskripsi</label><textarea id='editDeskripsi'>${k.deskripsi||''}</textarea></div>
                <div class='form-group'><label>Foto</label><input type='url' id='editFoto' value='${k.foto||''}'></div>
                <div class='form-actions'>
                    <button type='button' class='btn btn-secondary' onclick='closeEditBusinessModal()'>Batal</button>
                    <button type='submit' class='btn btn-primary'>Simpan</button>
                </div>
            </form>
        </div>
    </div>`;
    let modalDiv = document.createElement('div');
    modalDiv.innerHTML = html;
    document.body.appendChild(modalDiv);
    window.closeEditBusinessModal = function() { modalDiv.remove(); };
    document.getElementById('editBusinessForm').onsubmit = function(e) {
        e.preventDefault();
        k.jam = document.getElementById('editJam').value;
        k.kontak = document.getElementById('editKontak').value;
        k.deskripsi = document.getElementById('editDeskripsi').value;
        k.foto = document.getElementById('editFoto').value;
        saveDataToLocalStorage();
        closeEditBusinessModal();
        showToast('Informasi bisnis berhasil diperbarui!', 'success');
    };
}
// FR-07: Google OAuth (Firebase Auth)
async function signInWithGoogle() {
    try {
        if (!window.firebaseAuth || !window.GoogleAuthProvider || !window.signInWithPopup) {
            showToast('Firebase belum dikonfigurasi. Silakan isi `firebaseConfig` di `index.html` sebelum menggunakan login Google.', 'warning');
            return;
        }
        const provider = new window.GoogleAuthProvider();
        const result = await window.signInWithPopup(window.firebaseAuth, provider);
        const user = result.user;
        window.currentUser = {
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
            uid: user.uid
        };
        localStorage.setItem('currentUser', JSON.stringify(window.currentUser));
        updateAuthUI();
        closeAuthModal && closeAuthModal();
        showToast('Berhasil login sebagai ' + user.displayName, 'success');
    } catch (error) {
        showToast('Gagal login: ' + (error.message || 'Unknown error'), 'error');
    }
}

async function signOut() {
    try {
        await window.fbSignOut(window.firebaseAuth);
        window.currentUser = null;
        localStorage.removeItem('currentUser');
        updateAuthUI();
        showToast('Berhasil logout.', 'info');
    } catch (error) {
        showToast('Gagal logout: ' + (error.message || 'Unknown error'), 'error');
    }
}

function updateAuthUI() {
    const userProfile = document.getElementById('userProfile');
    const loginBtn = document.getElementById('loginBtn');
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    if (window.currentUser) {
        if (userProfile) userProfile.style.display = '';
        if (loginBtn) loginBtn.style.display = 'none';
        if (userAvatar) userAvatar.src = window.currentUser.photo || '';
        if (userName) userName.textContent = window.currentUser.name || window.currentUser.email;
        // Dropdown
        const dropdownAvatar = document.getElementById('dropdownAvatar');
        const dropdownName = document.getElementById('dropdownName');
        const dropdownEmail = document.getElementById('dropdownEmail');
        if (dropdownAvatar) dropdownAvatar.src = window.currentUser.photo || '';
        if (dropdownName) dropdownName.textContent = window.currentUser.name || '';
        if (dropdownEmail) dropdownEmail.textContent = window.currentUser.email || '';
    } else {
        if (userProfile) userProfile.style.display = 'none';
        if (loginBtn) loginBtn.style.display = '';
    }
}

function checkAuth() {
    if (!window.currentUser) {
        // Optionally redirect or show login modal
        toggleAuthModal && toggleAuthModal();
    }
}

// Listen to Firebase Auth state
if (window.onAuthStateChanged && window.firebaseAuth) {
    window.onAuthStateChanged(window.firebaseAuth, (user) => {
        if (user) {
            window.currentUser = {
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
                uid: user.uid
            };
            localStorage.setItem('currentUser', JSON.stringify(window.currentUser));
        } else {
            window.currentUser = null;
            localStorage.removeItem('currentUser');
        }
        updateAuthUI && updateAuthUI();
    });
} else {
    // Fallback: load from localStorage
    try {
        window.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    } catch (e) { window.currentUser = null; }
    updateAuthUI && updateAuthUI();
}
// FR-18: Admin Moderation System - Approve Submission
function approveSubmission(id) {
    let pending = JSON.parse(localStorage.getItem('pendingSubmissions') || '[]');
    let history = JSON.parse(localStorage.getItem('submissionHistory') || '[]');
    const idx = pending.findIndex(item => item.id === id);
    if (idx === -1) return showToast('Submission tidak ditemukan.', 'error');
    const approved = { ...pending[idx], status: 'approved', approvedAt: Date.now() };
    kulinerData.push(approved);
    saveDataToLocalStorage();
    history.push(approved);
    pending.splice(idx, 1);
    localStorage.setItem('pendingSubmissions', JSON.stringify(pending));
    localStorage.setItem('submissionHistory', JSON.stringify(history));
    renderMap && renderMap();
    renderAdminPanel && renderAdminPanel();
    showToast('✅ Kontribusi berhasil disetujui!', 'success');
}

function rejectSubmission(id, reason) {
    let pending = JSON.parse(localStorage.getItem('pendingSubmissions') || '[]');
    let history = JSON.parse(localStorage.getItem('submissionHistory') || '[]');
    const idx = pending.findIndex(item => item.id === id);
    if (idx === -1) return showToast('Submission tidak ditemukan.', 'error');
    const rejected = { ...pending[idx], status: 'rejected', rejectionReason: reason, rejectedAt: Date.now() };
    history.push(rejected);
    pending.splice(idx, 1);
    localStorage.setItem('pendingSubmissions', JSON.stringify(pending));
    localStorage.setItem('submissionHistory', JSON.stringify(history));
    renderAdminPanel && renderAdminPanel();
    showToast('❌ Kontribusi ditolak: ' + reason, 'info');
}

function renderAdminPanel() {
    // Tab navigation: Pending | History | Manage
    const adminContent = document.getElementById('adminContent');
    if (!adminContent) return;
    let pending = JSON.parse(localStorage.getItem('pendingSubmissions') || '[]');
    let history = JSON.parse(localStorage.getItem('submissionHistory') || '[]');
    let tab = window.adminTab || 'pending';
    let html = `<div class="admin-tabs">
        <button class="tab-btn${tab==='pending'?' active':''}" onclick="switchAdminTab('pending')">Pending <span class='badge badge-pending'>${pending.length}</span></button>
        <button class="tab-btn${tab==='history'?' active':''}" onclick="switchAdminTab('history')">History</button>
        <button class="tab-btn${tab==='stats'?' active':''}" onclick="switchAdminTab('stats')">Stats</button>
    </div>`;
    if (tab === 'pending') {
        html += `<div class="admin-stats"><div class="stat-card"><i class='fas fa-clock'></i><div class='stat-info'><h3>${pending.length}</h3><p>Pending</p></div></div></div>`;
        if (pending.length === 0) {
            html += `<div class='empty-state'>Tidak ada submission pending.</div>`;
        } else {
            html += pending.map(item => `
                <div class='submission-card'>
                    <div class='submission-header'>
                        <div class='submission-title'><h4>${item.nama}</h4><span class='badge badge-pending'>Pending</span></div>
                        <div class='submission-time'>${timeAgo(item.submittedAt)}</div>
                    </div>
                    <div class='submission-detail'><label>Kategori:</label> <span>${item.kategori}</span></div>
                    <div class='submission-detail'><label>Alamat:</label> <span>${item.alamat}</span></div>
                    <div class='submission-detail'><label>Submitter:</label> <span>${item.submittedBy}</span></div>
                    <div class='submission-actions'>
                        <button onclick="approveSubmission(${item.id})" class='btn btn-success'>Approve</button>
                        <button onclick="openRejectModal(${item.id})" class='btn btn-danger'>Reject</button>
                        <button onclick="previewSubmission(${item.id})" class='btn btn-info'>Preview</button>
                    </div>
                </div>
            `).join('');
        }
    } else if (tab === 'history') {
        html += `<div class="admin-stats">
            <div class="stat-card"><i class='fas fa-check'></i><div class='stat-info'><h3>${history.filter(h=>h.status==='approved').length}</h3><p>Approved</p></div></div>
            <div class="stat-card"><i class='fas fa-times'></i><div class='stat-info'><h3>${history.filter(h=>h.status==='rejected').length}</h3><p>Rejected</p></div></div>
        </div>`;
        if (history.length === 0) {
            html += `<div class='empty-state'>Belum ada riwayat moderasi.</div>`;
        } else {
            html += history.map(item => `
                <div class='history-card ${item.status}'>
                    <div class='submission-header'>
                        <div class='submission-title'><h4>${item.nama}</h4><span class='badge badge-${item.status}'>${item.status.charAt(0).toUpperCase()+item.status.slice(1)}</span></div>
                        <div class='submission-time'>${timeAgo(item.submittedAt)}</div>
                    </div>
                    <div class='submission-detail'><label>Kategori:</label> <span>${item.kategori}</span></div>
                    <div class='submission-detail'><label>Alamat:</label> <span>${item.alamat}</span></div>
                    <div class='submission-detail'><label>Submitter:</label> <span>${item.submittedBy}</span></div>
                    ${item.status==='rejected'?`<div class='rejection-reason'>Alasan: ${item.rejectionReason||'-'}</div>`:''}
                </div>
            `).join('');
        }
    } else if (tab === 'stats') {
        html += `<div class="admin-stats">
            <div class="stat-card"><i class='fas fa-clock'></i><div class='stat-info'><h3>${pending.length}</h3><p>Pending</p></div></div>
            <div class="stat-card"><i class='fas fa-check'></i><div class='stat-info'><h3>${history.filter(h=>h.status==='approved').length}</h3><p>Approved</p></div></div>
            <div class="stat-card"><i class='fas fa-times'></i><div class='stat-info'><h3>${history.filter(h=>h.status==='rejected').length}</h3><p>Rejected</p></div></div>
        </div>`;
    }
    adminContent.innerHTML = html;
}

function switchAdminTab(tabName) {
    window.adminTab = tabName;
    renderAdminPanel();
}

function openRejectModal(id) {
    const reason = prompt('Masukkan alasan penolakan:');
    if (reason && reason.trim()) {
        rejectSubmission(id, reason.trim());
    }
}

function previewSubmission(id) {
    let pending = JSON.parse(localStorage.getItem('pendingSubmissions') || '[]');
    const item = pending.find(i => i.id === id);
    if (!item) return showToast('Submission tidak ditemukan.', 'error');
    // Modal preview sederhana
    let html = `<div class='modal show' id='previewModal' style='display:block;'>
        <div class='modal-content'>
            <h2>${item.nama}</h2>
            <p><b>Kategori:</b> ${item.kategori}</p>
            <p><b>Alamat:</b> ${item.alamat}</p>
            <p><b>Deskripsi:</b> ${item.deskripsi}</p>
            <p><b>Submitter:</b> ${item.submittedBy}</p>
            <p><b>Status:</b> <span class='badge badge-pending'>Pending</span></p>
            <div style='margin:1rem 0;'><img src='${item.foto}' alt='foto' style='max-width:100%;border-radius:8px;'/></div>
            <button onclick="approveSubmission(${item.id})" class='btn btn-success'>Approve</button>
            <button onclick="openRejectModal(${item.id})" class='btn btn-danger'>Reject</button>
            <button onclick="closePreviewModal()" class='btn btn-secondary'>Tutup</button>
        </div>
    </div>`;
    let modalDiv = document.createElement('div');
    modalDiv.innerHTML = html;
    document.body.appendChild(modalDiv);
    window.closePreviewModal = function() {
        modalDiv.remove();
    };
}

function timeAgo(timestamp) {
    const now = Date.now();
    const diff = Math.floor((now - timestamp) / 1000);
    if (diff < 60) return diff + ' detik lalu';
    if (diff < 3600) return Math.floor(diff/60) + ' menit lalu';
    if (diff < 86400) return Math.floor(diff/3600) + ' jam lalu';
    return new Date(timestamp).toLocaleDateString('id-ID');
}

function showMyContributions(filter = 'all') {
    if (!window.currentUser || !window.currentUser.email) {
        showToast('Anda harus login untuk melihat kontribusi.', 'info');
        return;
    }
    let pending = JSON.parse(localStorage.getItem('pendingSubmissions') || '[]');
    let history = JSON.parse(localStorage.getItem('submissionHistory') || '[]');
    let all = [...pending, ...history].filter(item => item.submittedBy === window.currentUser.email);
    if (filter !== 'all') all = all.filter(item => item.status === filter);
    let html = `<h3>Kontribusi Saya</h3>
        <div class='contrib-filters'>
            <button onclick="showMyContributions('all')">Semua</button>
            <button onclick="showMyContributions('pending')">Pending</button>
            <button onclick="showMyContributions('approved')">Approved</button>
            <button onclick="showMyContributions('rejected')">Rejected</button>
        </div>`;
    if (all.length === 0) {
        html += `<div class='empty-state'>Belum ada kontribusi.</div>`;
    } else {
        html += all.map(item => `
            <div class='history-card ${item.status}'>
                <div class='submission-header'>
                    <div class='submission-title'><h4>${item.nama}</h4><span class='badge badge-${item.status}'>${item.status.charAt(0).toUpperCase()+item.status.slice(1)}</span></div>
                    <div class='submission-time'>${timeAgo(item.submittedAt)}</div>
                </div>
                <div class='submission-detail'><label>Kategori:</label> <span>${item.kategori}</span></div>
                <div class='submission-detail'><label>Alamat:</label> <span>${item.alamat}</span></div>
                ${item.status==='rejected'?`<div class='rejection-reason'>Alasan: ${item.rejectionReason||'-'}</div>`:''}
            </div>
        `).join('');
    }
    const listDiv = document.getElementById('list');
    if (listDiv) listDiv.innerHTML = html;
}
const GOOGLE_MAPS_API_KEY = 'AIzaSyDW3PGqq5KbD_4v6KT2YrvP3cqboyZMq4E';

// FR-18: Admin Moderation System - Data structure for submissions
const submissionStructure = {
    id: Date.now(),
    nama: '',
    kategori: '',
    alamat: '',
    jam: '',
    harga: '',
    deskripsi: '',
    foto: '',
    parkir: '',
    rute: '',
    lat: 0,
    lng: 0,
    keliling: false,
    halal: '',
    kontak: '',
    reviews: [],
    status: 'pending', // 'pending', 'approved', 'rejected'
    submittedBy: '',
    submittedAt: Date.now(),
    rejectionReason: null
};

function initSubmissions() {
    if (!localStorage.getItem('pendingSubmissions')) {
        localStorage.setItem('pendingSubmissions', '[]');
    }
}
    const initialKulinerData = [
      {
        nama: "Soto Sokaraja",
        kategori: "Soto",
        alamat: "Jl. Jend. Sudirman No.58, Purwokerto",
        jam: "07:00 - 15:00",
        harga: "Rp15.000-Rp20.000",
        deskripsi: "Kuah kental dengan irisan daging sapi, khas Sokaraja yang legendaris.",
        foto: "https://i.imgur.com/8z3L5kL.jpg",
        parkir: "Tersedia",
        rute: "Area Sokaraja",
        lat: -7.421,
        lng: 109.242,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567890"
      },
      {
        nama: "Sate Bebek Tambak",
        kategori: "Sate",
        alamat: "Jl. Tambak, Purwokerto",
        jam: "16:00 - 22:00",
        harga: "Rp25.000-Rp40.000",
        deskripsi: "Sate bebek gurih dengan bumbu kacang dan arang khas, favorit malam hari.",
        foto: "https://i.imgur.com/8z3L5kL.jpg",
        parkir: "Tersedia",
        rute: "Jl. Tambak",
        lat: -7.423,
        lng: 109.240,
        keliling: false,
        halal: "halal",
        kontak: "081234567891"
      },
      {
        nama: "Tempe Mendoan",
        kategori: "Jajanan Tradisional",
        alamat: "Pasar Sokaraja, Purwokerto",
        jam: "06:00 - 18:00",
        harga: "Rp2.000-Rp5.000",
        deskripsi: "Tempe tipis digoreng renyah, disajikan dengan sambal kecap pedas.",
        foto: "https://i.imgur.com/8z3L5kL.jpg",
        parkir: "Tersedia",
        rute: "Pasar Sokaraja",
        lat: -7.420,
        lng: 109.230,
        keliling: true,
        halal: "halal-self",
        kontak: "081234567892"
      },
      {
        nama: "Nasi Liwet Mbah Maimun",
        kategori: "Makanan Berat",
        alamat: "Jl. Pahlawan No.123, Purwokerto",
        jam: "16:00 - 22:00",
        harga: "Rp18.000-Rp25.000",
        deskripsi: "Nasi gurih santan dengan lauk ayam suwir, telur, dan tempe orek.",
        foto: "https://i.imgur.com/8z3L5kL.jpg",
        parkir: "Tersedia",
        rute: "Jl. Pahlawan No.123",
        lat: -7.425,
        lng: 109.250,
        keliling: false,
        halal: "halal",
        kontak: "081234567893"
      },
      {
        nama: "Bakso President",
        kategori: "Bakso",
        alamat: "Jl. Dr. Angka No.88, Purwokerto",
        jam: "08:00 - 21:00",
        harga: "Rp15.000-Rp25.000",
        deskripsi: "Bakso besar dengan kuah gurih dan tekstur kenyal, ikonik di Purwokerto.",
        foto: "https://i.imgur.com/8z3L5kL.jpg",
        parkir: "Ya",
        rute: "Jl. Dr. Angka No.88",
        lat: -7.418,
        lng: 109.245,
        keliling: false,
        halal: "halal",
        kontak: "081234567894"
      },
      {
        nama: "Gudeg Mbah Siti",
        kategori: "Gudeg",
        alamat: "Jl. Slamet Riyadi No.45, Purwokerto",
        jam: "09:00 - 19:00",
        harga: "Rp20.000-Rp30.000",
        deskripsi: "Gudeg manis khas Jawa dengan krengsengan ayam dan nangka muda.",
        foto: "https://i.imgur.com/8z3L5kL.jpg",
        parkir: "Ya",
        rute: "Jl. Slamet Riyadi No.45",
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
        foto: "https://i.imgur.com/8z3L5kL.jpg",
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
        foto: "https://i.imgur.com/8z3L5kL.jpg",
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
        foto: "https://i.imgur.com/8z3L5kL.jpg",
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
        foto: "https://i.imgur.com/8z3L5kL.jpg",
        parkir: "Ya",
        rute: "Jl. KH. Mas Mansyur No.34",
        lat: -7.420,
        lng: 109.238,
        keliling: false,
        halal: "halal-self",
        kontak: "081234567899"
      }
    ];

    let kulinerData = [];
    let favoriteKuliner = new Set(JSON.parse(localStorage.getItem('favoriteKuliner')) || []);

    function loadData() {
        const storedData = JSON.parse(localStorage.getItem('kulinerData'));
        if (storedData && storedData.length > 0) {
            kulinerData = storedData;
        } else {
            // Add default reviews to initial data
            kulinerData = initialKulinerData.map(item => ({
                ...item,
                reviews: [
                    { name: "Admin", rating: 5, comment: "Tempat yang sangat direkomendasikan!" },
                    { name: "Pengunjung", rating: 4, comment: "Makanannya enak, suasana nyaman." }
                ]
            }));
        }
    }

    let map;
    let markers = [];
    let currentWeatherData = null;

    // Inisialisasi DOM
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM loaded - initializing app');
        initializeApp();
    });

    function initializeApp() {
        loadData();
        populateCategoryDropdowns();
        initMap();
        renderList();
        fetchWeather();
        setupEventListeners();
        
        // Hide splash screen after app is loaded
        setTimeout(() => {
            hideSplashScreen();
        }, 1500);
    }
    
    function hideSplashScreen() {
        const splash = document.getElementById('splashScreen');
        if (splash) {
            splash.style.opacity = '0';
            splash.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                splash.style.display = 'none';
            }, 500);
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
        if(openNowFilter) {
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
        document.addEventListener('click', function(e) {
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

    function initMap() {
        try {
            map = L.map('map').setView([-7.4212, 109.2422], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            renderMap();

            // Add custom map controls (zoom in/out, narrow/widen view)
            try {
                const container = map.getContainer();

                // inject minimal CSS once
                if (!document.getElementById('lm-map-controls-style')) {
                    const style = document.createElement('style');
                    style.id = 'lm-map-controls-style';
                    style.innerHTML = `
                        .lm-map-controls { position: absolute; top: 10px; left: 10px; z-index: 1000; display:flex; flex-direction:column; gap:6px; }
                        .lm-map-controls button { width:36px; height:36px; border-radius:6px; border:none; background:rgba(255,255,255,0.95); box-shadow:0 1px 4px rgba(0,0,0,0.3); cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:18px; }
                        .lm-map-controls button[aria-label] { padding:0; }
                        .lm-map-controls button:hover { transform:translateY(-1px); }
                        .lm-map-controls .secondary { background: #fff7e9; }
                    `;
                    document.head.appendChild(style);
                }

                const controls = document.createElement('div');
                controls.className = 'lm-map-controls';

                const btnZoomIn = document.createElement('button');
                btnZoomIn.innerHTML = '+';
                btnZoomIn.title = 'Persempit (Zoom In)';
                btnZoomIn.setAttribute('aria-label', 'Persempit peta');
                btnZoomIn.addEventListener('click', () => mapZoomIn());

                const btnZoomOut = document.createElement('button');
                btnZoomOut.innerHTML = '−';
                btnZoomOut.title = 'Perlebar (Zoom Out)';
                btnZoomOut.setAttribute('aria-label', 'Perlebar peta');
                btnZoomOut.addEventListener('click', () => mapZoomOut());

                const btnNarrow = document.createElement('button');
                btnNarrow.innerHTML = '🎯';
                btnNarrow.title = 'Persempit ke marker (Fit bounds)';
                btnNarrow.setAttribute('aria-label', 'Persempit ke marker');
                btnNarrow.className = 'secondary';
                btnNarrow.addEventListener('click', () => narrowMap());

                const btnWiden = document.createElement('button');
                btnWiden.innerHTML = '↔';
                btnWiden.title = 'Perlebar tampilan peta';
                btnWiden.setAttribute('aria-label', 'Perlebar tampilan peta');
                btnWiden.className = 'secondary';
                btnWiden.addEventListener('click', () => widenMap());

                controls.appendChild(btnZoomIn);
                controls.appendChild(btnZoomOut);
                controls.appendChild(btnNarrow);
                controls.appendChild(btnWiden);

                // append controls into map container
                container.style.position = container.style.position || 'relative';
                container.appendChild(controls);
            } catch (err) {
                console.warn('Failed to add custom map controls', err);
            }
        } catch (error) {
            console.error('Error initializing map:', error);
        }
    }

    function renderMap() {
        try {
            markers.forEach(m => map.removeLayer(m));
            markers = [];
            kulinerData.forEach((item, index) => {
                const iconEmoji = item.keliling ? '🛵' : '🏠';
                const animationClass = item.keliling ? 'keliling' : 'tetap';
                
                const marker = L.marker([item.lat, item.lng], {
                    icon: L.divIcon({
                        html: `<div class="marker-icon ${animationClass}">${iconEmoji}</div>`,
                        className: 'marker-container',
                        iconSize: [40, 40]
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
            map.fitBounds(group.getBounds(), { padding: [50,50], maxZoom: 16 });
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
    }

    function renderList(search = "", category = "", sortOption = "", openNow = false, tipeFilter = "", halalFilter = "") {
        const list = document.getElementById("list");
        if (!list) return;
        
        list.innerHTML = '<div class="loading"><div class="spinner"></div><p>Memuat daftar kuliner...</p></div>';
        
        setTimeout(() => {
            list.innerHTML = "";
            let filteredData = kulinerData.filter(d => {
                const matchSearch = d.nama.toLowerCase().includes(search.toLowerCase());
                const matchCategory = category === "" || d.kategori === category;
                const matchOpenNow = !openNow || isTempatBuka(d.jam);
                
                // Filter tipe penjual (FR-05)
                let matchTipe = true;
                if (tipeFilter === "tetap") {
                    matchTipe = !d.keliling;
                } else if (tipeFilter === "keliling") {
                    matchTipe = d.keliling === true;
                }
                
                // Filter kehalalan (FR-19)
                let matchHalal = true;
                if (halalFilter !== "") {
                    matchHalal = d.halal === halalFilter;
                }
                
                return matchSearch && matchCategory && matchOpenNow && matchTipe && matchHalal;
            });
            
            if (sortOption === "nama") {
                filteredData.sort((a, b) => a.nama.localeCompare(b.nama, 'id'));
            } else if (sortOption === "rating") {
                filteredData.sort((a, b) => (getAverageRating(b) || 0) - (getAverageRating(a) || 0));
            } else if (sortOption === "harga-asc" || sortOption === "harga-desc") {
                filteredData.sort((a, b) => {
                    const priceA = parseFloat(a.harga.replace(/[^0-9,-]/g, '').split('-')[0]) || 0;
                    const priceB = parseFloat(b.harga.replace(/[^0-9,-]/g, '').split('-')[0]) || 0;
                    return sortOption === "harga-asc" ? priceA - priceB : priceB - priceA;
                });
            }
            
            if (filteredData.length === 0) {
                list.innerHTML = `
                    <div class="not-found">
                        <i class="fas fa-utensils"></i>
                        <h3>Oops! Tidak ada hasil ditemukan</h3>
                        <p>Coba kata kunci atau kategori yang berbeda.</p>
                    </div>
                `;
                return;
            }
            
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            
            filteredData.forEach((d, i) => {
                const div = document.createElement("div");
                div.className = "card";
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
        }, 300);
    }

    function showDetail(index) {
        try {
            const item = kulinerData[index];
            
            // Helper untuk status halal
            const getHalalLabel = (halal) => {
                switch(halal) {
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
                    <button onclick="openGoogleMaps(${item.lat}, ${item.lng})"><i class="fas fa-map"></i> Google Maps</button>
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

            let pending = [];
            try {
                pending = JSON.parse(localStorage.getItem('pendingSubmissions')) || [];
            } catch (e) { pending = []; }
            pending.push(formData);
            localStorage.setItem('pendingSubmissions', JSON.stringify(pending));

            closeAddKulinerModal();
            showToast('Kontribusi Anda sedang direview oleh admin.', 'info');
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
        try {
            const API_KEY = '80fa2675a270d693f2a2ac21865a6eba';
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Purwokerto,id&appid=${API_KEY}&units=metric&lang=id`);
            if (!response.ok) throw new Error('Gagal mengambil data cuaca');
            const data = await response.json();
            currentWeatherData = data;
            
            document.getElementById("weatherTemp").textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById("weatherDetailsTemp").textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById("weatherMinTemp").textContent = `${Math.round(data.main.temp_min)}°C`;
            document.getElementById("weatherMaxTemp").textContent = `${Math.round(data.main.temp_max)}°C`;
            document.getElementById("weatherHumidity").textContent = `${data.main.humidity}%`;
            document.getElementById("weatherWind").textContent = `${data.wind.speed} m/s`;
            document.getElementById("weatherDetailsDesc").textContent = data.weather[0].description;
            document.getElementById("weatherCondition").textContent = data.weather[0].main;
            
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            document.getElementById("weatherIcon").outerHTML = `<img src="${iconUrl}" class="weather-icon" style="width:22px;height:22px;">`;
            document.getElementById("weatherDetailsIcon").outerHTML = `<img src="${iconUrl}" class="weather-details-icon" style="width:45px;height:45px;">`;
            
            const today = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById("weatherDate").textContent = today.toLocaleDateString('id-ID', options);
            
            const sunrise = new Date(data.sys.sunrise * 1000);
            const sunset = new Date(data.sys.sunset * 1000);
            const formatTime = (date) => {
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                return `${hours}:${minutes}`;
            };
            document.getElementById("weatherSunrise").textContent = formatTime(sunrise);
            document.getElementById("weatherSunset").textContent = formatTime(sunset);
            
        } catch (error) {
            console.error('Error fetching weather:', error);
            simulateWeather();
        }
    }

    function simulateWeather() {
        const weatherData = {
            main: { temp: 28, temp_min: 22, temp_max: 32, humidity: 75 },
            wind: { speed: 2.5 },
            weather: [{ main: "Clouds", description: "Berawan", icon: "04d" }],
            sys: { sunrise: new Date().setHours(6, 0, 0, 0) / 1000, sunset: new Date().setHours(18, 0, 0, 0) / 1000 }
        };
        currentWeatherData = weatherData;
        
        document.getElementById("weatherTemp").textContent = `${weatherData.main.temp}°C`;
        document.getElementById("weatherDetailsTemp").textContent = `${weatherData.main.temp}°C`;
        document.getElementById("weatherMinTemp").textContent = `${weatherData.main.temp_min}°C`;
        document.getElementById("weatherMaxTemp").textContent = `${weatherData.main.temp_max}°C`;
        document.getElementById("weatherHumidity").textContent = `${weatherData.main.humidity}%`;
        document.getElementById("weatherWind").textContent = `${weatherData.wind.speed} m/s`;
        document.getElementById("weatherDetailsDesc").textContent = weatherData.weather[0].description;
        document.getElementById("weatherCondition").textContent = weatherData.weather[0].main;
        
        document.getElementById("weatherIcon").className = "fas fa-cloud-sun weather-icon";
        document.getElementById("weatherDetailsIcon").className = "fas fa-cloud-sun weather-details-icon";
        
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById("weatherDate").textContent = today.toLocaleDateString('id-ID', options);
        
        const sunrise = new Date(weatherData.sys.sunrise * 1000);
        const sunset = new Date(weatherData.sys.sunset * 1000);
        const formatTime = (date) => {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${hours}:${minutes}`;
        };
        document.getElementById("weatherSunrise").textContent = formatTime(sunrise);
        document.getElementById("weatherSunset").textContent = formatTime(sunset);
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
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
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
        
        switch(section) {
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
    
    // Scroll to map section
    function scrollToMap() {
        const mapSection = document.querySelector('.map-section');
        if (mapSection) {
            mapSection.scrollIntoView({ behavior: 'smooth' });
            if (map) {
                setTimeout(() => map.invalidateSize(), 300);
            }
        }
        showToast('Peta Kuliner 🗺️', 'info');
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
            'Minuman': '🥤'
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
                    <div class="empty-icon">💔</div>
                    <h3>Belum Ada Favorit</h3>
                    <p>Simpan kuliner favoritmu dengan menekan tombol ❤️ di detail kuliner</p>
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
        
        list.innerHTML = `
            <div class="news-section">
                <h3 style="padding: 16px; color: var(--primary);">📰 Berita & Promo</h3>
                
                <div class="promo-card">
                    <div class="promo-badge">🔥 PROMO</div>
                    <h4>Diskon 20% di Bakso President!</h4>
                    <p>Berlaku hingga akhir bulan. Syarat dan ketentuan berlaku.</p>
                    <small>Berlaku: 1-31 Desember 2025</small>
                </div>
                
                <div class="promo-card">
                    <div class="promo-badge new">✨ BARU</div>
                    <h4>Sate Bebek Tambak Buka Cabang Baru</h4>
                    <p>Kini hadir di Jl. Sudirman! Grand opening dengan beli 2 gratis 1.</p>
                    <small>15 Desember 2025</small>
                </div>
                
                <div class="promo-card">
                    <div class="promo-badge event">🎉 EVENT</div>
                    <h4>Festival Kuliner Purwokerto 2025</h4>
                    <p>Ramaikan akhir tahun dengan berbagai kuliner khas Purwokerto di Alun-alun.</p>
                    <small>25-31 Desember 2025</small>
                </div>
                
                <div class="news-card">
                    <h4>📖 Tips Memilih Soto Enak</h4>
                    <p>Perhatikan kuah yang bening, daging yang empuk, dan pelayanan yang ramah...</p>
                    <a href="#" onclick="showToast('Artikel lengkap segera hadir!', 'info')">Baca selengkapnya →</a>
                </div>
            </div>
        `;
        showToast('Berita & Promo 📰', 'info');
    }
    
    // Toggle auth modal placeholder
    function toggleAuthModal() {
        showToast('Fitur Login segera hadir! 🔐', 'info');
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
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' || e.key === 'Esc') {
                    if (typeof closeDetail === 'function') closeDetail();
                    if (typeof closeAddKulinerModal === 'function') closeAddKulinerModal();
                    if (typeof closeAuthModal === 'function') closeAuthModal();
                    // attempt to close other UI pieces safely
                    try { const chat = document.getElementById('chatPopup'); if (chat && chat.style.display !== 'none' && typeof toggleChat === 'function') toggleChat(); } catch (e) {}
                }
            });
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
