# <h1 align="center">Laporan Praktikum Modul 1 - Codeblocks IDE & Pengenalan Bahas C++ (Bagian Pertama)</h1>
<p align="center">M.HANIF AL FAIZ - 103112400042</p>

## Dasar Teori
Bahasa pemrograman C++ merupakan pengembangan dari bahasa C yang menambahkan konsep pemrograman berorientasi objek, sehingga dapat digunakan secara luas dalam pengembangan perangkat lunak modern di berbagai bidang sains, pendidikan, dan industri [1]. Konsep dasar C++ seperti struktur program, variabel, tipe data, operator aritmetika maupun logika masih mengacu pada fondasi bahasa C, namun diperluas dengan fitur encapsulation, inheritance, dan polymorphism yang membuat C++ sangat relevan untuk membangun aplikasi berskala besar [2]. Studi dalam pembelajaran pemrograman di lingkungan perguruan tinggi menunjukkan bahwa penguasaan struktur dasar sintaks dan implementasi algoritma dengan bahasa C++ mampu meningkatkan logika analitis dan pemecahan masalah mahasiswa [3].

Dalam praktik pengembangan, penggunaan Integrated Development Environment (IDE) seperti CodeBlocks sangat penting untuk membantu proses penulisan, debugging, dan pengujian program secara efisien [4]. IDE ini menyediakan berbagai tools seperti editor, manajemen proyek, serta integrasi compiler yang memudahkan mahasiswa dalam memahami serta mengimplementasikan fitur-fitur bahasa C++ [5]. Penelitian lain menunjukkan bahwa penggunaan CodeBlocks dalam praktik pembelajaran pemrograman turut meningkatkan motivasi belajar, serta mempercepat pencapaian kompetensi dasar dalam membangun aplikasi komputer [6].



## Guided 

### 1. 

```C++
#include<iostream>
using namespace std;

int main() {
    int angka;
    cout << "Masukkan angka pertama: ";
    cin >> angka;
    cout << "Masukkan yang dimaskukan adalah " << angka << endl;
    return 0;
}
```
Program tersebut menjalankan sebuah inputan integer atau bilangan bulat dan ouputnya adalah bilangan yang telah kita inputkan tadi

### 2. 

```C++
#include<iostream>
using namespace std;

int main() {
    int angka1, angka2;
    cout << "Masukkan angka pertama: ";
    cin >> angka1;
    cout << "Masukkan angka kedua: ";
    cin >> angka2;

    cout << "penjumlahan: " << angka1 + angka2 << endl;
    cout << "pengurangan: " << angka1 - angka2 << endl;
    cout << "perkalian: " << angka1 * angka2 << endl;
    cout << "pembagian: " << angka1 / angka2 << endl;
    cout << "modulus: " << angka1 % angka2 << endl;

    return 0;
}
```
Program tersebut menjalankan sebuah perhitungan sederhana yang meliputi penjumlahan,pengurangan,perkalian,pembagian dan hasil dari perhitungan tersebut didapatkan dari dua angka yang kita inputkan.

### 3. 

```C++
#include<iostream>
using namespace std;

int main() {
    int angka1, angka2;
    cout << "Masukkan angka pertama: ";
    cin >> angka1;
    cout << "Masukkan angka kedua: ";
    cin >> angka2;

    if (angka1 > angka2 ) {
        cout << angka1 << " kurang dari " << angka2 << endl;
    } else {
        cout << angka1 << " lebih dari " << angka2 << endl;
    }

    if (angka1 == angka2) {
        cout << angka1 << " sama dengan " << angka2 << endl;
    } else if (angka1 != angka2) {
        cout << " angka berbeda " << endl;
    }

     int pilihan;
    cout << "MENU" << endl;
    cout << "1. Penjumlahan" << endl;
    cout << "2. Pengurangan" << endl;
    cout << "masukan pilihan: ";
    cin >> pilihan;

    switch (Pilihan){
        case 1:
        cout << "Penjumlahan :" << angka1 + angka2 << endl;
        cout << endl;
        break; 
        case 2:
        cout << "Pengurangan :" << angka1 - angka2 << endl;
        cout << endl;
        break;
        default:
        cout << "Pilihan Salah" << endl;

    }
    return 0;
}
```
Program tersebut berjalan melalui rangkaian pemeriksaan dimulai dari perbandingan lalu recheck apakah angka tersebut sama atau tidak, setelah melalui perbandingan dan check ulang, kita akan mengeksekusi program tersebut dengan penjumlahan atau pengurangan

### 4.
```C++
#include <iostream>
using namespace std;

 int main(){
    int angka1;
    cout << "masukan angka1 : ";
    cin >> angka1;

    for (int i = 0; i  < angka1; i++){
      cout << i << " - ";
    }
    cout << endl;

    int j = 10;
    while (j > angka1){
      cout << j << " - ";
      j--;
    }

    cout << endl;
    int k = 10;
    do {
      cout << k << " - ";
    }while (k < angka1);

     return  0;
    
 }
```
Demonstrasi Tiga Jenis Perulangan (for, while, dan do-while)

### 5. 
```C++
#include<iostream>
using namespace std;

int main(){
    const int MAX = 5;
    struct rapot{
        string nama;
        float nilai;
    };
    rapot siswa[MAX];

    for(int i = 0; i < MAX; i++){
        cout << "masukkan nama siswa : ";
        cin >> siswa[i].nama;
        cout << endl;
        cout << "masukkan nilai siswa : ";
        cin >> siswa[i].nilai;
    }

    int j = 0;
    while(j < MAX){
        cout << "nama siswa : " << siswa[j].nama << ", nilai : " << siswa[j].nilai << endl;
        j++;
    }
    return 0;
}
```
penjelasan singkat guided 5
## Unguided 

### 1. 
```C++
#include <iostream>
using namespace std;
void Kalkulator() {
    int a, b;
    char op;
    cout << "Masukkan angka pertama: ";
    cin >> a;
    cout << "Masukkan operator (+, -, *, /): ";
    cin >> op;
    cout << "Masukkan angka kedua: ";
    cin >> b;
    switch (op) {  
        case '+':
            cout << "Hasil: " << a + b << endl;
            break;
        case '-':
            cout << "Hasil: " << a - b << endl;
            break;
        case '*':
            cout << "Hasil: " << a * b << endl;
            break;
        case '/':
            if (b != 0) {
                cout << "Hasil: " << a / b << endl;
            } else {
                cout << "Error: pembagian dengan 0 tidak terdefinisi" << endl;
            }
            break;
        default:
            cout << "Operator tidak valid!" << endl;
            break;
        }
}
int main() {
    Kalkulator();
    return 0;
}

```
### Output Unguided 1 :

##### Output 1
![Screenshot Output Unguided 1_1](https://github.com/(username github kalian)/(nama repository github kalian)/blob/main/(path folder menyimpan screenshot output)/(nama file screenshot output).png)

contoh :
![Screenshot Output Unguided 1_1](https://github.com/DhimazHafizh/2311102151_Muhammad-Dhimas-Hafizh-Fathurrahman/blob/main/Pertemuan1_Modul1/Output-Unguided1-1.png)

##### Output 2
![Screenshot Output Unguided 1_2](https://github.com/(username github kalian)/(nama repository github kalian)/blob/main/(path folder menyimpan screenshot output)/(nama file screenshot output).png)

penjelasan unguided 1 

### 2. 
```C++
#include <iostream>
#include <string>
#include <vector>

using namespace std;

void angkaKeTeks() {
    int input;
    cout << "masukkan angka 1-100: ";
    cin >> input;

    if (input < 1 || input > 100) {
        cout << "mohon masukkan angka 1-100" << endl;
    } else {
        vector<string> satuan = {"nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"};
        string hasil;

        if (input < 12) {
            hasil = satuan[input];
        } else if (input < 20) {
            hasil = satuan[input % 10] + " belas";
        } else if (input < 100) {
            int puluhan = input / 10;
            int sisa = input % 10;
            if (sisa == 0) {
                hasil = satuan[puluhan] + " puluh";
            } else {
                hasil = satuan[puluhan] + " puluh " + satuan[sisa];
            }
        } else {
            hasil = "seratus";
        }
        cout << hasil << endl;
    }
}

int main() {
    angkaKeTeks();
    return 0;
}

```
### Output Unguided 2 :

##### Output 1
![Screenshot Output Unguided 2_1](https://github.com/(username github kalian)/(nama repository github kalian)/blob/main/(path folder menyimpan screenshot output)/(nama file screenshot output).png)

contoh :
![Screenshot Output Unguided 2_1](https://github.com/DhimazHafizh/2311102151_Muhammad-Dhimas-Hafizh-Fathurrahman/blob/main/Pertemuan1_Modul1/Output-Unguided2-1.png)

##### Output 2
![Screenshot Output Unguided 2_2](https://github.com/(username github kalian)/(nama repository github kalian)/blob/main/(path folder menyimpan screenshot output)/(nama file screenshot output).png)

penjelasan unguided 2

### 3. 
```C++
#include <iostream>
using namespace std;
int main() {
    int number;
    cout << "Masukkan angka: ";
    cin >> number;
    int N = number;

    int i = N;

    // Perulangan utama
    while (i >= 1) {

        // Loop untuk mencetak spasi di awal 
        int s = 1;
        while (s <= N - i) {
            cout << " ";
            s++;
        }
        

        // Sisi Kiri
        int j = i;
        while (j >= 1) {
            std::cout << j;
            j--;
        }

        // Tengah
        cout << "*";

        // Sisi Kanan
        int k = 1;
        while (k <= i) {
            std::cout << k;
            k++;
        }

        cout << std::endl;
        i--;
    }

    int s = 1;
    while (s <= N) {
        std::cout << " ";
        s++;
    }
    
    
    // Bintang terakhir
    cout << "*" << std::endl;

    return 0;
}
```
### Output Unguided 3 :

##### Output 1
![Screenshot Output Unguided 3_1](https://github.com/(username github kalian)/(nama repository github kalian)/blob/main/(path folder menyimpan screenshot output)/(nama file screenshot output).png)

contoh :
![Screenshot Output Unguided 3_1](https://github.com/DhimazHafizh/2311102151_Muhammad-Dhimas-Hafizh-Fathurrahman/blob/main/Pertemuan1_Modul1/Output-Unguided3-1.png)

##### Output 2
![Screenshot Output Unguided 3_2](https://github.com/(username github kalian)/(nama repository github kalian)/blob/main/(path folder menyimpan screenshot output)/(nama file screenshot output).png)

penjelasan unguided 3

## Kesimpulan
...

## Referensi
[1] Stroustrup, B. (2019). Artikel Bahasa Pemrograman C++. Academia.edu. https://www.academia.edu/41613762/Artikel_bahasa_pemrograman_C_
<br>[2] (2019). TEORI DASAR BAHASA PEMPROGRAMAN C++. Academia.edu. https://www.academia.edu/41589648/TEORI_DASAR_BAHASA_PEMPROGRAMAN_C_
<br>[3]Dewi, L.J.E. (2020). Media Pembelajaran Bahasa Pemrograman C++. Jurnal Pendidikan Teknologi dan Kejuruan. https://ejournal.undiksha.ac.id/index.php/JPTK/article/download/31/25/94
<br>[4]Domainesia. (2024). Apa Itu Code Blocks? Kenali Pengertian dan Fungsinya. https://www.domainesia.com/berita/apa-itu-code-blocks/
<br>[5](2019). PENGENALAN CODE_BLOCKS. Academia.edu. https://www.academia.edu/44359359/PENGENALAN_CODE_BLOCKS
<br>[6]Qobus Muhammad Fayazz Zhafar Effendi, et al. (2024). Penerapan Pemrograman C++ dalam Pengembangan Alat. Jurnal Majemuk, 3(1). https://jurnalilmiah.org/journal/index.php/majemuk/article/view/665
