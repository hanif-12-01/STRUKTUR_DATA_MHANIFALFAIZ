# <h1 align="center">Laporan Praktikum Modul 3 - ADT (Abstract Data Type)</h1>
<p align="center">M. Hanif Al Faiz - 103112400042</p>

## Dasar Teori

### I. KONSEP MODUL DAN BAHAN AJAR

#### A. Definisi dan Fungsi Modul
Modul merupakan salah satu bahan ajar instruksional yang dapat dibuat untuk mendorong kemandirian belajar dan mengurangi kebosanan siswa [8]. Modul adalah kumpulan materi instruksional terprogram yang terintegrasi, metodis, dan mendalam [2].

Modul memiliki tujuan tertentu [2]. Modul adalah bahan ajar yang disusun secara lengkap dan metodis, memberikan pilihan sumber belajar yang direncanakan, dan dibuat untuk membantu siswa menguasai tujuan pembelajaran yang spesifik [2]. Dalam konteks pembelajaran, modul berfungsi sebagai alat untuk memfasilitasi kegiatan belajar mandiri, yang dapat digunakan kapan saja dan di mana saja untuk meningkatkan kompetensi [2].

Kelebihan pembelajaran menggunakan modul meliputi [5]:
1. Dapat memberikan umpan balik, sehingga pelajar mengetahui kekurangannya dan dapat segera melakukan perbaikan [5].
2. Menetapkan tujuan pembelajaran yang jelas, membuat kinerja siswa terarah [5].
3. Bersifat fleksibel, karena materi dapat dipelajari dengan cara dan kecepatan yang berbeda [5].
4. Memberikan kesempatan yang cukup bagi siswa untuk menemukan kelemahan sendiri melalui evaluasi (remedi) [5].

#### B. Karakteristik Modul yang Efektif
Buku ajar (modul) dapat dikatakan baik jika memiliki karakteristik tertentu [6]:
1. **Self-Instructional**: Pengguna dapat belajar secara mandiri tanpa bergantung pada sumber luar [6].
2. **Self-Contained**: Modul mencakup kompetensi dan sub kompetensi dalam satu kesatuan yang mudah dipelajari [6].
3. **Adaptif**: Modul dapat berubah sesuai dengan kemajuan teknologi agar dapat digunakan dalam jangka waktu lama [6].
4. **User Friendly**: Bahasa yang digunakan harus mudah dimengerti oleh pengguna [6].

#### C. Pengembangan E-Modul (Modul Digital)
Pengembangan e-modul menjadi solusi yang tepat dalam pembelajaran kimia untuk menjembatani tantangan dalam memahami konsep abstrak [1]. E-modul merupakan bahan ajar dalam bentuk digital yang dapat memuat unit-unit konsep materi dengan kelebihan mudah diakses di mana pun [3]. E-modul dapat mencantumkan video, gambar, dan audio yang dapat meningkatkan kemampuan siswa untuk memahami pelajaran [3]. Dalam konteks teknologi, e-modul dapat dibuat menggunakan aplikasi seperti Flip PDF Professional [3].

Dalam penelitian, e-modul yang dikembangkan terbukti memiliki kelayakan yang tinggi:
- Tingkat kevalidan media e-modul rata-rata sebesar 90,21% dengan kategori Sangat Valid [4].
- Respon siswa terhadap e-modul mencapai rata-rata 95,18% dengan kategori Sangat Setuju (Sangat Valid), menunjukkan e-modul diterima dengan baik oleh siswa [4].

Penggunaan modul digital dalam pembelajaran mandiri ditemukan lebih efektif terhadap hasil belajar siswa dibandingkan modul cetak [7]. Modul digital dapat meningkatkan minat baca siswa karena tampilannya lebih menarik dan dilengkapi fitur seperti video dan animasi [7].


## Guided 

### 1. Guided gabungan

```C++
#include <iostream>
#include <cstdlib>

using namespace std;

// Definisi struct mahasiswa (dari guided1.cpp)
struct mahasiswa {
    char nim[10];
    int nilai1, nilai2;
};

// Deklarasi fungsi
void inputMhs(mahasiswa &m);
float rata2(mahasiswa m);

// Implementasi fungsi (dari guided2.cpp)
void inputMhs(mahasiswa &m) {
    cout << "Input NIM: "; 
    cin >> m.nim;
    cout << "Input Nilai 1: "; 
    cin >> m.nilai1;
    cout << "Input Nilai 2: "; 
    cin >> m.nilai2;
}

float rata2(mahasiswa m) {
    return (float) (m.nilai1 + m.nilai2) / 2;
}

// Fungsi main (dari main.cpp)
int main() {
    mahasiswa mhs;
    inputMhs(mhs);
    cout << "nilai rata Rata-rata adalah : " << rata2(mhs) << endl;
    system("pause");    
    return 0;
}
```

#### Penjelasan:
Program ini mendemonstrasikan penggunaan Abstract Data Type (ADT) dengan struct mahasiswa. Program terdiri dari beberapa bagian:

1. **Definisi Struct**: Mendefinisikan struct `mahasiswa` dengan field NIM (char array), nilai1, dan nilai2.

2. **Fungsi inputMhs()**: Fungsi ini menerima parameter reference dari struct mahasiswa untuk menginput data NIM dan dua nilai mahasiswa.

3. **Fungsi rata2()**: Fungsi ini menghitung dan mengembalikan nilai rata-rata dari dua nilai mahasiswa dengan rumus (nilai1 + nilai2) / 2.

4. **Fungsi main()**: Program utama yang membuat objek mahasiswa, memanggil fungsi inputMhs untuk input data, kemudian menampilkan hasil perhitungan rata-rata menggunakan fungsi rata2.

Program ini adalah gabungan dari tiga file (guided1.cpp sebagai header, guided2.cpp sebagai implementasi fungsi, dan main.cpp sebagai program utama) yang digabungkan menjadi satu file lengkap.


## Unguided 

### 1. Unguided 1 dan 2

```C++
#include <iostream>
#include <string>
using namespace std;

struct DataMahasiswa {
    string nama,nim,mataKuliah,kodeMK;
    float uts, uas, tugas;
    float nilaiAkhir;
    
};


float hitungNilaiAkhir(float uts, float uas, float tugas) {
    return (0.3 * uts) + (0.4 * uas) + (0.3 * tugas);
}

int main() {
    DataMahasiswa mahasiswa[10];
    int jumlah;
    
    cout << "Masukkan jumlah mahasiswa (max. 10): ";
    cin >> jumlah;
    
    if (jumlah > 10 || jumlah < 1) {
        cout << "Jumlah mahasiswa harus antara 1-10!" << endl;
        return 1;
    }
    
    // Input data mahasiswa
    for (int i = 0; i < jumlah; i++) {
        cout << "\nData Mahasiswa ke-" << (i + 1) << endl;
        cout << "Masukkan Nama: ";
        cin >> mahasiswa[i].nama;
        cout << "Masukkan NIM: ";
        cin >> mahasiswa[i].nim;
        cout << "Masukkan Nilai UTS: ";
        cin >> mahasiswa[i].uts;
        cout << "Masukkan Nilai UAS: ";
        cin >> mahasiswa[i].uas;
        cout << "Masukkan Nilai Tugas: ";
        cin >> mahasiswa[i].tugas;
        cout << "Masukkan Mata Kuliah: ";
        cin >> mahasiswa[i].mataKuliah;
        cout << "Masukkan Kode MK: ";
        cin >> mahasiswa[i].kodeMK;
        // Hitung nilai akhir
        mahasiswa[i].nilaiAkhir = hitungNilaiAkhir(mahasiswa[i].uts, mahasiswa[i].uas, mahasiswa[i].tugas);
    }
    
    // Tampilkan data mahasiswa
    cout << "\n=== Data Mahasiswa ===" << endl;
    for (int i = 0; i < jumlah; i++) {
        cout << "\nMahasiswa ke-" << (i + 1) << endl;
        cout << "Nama: " << mahasiswa[i].nama << endl;
        cout << "NIM: " << mahasiswa[i].nim << endl;
        cout << "UTS: " << mahasiswa[i].uts << endl;
        cout << "UAS: " << mahasiswa[i].uas << endl;
        cout << "Tugas: " << mahasiswa[i].tugas << endl;
        cout << "Nilai Akhir: " << mahasiswa[i].nilaiAkhir << endl;
        cout << "Mata Kuliah: " << mahasiswa[i].mataKuliah << endl;
        cout << "Kode MK: " << mahasiswa[i].kodeMK << endl;
    }
    
    return 0;
}
```
### Output Unguided 1 :

![Screenshot Output Unguided 1](output1.jpg)

#### Penjelasan:
Program ini merupakan implementasi ADT (Abstract Data Type) untuk sistem pengelolaan data mahasiswa dengan array. Berikut adalah penjelasan detail dari program:

1. **Definisi Struct DataMahasiswa**: 
   - Struct ini mendefinisikan tipe data abstrak untuk mahasiswa dengan field: nama, nim, mataKuliah, kodeMK (semuanya bertipe string), serta uts, uas, tugas, dan nilaiAkhir (bertipe float).
   - Penggunaan tipe `string` untuk NIM memungkinkan input angka yang sangat panjang tanpa overflow.

2. **Fungsi hitungNilaiAkhir()**:
   - Fungsi ini menghitung nilai akhir mahasiswa dengan bobot: 30% UTS + 40% UAS + 30% Tugas
   - Mengembalikan nilai float sebagai hasil perhitungan

3. **Array Mahasiswa**:
   - Program menggunakan array dengan kapasitas maksimal 10 mahasiswa
   - Validasi input memastikan jumlah mahasiswa berada dalam rentang 1-10

4. **Proses Input**:
   - Menggunakan perulangan for untuk input data setiap mahasiswa
   - Setiap mahasiswa menginput: nama, NIM, nilai UTS, UAS, Tugas, Mata Kuliah, dan Kode MK
   - Nilai akhir dihitung otomatis menggunakan fungsi hitungNilaiAkhir()

5. **Proses Output**:
   - Program menampilkan semua data mahasiswa yang telah diinput
   - Termasuk nilai akhir yang telah dihitung untuk setiap mahasiswa

Program ini mendemonstrasikan konsep ADT dengan baik melalui enkapsulasi data mahasiswa dalam struct dan penggunaan fungsi untuk operasi perhitungan. 

### 2. 

```C++
#include <iostream>

using namespace std;

void tampilkanMatriks(int matriks[3][3]);
void tukarNilaiViaPointer(int *ptrA, int *ptrB);

int main() {
   
    int matriksA[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    int matriksB[3][3] = {
        {99, 88, 77},
        {66, 55, 44},
        {33, 22, 11}
    };
    
    
    int *pointerA;
    int *pointerB;
    
    
    cout << "--- KONDISI AWAL ---" << endl;
    cout << "Matriks A:" << endl;
    tampilkanMatriks(matriksA);
    cout << "\nMatriks B:" << endl;
    tampilkanMatriks(matriksB);
    
   
    int baris, kolom;
    cout << "\nMasukkan posisi yang akan ditukar:" << endl;
    cout << "Baris (0-2): ";
    cin >> baris;
    cout << "Kolom (0-2): ";
    cin >> kolom;

    
    if (baris < 0 || baris > 2 || kolom < 0 || kolom > 2) {
        cout << "Posisi tidak valid! Program berhenti." << endl;
        return 1; 
    }
    
    
    pointerA = &matriksA[baris][kolom];
    pointerB = &matriksB[baris][kolom];
    
    cout << "\nMenukar nilai pada posisi [" << baris << "][" << kolom << "]..." << endl;
    cout << "Nilai awal: Matriks A = " << *pointerA << ", Matriks B = " << *pointerB << endl;
    
  
    tukarNilaiViaPointer(pointerA, pointerB);
    
  
    cout << "\n--- KONDISI AKHIR ---" << endl;
    cout << "Matriks A:" << endl;
    tampilkanMatriks(matriksA);
    cout << "\nMatriks B:" << endl;
    tampilkanMatriks(matriksB);
    
    return 0;
}


void tampilkanMatriks(int matriks[3][3]) {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matriks[i][j] << "\t";
        }
        cout << endl;
    }
}


void tukarNilaiViaPointer(int *ptrA, int *ptrB) {

    int temp = *ptrA;
    *ptrA = *ptrB;
    *ptrB = temp;
}
```
### Output Unguided 2 :

![Screenshot Output Unguided 2](output2.jpg)


#### Penjelasan:
Program ini mendemonstrasikan penggunaan pointer untuk menukar nilai antara dua matriks. Berikut adalah penjelasan detail dari program:

1. **Deklarasi Matriks**:
   - Matriks A berisi nilai 1-9 (3x3)
   - Matriks B berisi nilai 99, 88, 77, 66, 55, 44, 33, 22, 11 (3x3)
   - Kedua matriks diinisialisasi dengan nilai awal yang berbeda

2. **Pointer untuk Matriks**:
   - Program mendeklarasikan dua pointer integer (`pointerA` dan `pointerB`)
   - Pointer ini akan menunjuk ke elemen tertentu dalam matriks yang akan ditukar

3. **Fungsi tampilkanMatriks()**:
   - Menerima parameter array 2 dimensi (matriks 3x3)
   - Menggunakan nested loop untuk menampilkan setiap elemen matriks dengan format tab
   - Memudahkan visualisasi isi matriks

4. **Input Posisi dan Validasi**:
   - User diminta input posisi baris dan kolom (0-2)
   - Validasi memastikan posisi yang diinput berada dalam rentang yang valid
   - Jika posisi tidak valid, program akan berhenti dengan return value 1

5. **Fungsi tukarNilaiViaPointer()**:
   - Menerima dua parameter pointer (`ptrA` dan `ptrB`)
   - Menggunakan variabel temporary untuk menyimpan nilai sementara
   - Menukar nilai yang ditunjuk oleh kedua pointer menggunakan dereferencing operator (*)
   - Proses: temp = *ptrA → *ptrA = *ptrB → *ptrB = temp

6. **Alur Program**:
   - Menampilkan kondisi awal kedua matriks
   - Meminta input posisi yang akan ditukar
   - Pointer diarahkan ke alamat elemen pada posisi tersebut
   - Memanggil fungsi tukarNilaiViaPointer() untuk menukar nilai
   - Menampilkan kondisi akhir setelah pertukaran

Program ini mendemonstrasikan konsep penting dalam C++ yaitu penggunaan pointer untuk manipulasi data secara langsung melalui alamat memori, serta penggunaan pass by reference untuk mengubah nilai asli dari variabel.

## Kesimpulan

Praktikum Modul 3 tentang Abstract Data Type (ADT) memberikan pemahaman mendalam tentang konsep enkapsulasi data dalam pemrograman C++. Melalui praktikum ini, dapat disimpulkan bahwa:

1. **Struct sebagai ADT**: Struct merupakan implementasi dasar dari ADT yang memungkinkan pengelompokan berbagai tipe data menjadi satu kesatuan, seperti dalam pembuatan struct mahasiswa dengan berbagai atribut (nama, NIM, nilai, dll).

2. **Fungsi untuk Operasi Data**: Penggunaan fungsi terpisah untuk operasi data (seperti `inputMhs()`, `rata2()`, `hitungNilaiAkhir()`) menunjukkan prinsip modularitas dan abstraksi dalam pemrograman, memudahkan pemeliharaan dan pengembangan kode.

3. **Array dan Pointer**: Implementasi array untuk menyimpan multiple data mahasiswa dan penggunaan pointer untuk manipulasi data matriks mendemonstrasikan fleksibilitas C++ dalam pengelolaan memori dan data.

4. **Validasi Data**: Pentingnya validasi input (seperti batasan jumlah mahasiswa dan posisi matriks) untuk memastikan program berjalan dengan benar dan terhindar dari error.

Dengan memahami konsep ADT, programmer dapat membuat kode yang lebih terstruktur, mudah dipahami, dan dapat digunakan kembali (reusable) untuk berbagai keperluan.

## Referensi
[1] Aisyah, A. H., & Budimarwanti, C. (2025). Analisis Kebutuhan Guru Kimia Terhadap E-Modul Berbasis Multiple Representation Pada Materi Perkembangan Struktur Atom. JURNAL RISET PEMBELAJARAN KIMIA, 10(2), 10–18.

[2] Angraini, F. (2024). Pengembangan Modul Pembelajaran Bahasa Indonesia Berbasis Literasi Digital Di Era 5.0. UNISAN JURNAL: JURNAL MANAJEMEN DAN PENDIDIKAN, 03(10), 76–84.

[3] Farhana, F., Sumbawati, M. S., Sulistiyo, E., & Anifah, L. (2022). Pengembangan E-Modul Bagi Siswa Kelas XI Jurusan TEI Pada Mata Pelajaran Penerapan Rangkaian Elektronika Di SMKN 1 Jabon. Jurnal Pendidikan Teknik Elektro, 11(01), 137–144.

[4] Ferdiani, R. D., & Harianto, W. (2024). Uji Validitas Dan Reliabilitas Instrumen E – Modul Berbasis Microlearning Dengan Strategi Project Based Learning Untuk Meningkatkan Kemampuan Berpikir Kreatif Siswa Penyandang Tuna Rungu. Jurnal Terapan Sains & Teknologi, 6(1), 1–6.

[5] Lasmiyati, L., & Harta, I. (2014). Pengembangan Modul Pembelajaran untuk Meningkatkan Pemahaman Konsep dan Minat SMP. PYTHAGORAS: Jurnal Pendidikan Matematika, 9(2), 161–174.

[6] Mangesa, R. T., Ashadi, N. R., Syafri, M. S., & Tandirerung, V. A. (2024). Pengembangan Modul Pembelajaran Berbasis Project Based Learning pada Mata Pelajaran Dasar Produktif Kejuruan di SMK Negeri 2 Makassar. Jurnal MediaTIK, 7(2), 11–14.

[7] Muhimatunnafingah, S., Herimanto, H., & Musadad, A. A. (2018). Efektivitas Model Pembelajaran Mandiri Menggunakan Modul Digital dan Modul Cetak Terhadap Hasil Belajar Sejarah Ditinjau dari Minat Baca Siswa. Jurnal Candi, 18(2), 29–43.

[8] Nengsi, A. R., & Sartika, D. (2022). Pelatihan Soft Skill Komunikasi untuk Meningkatkan Peluang Kerja Mahasiswa sebagai Calon Tenaga Kerja Baru. Ibrah: Jurnal Pengabdian kepada Masyarakat, 1(2), 65–76.

[9] Safitri, N., & Adinugraha, H. H. (2022). Pengaruh Efektivitas Penggunaan Modul dan Motivasi Belajar Terhadap Hasil Belajar Mahasiswa Akuntansi Syariah Di UIN K.H. Abdurrahman Wahid Pekalongan. Tazkiya: Jurnal Pendidikan Islam, XI(2).

[10] Triase. (2020). Diktat Edisi Revisi : STRUKTUR DATA. Medan: UNIVERSTAS ISLAM NEGERI SUMATERA UTARA MEDAN.

[11] Indahyati, Uce., Rahmawati Yunianita. (2020). "BUKU AJAR ALGORITMA DAN PEMROGRAMAN DALAM BAHASA C++". Sidoarjo: Umsida Press. Diakses pada 10 Maret 2024 melalui https://doi.org/10.21070/2020/978-623-6833-67-4.
