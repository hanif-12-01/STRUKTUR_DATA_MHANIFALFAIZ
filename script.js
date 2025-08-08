const GOOGLE_MAPS_API_KEY = 'AIzaSyCYJfw26FLV4doHPdXu9O5fyqoQXgcTveM';
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
        keliling: false
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
        keliling: false
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
        keliling: true
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
        keliling: false
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
        keliling: false
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
        keliling: false
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
        keliling: false
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
        keliling: false
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
        keliling: false
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
        keliling: false
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

        // Close modals when clicking outside
        document.addEventListener('click', function(e) {
            const weatherDetails = document.getElementById('weatherDetails');
            if (weatherDetails && weatherDetails.classList.contains('show') && !e.target.closest('#weatherInfo')) {
                weatherDetails.classList.remove('show');
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
        } catch (error) {
            console.error('Error initializing map:', error);
        }
    }

    function renderMap() {
        try {
            markers.forEach(m => map.removeLayer(m));
            markers = [];
            kulinerData.forEach((item, index) => {
                const iconEmoji = item.keliling ? '🚚' : '🏠';
                let animationClass = '';
                if (item.keliling) {
                    animationClass = Math.random() > 0.5 ? 'bounce' : 'shake';
                }
                const marker = L.marker([item.lat, item.lng], {
                    icon: L.divIcon({
                        html: `<div class="marker-icon ${animationClass}">${iconEmoji}</div>`,
                        className: '',
                        iconSize: [40, 40]
                    })
                }).addTo(map)
                  .bindPopup(`<b>${item.nama}</b><br>${item.kategori}<br>${item.alamat}`)
                  .on('click', () => showDetail(index));
                markers.push(marker);
            });
        } catch (error) {
            console.error('Error rendering map:', error);
        }
    }

    function filterAndSortList() {
        const searchTerm = document.getElementById('search')?.value || '';
        const category = document.getElementById('filter')?.value || '';
        const sortOption = document.getElementById('sort')?.value || '';
        const openNow = document.getElementById('openNowFilter')?.checked || false;
        renderList(searchTerm, category, sortOption, openNow);
    }

    function renderList(search = "", category = "", sortOption = "", openNow = false) {
        const list = document.getElementById("list");
        if (!list) return;
        
        list.innerHTML = '<div class="loading"><div class="spinner"></div><p>Memuat daftar kuliner...</p></div>';
        
        setTimeout(() => {
            list.innerHTML = "";
            let filteredData = kulinerData.filter(d =>
                d.nama.toLowerCase().includes(search.toLowerCase()) &&
                (category === "" || d.kategori === category) &&
                (!openNow || isTempatBuka(d.jam))
            );
            
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
            const content = `
                <h3>${item.nama}</h3>
                <p><strong><i class="fas fa-tag"></i> Kategori:</strong> ${item.kategori}</p>
                <p><strong><i class="fas fa-map-marker-alt"></i> Alamat:</strong> ${item.alamat}</p>
                <p><strong><i class="fas fa-clock"></i> Jam Operasional:</strong> ${item.jam}</p>
                <p><strong><i class="fas fa-money-bill-wave"></i> Harga:</strong> ${item.harga}</p>
                <p><strong><i class="fas fa-align-left"></i> Deskripsi:</strong> ${item.deskripsi}</p>
                <p><strong><i class="fas fa-parking"></i> Parkir:</strong> ${item.parkir}</p>
                <p><strong><i class="fas fa-route"></i> Rute:</strong> ${item.rute}</p>
                <p><strong><i class="fas fa-store"></i> Tipe:</strong> ${item.keliling ? 'Pedagang Keliling 🚚' : 'Warung/Toko Tetap 🏠'}</p>
                <img src="${item.foto}" alt="${item.nama}" onerror="this.src='https://via.placeholder.com/400x200?text=Gambar+Tidak+Tersedia';">
                <div class="detail-actions">
                    <button onclick="openGoogleMaps(${item.lat}, ${item.lng})"><i class="fas fa-map"></i> Google Maps</button>
                    <button onclick="toggleFavorite(${index})" class="${favoriteKuliner.has(item.nama) ? 'favorited' : ''}">
                        <i class="fas fa-heart"></i> ${favoriteKuliner.has(item.nama) ? 'Favorit' : 'Simpan'}
                    </button>
                </div>
                <hr>
                <div class="reviews-section">
                    <h4>Ulasan Pengguna (${item.reviews.length})</h4>
                    <div class="average-rating">Rating: ${getAverageRating(item)} <i class="fas fa-star"></i></div>
                    <div id="reviews-list">
                        ${item.reviews.map(review => `
                            <div class="review">
                                <strong>${review.name}</strong>
                                <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                                <p>${review.comment}</p>
                            </div>
                        `).join('')}
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
                reviews: []
            };

            if (!formData.nama || !formData.kategori || !formData.alamat || !formData.lat || !formData.lng) {
                alert('Harap isi semua field yang wajib (bertanda *)');
                return;
            }

            kulinerData.push(formData);
            saveDataToLocalStorage();
            renderMap();
            populateCategoryDropdowns();
            filterAndSortList();
            closeAddKulinerModal();
            alert('Kuliner baru berhasil ditambahkan!');
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
        if (details) details.classList.toggle("show");
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
