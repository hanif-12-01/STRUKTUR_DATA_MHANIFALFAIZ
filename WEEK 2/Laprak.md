# <h1 align="center">Laporan Praktikum Modul 2 - Pengenalan Bahasa C++ (Bagian Kedua)</h1>
<p align="center">M.Hanif Al Faiz - 103112400042</p>

## Dasar Teori
...

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
Program C++ sederhana yang 

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
Penjelasan

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
Program C++ yang 

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
Sebuah program C++ yang 

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

##### Output 1
![Output Program 1](https://github.com/mhmmdffzz/103112400064_Muhammad-Fauzan/blob/main/Pertemuan1_Modul1/LAPRAK/Muhammad_Fauzan-Output-Unguided1.png)

program C++ ini adalah 

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

Program C++ ini berfungsi untuk

## Kesimpulan
...

## Referensi
[1] Dewi, L. J. E. (2010). Media pembelajaran bahasa pemrograman C++. Jurnal Pendidikan Teknologi dan Kejuruan (Undiksha), 7(1), 63–72.
Halaman artikel: https://ejournal.undiksha.ac.id/index.php/JPTK/article/view/31
PDF: https://ejournal.undiksha.ac.id/index.php/JPTK/article/download/31/25/94
<br>[2]Prasetyoadi, E. B., Rokhmawati, R. I., & Wicaksono, S. A. (2019). Pengembangan e-modul pembelajaran “Pemrograman Dasar” dengan metode R&D (Studi SMKN 4 Malang). Jurnal Pengembangan Teknologi Informasi dan Ilmu Komputer (J-PTIIK), 3(10), 10118–10129.
Halaman artikel: https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/6646
PDF: https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/download/6646/3193/46603
<br>[3] Asprila, D. A., Wijoyo, S. H., & Az-Zahra, H. M. (2021). Evaluasi usability pada aplikasi Learn C++ (usability testing). Jurnal Pengembangan Teknologi Informasi dan Ilmu Komputer (J-PTIIK), 5(6), 2677–2686.
Halaman artikel: https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/9392
PDF: https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/download/9392/4217/66090
<br>[4] Sano, A. N. A. (2020). PENGENALAN CODE::BLOCKS. Academia.edu.
Halaman: https://www.academia.edu/44359359/PENGENALAN_CODE_BLOCKS
<br>[5] Effendi, Q. M. F. Z., dkk. (2024). Penerapan Pemrograman C++ dalam Pengembangan Alat. Jurnal Majemuk, 3(1).
Halaman artikel: https://jurnalilmiah.org/journal/index.php/majemuk/article/view/665
