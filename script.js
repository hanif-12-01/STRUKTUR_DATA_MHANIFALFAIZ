document.addEventListener('DOMContentLoaded', () => {
  const SHEET_URL = 'https://opensheet.elk.sh/1s1WgKAsoPLYvdoTKP0wGcenlcnGJQQv4ggY4JmZEUHE/Sheet1';
  let kulinerData = [];
  let markers = [];

  const map = L.map('map').setView([-7.4212, 109.2422], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

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

  function renderMap() {
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    kulinerData.forEach((item, index) => {
      const icon = item.keliling && item.keliling.toLowerCase() === 'true' ? '🛺' : '🏠';
      const lat = parseFloat(item.lat);
      const lng = parseFloat(item.lng);
      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = L.marker([lat, lng], {
          icon: L.divIcon({ html: `<div style="font-size:20px;">${icon}</div>`, className: 'marker-icon', iconSize: [30, 30] })
        }).addTo(map).bindPopup(`<b>${item.nama}</b><br>${item.kategori}`).on('click', () => showDetail(index));
        markers.push(marker);
      }
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
      div.innerHTML = `<h3>${d.nama}</h3><p>${d.kategori}</p><small>${d.alamat}</small><small>• ${d.jam} • ${d.harga}</small>`;
      div.onclick = () => showDetail(i);
      list.appendChild(div);
    });
  }

  window.showDetail = function(index) {
    const item = kulinerData[index];
    document.getElementById("detailContent").innerHTML = `
      <h3>${item.nama}</h3>
      <p><strong>Kategori:</strong> ${item.kategori}</p>
      <p><strong>Alamat:</strong> ${item.alamat}</p>
      <p><strong>Jam:</strong> ${item.jam}</p>
      <p><strong>Harga:</strong> ${item.harga}</p>
      <p><strong>Deskripsi:</strong> ${item.deskripsi}</p>
      <p><strong>Parkir:</strong> ${item.parkir}</p>
      <p><strong>Rute:</strong> ${item.rute}</p>
      <img src="${item.foto}" alt="${item.nama}">
    `;
    document.getElementById("detailPopup").style.display = "block";
    const lat = parseFloat(item.lat);
    const lng = parseFloat(item.lng);
    if (!isNaN(lat) && !isNaN(lng)) {
        map.setView([lat, lng], 15);
    }
  }

  window.closeDetail = function() {
    document.getElementById("detailPopup").style.display = "none";
  }

  window.toggleChat = function() {
    const chat = document.getElementById("chatPopup");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
    if (chat.style.display === "flex") {
        document.getElementById("chatInput").focus();
    }
  }

  function scrollChatToBottom() {
    const chatMessages = document.getElementById("chatMessages");
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  window.sendChat = async function() {
    const input = document.getElementById("chatInput").value.trim();
    const chatMessages = document.getElementById("chatMessages");

    if (!input) return;

    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    chatMessages.innerHTML += `
      <div class="message message-user">
        ${input}
        <div class="message-time">${timeString}</div>
      </div>
    `;
    document.getElementById("chatInput").value = "";
    scrollChatToBottom();

    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message message-bot typing-indicator';
    typingIndicator.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    chatMessages.appendChild(typingIndicator);
    scrollChatToBottom();

    try {
      const reply = await getAIResponse(input);
      chatMessages.removeChild(typingIndicator);
      chatMessages.innerHTML += `
        <div class="message message-bot">
          ${reply}
          <div class="message-time">${timeString}</div>
        </div>
      `;
      scrollChatToBottom();
    } catch (error) {
      chatMessages.removeChild(typingIndicator);
      chatMessages.innerHTML += `
        <div class="message message-bot">
          ${fallbackResponse(input)}
          <div class="message-time">${timeString}</div>
        </div>
      `;
      scrollChatToBottom();
    }
  }

  async function getAIResponse(userInput) {
    const API_KEY = 'YOUR_GEMINI_API_KEY'; // Ganti dengan kunci API Gemini Anda
    const weatherTemp = document.getElementById('weatherTemp')?.textContent || '25°C';
    const weatherDesc = document.getElementById('weatherDetailsDesc')?.textContent || 'Cerah';

    const context = `
    # IDENTITAS & TUJUAN UTAMA
    Anda adalah MakanBot, asisten AI kuliner yang sangat ramah dan berpengetahuan luas tentang makanan khas Purwokerto. Gaya bahasa Anda santai, informatif, dan selalu membantu. Anda harus selalu menggunakan informasi dari basis data di bawah ini untuk menjawab pertanyaan.

    # KONTEKS SAAT INI
    - Lokasi: Purwokerto
    - Cuaca: ${weatherDesc}, suhu ${weatherTemp}

    # BASIS DATA KULINER PURWOKERTO
    ${JSON.stringify(kulinerData, null, 2)}

    # ATURAN PERILAKU
    1.  Selalu sapa pengguna dengan ramah.
    2.  Gunakan informasi dari KONTEKS CUACA untuk memberi rekomendasi yang relevan.
    3.  Jika cuaca panas, prioritaskan rekomendasi minuman atau jajanan dingin.
    4.  Jika cuaca hujan atau dingin, prioritaskan rekomendasi makanan hangat.
    5.  Jika pengguna bertanya pada malam hari, prioritaskan rekomendasi yang buka malam.
    6.  Selalu berikan detail singkat (deskripsi, harga, lokasi) dari basis data saat merekomendasikan.

    # TUGAS SAAT INI
    Jawab pertanyaan pengguna berdasarkan semua informasi dan aturan di atas.

    Pengguna: "${userInput}"
    MakanBot:
    `;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: context }] }],
          generationConfig: { temperature: 0.7, topK: 40, topP: 0.95, maxOutputTokens: 800 }
        })
      });
      const data = await response.json();
      return data?.candidates?.[0]?.content?.parts?.[0]?.text || fallbackResponse(userInput);
    } catch (error) {
      console.error("AI API Error:", error);
      return fallbackResponse(userInput);
    }
  }

  function fallbackResponse(input) {
      const lower = input.toLowerCase();
      if (lower.includes("rekomendasi") || lower.includes("apa enak")) {
        const r = kulinerData[Math.floor(Math.random() * kulinerData.length)];
        return `Saya merekomendasikan <b>${r.nama}</b> (${r.kategori}) di ${r.alamat}. Buka jam ${r.jam}, harga ${r.harga}.`;
      }
      if (lower.includes("soto") || lower.includes("sroto")) return "Soto Sokaraja di Jl. Sokaraja, kuah kacang khas Banyumas, buka 07:00–15:00.";
      if (lower.includes("mendo") || lower.includes("tempe goreng")) return "Tempe Mendoan di Pasar Sokaraja, goreng setengah matang, hanya Rp 2.000–5.000.";
      if (lower.includes("getuk")) return "Getuk Goreng di Jl. Sudirman, singkong goreng isi gula aren, harga Rp 5.000–10.000.";
      if (lower.includes("kraca") || lower.includes("keong")) return "Kraca dijual malam di Pasar Malam Purwokerto, keong sawah masak pedas, Rp 8.000–12.000.";
      if (lower.includes("brontak") || lower.includes("tahu isi")) return "Tahu Brontak di Pasar Sokaraja, tahu isi sayur keluar saat digoreng, Rp 3.000–6.000.";
      if (lower.includes("dawet") || lower.includes("es dawet")) return "Dawet Ayu di Pasar Wage, minuman segar cendol santan gula jawa, Rp 5.000–8.000.";
      if (lower.includes("empal")) return "Empal Basah di Warung Bu Yati, daging sapi kuah santan pedas, cocok dengan ketupat janur.";
      if (lower.includes("murah")) return "Coba Tempe Mendoan (Rp 2.000–5.000), Tahu Brontak (Rp 3.000–6.000), atau Nopia (Rp 3.000–6.000).";
      if (lower.includes("malam")) return "Kraca dijual malam di Pasar Malam Purwokerto, cocok untuk jajan malam!";
      if (lower.includes("hai") || lower.includes("hello")) return "Halo! Mau cari kuliner apa di Purwokerto hari ini?";
      return "Maaf, aku belum paham. Coba tanya: 'Makanan murah apa?' atau 'Rekomendasi untuk cuaca hujan?'";
  }

  async function init() {
    try {
      const response = await fetch(SHEET_URL);
      if (!response.ok) throw new Error('Gagal memuat data kuliner');
      kulinerData = await response.json();
      renderMap();
      renderList();
    } catch (error) {
      console.error('Error initializing app:', error);
      document.getElementById('list').innerHTML = "<p style='text-align:center; color:red;'>Gagal memuat data. Coba lagi nanti.</p>";
    }
    fetchWeather();
    setInterval(fetchWeather, 30 * 60 * 1000);

    document.getElementById("search").addEventListener("input", (e) => {
      renderList(e.target.value, document.getElementById("filter").value);
    });
    document.getElementById("filter").addEventListener("change", (e) => {
      renderList(document.getElementById("search").value, e.target.value);
    });
  }

  init();
});
