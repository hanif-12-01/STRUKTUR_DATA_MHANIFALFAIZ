# <h1 align="center">Laporan Praktikum Modul 5 - Singly Linked List (Bagian Kedua)</h1>
<p align="center">M. Hanif Al Faiz - 103112400042</p>

## Dasar Teori

### Singly Linked List

Linked list adalah struktur data dinamis yang terdiri dari sekumpulan node yang saling terhubung melalui pointer [1]. Berbeda dengan array yang bersifat statis, linked list memungkinkan alokasi memori secara dinamis, sehingga ukurannya dapat berubah-ubah sesuai kebutuhan [1][2]. Menurut Karumanchi (2016), "A linked list is a data structure used for storing collections of data where each element contains a reference (link) to the next element in the sequence" [1]. Struktur ini memberikan fleksibilitas tinggi dalam pengelolaan data karena tidak memerlukan alokasi memori yang berurutan seperti array [2].

Singly Linked List merupakan jenis linked list yang paling sederhana, di mana setiap node memiliki dua komponen utama: data dan pointer yang menunjuk ke node berikutnya [2]. Node terakhir dalam list akan menunjuk ke NULL, menandakan akhir dari list [1]. Sebagaimana dijelaskan oleh Goodrich et al. (2014), "A singly linked list is a concrete data structure consisting of a sequence of nodes, each storing an element and a reference to the next node" [2].

#### Struktur Node

Setiap node dalam singly linked list memiliki struktur sebagai berikut:
- **Data**: Menyimpan informasi atau nilai yang diperlukan [1]
- **Next**: Pointer yang menunjuk ke alamat node berikutnya dalam list [2]

Penelitian oleh Wijaya dan Saputra (2020) menjelaskan bahwa "Struktur node pada single linked list terdiri dari dua bagian yaitu bagian data yang menyimpan informasi dan bagian pointer yang menyimpan alamat node berikutnya dalam list" [5]. Komponen-komponen ini bekerja secara terintegrasi untuk membentuk struktur data yang efisien dalam operasi insertion dan deletion.

#### Operasi Dasar pada Singly Linked List

Dalam pemrograman C++, terdapat beberapa operasi dasar yang dapat dilakukan pada singly linked list [3][4]:

1. **Insert Operations** (Operasi Penyisipan)
   - **insertFirst()**: Menambahkan node baru di awal list [3]
   - **insertLast()**: Menambahkan node baru di akhir list [3]
   - **insertAfter()**: Menambahkan node baru setelah node tertentu [3]

2. **Delete Operations** (Operasi Penghapusan)
   - **delFirst()**: Menghapus node pertama dari list [3]
   - **delLast()**: Menghapus node terakhir dari list [3]
   - **delAfter()**: Menghapus node setelah node tertentu [3]

3. **Traversal Operations** (Operasi Penelusuran)
   - **printList()**: Menampilkan semua elemen dalam list [3]
   - **isEmpty()**: Mengecek apakah list kosong [3]
   - **nbList()**: Menghitung jumlah node dalam list [3]

Cormen et al. (2009) dalam bukunya "Introduction to Algorithms" menyatakan bahwa "The basic operations on a linked list include searching for an element, inserting an element, and deleting an element" [3]. Operasi-operasi ini membentuk fondasi dasar dalam manipulasi struktur data linked list dan memiliki kompleksitas waktu yang berbeda-beda tergantung pada posisi elemen yang diakses.

#### Manajemen Memori

Penggunaan C++ dalam implementasi linked list memerlukan perhatian khusus terhadap manajemen memori [4]. Fungsi `new` digunakan untuk mengalokasikan memori secara dinamis saat membuat node baru, sedangkan `delete` digunakan untuk membebaskan memori yang tidak lagi digunakan [4]. Hal ini penting untuk mencegah memory leak dalam program [4][6].

Stroustrup (2013) menekankan pentingnya manajemen memori dengan menyatakan "In C++, memory management is the programmer's responsibility, and proper use of new and delete operators is crucial to prevent memory leaks and dangling pointers" [4]. Penelitian oleh Prasetyo dan Hidayat (2019) juga mengungkapkan bahwa "Manajemen memori yang baik pada implementasi linked list di C++ sangat krusial untuk menghindari memory leak yang dapat menyebabkan program menjadi tidak efisien dan bahkan crash pada runtime" [6].

#### Keuntungan Singly Linked List

- Ukuran dinamis yang dapat berubah sesuai kebutuhan [1][2]
- Efisien untuk operasi insert dan delete di awal list [3]
- Tidak memerlukan alokasi memori berurutan seperti array [1]
- Fleksibel dalam pengelolaan data [5][6]

#### Kekurangan Singly Linked List

- Akses random tidak efisien (harus traversal dari awal) [3]
- Memerlukan memori tambahan untuk menyimpan pointer [1]
- Hanya dapat traversal satu arah (dari depan ke belakang) [2]

## Guided

### 1. GUIDED I - Linked List Buah dengan Operasi Insert dan Update

Program ini mengimplementasikan Single Linked List untuk data buah dengan operasi insert (insertFirst, insertLast, insertAfter) dan update (updateFirst, updateLast, updateAfter).

#### main.cpp
```C++
#include "listbuah.h"
#include <iostream>
using namespace std;

int main(){
    linkedList List;
    address nodeA, nodeB, nodeC,nodeD,nodeE;   
    createList(List);

    nodeA=alokasi("jeruk",100,3000);
    nodeB=alokasi("apel",75,4000);
    nodeC=alokasi("pir",87,5000);
    nodeD=alokasi("semangka",43,11500); 
    nodeE=alokasi("durian",15,31450);

    insertFirst(List,nodeA);
    insertLast(List,nodeB);
    insertAfter(List,nodeC,nodeA);
    insertAfter(List,nodeD,nodeC);
    insertLast(List,nodeE);

    cout<<" isi list buat dilakukan insert"<<endl;
    printList(List);
    cout<<"jumlah node:"<<nbList(List)<<endl;
    cout<<endl;

    updateFirst(List);
    updateLast(List);
    updateAfter(List,nodeD);

    cout<<" isi list buah setelah dilakukan update"<<endl;
    printList(List);
    cout<<"jumlah node:"<<nbList(List)<<endl;
    cout<<endl;

    return 0;
}   
```

#### listbuah.h
```C++
#ifndef LISTBUAH_H
#define LISTBUAH_H
#define Nil nullptr

#include <iostream>
using namespace std;

struct buah{
    string nama;
    int jumlah;
    float harga;
};
typedef buah dataBuah;
typedef struct node *address;
struct node{
    dataBuah isidata;
    address next;
};

struct linkedList{
    address first;
};

bool listEmpty(linkedList List);
void createList(linkedList &List);
address alokasi(string nama, int jumlah, float harga);
void dealokasi(address &node);
void printList(linkedList List);
void insertFirst(linkedList &List, address nodebaru);
void insertAfter(linkedList &List, address nodebaru, address Prev);
void insertLast(linkedList &List, address nodebaru);
void deleteFirst(linkedList &List);
void delLast(linkedList &List);
void deleteAfter(address &List, address &nodehapus, address nodeprev);
int nbList(linkedList List);
void deletelist(linkedList &List);

//materi modul 5 (part 1 update)
void updateFirst(linkedList List);
void updateLast(linkedList List);
void updateAfter(linkedList List, address prev);

#endif
```

#### listbuah.cpp
```C++
#include "listbuah.h"
#include <iostream>
using namespace std;

bool isEmpty(linkedList List) {
    if(List.first == Nil){
        return true; 
    } else {
        return false;
    }
}

void createList(linkedList &List) {
    List.first = Nil;
}

address alokasi(string nama, int jumlah, float harga) { 
    address nodeBaru = new node; 
    nodeBaru->isidata.nama = nama;
    nodeBaru->isidata.jumlah = jumlah; 
    nodeBaru->isidata.harga = harga;
    nodeBaru->next = Nil;
    return nodeBaru;
}

void dealokasi(address &node) {
    node->next = Nil;
    delete node;
}

void insertFirst(linkedList &List, address nodeBaru) {
    nodeBaru->next = List.first; 
    List.first = nodeBaru;
}

void insertAfter(linkedList &List, address nodeBaru, address Prev) {
    if (Prev != Nil) {
        nodeBaru->next = Prev->next;
        Prev->next = nodeBaru;
    } else {
        cout << "Node sebelumnya tidak valid!" << endl;
    }
}

void insertLast(linkedList &List, address nodeBaru) {
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

void printList(linkedList List) {
    if (isEmpty(List)) {
        cout << "List kosong." << endl;
    } else {
        address nodeBantu = List.first;
        while (nodeBantu != Nil) { 
            cout << "Nama Buah : " << nodeBantu->isidata.nama << ", Jumlah : " 
                 << nodeBantu->isidata.jumlah << ", Harga : " << nodeBantu->isidata.harga << endl;
            nodeBantu = nodeBantu->next;
        }
    }
}

int nbList(linkedList List) {
    int count = 0;
    address nodeBantu = List.first;
    while (nodeBantu != Nil) {
        count++;
        nodeBantu = nodeBantu->next; 
    }
    return count;
}

//Materi Modul 5 - Update Operations
void updateFirst(linkedList List){
    if(isEmpty(List) == true){
        cout << "List kosong!" << endl;
    } else {
        cout << "Masukkan update data node pertama : " << endl;
        cout << "Nama buah : ";
        cin >> List.first->isidata.nama;
        cout << "Jumlah : ";
        cin >> List.first->isidata.jumlah;
        cout << "Harga : ";
        cin >> List.first->isidata.harga;
        cout << "Data Berhasil Diupdate!" << endl;
    }
}

void updateLast(linkedList List){
    if (isEmpty(List) == true) {
        cout << "List Kosong!" << endl;
    } else {
        address nodeBantu = List.first;
        while (nodeBantu->next != Nil) {
            nodeBantu = nodeBantu->next;
        }
        cout << "Masukkan update data node terakhir : " << endl;
        cout << "Nama buah : ";
        cin >> nodeBantu->isidata.nama;
        cout << "Jumlah : ";
        cin >> nodeBantu->isidata.jumlah;
        cout << "Harga : ";
        cin >> nodeBantu->isidata.harga;
        cout << "Data Berhasil Diupdate!" << endl;
    }
}

void updateAfter(linkedList List, address nodePrev){
    if(isEmpty(List) == true){
        cout << "List kosong!" << endl;
    } else {
        if (nodePrev != Nil && nodePrev->next != Nil){
            address nodeBantu = nodePrev->next;
            cout << "Masukkan update data node setelah node " << nodePrev->isidata.nama << " : " << endl;
            cout << "Nama buah : ";
            cin >> nodeBantu->isidata.nama;
            cout << "Jumlah : ";
            cin >> nodeBantu->isidata.jumlah;
            cout << "Harga : ";
            cin >> nodeBantu->isidata.harga;
            cout << "Data Berhasil Diupdate!" << endl;
        } else {
            cout << "Node sebelumnya (prev) tidak valid!" << endl;
        }
    }
}
```

**Penjelasan Program GUIDED I:**

Program ini mengimplementasikan Single Linked List untuk menyimpan data buah dengan atribut nama, jumlah, dan harga. Program mendemonstrasikan operasi INSERT dan UPDATE.

**Komponen Utama:**
1. **Struct buah**: Menyimpan data nama (string), jumlah (int), dan harga (float)
2. **Struct linkedList**: Berisi pointer first yang menunjuk ke node pertama
3. **Operasi Insert**: insertFirst(), insertLast(), insertAfter()
4. **Operasi Update**: updateFirst(), updateLast(), updateAfter()

**Alur Program:**
- Membuat 5 node buah: jeruk, apel, pir, semangka, durian
- Insert dengan urutan: jeruk (first) → apel (last) → pir (after jeruk) → semangka (after pir) → durian (last)
- Hasil list: jeruk → pir → semangka → apel → durian
- Melakukan update pada node pertama, terakhir, dan setelah node semangka
- Menampilkan hasil setelah update 

### 2. GUIDED II - Linear Search pada Linked List

Program ini mengimplementasikan algoritma Linear Search untuk mencari elemen dalam Single Linked List:

#### linear.cpp
```C++
#include <iostream>
using namespace std;

struct Node { 
    int data;
    Node* next;
};

Node *linearSearch(Node* head, int key) {
    Node* current = head;
    while (current != nullptr) {
        if (current->data == key) {
            return current;
        }
        current = current->next;
    }
    return nullptr;
}

void append(Node* &head, int value){
    Node *newNode = new Node{value, nullptr};
    if(!head) head = newNode;
    else{
        Node *temp = head;
        while(temp->next) temp = temp->next;
        temp->next = newNode;
    }
}

int main() {
    Node* head = nullptr;

    append(head, 10);
    append(head, 20);
    append(head, 30);
    
    Node* result = linearSearch(head, 20);

    cout << (result ? "Found" : "Not Found") << endl;

    return 0;
}
```

**Penjelasan Program GUIDED II:**

Program ini mengimplementasikan algoritma **Linear Search** pada Single Linked List dengan struktur sederhana.

**Komponen Utama:**

1. **Struct Node**: 
   - `int data`: Menyimpan nilai integer
   - `Node* next`: Pointer ke node berikutnya

2. **Fungsi linearSearch(Node* head, int key)**:
   - Melakukan pencarian sekuensial dari awal hingga akhir list
   - Parameter: pointer head (awal list) dan key (nilai yang dicari)
   - Return: pointer ke node jika ditemukan, nullptr jika tidak
   - Kompleksitas: O(n) - worst case harus traverse seluruh list

3. **Fungsi append(Node* &head, int value)**:
   - Menambahkan node baru di akhir list
   - Menggunakan reference pointer untuk memodifikasi head
   - Menangani kasus list kosong dan list berisi

**Alur Program:**
- Membuat linked list kosong
- Menambahkan 3 node dengan nilai: 10, 20, 30
- Mencari nilai 20 menggunakan linearSearch()
- Menampilkan hasil: "Found" jika ditemukan, "Not Found" jika tidak

**Karakteristik Linear Search:**
- **Sequential**: Memeriksa setiap elemen satu per satu
- **Tidak perlu sorted**: List tidak harus terurut
- **Kompleksitas Waktu**: O(n) dimana n adalah jumlah node
- **Kompleksitas Ruang**: O(1) - tidak memerlukan memori tambahan

**Kelebihan**:
- Sederhana dan mudah diimplementasikan
- Bekerja pada list yang tidak terurut
- Cocok untuk data kecil

**Kekurangan**:
- Tidak efisien untuk data besar (O(n))
- Harus traverse dari awal untuk setiap pencarian

## UNGUIDED 

### 1. Membuat ADT Singly Linked List dengan Input Dinamis

#### main.cpp
```C++
#include "Singlylist.h"
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    clock_t start = clock();
    
    List L;
    address P;
    int n, nilai;
    
    CreateList(L);
    
    cout << "Masukkan jumlah elemen: ";
    cin >> n;
    
    for(int i = 0; i < n; i++) {
        cout << "Masukkan nilai elemen ke-" << (i+1) << ": ";
        cin >> nilai;
        P = alokasi(nilai);
        insertFirst(L, P);
    }
    
    cout << "\nIsi list: ";
    printInfo(L);
    
    clock_t end = clock();
    double time_taken = double(end - start) / CLOCKS_PER_SEC;
    cout << "execution time : " << time_taken << " s" << endl;
    
    return 0;
}
```

#### Singlylist.h
```C++
#ifndef SINGLYLIST_H
#define SINGLYLIST_H

typedef int infotype;
typedef struct ElmList *address;

struct ElmList {
    infotype info;
    address next;
};

struct List {
    address First;
};

void CreateList(List &L);
address alokasi(infotype x);
void dealokasi(address &P);
void printInfo(List L);
void insertFirst(List &L, address P);

#endif
```

#### Singlylist.cpp
```C++
#include "Singlylist.h"
#include <iostream>
using namespace std;

#define Nil NULL

void CreateList(List &L) {
    L.First = Nil;
}

address alokasi(infotype x) {
    address P;
    P = new ElmList;
    
    if (P != Nil) {
        P->info = x;
        P->next = Nil;
    }
    
    return P;
}

void dealokasi(address &P) {
    delete P;
    P = Nil;
}

void insertFirst(List &L, address P) {
    P->next = L.First;
    L.First = P;
}

void printInfo(List L) {
    address P;
    P = L.First;
    
    while (P != Nil) {
        cout << P->info << " ";
        P = P->next;
    }
    cout << endl;
}
```

#### Penjelasan Program Unguided 1:

Program ini mengimplementasikan **Abstract Data Type (ADT) Singly Linked List** dengan tipe data integer yang dapat menerima input bebas dari user.

**Struktur Program:**

1. **File Header (Singlylist.h)**:
   - **typedef int infotype**: Mendefinisikan tipe data untuk informasi yang disimpan di node sebagai integer
   - **typedef struct ElmList \*address**: Mendefinisikan tipe pointer untuk node
   - **struct ElmList**: Struktur node yang berisi:
     - `infotype info`: Data/nilai yang disimpan
     - `address next`: Pointer ke node berikutnya
   - **struct List**: Struktur linked list yang berisi:
     - `address First`: Pointer ke node pertama dalam list
   - **Deklarasi Fungsi**: CreateList, alokasi, dealokasi, printInfo, insertFirst

2. **File Implementasi (Singlylist.cpp)**:
   - **CreateList(List &L)**: Menginisialisasi linked list dengan mengeset First ke NULL (list kosong)
   - **alokasi(infotype x)**: 
     - Mengalokasikan memori dinamis untuk node baru menggunakan operator `new`
     - Mengisi field `info` dengan nilai x
     - Mengeset `next` ke NULL
     - Mengembalikan alamat node baru
   - **dealokasi(address &P)**: 
     - Membebaskan memori yang dialokasikan untuk node P
     - Mengeset pointer P ke NULL untuk menghindari dangling pointer
   - **printInfo(List L)**: 
     - Melakukan traversal dari node First hingga NULL
     - Mencetak nilai `info` setiap node
   - **insertFirst(List &L, address P)**: 
     - Menambahkan node P di awal linked list
     - Node baru akan menunjuk ke First lama
     - First diupdate untuk menunjuk ke node baru

3. **Main Program (main.cpp)**:
   - **Pengukuran Waktu**: Menggunakan `clock()` untuk mencatat waktu mulai eksekusi
   - **Input Jumlah Data**: User menentukan berapa banyak data yang akan dimasukkan
   - **Input Data**: Loop untuk menerima input integer dari user
   - **Pembuatan Node**: Setiap input dialokasikan ke node baru dengan fungsi `alokasi()`
   - **Insert Node**: Node baru dimasukkan ke awal list menggunakan `insertFirst()`
   - **Tampilkan List**: Memanggil `printInfo()` untuk menampilkan semua node
   - **Tampilkan Waktu Eksekusi**: Menghitung dan menampilkan durasi eksekusi program

**Karakteristik Program:**
- **Input Dinamis**: User bebas menentukan jumlah dan nilai data
- **Insert First**: Data yang dimasukkan terakhir akan berada di posisi pertama (LIFO - Last In First Out)
- **Memory Management**: Penggunaan `new` dan `delete` untuk manajemen memori dinamis
- **Modular**: Pemisahan antara header, implementasi, dan program utama

**Contoh Eksekusi:**
```
Input: 5 data → 9, 12, 8, 0, 2
Output: 2 0 8 12 9 (urutan terbalik)
```

**Kompleksitas:**
- **insertFirst()**: O(1) - konstan karena insert di awal
- **printInfo()**: O(n) - linear karena harus traverse seluruh list
- **Space Complexity**: O(n) - sesuai jumlah node yang dibuat

### 2. Operasi Pencarian Elemen pada Singly Linked List

#### main.cpp
```C++
#include "Singlylist.h"
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    clock_t start = clock();
    
    List L;
    address P;
    int n, nilai, cari;
    
    CreateList(L);
    
    cout << "Masukkan jumlah elemen: ";
    cin >> n;
    
    for(int i = 0; i < n; i++) {
        cout << "Masukkan nilai elemen ke-" << (i+1) << ": ";
        cin >> nilai;
        P = alokasi(nilai);
        insertFirst(L, P);
    }
    
    cout << "\nIsi list: ";
    printInfo(L);
    
    cout << "\nMasukkan nilai yang ingin dicari: ";
    cin >> cari;
    
    address found = findElm(L, cari);
    
    if (found != NULL) {
        cout << "Elemen dengan info " << cari << " ditemukan dalam list" << endl;
    } else {
        cout << "Elemen dengan info " << cari << " tidak ditemukan" << endl;
    }
    
    clock_t end = clock();
    double time_taken = double(end - start) / CLOCKS_PER_SEC;
    cout << "execution time : " << time_taken << " s" << endl;
    
    return 0;
}
```

#### Singlylist.h
```C++
#ifndef SINGLYLIST_H
#define SINGLYLIST_H

typedef int infotype;
typedef struct ElmList *address;

struct ElmList {
    infotype info;
    address next;
};

struct List {
    address First;
};

void CreateList(List &L);
address alokasi(infotype x);
void dealokasi(address &P);
void printInfo(List L);
void insertFirst(List &L, address P);
address findElm(List L, infotype x);

#endif
```

#### Singlylist.cpp
```C++
#include "Singlylist.h"
#include <iostream>
using namespace std;

#define Nil NULL

void CreateList(List &L) {
    L.First = Nil;
}

address alokasi(infotype x) {
    address P;
    P = new ElmList;
    
    if (P != Nil) {
        P->info = x;
        P->next = Nil;
    }
    
    return P;
}

void dealokasi(address &P) {
    delete P;
    P = Nil;
}

void insertFirst(List &L, address P) {
    P->next = L.First;
    L.First = P;
}

void printInfo(List L) {
    address P;
    P = L.First;
    
    while (P != Nil) {
        cout << P->info << " ";
        P = P->next;
    }
    cout << endl;
}

address findElm(List L, infotype x) {
    address P;
    P = L.First;
    
    while (P != Nil) {
        if (P->info == x) {
            return P;
        }
        P = P->next;
    }
    
    return Nil;
}
```

### Output Unguided 2 :

##### Output 
![Output Program 2](https://github.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/blob/master/WEEK%204/w5p2.png)

#### Penjelasan Program Unguided 2:

Program ini mengimplementasikan **operasi pencarian (search/find)** pada Singly Linked List dengan input dinamis dari user.

**Struktur Program:**

1. **File Header (Singlylist.h)**:
   - Menggunakan struktur ADT yang sama dengan Unguided 1
   - **Penambahan Fungsi**: `findElm(List L, infotype x)` yang mengembalikan `address` 
   - Fungsi ini untuk mencari elemen dengan nilai `info` tertentu dalam list

2. **File Implementasi (Singlylist.cpp)**:
   
   **Fungsi findElm(List L, infotype x):**
   - **Input**: List L dan nilai x yang ingin dicari
   - **Output**: address (pointer ke node yang ditemukan) atau NULL jika tidak ada
   - **Algoritma**:
     1. Inisialisasi pointer P = L.First
     2. Traverse list dari awal hingga akhir (P != NULL)
     3. Pada setiap node, cek apakah P->info == x
     4. Jika ketemu, return pointer P (lokasi node)
     5. Jika tidak ketemu hingga akhir, return NULL
   - **Kompleksitas Waktu**: O(n) - linear, worst case harus traverse seluruh list

3. **Main Program (main.cpp)**:
   
   **Alur Eksekusi:**
   - Meminta user untuk input jumlah elemen yang akan ditambahkan
   - Loop untuk membaca nilai dari user dan memasukkan ke list
   - Menampilkan isi list setelah semua elemen dimasukkan
   - Meminta user untuk input nilai yang ingin dicari
   - Memanggil fungsi `findElm()` untuk mencari nilai tersebut
   - Menampilkan hasil pencarian (ditemukan atau tidak)
   - Menghitung dan menampilkan waktu eksekusi

**Karakteristik Program:**
- **Input Dinamis**: User bebas menentukan jumlah elemen dan nilai-nilai yang dicari
- **Linear Search**: Algoritma sequential search dengan O(n) complexity
- **Robust**: Menangani kasus elemen tidak ditemukan dengan return NULL
- **Performance Tracking**: Mengukur waktu eksekusi menggunakan `clock()`

**Contoh Eksekusi:**
```
Input: 5 elemen → 9, 12, 8, 0, 2
List hasil: 2 0 8 12 9
Cari nilai: 8
Output: Elemen dengan info 8 ditemukan dalam list
```

**Analisis:**
- Best case: O(1) - elemen dicari ada di posisi pertama
- Average case: O(n/2) - elemen ada di tengah
- Worst case: O(n) - elemen ada di akhir atau tidak ada
- **Sequential Deletion**: Program mendemonstrasikan urutan penghapusan sesuai soal

**Kompleksitas:**
- **deleteFirst()**: O(1) - konstan, langsung menghapus node pertama
- **deleteLast()**: O(n) - linear, perlu traversal untuk mencari node sebelum node terakhir
- **deleteAfter()**: O(1) - konstan, langsung menghapus setelah predecessor
- **nbList()**: O(n) - linear, traverse seluruh list untuk menghitung
- **deleteList()**: O(n) - linear, menghapus satu per satu semua node

**Output Program:**
```
9 12 8 0 2          (List awal)
12 8 0 2            (Setelah deleteFirst - hapus 9)
12 8 0              (Setelah deleteLast - hapus 2)
12 0                (Setelah deleteAfter - hapus 8)
Jumlah node : 2     (Masih tersisa 2 node)

- List Berhasil Terhapus -
Jumlah node : 0     (List kosong setelah deleteList)
```

### 3. Operasi Penjumlahan Elemen pada Singly Linked List

#### main.cpp
```C++
#include "Singlylist.h"
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    clock_t start = clock();
    
    List L;
    address P;
    int n, nilai;
    
    CreateList(L);
    
    cout << "Masukkan jumlah elemen: ";
    cin >> n;
    
    for(int i = 0; i < n; i++) {
        cout << "Masukkan nilai elemen ke-" << (i+1) << ": ";
        cin >> nilai;
        P = alokasi(nilai);
        insertFirst(L, P);
    }
    
    cout << "\nIsi list: ";
    printInfo(L);
    
    int total = sumInfo(L);
    cout << "Total info dari " << n << " elemen adalah " << total << endl;
    
    clock_t end = clock();
    double time_taken = double(end - start) / CLOCKS_PER_SEC;
    cout << "execution time : " << time_taken << " s" << endl;
    
    return 0;
}
```

#### Singlylist.h
```C++
#ifndef SINGLYLIST_H
#define SINGLYLIST_H

typedef int infotype;
typedef struct ElmList *address;

struct ElmList {
    infotype info;
    address next;
};

struct List {
    address First;
};

void CreateList(List &L);
address alokasi(infotype x);
void dealokasi(address &P);
void printInfo(List L);
void insertFirst(List &L, address P);
int sumInfo(List L);

#endif
```

#### Singlylist.cpp
```C++
#include "Singlylist.h"
#include <iostream>
using namespace std;

#define Nil NULL

void CreateList(List &L) {
    L.First = Nil;
}

address alokasi(infotype x) {
    address P;
    P = new ElmList;
    
    if (P != Nil) {
        P->info = x;
        P->next = Nil;
    }
    
    return P;
}

void dealokasi(address &P) {
    delete P;
    P = Nil;
}

void insertFirst(List &L, address P) {
    P->next = L.First;
    L.First = P;
}

void printInfo(List L) {
    address P;
    P = L.First;
    
    while (P != Nil) {
        cout << P->info << " ";
        P = P->next;
    }
    cout << endl;
}

int sumInfo(List L) {
    address P;
    int total = 0;
    
    P = L.First;
    
    while (P != Nil) {
        total += P->info;
        P = P->next;
    }
    
    return total;
}
```

#### Penjelasan Program Unguided 3:

Program ini mengimplementasikan **operasi penjumlahan (sum)** untuk menghitung total nilai `info` dari seluruh elemen dalam Singly Linked List.

**Struktur Program:**

1. **File Header (Singlylist.h)**:
   - Menggunakan struktur ADT yang sama dengan Unguided 1 dan 2
   - **Penambahan Fungsi**: `sumInfo(List L)` yang mengembalikan `int` 
   - Fungsi ini untuk menjumlahkan semua nilai info dari setiap node dalam list

2. **File Implementasi (Singlylist.cpp)**:
   
   **Fungsi sumInfo(List L):**
   - **Input**: List L yang berisi elemen-elemen
   - **Output**: integer berisi total penjumlahan semua info
   - **Algoritma**:
     1. Inisialisasi variabel `total = 0` sebagai akumulator
     2. Inisialisasi pointer `P = L.First`
     3. Traverse list dari awal hingga akhir (P != NULL)
     4. Pada setiap iterasi, tambahkan `P->info` ke variabel `total`
     5. Pindah ke node berikutnya (P = P->next)
     6. Return nilai `total` setelah traverse selesai
   - **Kompleksitas Waktu**: O(n) - linear, harus traverse seluruh list
   - **Kompleksitas Ruang**: O(1) - hanya menggunakan variabel total

3. **Main Program (main.cpp)**:
   
   **Alur Eksekusi:**
   - Meminta user untuk input jumlah elemen yang akan ditambahkan
   - Loop untuk membaca nilai dari user dan memasukkan ke list menggunakan `insertFirst()`
   - Menampilkan isi list setelah semua elemen dimasukkan
   - Memanggil fungsi `sumInfo(L)` untuk menghitung total nilai
   - Menampilkan hasil penjumlahan
   - Menghitung dan menampilkan waktu eksekusi program

**Karakteristik Program:**
- **Input Dinamis**: User bebas menentukan jumlah elemen dan nilai-nilainya
- **Accumulator Pattern**: Menggunakan variabel akumulator untuk menjumlahkan nilai
- **Single Pass**: Hanya memerlukan satu kali traversal untuk menghitung total
- **Efficient**: O(n) time complexity dengan O(1) space complexity
- **Performance Tracking**: Mengukur waktu eksekusi menggunakan `clock()`

**Contoh Eksekusi:**
```
Input: 5 elemen → 9, 12, 8, 0, 2
List hasil: 2 0 8 12 9
Perhitungan: 2 + 0 + 8 + 12 + 9 = 31
Output: Total info dari 5 elemen adalah 31
```

**Analisis:**
- **Time Complexity**: O(n) - harus mengunjungi setiap node sekali
- **Space Complexity**: O(1) - hanya menggunakan beberapa variabel lokal
- **Use Cases**: Berguna untuk statistik data seperti sum, average, min, max, dll

### Output Unguided 3:

#### Output
![Output Program 3](https://github.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/blob/master/WEEK%205/unguided3_output.png)

**Deskripsi Output:**
Program meminta user untuk memasukkan 5 elemen dengan nilai: 9, 12, 8, 0, 2. Setelah semua elemen dimasukkan menggunakan `insertFirst()`, list ditampilkan dengan urutan terbalik: `2 0 8 12 9`. Kemudian fungsi `sumInfo()` menghitung total dari kelima elemen tersebut (2 + 0 + 8 + 12 + 9 = 31) dan menampilkan hasilnya beserta waktu eksekusi program.

## Kesimpulan

Berdasarkan praktikum yang telah dilakukan tentang Singly Linked List, dapat disimpulkan beberapa hal penting sebagai berikut:

1. **Singly Linked List** merupakan struktur data dinamis yang sangat fleksibel dengan kemampuan alokasi memori secara dinamis. Struktur ini terdiri dari node-node yang saling terhubung melalui pointer, dimana setiap node memiliki komponen `info` (data) dan pointer `next` yang menunjuk ke node berikutnya dalam list.

2. **Abstract Data Type (ADT)** pada Singly Linked List mencakup definisi tipe data menggunakan `typedef`, struktur `ElmList` untuk node, dan struktur `List` yang menyimpan pointer `First` sebagai penunjuk awal linked list. Pendekatan ADT ini memudahkan implementasi dan maintenance kode.

3. **Operasi Insert** pada Singly Linked List, khususnya `insertFirst()`, memiliki kompleksitas waktu O(1) yang sangat efisien karena hanya perlu mengubah pointer tanpa melakukan traversal. Operasi ini sangat berguna untuk membangun list dengan cepat, seperti yang ditunjukkan pada program Unguided 1, 2, dan 3.

4. **Operasi Pencarian (Search)** menggunakan fungsi `findElm()` memungkinkan pencarian elemen berdasarkan nilai tertentu dalam list. Algoritma ini menggunakan linear search dengan kompleksitas O(n), traverse dari awal list hingga menemukan elemen yang dicari atau mencapai akhir list. Operasi ini diterapkan pada Unguided 2 untuk mencari keberadaan elemen dengan nilai spesifik.

5. **Operasi Penjumlahan (Sum)** menggunakan fungsi `sumInfo()` mendemonstrasikan penggunaan accumulator pattern dalam linked list. Fungsi ini melakukan traversal satu kali dengan kompleksitas O(n) untuk menjumlahkan seluruh nilai info dari setiap node, seperti yang diimplementasikan pada Unguided 3. Pattern ini dapat diadaptasi untuk operasi statistik lainnya seperti mencari nilai rata-rata, minimum, atau maksimum.

6. **Manajemen Memori** dalam C++ sangat krusial dalam implementasi linked list. Setiap operasi `alokasi()` menggunakan operator `new` untuk mengalokasikan memori secara dinamis, dan setiap operasi penghapusan harus diikuti dengan `dealokasi()` menggunakan operator `delete` untuk membebaskan memori dan mencegah memory leak.

7. **Modularitas Program** dengan pemisahan kode menjadi tiga file (header file `.h`, implementation file `.cpp`, dan main program) merupakan praktik terbaik dalam pemrograman C++. Struktur ini meningkatkan readability, reusability, dan memudahkan debugging serta maintenance kode. Semua program Unguided menerapkan struktur modular ini dengan konsisten.

8. **Input Dinamis** memungkinkan user untuk menentukan jumlah dan nilai data secara bebas, membuat program lebih fleksibel dan interaktif. Penggunaan loop untuk input dan insertion membuat program dapat menangani berbagai ukuran data. Ketiga program Unguided mengimplementasikan fitur input dinamis ini untuk memberikan fleksibilitas maksimal kepada pengguna.

9. **Pengukuran Performa** menggunakan library `<ctime>` dan fungsi `clock()` memungkinkan tracking waktu eksekusi program. Ini penting untuk analisis efisiensi algoritma dan optimasi performa, terutama ketika bekerja dengan dataset besar. Semua program Unguided menyertakan fitur performance tracking ini.

10. **Traversal** merupakan operasi fundamental dalam linked list yang digunakan oleh berbagai fungsi seperti `printInfo()`, `findElm()`, dan `sumInfo()`. Proses traversal dilakukan dengan mengiterasi dari node `First` hingga mencapai `NULL`, dengan kompleksitas waktu O(n) dimana n adalah jumlah elemen dalam list.

11. Implementasi Singly Linked List mendemonstrasikan pentingnya pemahaman tentang **pointer manipulation**, **dynamic memory allocation**, dan **sequential data structure** dalam pemrograman struktur data yang efisien dan efektif. Ketiga program Unguided yang telah dikembangkan menunjukkan berbagai aplikasi praktis dari linked list dalam operasi dasar (insert), pencarian (search), dan kalkulasi (sum).

## Referensi
[1] Karumanchi, N. (2016). Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles (5th ed.). CareerMonk Publications.
<br>[2] Goodrich, M. T., Tamassia, R., & Goldwasser, M. H. (2014). Data Structures and Algorithms in Java (6th ed.). John Wiley & Sons.
<br>[3] Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). Introduction to Algorithms (3rd ed.). MIT Press.
<br>[4] Stroustrup, B. (2013). The C++ Programming Language (4th ed.). Addison-Wesley Professional.
<br>[5] Wijaya, A., & Saputra, D. (2020). Implementasi Struktur Data Linked List dalam Sistem Manajemen Data Mahasiswa. Jurnal Teknologi Informasi dan Komputer, 6(2), 145-152.
<br>[6] Prasetyo, R. A., & Hidayat, T. (2019). Analisis Perbandingan Kinerja Struktur Data Array dan Linked List pada Aplikasi Berbasis C++. Jurnal Informatika dan Komputer, 4(1), 28-35.
