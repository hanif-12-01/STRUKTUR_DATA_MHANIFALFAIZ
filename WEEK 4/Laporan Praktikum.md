# <h1 align="center">Laporan Praktikum Modul 4 - Pengenalan Bahasa C++ (Bagian Keempat)</h1>
<p align="center">M. Hanif Al Faiz - 103112400042</p>

## Dasar Teori

### Singly Linked List

Linked list adalah struktur data dinamis yang terdiri dari sekumpulan node yang saling terhubung melalui pointer [1]. Berbeda dengan array yang bersifat statis, linked list memungkinkan alokasi memori secara dinamis, sehingga ukurannya dapat berubah-ubah sesuai kebutuhan [1][2].

Singly Linked List merupakan jenis linked list yang paling sederhana, di mana setiap node memiliki dua komponen utama: data dan pointer yang menunjuk ke node berikutnya [2]. Node terakhir dalam list akan menunjuk ke NULL, menandakan akhir dari list [1].

#### Struktur Node

Setiap node dalam singly linked list memiliki struktur sebagai berikut [2]:
- **Data**: Menyimpan informasi atau nilai yang diperlukan [1]
- **Next**: Pointer yang menunjuk ke alamat node berikutnya dalam list [2]

#### Operasi Dasar pada Singly Linked List

Dalam pemrograman C++, terdapat beberapa operasi dasar yang dapat dilakukan pada singly linked list [1][3]:

1. **Insert Operations** (Operasi Penyisipan) [2]
   - **insertFirst()**: Menambahkan node baru di awal list [2]
   - **insertLast()**: Menambahkan node baru di akhir list [2]
   - **insertAfter()**: Menambahkan node baru setelah node tertentu [2]

2. **Delete Operations** (Operasi Penghapusan) [2]
   - **delFirst()**: Menghapus node pertama dari list [2]
   - **delLast()**: Menghapus node terakhir dari list [2]
   - **delAfter()**: Menghapus node setelah node tertentu [2]

3. **Traversal Operations** (Operasi Penelusuran) [2]
   - **printList()**: Menampilkan semua elemen dalam list [2]
   - **isEmpty()**: Mengecek apakah list kosong [2]
   - **nbList()**: Menghitung jumlah node dalam list [2]

#### Manajemen Memori

Penggunaan C++ dalam implementasi linked list memerlukan perhatian khusus terhadap manajemen memori [1][3]. Fungsi `new` digunakan untuk mengalokasikan memori secara dinamis saat membuat node baru, sedangkan `delete` digunakan untuk membebaskan memori yang tidak lagi digunakan [1][4]. Hal ini penting untuk mencegah memory leak dalam program [3][5].

#### Keuntungan Singly Linked List

- Ukuran dinamis yang dapat berubah sesuai kebutuhan [1][2]
- Efisien untuk operasi insert dan delete di awal list [2]
- Tidak memerlukan alokasi memori berurutan seperti array [1]
- Fleksibel dalam pengelolaan data [5]

#### Kekurangan Singly Linked List

- Akses random tidak efisien (harus traversal dari awal) [2]
- Memerlukan memori tambahan untuk menyimpan pointer [1]
- Hanya dapat traversal satu arah (dari depan ke belakang) [2]

## Guided

### 1. GUIDED I - Linked List Insert Operations

Program ini mengimplementasikan operasi insert pada Single Linked List dengan 3 file terpisah:

#### main.cpp
```C++
#include "list.h"
#include<iostream>
using namespace std;

int main(){
    linkedlist List;
    address nodeA, nodeB, nodeC, nodeD, nodeE = Nil;
    createList(List);

    dataMahasiswa mhs;

    nodeA = alokasi("Dhimas", "2311102151", 20);
    nodeB = alokasi("Arvin", "2211110014", 21);
    nodeC = alokasi("Rizal", "2311110029", 20);
    nodeD = alokasi("Satrio", "2211102173", 21);
    nodeE = alokasi("Joshua", "2311102133", 21);

    insertFirst(List, nodeA);
    insertLast(List, nodeB);
    insertAfter(List, nodeC, nodeA);
    insertAfter(List, nodeD, nodeC);
    insertLast(List, nodeE);

    cout << "--- ISI LIST SETELAH DILAKUKAN INSERT ---" << endl;
    printList(List);

    return 0;
}
```

#### list.h
```C++
#ifndef LIST_H
#define LIST_H
#define Nil NULL

#include<iostream>
using namespace std;

struct mahasiswa{
    string nama; 
    string nim;
    int umur;
};

typedef mahasiswa dataMahasiswa;

typedef struct node *address;

struct node{
    dataMahasiswa isidata;
    address next;
};

struct linkedlist{
    address first;
};

bool isEmpty(linkedlist List);
void createList(linkedlist &List);
address alokasi(string nama, string nim, int umur);
void dealokasi(address &node);
void printList(linkedlist List);
void insertFirst(linkedlist &List, address nodeBaru);
void insertAfter(linkedlist &List, address nodeBaru, address Prev);
void insertLast(linkedlist &List, address nodeBaru);

#endif // LIST_H
```

#### list.cpp
```C++
#include "list.h"
#include <iostream>
using namespace std;

bool isEmpty(linkedlist List) {
    if(List.first == Nil){
        return true; 
    } else {
        return false;
    }
}

void createList(linkedlist &List) {
    List.first = Nil;
}

address alokasi(string nama, string nim, int umur) { 
    address nodeBaru = new node; 
    nodeBaru->isidata.nama = nama;
    nodeBaru->isidata.nim = nim; 
    nodeBaru->isidata.umur = umur;
    nodeBaru->next = Nil;
    return nodeBaru;
}

void dealokasi(address &node) {
    node->next = Nil;
    delete node;
}

void insertFirst(linkedlist &List, address nodeBaru) {
    nodeBaru->next = List.first; 
    List.first = nodeBaru;
}

void insertAfter(linkedlist &List, address nodeBaru, address Prev) {
    if (Prev != Nil) {
        nodeBaru->next = Prev->next;
        Prev->next = nodeBaru;
    } else {
        cout << "Node sebelumnya tidak valid!" << endl;
    }
}

void insertLast(linkedlist &List, address nodeBaru) {
    if (isEmpty(List) == true) {
        List.first = nodeBaru;
    } else {
        address nodeBantu = List.first;
        while (nodeBantu->next != Nil) {
            nodeBantu = nodeBantu->next;
        }
        nodeBantu->next = nodeBaru;
    }
}

void printList(linkedlist List) {
    if (isEmpty(List) == true) {
        cout << "List kosong." << endl;
    } else {
        address nodeBantu = List.first;
        while (nodeBantu != Nil) { 
            cout << "Nama : " << nodeBantu->isidata.nama << ", NIM : " << nodeBantu->isidata.nim 
            << ", Usia : " << nodeBantu->isidata.umur << endl;
            nodeBantu = nodeBantu->next;
        }
    }
}  
```

Program ini mendemonstrasikan pembuatan dan manipulasi Single Linked List dengan operasi insertFirst, insertLast, dan insertAfter 

### 2. GUIDED II - Linked List Insert and Delete Operations

Program ini mengimplementasikan operasi insert dan delete pada Single Linked List dengan 3 file terpisah:

#### main.cpp
```C++
#include "list.h"

#include<iostream>
using namespace std;

int main(){
    linkedlist List;
    address nodeA, nodeB, nodeC, nodeD, nodeE = Nil;
    createList(List);

    dataMahasiswa mhs;

    nodeA = alokasi("Dhimas", "2311102151", 20);
    nodeB = alokasi("Arvin", "2211110014", 21);
    nodeC = alokasi("Rizal", "2311110029", 20);
    nodeD = alokasi("Satrio", "2211102173", 21);
    nodeE = alokasi("Joshua", "2311102133", 21);

    insertFirst(List, nodeA);
    insertLast(List, nodeB);
    insertAfter(List, nodeC, nodeA);
    insertAfter(List, nodeD, nodeC);
    insertLast(List, nodeE);

    cout << "ISI LIST SETELAH DILAKUKAN INSERT" << endl;
    printList(List);
    cout << "jumlah node : " << nbList(List) << endl;
    cout << endl;

    delFirst(List);
    delLast(List);
    delAfter(List, nodeD, nodeC);

    cout << "ISI LIST SETELAH DILAKUKAN DELETE" << endl;
    printList(List);
    cout << "jumlah node : " << nbList(List) << endl;
    cout << endl;

    deleteList(List);
    cout << "ISI LIST SETELAH DILAKUKAN HAPUS LIST" << endl;
    printList(List);
    cout << "jumlah node : " << nbList(List) << endl;
    cout << endl;
    return 0;
}
```

#### list.h
```C++
#ifndef LIST_H
#define LIST_H
#define Nil NULL

#include <iostream>
using namespace std;

struct mahasiswa{
    string nama; 
    string nim;
    int umur;
};

typedef mahasiswa dataMahasiswa;

typedef struct node *address;

struct node{
    dataMahasiswa isidata;
    address next;
};

struct linkedlist{
    address first;
};

bool isEmpty(linkedlist List);
void createList(linkedlist &List);
address alokasi(string nama, string nim, int umur);
void dealokasi(address &node);
void printList(linkedlist List);
void insertFirst(linkedlist &List, address nodeBaru);
void insertAfter(linkedlist &List, address nodeBaru, address Prev);
void insertLast(linkedlist &List, address nodeBaru);

void delFirst(linkedlist &List);
void delLast(linkedlist &List);
void delAfter(linkedlist &List, address nodeHapus, address nodePrev);
int nbList(linkedlist List);
void deleteList(linkedlist &List);

#endif
```

#### list.cpp
```C++
#include "list.h"
#include <iostream>
using namespace std;

bool isEmpty(linkedlist List) {
    if(List.first == Nil){
        return true; 
    } else {
        return false;
    }
}

void createList(linkedlist &List) {

    List.first = Nil;
}

address alokasi(string nama, string nim, int umur) { 

    address nodeBaru = new node; 
    nodeBaru->isidata.nama = nama;
    nodeBaru->isidata.nim = nim; 
    nodeBaru->isidata.umur = umur;
    nodeBaru->next = Nil;
    return nodeBaru;
}

void dealokasi(address &node) {
    node->next = Nil;
    delete node;
}

void insertFirst(linkedlist &List, address nodeBaru) {

    nodeBaru->next = List.first; 
    List.first = nodeBaru;
}

void insertAfter(linkedlist &List, address nodeBaru, address Prev) {

    if (Prev != Nil) {
        nodeBaru->next = Prev->next;
        Prev->next = nodeBaru;
    } else {
        cout << "Node sebelumnya tidak valid!" << endl;
    }
}

void insertLast(linkedlist &List, address nodeBaru) {

    if (isEmpty(List)) {
        List.first = nodeBaru;
    } else {
        address nodeBantu = List.first;
        while (nodeBantu->next != Nil) {
            nodeBantu = nodeBantu->next;
        }
        nodeBantu->next = nodeBaru;
    }
}

void delFirst(linkedlist &List){

    address nodeHapus;
    if (isEmpty(List) == false) {
        nodeHapus = List.first;
        List.first = List.first->next;
        nodeHapus->next = Nil;
        dealokasi(nodeHapus);
    } else {
        cout << "List kosong!" << endl;
    }
}

void delLast(linkedlist &List){

    address nodeHapus, nodePrev;
    if(isEmpty(List) == false){
        nodeHapus = List.first;
        if(nodeHapus->next == Nil){
            List.first->next = Nil;
            dealokasi(nodeHapus);
        } else { 
            while(nodeHapus->next != Nil){
                nodePrev = nodeHapus; 
                nodeHapus = nodeHapus->next;
            }
            nodePrev->next = Nil; 
            dealokasi(nodeHapus);
        }
    } else {
        cout << "list kosong" << endl;
    }
}

void delAfter(linkedlist &List, address nodeHapus, address nodePrev){

    if(isEmpty(List) == true){
        cout << "List kosong!" << endl;
    } else {
        if (nodePrev != Nil && nodePrev->next != Nil) { 
            nodeHapus = nodePrev->next;       
            nodePrev->next = nodeHapus->next;  
            nodeHapus->next = Nil;         
            dealokasi(nodeHapus);
        } else {
            cout << "Node sebelumnya (prev) tidak valid!" << endl;
        }
    }
}

void printList(linkedlist List) {

    if (isEmpty(List)) {
        cout << "List kosong." << endl;
    } else {
        address nodeBantu = List.first;
        while (nodeBantu != Nil) { 
            cout << "Nama : " << nodeBantu->isidata.nama << ", NIM : " << nodeBantu->isidata.nim << ", Usia : " << nodeBantu->isidata.umur << endl;
            nodeBantu = nodeBantu->next;
        }
    }
}

int nbList(linkedlist List) {

    int count = 0;
    address nodeBantu = List.first;
    while (nodeBantu != Nil) {
        count++;
        nodeBantu = nodeBantu->next; 
    }
    return count;
}

void deleteList(linkedlist &List){

    address nodeBantu, nodeHapus;
    nodeBantu = List.first;
    while(nodeBantu != Nil){
        nodeHapus = nodeBantu;
        nodeBantu = nodeBantu->next;
        dealokasi(nodeHapus); 
    }
    List.first = Nil; 
    cout << "List sudah terhapus!" << endl;
}
```

Program ini mendemonstrasikan operasi lengkap pada Single Linked List termasuk insert (insertFirst, insertLast, insertAfter) dan delete (delFirst, delLast, delAfter), serta fungsi tambahan untuk menghitung jumlah node dan menghapus seluruh list 

## Unguided 

### 1. Sequential Search - Mencari Kata dalam Kalimat

```C++
#include <iostream>
#include <string>
#include <sstream>
#include <vector>
using namespace std;

int sequentialSearch(vector<string> words, string target) {
    for (int i = 0; i < words.size(); i++) {
        if (words[i] == target) {
            return i;
        }
    }
    return -1;
}

int main() {
    string kalimat, kataDicari;
    
    cout << "Masukkan kalimat: ";
    getline(cin, kalimat);
    
    cout << "Masukkan kata yang ingin dicari: ";
    cin >> kataDicari;
    
    vector<string> words;
    stringstream ss(kalimat);
    string word;
    
    while (ss >> word) {
        words.push_back(word);
    }
    
    int hasil = sequentialSearch(words, kataDicari);
    
    if (hasil != -1) {
        cout << "\nKata \"" << kataDicari << "\" ditemukan pada indeks ke-" << hasil << endl;
    } else {
        cout << "\nKata \"" << kataDicari << "\" tidak ditemukan dalam kalimat." << endl;
    }
    
    return 0;
}
```

### Output Unguided 1 :

##### Output 1
![Output Program 1](https://github.com/mhmmdffzz/103112400064_Muhammad-Fauzan/blob/main/Pertemuan1_Modul1/LAPRAK/Muhammad_Fauzan-Output-Unguided1.png)

#### Penjelasan Program Unguided 1:

Program ini mengimplementasikan algoritma **Sequential Search** (Pencarian Berurutan) untuk mencari kata tertentu dalam sebuah kalimat.

**Cara Kerja Program:**

1. **Input Kalimat**: Program meminta user memasukkan sebuah kalimat menggunakan `getline()` agar dapat membaca kalimat lengkap dengan spasi.

2. **Input Kata yang Dicari**: User diminta memasukkan kata yang ingin dicari dalam kalimat tersebut.

3. **Parsing Kalimat**: Kalimat dipecah menjadi kata-kata individual menggunakan `stringstream`. Setiap kata disimpan dalam `vector<string>` bernama `words` melalui proses iterasi dengan loop `while`.

4. **Fungsi Sequential Search**: 
   - Menerima parameter vector kata-kata dan kata target yang dicari
   - Melakukan iterasi dari indeks 0 hingga ukuran vector
   - Membandingkan setiap kata dengan kata target
   - Jika ditemukan kecocokan, mengembalikan indeks posisi kata tersebut
   - Jika tidak ditemukan hingga akhir, mengembalikan -1

5. **Output Hasil**: 
   - Jika hasil != -1, program menampilkan bahwa kata ditemukan beserta indeksnya
   - Jika hasil == -1, program menampilkan bahwa kata tidak ditemukan

**Kompleksitas:** O(n) dimana n adalah jumlah kata dalam kalimat. Sequential search memeriksa setiap elemen satu per satu secara berurutan.

### 2. Binary Search - Mencari Angka dalam Array

```C++
#include <iostream>
#include <algorithm>
using namespace std;

int binarySearch(int arr[], int n, int target) {
    int left = 0;
    int right = n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    
    return -1;
}

int main() {
    int n, angkaDicari;
    
    cout << "Masukkan jumlah elemen array: ";
    cin >> n;
    
    int arr[n];
    
    cout << "Masukkan " << n << " angka (dipisahkan dengan spasi): ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    sort(arr, arr + n);
    
    cout << "\nArray setelah diurutkan: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    cout << "\nMasukkan angka yang ingin dicari: ";
    cin >> angkaDicari;
    
    int hasil = binarySearch(arr, n, angkaDicari);
    
    if (hasil != -1) {
        cout << "\nAngka " << angkaDicari << " ditemukan pada indeks ke-" << hasil << endl;
    } else {
        cout << "\nAngka " << angkaDicari << " tidak ditemukan dalam array." << endl;
    }
    
    return 0;
}
```

### Output Unguided 2 :

##### Output 1
![Output Program 2](https://github.com/mhmmdffzz/103112400064_Muhammad-Fauzan/blob/main/Pertemuan1_Modul1/LAPRAK/Muhammad_Fauzan-Output-Unguided2.png)

#### Penjelasan Program Unguided 2:

Program ini mengimplementasikan algoritma **Binary Search** (Pencarian Biner) untuk mencari angka tertentu dalam array.

**Cara Kerja Program:**

1. **Input Jumlah Elemen**: Program meminta user memasukkan jumlah elemen yang akan dimasukkan ke dalam array.

2. **Input Elemen Array**: User memasukkan n angka yang akan disimpan dalam array.

3. **Sorting Array**: Array diurutkan menggunakan fungsi `sort()` dari library `<algorithm>`. Ini adalah **syarat wajib** untuk Binary Search karena algoritma ini hanya bekerja pada data yang sudah terurut.

4. **Tampilkan Array Terurut**: Program menampilkan array setelah diurutkan agar user dapat melihat hasilnya.

5. **Input Angka yang Dicari**: User memasukkan angka yang ingin dicari dalam array.

6. **Fungsi Binary Search**:
   - Menggunakan dua pointer: `left` (awal) dan `right` (akhir)
   - Menghitung indeks tengah: `mid = left + (right - left) / 2`
   - Membandingkan elemen tengah dengan target:
     - Jika `arr[mid] == target`: angka ditemukan, return indeks mid
     - Jika `arr[mid] < target`: target berada di sebelah kanan, set `left = mid + 1`
     - Jika `arr[mid] > target`: target berada di sebelah kiri, set `right = mid - 1`
   - Proses berulang hingga angka ditemukan atau `left > right`
   - Jika tidak ditemukan, return -1

7. **Output Hasil**:
   - Jika hasil != -1, menampilkan bahwa angka ditemukan beserta indeksnya
   - Jika hasil == -1, menampilkan bahwa angka tidak ditemukan

**Kompleksitas:** O(log n) dimana n adalah jumlah elemen dalam array. Binary search membagi area pencarian menjadi setengah di setiap iterasi, sehingga jauh lebih efisien dibanding sequential search untuk data yang besar.

**Keuntungan Binary Search:**
- Sangat efisien untuk dataset besar
- Waktu pencarian logaritmik
- Mengurangi jumlah perbandingan yang diperlukan

**Kekurangan Binary Search:**
- Memerlukan data yang sudah terurut
- Tidak efisien untuk data yang sering berubah (karena perlu sorting ulang)

## Kesimpulan

Berdasarkan praktikum yang telah dilakukan, dapat disimpulkan beberapa hal penting terkait Singly Linked List dan algoritma pencarian:

1. **Singly Linked List** merupakan struktur data dinamis yang sangat fleksibel dengan kemampuan alokasi memori secara dinamis. Struktur ini terdiri dari node-node yang saling terhubung melalui pointer, dimana setiap node memiliki data dan pointer next yang menunjuk ke node berikutnya.

2. **Operasi Insert** pada Singly Linked List dapat dilakukan pada berbagai posisi (insertFirst, insertLast, insertAfter) dengan efisiensi yang baik, terutama untuk penyisipan di awal list yang memiliki kompleksitas O(1).

3. **Operasi Delete** juga dapat dilakukan di berbagai posisi (delFirst, delLast, delAfter) dengan manajemen memori yang baik menggunakan fungsi dealokasi untuk mencegah memory leak.

4. **Manajemen Memori** dalam C++ sangat penting dalam implementasi linked list. Penggunaan operator `new` untuk alokasi dan `delete` untuk dealokasi memori harus dilakukan dengan benar untuk menghindari memory leak dan masalah performa.

5. **Sequential Search** merupakan algoritma pencarian sederhana dengan kompleksitas O(n) yang cocok untuk data yang tidak terurut atau dataset kecil. Algoritma ini memeriksa setiap elemen secara berurutan dari awal hingga akhir.

6. **Binary Search** adalah algoritma pencarian yang sangat efisien dengan kompleksitas O(log n), namun memerlukan data yang sudah terurut. Algoritma ini bekerja dengan membagi area pencarian menjadi dua bagian di setiap iterasi, sehingga jauh lebih cepat untuk dataset besar.

7. Implementasi struktur data dan algoritma dalam C++ memerlukan pemahaman yang baik tentang pointer, struct, dan fungsi untuk menciptakan kode yang efisien dan mudah dipelihara.

8. Pemisahan kode ke dalam beberapa file (header file `.h` dan implementation file `.cpp`) merupakan praktik yang baik dalam pemrograman C++ untuk meningkatkan modularitas dan kemudahan maintenance kode.

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