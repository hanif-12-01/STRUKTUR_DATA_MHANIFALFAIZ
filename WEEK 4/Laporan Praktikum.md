# <h1 align="center">Laporan Praktikum Modul 4 - Singly Linked List (Bagian Keempat)</h1>
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

### 1. Membuat ADT Singly Linked List 

#### main.cpp
```C++
#include "singlylist.h"
#include <ctime>

int main() {
    clock_t start = clock();
    
    List L;
    address P;
    int n, nilai;
    
    CreateList(L);
    
    cout << "Masukkan jumlah data: ";
    cin >> n;
    
    cout << "Masukkan " << n << " data integer:" << endl;
    for (int i = 0; i < n; i++) {
        cout << "Data ke-" << (i+1) << ": ";
        cin >> nilai;
        P = alokasi(nilai);
        insertFirst(L, P);
    }
    
    cout << "\nIsi Linked List: " << endl;
    printInfo(L);
    
    clock_t end = clock();
    double duration = double(end - start) / CLOCKS_PER_SEC;
    
    cout << "\nProcess returned 0 (0x0)   execution time : " << duration << " s" << endl;
    cout << "Press any key to continue." << endl;
    
    return 0;
}
```

#### singlylist.h
```C++
#ifndef SINGLYLIST_H
#define SINGLYLIST_H

#include <iostream>
using namespace std;

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

#### singlylist.cpp
```C++
#include "singlylist.h"

void CreateList(List &L) {
    L.First = NULL;
}

address alokasi(infotype x) {
    address P = new ElmList;
    P->info = x;
    P->next = NULL;
    return P;
}

void dealokasi(address &P) {
    delete P;
    P = NULL;
}

void printInfo(List L) {
    address P = L.First;
    while (P != NULL) {
        cout << P->info << " ";
        P = P->next;
    }
    cout << endl;
}

void insertFirst(List &L, address P) {
    P->next = L.First;
    L.First = P;
}
```

### Output Unguided 1 :

##### Output 
![Output Program 1](https://github.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/blob/master/WEEK%204/w5p1.png)


#### Penjelasan Program Unguided 1:

Program ini mengimplementasikan **Abstract Data Type (ADT) Singly Linked List** dengan tipe data integer yang dapat menerima input bebas dari user.

**Struktur Program:**

1. **File Header (singlylist.h)**:
   - **typedef int infotype**: Mendefinisikan tipe data untuk informasi yang disimpan di node sebagai integer
   - **typedef struct ElmList \*address**: Mendefinisikan tipe pointer untuk node
   - **struct ElmList**: Struktur node yang berisi:
     - `infotype info`: Data/nilai yang disimpan
     - `address next`: Pointer ke node berikutnya
   - **struct List**: Struktur linked list yang berisi:
     - `address First`: Pointer ke node pertama dalam list
   - **Deklarasi Fungsi**: CreateList, alokasi, dealokasi, printInfo, insertFirst

2. **File Implementasi (singlylist.cpp)**:
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

3. **File Main Program (main.cpp)**:
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

### 2. Operasi Delete pada Singly Linked List

#### main.cpp
```C++
#include "singlylist.h"

int main() {
    List L;
    address P;
    
    CreateList(L);
    
    P = alokasi(2);
    insertFirst(L, P);
    
    P = alokasi(0);
    insertFirst(L, P);
    
    P = alokasi(8);
    insertFirst(L, P);
    
    P = alokasi(12);
    insertFirst(L, P);
    
    P = alokasi(9);
    insertFirst(L, P);
    
    printInfo(L);
    
    deleteFirst(L, P);
    dealokasi(P);
    printInfo(L);
    
    deleteLast(L, P);
    dealokasi(P);
    printInfo(L);
    
    address Prec = L.First;
    deleteAfter(L, Prec, P);
    dealokasi(P);
    printInfo(L);
    
    cout << "Jumlah node : " << nbList(L) << endl;
    
    cout << endl;
    cout << "- List Berhasil Terhapus -" << endl;
    deleteList(L);
    cout << "Jumlah node : " << nbList(L) << endl;
    
    return 0;
}
```

#### singlylist.h
```C++
#ifndef SINGLYLIST_H
#define SINGLYLIST_H

#include <iostream>
using namespace std;

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
void insertFirst(List &L, address P);
void deleteFirst(List &L, address &P);
void deleteLast(List &L, address &P);
void deleteAfter(List &L, address Prec, address &P);
void printInfo(List L);
int nbList(List L);
void deleteList(List &L);

#endif
```

#### singlylist.cpp
```C++
#include "singlylist.h"

void CreateList(List &L) {
    L.First = NULL;
}

address alokasi(infotype x) {
    address P = new ElmList;
    P->info = x;
    P->next = NULL;
    return P;
}

void dealokasi(address &P) {
    delete P;
    P = NULL;
}

void insertFirst(List &L, address P) {
    P->next = L.First;
    L.First = P;
}

void deleteFirst(List &L, address &P) {
    if (L.First != NULL) {
        P = L.First;
        L.First = L.First->next;
        P->next = NULL;
    }
}

void deleteLast(List &L, address &P) {
    if (L.First != NULL) {
        if (L.First->next == NULL) {
            P = L.First;
            L.First = NULL;
        } else {
            address temp = L.First;
            while (temp->next->next != NULL) {
                temp = temp->next;
            }
            P = temp->next;
            temp->next = NULL;
        }
    }
}

void deleteAfter(List &L, address Prec, address &P) {
    if (Prec != NULL && Prec->next != NULL) {
        P = Prec->next;
        Prec->next = P->next;
        P->next = NULL;
    }
}

void printInfo(List L) {
    address P = L.First;
    while (P != NULL) {
        cout << P->info << " ";
        P = P->next;
    }
    cout << endl;
}

int nbList(List L) {
    int count = 0;
    address P = L.First;
    while (P != NULL) {
        count++;
        P = P->next;
    }
    return count;
}

void deleteList(List &L) {
    address P;
    while (L.First != NULL) {
        deleteFirst(L, P);
        dealokasi(P);
    }
}
```

### Output Unguided 2 :

##### Output 
![Output Program 2](https://github.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/blob/master/WEEK%204/w5p2.png)

#### Penjelasan Program Unguided 2:

Program ini mengimplementasikan **operasi penghapusan (delete)** pada Singly Linked List dengan berbagai metode: `deleteFirst()`, `deleteLast()`, dan `deleteAfter()`.

**Struktur Program:**

1. **File Header (singlylist.h)**:
   - Menggunakan struktur ADT yang sama dengan Unguided 1
   - Menambahkan deklarasi fungsi delete: `deleteFirst()`, `deleteLast()`, `deleteAfter()`
   - Menambahkan fungsi utility: `nbList()` untuk menghitung jumlah node, `deleteList()` untuk menghapus seluruh list

2. **File Implementasi (singlylist.cpp)**:
   
   **Fungsi Delete Operations:**
   - **deleteFirst(List &L, address &P)**: 
     - Menghapus node pertama dari list
     - Memindahkan First ke node berikutnya
     - Memutus koneksi node yang dihapus dengan mengeset next ke NULL
     - Node yang dihapus dikembalikan melalui parameter P untuk dealokasi
   
   - **deleteLast(List &L, address &P)**:
     - Menghapus node terakhir dari list
     - Menangani dua kasus: list hanya memiliki satu node, atau lebih dari satu node
     - Menggunakan traversal untuk mencari node sebelum node terakhir
     - Memutus koneksi dengan mengeset next dari node sebelumnya ke NULL
   
   - **deleteAfter(List &L, address Prec, address &P)**:
     - Menghapus node setelah node yang ditunjuk Prec (predecessor)
     - Mengecek validitas Prec dan apakah Prec memiliki node setelahnya
     - Menghubungkan Prec langsung ke node setelah node yang dihapus
   
   **Fungsi Utility:**
   - **nbList(List L)**:
     - Menghitung jumlah node dalam list dengan traversal
     - Mengembalikan integer jumlah node
   
   - **deleteList(List &L)**:
     - Menghapus seluruh isi list
     - Menggunakan loop yang memanggil deleteFirst() berulang kali
     - Setiap node yang dihapus langsung didealokasi untuk membebaskan memori

3. **Main Program (main.cpp)**:
   
   **Alur Eksekusi:**
   - Membuat linked list awal dengan nilai: **9 → 12 → 8 → 0 → 2**
   - Menampilkan list awal
   - **Step 1**: Hapus node 9 (node pertama) menggunakan `deleteFirst()` → **12 8 0 2**
   - **Step 2**: Hapus node 2 (node terakhir) menggunakan `deleteLast()` → **12 8 0**
   - **Step 3**: Hapus node 8 menggunakan `deleteAfter()` setelah node 12 → **12 0**
   - Menampilkan jumlah node tersisa menggunakan `nbList()` → **2 node**
   - Menghapus seluruh list menggunakan `deleteList()`
   - Menampilkan jumlah node setelah dihapus → **0 node**

**Karakteristik Program:**
- **Memory Management**: Setiap operasi delete diikuti dengan dealokasi untuk mencegah memory leak
- **Validasi**: Setiap fungsi delete mengecek kondisi list (NULL check) sebelum melakukan operasi
- **Modular**: Pemisahan fungsi-fungsi delete memudahkan maintenance dan reusability
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

## Kesimpulan

Berdasarkan praktikum yang telah dilakukan tentang Singly Linked List, dapat disimpulkan beberapa hal penting sebagai berikut:

1. **Singly Linked List** merupakan struktur data dinamis yang sangat fleksibel dengan kemampuan alokasi memori secara dinamis. Struktur ini terdiri dari node-node yang saling terhubung melalui pointer, dimana setiap node memiliki komponen `info` (data) dan pointer `next` yang menunjuk ke node berikutnya dalam list.

2. **Abstract Data Type (ADT)** pada Singly Linked List mencakup definisi tipe data menggunakan `typedef`, struktur `ElmList` untuk node, dan struktur `List` yang menyimpan pointer `First` sebagai penunjuk awal linked list. Pendekatan ADT ini memudahkan implementasi dan maintenance kode.

3. **Operasi Insert** pada Singly Linked List, khususnya `insertFirst()`, memiliki kompleksitas waktu O(1) yang sangat efisien karena hanya perlu mengubah pointer tanpa melakukan traversal. Operasi ini sangat berguna untuk membangun list dengan cepat.

4. **Operasi Delete** dapat dilakukan dengan berbagai metode:
   - `deleteFirst()` dengan kompleksitas O(1) untuk menghapus node pertama
   - `deleteLast()` dengan kompleksitas O(n) karena memerlukan traversal untuk mencari node sebelum node terakhir
   - `deleteAfter()` dengan kompleksitas O(1) untuk menghapus node setelah predecessor tertentu

5. **Manajemen Memori** dalam C++ sangat krusial dalam implementasi linked list. Setiap operasi `alokasi()` menggunakan operator `new` untuk mengalokasikan memori secara dinamis, dan setiap operasi penghapusan harus diikuti dengan `dealokasi()` menggunakan operator `delete` untuk membebaskan memori dan mencegah memory leak.

6. **Fungsi Utility** seperti `nbList()` untuk menghitung jumlah node dan `deleteList()` untuk menghapus seluruh list sangat membantu dalam pengelolaan linked list. Fungsi-fungsi ini menggunakan traversal dengan kompleksitas O(n) untuk mengakses seluruh node.

7. **Modularitas Program** dengan pemisahan kode menjadi tiga file (header file `.h`, implementation file `.cpp`, dan main program) merupakan praktik terbaik dalam pemrograman C++. Struktur ini meningkatkan readability, reusability, dan memudahkan debugging serta maintenance kode.

8. **Input Dinamis** memungkinkan user untuk menentukan jumlah dan nilai data secara bebas, membuat program lebih fleksibel dan interaktif. Penggunaan loop untuk input dan insertion membuat program dapat menangani berbagai ukuran data.

9. **Traversal** merupakan operasi fundamental dalam linked list yang digunakan oleh berbagai fungsi seperti `printInfo()`, `nbList()`, dan operasi delete. Proses traversal dilakukan dengan mengiterasi dari node `First` hingga mencapai `NULL`.

10. Implementasi Singly Linked List mendemonstrasikan pentingnya pemahaman tentang **pointer manipulation**, **dynamic memory allocation**, dan **sequential data structure** dalam pemrograman struktur data yang efisien dan efektif.

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
