const kulinerData = [
      {
        nama: "Soto Sokaraja",
        kategori: "Soto",
        alamat: "Jl. Sokaraja, Purwokerto",
        jam: "07:00 - 15:00",
        harga: "Rp 12.000 - 20.000",
        deskripsi: "Kuah kaldu sapi + kacang, disajikan dengan ketupat dan kerupuk.",
        foto: "https://i.imgur.com/8z3L5kL.jpg",
        parkir: "Tersedia",
        rute: "Area Sokaraja",
        lat: -7.4220,
        lng: 109.2300,
        keliling: false
      },
      {
        nama: "Tempe Mendoan",
        kategori: "Gorengan",
        alamat: "Pasar Sokaraja, Purwokerto",
        jam: "06:00 - 18:00",
        harga: "Rp 2.000 - 5.000",
        deskripsi: "Tempe digoreng setengah matang, renyah di luar lembut di dalam.",
        foto: "https://i.imgur.com/8z3L5kL.jpg",
        parkir: "Tersedia",
        rute: "Pasar Sokaraja",
        lat: -7.4200,
        lng: 109.2300,
        keliling: true
      }
    ];

    // Initialize map
    const map = L.map('map').setView([-7.4212, 109.2422], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let markers = [];

    function renderMap() {
      markers.forEach(m => map.removeLayer(m));
      markers = [];
      kulinerData.forEach((item, index) => {
        const icon = item.keliling ? '🛺' : '🏠';
        const marker = L.marker([item.lat, item.lng], {
          icon: L.divIcon({ 
            html: `<div style="font-size:20px;">${icon}</div>`, 
            className: 'marker-icon', 
            iconSize: [30, 30] 
          })
        }).addTo(map)
          .bindPopup(`<b>${item.nama}</b><br>${item.kategori}`)
          .on('click', () => showDetail(index));
        markers.push(marker);
      });
    }

    function renderList(search = "", category = "") {
      const list = document.getElementById("list");
      list.innerHTML = "";
      const filteredData = kulinerData.filter(d =>
        d.nama.toLowerCase().includes(search.toLowerCase()) &&
        (category === "" || d.kategori === category)
      );
      
      if (filteredData.length === 0) {
        list.innerHTML = "<p style='text-align:center;'>Tidak ada hasil ditemukan</p>";
        return;
      }
      
      filteredData.forEach((d, i) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
          <h3>${d.nama}</h3>
          <p>${d.kategori}</p>
          <small>${d.alamat}</small>
          <small>• ${d.jam} • ${d.harga}</small>
        `;
        div.onclick = () => showDetail(kulinerData.indexOf(d));
        list.appendChild(div);
      });
    }

    function showDetail(index) {
      const item = kulinerData[index];
      const content = `
        <h3>${item.nama}</h3>
        <p><strong>Kategori:</strong> ${item.kategori}</p>
        <p><strong>Alamat:</strong> ${item.alamat}</p>
        <p><strong>Jam Operasional:</strong> ${item.jam}</p>
        <p><strong>Harga:</strong> ${item.harga}</p>
        <p><strong>Deskripsi:</strong> ${item.deskripsi}</p>
        <p><strong>Parkir:</strong> ${item.parkir}</p>
        <p><strong>Rute:</strong> ${item.rute}</p>
        <p><strong>Tipe:</strong> ${item.keliling ? 'Pedagang Keliling' : 'Warung/Toko Tetap'}</p>
        <img src="${item.foto}" alt="${item.nama}">
      `;
      document.getElementById("detailContent").innerHTML = content;
      document.getElementById("detailPopup").style.display = "block";
      map.setView([item.lat, item.lng], 15);
    }

    function closeDetail() {
      document.getElementById("detailPopup").style.display = "none";
    }

    // Tambah Kuliner
    function openAddForm() {
      document.getElementById('addKulinerModal').style.display = 'block';
    }

    function closeAddForm() {
      document.getElementById('addKulinerModal').style.display = 'none';
      document.getElementById('addKulinerForm').reset();
    }

    document.getElementById('addKulinerForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const newKuliner = {
        nama: document.getElementById('addNama').value,
        kategori: document.getElementById('addKategori').value,
        alamat: document.getElementById('addAlamat').value,
        jam: document.getElementById('addJam').value || '08:00 - 17:00',
        harga: document.getElementById('addHarga').value || 'Rp 5.000 - 10.000',
        deskripsi: document.getElementById('addDeskripsi').value || 'Kuliner khas Purwokerto',
        foto: document.getElementById('addFoto').value || 'https://i.imgur.com/8z3L5kL.jpg',
        parkir: document.getElementById('addParkir').value,
        rute: document.getElementById('addRute').value || document.getElementById('addAlamat').value,
        lat: parseFloat(document.getElementById('addLat').value),
        lng: parseFloat(document.getElementById('addLng').value),
        keliling: document.getElementById('addKeliling').value === 'true'
      };

      if (isNaN(newKuliner.lat) || isNaN(newKuliner.lng)) {
        alert('Latitude dan Longitude harus berupa angka!');
        return;
      }

      kulinerData.push(newKuliner);
      renderMap();
      renderList();
      closeAddForm();
      alert(`✅ Lokasi "${newKuliner.nama}" berhasil ditambahkan!`);
    });

    // Chatbot
    function toggleChat() {
      const chat = document.getElementById("chatPopup");
      chat.style.display = chat.style.display === "flex" ? "none" : "flex";
      if (chat.style.display === "flex") {
        document.getElementById("chatInput").focus();
      }
    }

    function sendChat() {
      const input = document.getElementById("chatInput").value.trim();
      const chatMessages = document.getElementById("chatMessages");
      if (!input) return;

      const now = new Date();
      const timeString = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');

      // User message
      chatMessages.innerHTML += `
        <div class="message message-user">
          ${input}
          <div class="message-time">${timeString}</div>
        </div>
      `;
      document.getElementById("chatInput").value = "";

      // Show typing
      const typing = document.createElement('div');
      typing.className = 'message message-bot typing-indicator';
      typing.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
      chatMessages.appendChild(typing);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Generate response
      setTimeout(() => {
        chatMessages.removeChild(typing);
        const reply = generateResponse(input);
        chatMessages.innerHTML += `
          <div class="message message-bot">
            ${reply}
            <div class="message-time">${timeString}</div>
          </div>
        `;
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
    }

    function generateResponse(input) {
      const text = input.toLowerCase();
      if (text.includes('rekomendasi') || text.includes('sarankan')) {
        const random = kulinerData[Math.floor(Math.random() * kulinerData.length)];
        return `🍽️ Rekomendasi aku: <b>${random.nama}</b> (${random.kategori}) di ${random.alamat}. Harga ${random.harga}`;
      } else if (text.includes('soto')) {
        return "🍜 Soto Sokaraja di Jl. Sokaraja, buka 07:00-15:00, harga Rp 12.000-20.000. Kuah sapi + kacang!";
      } else if (text.includes('mendoan')) {
        return "🥢 Tempe Mendoan di Pasar Sokaraja, hanya Rp 2.000-5.000. Goreng setengah matang, renyah!";
      } else if (text.includes('lapar')) {
        return "🍛 Kak lapar? Coba Soto Sokaraja atau Tempe Mendoan. Keduanya mengenyangkan!";
      } else if (text.includes('haus')) {
        return "🥤 Kak haus? Di Purwokerto ada Es Dawet Ayu segar hanya Rp 5.000!";
      } else {
        return "🤗 Aku bisa bantu cari kuliner berdasarkan nama, kategori, atau mood Kak! Coba tanya 'rekomendasi dong'";
      }
    }
    
    const API_KEY = '360cd1393e0f16a61618fd4e441a39b8';
    const PURWOKERTO_LAT = -7.4212;
    const PURWOKERTO_LON = 109.2422;

    const weatherIcons = {
        '01d': 'fas fa-sun', '01n': 'fas fa-moon', '02d': 'fas fa-cloud-sun', '02n': 'fas fa-cloud-moon',
        '03d': 'fas fa-cloud', '03n': 'fas fa-cloud', '04d': 'fas fa-cloud', '04n': 'fas fa-cloud',
        '09d': 'fas fa-cloud-rain', '09n': 'fas fa-cloud-rain', '10d': 'fas fa-cloud-sun-rain',
        '10n': 'fas fa-cloud-moon-rain', '11d': 'fas fa-bolt', '11n': 'fas fa-bolt',
        '13d': 'fas fa-snowflake', '13n': 'fas fa-snowflake', '50d': 'fas fa-smog', '50n': 'fas fa-smog'
    };

    async function fetchWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${PURWOKERTO_LAT}&lon=${PURWOKERTO_LON}&appid=${API_KEY}&units=metric&lang=id`);
            if (!response.ok) throw new Error('Gagal mengambil data cuaca');
            const data = await response.json();
            updateWeatherUI(data);
        } catch (error) {
            console.error('Error fetching weather:', error);
            document.getElementById('weatherIcon').className = 'fas fa-exclamation-triangle weather-icon';
            document.getElementById('weatherTemp').textContent = 'Error';
        }
    }

    function updateWeatherUI(data) {
        const weather = data.weather[0];
        const main = data.main;
        const wind = data.wind;
        const iconClass = weatherIcons[weather.icon] || 'fas fa-cloud';
        document.getElementById('weatherIcon').className = iconClass + ' weather-icon';
        document.getElementById('weatherTemp').textContent = `${Math.round(main.temp)}°C`;
        document.getElementById('weatherDetailsIcon').className = iconClass + ' weather-details-icon';
        document.getElementById('weatherDetailsTemp').textContent = `${Math.round(main.temp)}°C`;
        document.getElementById('weatherDetailsDesc').textContent = weather.description;
        document.getElementById('weatherMinTemp').textContent = `${Math.round(main.temp_min)}°C`;
        document.getElementById('weatherMaxTemp').textContent = `${Math.round(main.temp_max)}°C`;
        document.getElementById('weatherHumidity').textContent = main.humidity;
        document.getElementById('weatherWind').textContent = wind.speed;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('weatherDate').textContent = new Date().toLocaleDateString('id-ID', options);
    }

    window.toggleWeatherDetails = function() {
        document.getElementById('weatherDetails').classList.toggle('show');
    }
    
    function showWeatherRec() {
      const weatherDesc = document.getElementById('weatherDetailsDesc').textContent;
      const currentTemp = parseInt(document.getElementById('weatherTemp').textContent);
      
      let recommendations = [];
      if (weatherDesc.toLowerCase().includes('hujan') || currentTemp < 24) {
        recommendations = kulinerData.filter(k => k.kategori === 'Soto' || k.kategori === 'Minuman');
      } else {
        recommendations = kulinerData.filter(k => k.kategori === 'Gorengan' || k.kategori === 'Minuman');
      }
      
      const randomRecs = recommendations.sort(() => 0.5 - Math.random()).slice(0, 3);
      
      let message = `Cuaca saat ini ${weatherDesc} (${currentTemp}°C). Mungkin Anda tertarik dengan:\n\n`;
      randomRecs.forEach(r => {
        message += `- ${r.nama} (${r.harga})\n`;
      });
      
      alert(message);
    }


    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      renderMap();
      renderList();
      fetchWeather();

      document.getElementById("search").addEventListener("input", (e) => {
        const search = e.target.value;
        const category = document.getElementById("filter").value;
        renderList(search, category);
      });

      document.getElementById("filter").addEventListener("change", (e) => {
        const search = document.getElementById("search").value;
        const category = e.target.value;
        renderList(search, category);
      });

      document.getElementById("chatInput").addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendChat();
      });
    });
