# <h1 align="center">Laporan Praktikum Modul 2 - Pengenalan Bahasa C++ (Bagian Kedua)</h1>
<p align="center">M.Hanif Al Faiz - 103112400042</p>

## Dasar Teori
Pemrograman C++ merupakan fondasi penting dalam ilmu komputer yang melatih kemampuan berpikir logis dan terstruktur [7]. Konsep-konsep dasarnya, seperti array, pointer, dan fungsi, adalah blok bangunan utama untuk mengembangkan perangkat lunak yang efisien dan kompleks.
Array adalah struktur data fundamental yang digunakan untuk menyimpan kumpulan data dengan tipe sejenis secara berurutan dalam memori [5]. Struktur ini sering divisualisasikan sebagai tabel atau matriks, di mana setiap elemen data dapat diakses secara unik melalui sebuah indeks [5]. Penggunaan array sangat penting dalam berbagai implementasi, mulai dari pengelolaan data sederhana hingga algoritma yang lebih kompleks. Teknologi visualisasi seperti Augmented Reality bahkan telah dikembangkan untuk membantu memahami bagaimana struktur array dan elemen-elemennya tersusun di dalam memori [5].
Salah satu konsep yang paling kuat namun sering dianggap sulit dalam C++ adalah pointer [2]. Pointer secara esensial adalah variabel yang tidak menyimpan nilai data secara langsung, melainkan menyimpan alamat memori dari variabel lain [2]. Kemampuan untuk bekerja langsung dengan alamat memori ini sangat penting untuk manajemen memori yang efisien, terutama dalam alokasi memori dinamis dan pembuatan struktur data yang kompleks seperti linked list dan tree [2]. Memahami bagaimana pointer menunjuk, mengakses, dan memanipulasi data di memori adalah kunci untuk membuka potensi penuh dari bahasa C++. Karena kompleksitasnya, berbagai alat bantu visualisasi telah diciptakan untuk mendemonstrasikan bagaimana pointer berinteraksi dengan alokasi memori secara dinamis, sehingga mempermudah proses pembelajaran [2].
Fungsi adalah blok kode mandiri yang dirancang untuk melakukan tugas spesifik dan dapat digunakan kembali di berbagai bagian program [7]. Penggunaan fungsi memungkinkan programmer untuk memecah masalah besar menjadi bagian-bagian yang lebih kecil dan lebih mudah dikelola, sebuah pendekatan yang dikenal sebagai pemrograman modular [7]. Setiap fungsi dapat menerima masukan (parameter) dan mengembalikan sebuah nilai keluaran. Dengan membungkus logika tertentu di dalam fungsi, kode menjadi lebih terstruktur, mudah dibaca, dan efisien karena mengurangi pengulangan kode [7].

## Guided 1

### 1. Array1 dimensi 

```C++
#include<iostream>
using namespace std;
int main(){
    int arr [5];
    for (int i = 0; i < 5; i++){
        cout<<"Masukkan nilai indeks ke-"<<i<<": ";
        cin>>arr[i];
    }
    int j = 0;
    while (j < 5){
        cout<< "Isi indeks ke-"<< j <<" i "<< arr[j]<< endl;
        j++;
    }
    return 0;
}
```
Meminta Input Pengguna: Program pertama-tama membuat sebuah array integer kosong yang bisa menampung 5 angka. Kemudian, program menggunakan for loop untuk meminta pengguna memasukkan 5 angka satu per satu.

Menampilkan Output: Setelah kelima angka tersimpan dalam array, program menggunakan while loop untuk menampilkan kembali kelima angka yang telah dimasukkan oleh pengguna ke layar.

### 2. Array2 dimensi 

```C++
#include<iostream>
using namespace std;

void tampilkanhasil(int arr[2][2]){
    for (int i = 0; i < 2; i++){
        for (int j = 0; j < 2; j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
}

int main(){
    int arrA[2][2] = {
        {1, 2},
        {3, 4}
    };
    int arrB[2][2] = {
        {2, 3},
        {4, 5}
    };  
    int arrC[2][2] = {0};
    int arrD[2][2] = {0};
    
    // Penjumlahan matriks 2x2
    for (int i = 0; i < 2; i++){
        for (int j = 0; j < 2; j++){
            arrC[i][j] = arrA[i][j] + arrB[i][j];
        }
    }
    
    cout<<"Hasil Penjumlahan: "<<endl;
    tampilkanhasil(arrC);

    cout<<endl;

    // Perkalian matriks 2x2
    for (int i = 0; i < 2; i++){            //Perulangan baris 
        for (int j = 0; j < 2; j++){        //Perulangan kolom  
            for (int k = 0; k < 2; k++){    //Perulangan perkalian
                arrD[i][j] += arrA[i][k] * arrB[k][j];
            }
        }
    }

    cout<<"Hasil Perkalian: "<<endl;
    tampilkanhasil(arrD);

    return 0;
}
```
Program ini melakukan operasi penjumlahan dan perkalian pada dua buah matriks 2x2 (arrA dan arrB) yang nilainya sudah ditentukan.

### 3. Arrnpointer

```C++
#include <iostream>
using namespace std;

int main(){
    int arr[]={10,20,30,40,50};
    int*ptr=arr; //pointer yang menunjuk ke elemen pertama array

    //mengakses elemen array menggunakan pointer
    for (int i = 0; i < 5; i++){
        cout<<"elemen array ke-"<< i+1<<" menggunakan pointer: "<<*(ptr+i)<<endl;
    }

    //mengakses elemen array menggunakan indeks
    for (int i = 0; i < 5; i++){
        cout<<"Elemen array ke-"<< i+1 <<" menggunakan indeks: "<<arr[i]<<endl;
    }
    return 0;
}
```
Program C++ ini menunjukkan dua cara berbeda untuk mengakses dan menampilkan elemen-elemen dalam sebuah array, yaitu menggunakan pointer dan menggunakan indeks

### 4. Fungsi prosedur

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
Kode ini mendemonstrasikan tiga jenis perulangan (for, while, dan do-while) yang perilakunya dikontrol oleh satu angka masukan dari pengguna.

## Unguided 

### 1. 

```C++
using namespace std;

void jumlahMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]);
void kurangMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]);
void kaliMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]);
void tampilMatriks(int matriks[][3]);

int main() {
    int matriksA[3][3] = {
        {7, 12, 22},
        {31, 6, 41},
        {15, 19, 36}
    };
    
    int matriksB[3][3] = {
        {11, 34, 7},
        {3, 25, 41},
        {5, 18, 33}
    };
    
    int hasil[3][3];
    int pilihan;
    
    do {
        cout << "\n--- Menu Program Matriks ---" << endl;
        cout << "1. Penjumlahan matriks" << endl;
        cout << "2. Pengurangan matriks" << endl;
        cout << "3. Perkalian matriks" << endl;
        cout << "4. Keluar" << endl;
        cout << "Pilih operasi (1-4): ";
        cin >> pilihan;
        
        switch(pilihan) {
            case 1:
                cout << "\nMatriks A:" << endl;
                tampilMatriks(matriksA);
                cout << "\nMatriks B:" << endl;
                tampilMatriks(matriksB);
                cout << "\nHasil Penjumlahan:" << endl;
                jumlahMatriks(matriksA, matriksB, hasil);
                tampilMatriks(hasil);
                break;
                
            case 2:
                cout << "\nMatriks A:" << endl;
                tampilMatriks(matriksA);
                cout << "\nMatriks B:" << endl;
                tampilMatriks(matriksB);
                cout << "\nHasil Pengurangan:" << endl;
                kurangMatriks(matriksA, matriksB, hasil);
                tampilMatriks(hasil);
                break;
                
            case 3:
                cout << "\nMatriks A:" << endl;
                tampilMatriks(matriksA);
                cout << "\nMatriks B:" << endl;
                tampilMatriks(matriksB);
                cout << "\nHasil Perkalian:" << endl;
                kaliMatriks(matriksA, matriksB, hasil);
                tampilMatriks(hasil);
                break;
                
            case 4:
                cout << "Program selesai!" << endl;
                break;
                
            default:
                cout << "Pilihan tidak valid!" << endl;
        }
    } while(pilihan != 4);
    
    return 0;
}

void jumlahMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]) {
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            hasil[i][j] = matriksA[i][j] + matriksB[i][j];
        }
    }
}

void kurangMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]) {
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            hasil[i][j] = matriksA[i][j] - matriksB[i][j];
        }
    }
}

void kaliMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]) {
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            hasil[i][j] = 0;
            for(int k = 0; k < 3; k++) {
                hasil[i][j] += matriksA[i][k] * matriksB[k][j];
            }
        }
    }
}
void tampilMatriks(int matriks[][3]) {
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            cout << matriks[i][j] << "\t";
        }
        cout << endl;
    }
}
```
### Output Unguided 1 :

##### Output 
![Keluaran1](https://raw.githubusercontent.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/master/WEEK%202/Keluaran1.png)

Program ini menggunakan dua matriks (matriksA dan matriksB) yang nilainya sudah ditentukan. Kemudian, program menampilkan menu interaktif yang memungkinkan pengguna untuk memilih salah satu dari tiga operasi: penjumlahan, pengurangan, atau perkalian. 

### 2. 

```C++
#include <iostream>
using namespace std;

void hitungPersegiPanjang(int *ptrPanjang, int *ptrLebar, int *ptrLuas, int *ptrKeliling) {
    *ptrLuas = (*ptrPanjang) * (*ptrLebar);
    *ptrKeliling = 2 * (*ptrPanjang + *ptrLebar);
}

int main() {
    int panjang = 10;
    int lebar = 5;
    int luas = 0;
    
    int *ptrPanjang = &panjang;
    int *ptrLebar = &lebar;
    int *ptrLuas = &luas;
    int keliling;
    int *ptrKeliling = &keliling;
    cout << "--- Nilai Awal ---" << endl;
    cout << "Panjang: " << panjang << endl;
    cout << "Lebar: " << lebar << endl;
    cout << endl;
    
    hitungPersegiPanjang(ptrPanjang, ptrLebar, ptrLuas, ptrKeliling);
    
    cout << "--- Hasil Perhitungan ---" << endl;
    cout << "Luas Persegi Panjang: " << *ptrLuas << endl;
    cout << "Keliling Persegi Panjang: " << *ptrKeliling << endl;
    cout << endl;
    
    *ptrPanjang = 12;
    *ptrLebar = 6;
    
    hitungPersegiPanjang(ptrPanjang, ptrLebar, ptrLuas, ptrKeliling);
    cout << "--- Nilai Setelah Diubah Melalui Pointer ---" << endl;
    cout << "Panjang Baru: " << *ptrPanjang << endl;
    cout << "Lebar Baru: " << *ptrLebar << endl;
    cout << "Luas Baru: " << *ptrLuas << endl;
    cout << "Keliling Baru: " << *ptrKeliling << endl;
    
    return 0;
}
```
### Output Unguided 2 :

##### Output 
![Keluaran2](https://raw.githubusercontent.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/master/WEEK%202/Keluaran2.png)

Program ini menghitung luas dan keliling persegi panjang dengan menggunakan pointer untuk menunjukkan bagaimana sebuah fungsi dapat mengubah nilai variabel di luar lingkupnya.

## Kesimpulan
...

## Referensi
[1]Asprila, D. A., Wijoyo, S. H., & Az-Zahra, H. M. (2021). Evaluasi usability pada aplikasi Learn C++ (usability testing). Jurnal Pengembangan Teknologi Informasi dan Ilmu Komputer (J-PTIIK), 5(6), 2677–2686.
Tautan Artikel
<br>[2]Cickovski, M. B. (2011). Visualization of dynamic data structures, pointers and recursion for C++ language. 2011 34th International Convention on Information and Communication Technology, Engineering and Microelectronics (MIPRO).
Tautan Artikel (IEEE Xplore)
<br>[3]Dewi, L. J. E. (2010). Media pembelajaran bahasa pemrograman C++. Jurnal Pendidikan Teknologi dan Kejuruan (Undiksha), 7(1), 63–72.
Tautan Artikel
<br>[4]Effendi, Q. M. F. Z., dkk. (2024). Penerapan Pemrograman C++ dalam Pengembangan Alat. Jurnal Majemuk, 3(1).
Tautan Artikel
<br>[5]Ginardi, V. C., Heripracoyo, D. E. P. W., & Sucahyo, A. (2017). Implementasi Augmented Reality Dalam Pembelajaran Struktur Data Menggunakan Metode Marker Based Tracking. Jurnal Teknik Informatika dan Sistem Informasi (JATISI), 4(1).
Tautan Artikel
<br>[6]Prasetyoadi, E. B., Rokhmawati, R. I., & Wicaksono, S. A. (2019). Pengembangan e-modul pembelajaran “Pemrograman Dasar” dengan metode R&D (Studi SMKN 4 Malang). Jurnal Pengembangan Teknologi Informasi dan Ilmu Komputer (J-PTIIK), 3(10), 10118–10129.
Tautan Artikel
<br>[7]Putra, F. Y. G., Silalahi, N. H. A., dkk. (2022). PELATIHAN DASAR-DASAR PEMROGRAMAN C++ UNTUK MENINGKATKAN KETERAMPILAN GURU-GURU KOMPUTER DI KABUPATEN KUANTAN SINGINGI. JURPIKAT (Jurnal Pengabdian Kepada Masyarakat), 3(1), 107-115.
Tautan Artikel
<br>[8]Sano, A. N. A. (2020). PENGENALAN CODE::BLOCKS. Academia.edu.
Tautan
