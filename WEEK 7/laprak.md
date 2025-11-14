# <h1 align="center">Laporan Praktikum Modul 6 - Doubly Linked List</h1>
<p align="center">muhammad gamel al ghifari - 103112400028</p>

---

## Dasar Teori

### Doubly Linked List

Doubly Linked List adalah struktur data linear yang terdiri dari kumpulan node, dimana setiap node memiliki tiga komponen utama: data, pointer ke node berikutnya (next), dan pointer ke node sebelumnya (prev) [1]. Berbeda dengan single linked list yang hanya memiliki satu pointer ke node berikutnya, doubly linked list memungkinkan traversal atau penelusuran data dalam dua arah yaitu maju (forward) dan mundur (backward) [2].

#### Struktur Node Doubly Linked List

Setiap node dalam doubly linked list memiliki struktur sebagai berikut [1]:
- **Info/Data**: Menyimpan informasi atau nilai data
- **Next**: Pointer yang menunjuk ke node berikutnya dalam list
- **Prev**: Pointer yang menunjuk ke node sebelumnya dalam list

Node pertama dalam list disebut head atau first, dan node terakhir disebut tail atau last. Pointer prev dari node pertama dan pointer next dari node terakhir bernilai NULL atau Nil [3]. Cormen et al. (2009) menjelaskan bahwa "In a doubly linked list, each element contains pointers to both its successor and its predecessor, allowing traversal in either direction" [1].

#### Keunggulan Doubly Linked List

Doubly Linked List memiliki beberapa keunggulan dibandingkan dengan Single Linked List [2][3]:

1. **Traversal Dua Arah**: Dapat melakukan penelusuran dari depan ke belakang maupun sebaliknya
2. **Penghapusan Efisien**: Operasi delete lebih mudah karena memiliki akses langsung ke node sebelumnya tanpa perlu penelusuran dari awal
3. **Insert dan Delete Fleksibel**: Dapat melakukan insert atau delete pada posisi manapun dengan lebih mudah
4. **Navigasi Mudah**: Memudahkan implementasi operasi seperti undo-redo dalam aplikasi

Goodrich et al. (2014) menyatakan bahwa "A doubly linked list provides a more symmetric abstraction than a singly linked list, as we can efficiently insert and delete elements at both ends of the list" [3].

#### Kekurangan Doubly Linked List

Meskipun memiliki keunggulan, doubly linked list juga memiliki beberapa kekurangan [1][2]:

1. **Penggunaan Memori Lebih Besar**: Membutuhkan memori tambahan untuk menyimpan pointer prev pada setiap node
2. **Kompleksitas Implementasi**: Lebih kompleks dalam implementasi karena harus mengelola dua pointer
3. **Operasi Lebih Rumit**: Setiap operasi insert atau delete memerlukan update pada lebih banyak pointer

#### Operasi Dasar Doubly Linked List

Operasi-operasi dasar yang dapat dilakukan pada doubly linked list meliputi [3]:

1. **Create List**: Membuat list kosong dengan menginisialisasi pointer first dan last menjadi NULL
2. **Insert Operations**:
   - **Insert First**: Menambahkan node baru di awal list
   - **Insert Last**: Menambahkan node baru di akhir list
   - **Insert After**: Menambahkan node baru setelah node tertentu
3. **Delete Operations**:
   - **Delete First**: Menghapus node pertama dari list
   - **Delete Last**: Menghapus node terakhir dari list
   - **Delete After**: Menghapus node setelah node tertentu
4. **Traversal**: Melakukan penelusuran semua node dalam list dari depan ke belakang atau sebaliknya
5. **Search**: Mencari node dengan nilai data tertentu dalam list [2]

#### Kompleksitas Waktu Operasi

Kompleksitas waktu untuk berbagai operasi pada doubly linked list adalah [1][3]:

| Operasi | Kompleksitas Waktu |
|---------|-------------------|
| Insert First | O(1) |
| Insert Last | O(1) |
| Delete First | O(1) |
| Delete Last | O(1) |
| Search | O(n) |
| Traversal | O(n) |

#### Aplikasi Doubly Linked List

Doubly Linked List banyak digunakan dalam berbagai aplikasi seperti [2][3]:

1. **Browser Web**: Implementasi tombol back dan forward
2. **Music Player**: Navigasi playlist (previous dan next song)
3. **Undo-Redo Functionality**: Dalam text editor dan aplikasi grafis
4. **Cache Implementation**: LRU (Least Recently Used) Cache
5. **Navigation Systems**: Sistem navigasi yang memerlukan pergerakan dua arah

Karumanchi (2016) menambahkan bahwa "Doubly linked lists are particularly useful in applications that require bidirectional traversal, such as implementing deques and navigation systems" [2].

---

## Guided

### 1. Doubly Linked List Makanan dengan Operasi Insert dan Update

Program ini mengimplementasikan Doubly Linked List untuk data makanan dengan operasi insert (insertFirst, insertLast, insertAfter, insertBefore) dan update (updateFirst, updateLast, updateAfter, updateBefore).

#### main.cpp
```C++
#include "listMakanan.h"
#include <iostream>

using namespace std;
void insertFirst(linkedlist &List, address nodeBaru);
void insertLast(linkedlist &List, address nodeBaru);
void insertAfter(linkedlist &List, address nodeBaru, address Prev);
void insertBefore(linkedlist &List, address nodeBaru, address nodeNext);

void printList(linkedlist List);

void updateFirst(linkedlist List);
void updateLast(linkedlist List);
void updateAfter(linkedlist List, address prev);
void updateBefore(linkedlist List, address nodeNext);

#endif
```

#### listmakanan.cpp
```C++
#include "listMakanan.h"
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
    List.last = Nil;
}

address alokasi(string nama, string jenis, float harga, float rating) { 
    address nodeBaru = new node;
    nodeBaru->isidata.nama = nama;
    nodeBaru->isidata.jenis = jenis; 
    nodeBaru->isidata.harga = harga;
    nodeBaru->isidata.rating =  rating;
    nodeBaru->next = Nil;
    nodeBaru->prev = Nil;
    return nodeBaru;
}

void dealokasi(address &node) {
    node->next = Nil;
    node->prev = Nil;
    delete node;
}

void insertFirst(linkedlist &List, address nodeBaru){
    if (isEmpty(List)) {
        List.first = List.last = nodeBaru;
    } else {
        nodeBaru->next = List.first;
        List.first->prev = nodeBaru;
        List.first = nodeBaru;
    }
    cout << "Node " << nodeBaru->isidata.nama << " berhasil ditambahkan sebagai node pertama list" << endl;
}

void insertLast(linkedlist &List, address nodeBaru){
    if(isEmpty(List) == true){
        List.first = List.last = nodeBaru;
    } else {
        nodeBaru->prev = List.last;
        List.last->next = nodeBaru;
        List.last = nodeBaru;
    }
    cout << "Node " << nodeBaru->isidata.nama << " berhasil ditambahkan sebagai node terakhir list" << endl;
}

void insertAfter(linkedlist &List, address nodeBaru, address nodePrev){
    if(isEmpty(List) == true){
        List.first = List.last = nodeBaru;
    } else {
        if (nodePrev != Nil){
            if(nodePrev == List.last){
                insertLast(List, nodeBaru);
            } else {
                nodeBaru->next = nodePrev->next;
                nodeBaru->prev = nodePrev;
                (nodePrev->next)->prev = nodeBaru;
                nodePrev->next = nodeBaru;
                cout << "Node " << nodeBaru->isidata.nama << " berhasil ditambahkan setelah node " << nodePrev->isidata.nama << endl;
            }
        } else {
            cout << "node sebelumnya (nodePrev) tidak valid!" << endl;
        }
    }
}

void insertBefore(linkedlist &List, address nodeBaru, address nodeNext){
    if(isEmpty(List) == true){
        List.first = List.last = nodeBaru;
    } else {
        if (nodeNext != Nil){
            if(nodeNext == List.first){
                insertFirst(List, nodeBaru);
            } else {
                nodeBaru->next = nodeNext;
                nodeBaru->prev = nodeNext->prev;
                (nodeNext->prev)->next = nodeBaru;
                nodeNext->prev = nodeBaru;
                cout << "Node " << nodeBaru->isidata.nama << " berhasil ditambahkan sebelum node " << nodeNext->isidata.nama << endl;
            }
        } else {
            cout << "node setelahnya (nodeNext) tidak valid!" << endl;
        }
    }
}

void printList(linkedlist List) {
    if (isEmpty(List) == true) {
        cout << "List kosong!" << endl;
    } else {
        address nodeBantu = List.first;
        while (nodeBantu != Nil) { 
            cout << "Nama makanan : " << nodeBantu->isidata.nama << endl;
            cout << "Jenis        : " << nodeBantu->isidata.jenis << endl;
            cout << "Harga        : " << nodeBantu->isidata.harga << endl; 
            cout << "Rating       : " << nodeBantu->isidata.rating << endl;
            cout << "-------------------------------" << endl;
            nodeBantu = nodeBantu->next;
        }
    }
}

void updateFirst(linkedlist List){
    if(isEmpty(List) == true){
        cout << "List kosong!" << endl;
    } else {
        cout << "Masukkan update data node pertama : " << endl;
        cout << "Nama makanan : ";
        getline(cin, List.first->isidata.nama);
        cout << "Jenis makanan : ";
        getline(cin, List.first->isidata.jenis);
        cout << "Harga : ";
        cin >> List.first->isidata.harga;
        cout << "Rating : ";
        cin >> List.first->isidata.rating;
        cin.ignore();
        cout << "Data Berhasil Diupdate!" << endl;
        cout << endl; 
    }
}

void updateLast(linkedlist List){
    if(isEmpty(List) == true){
        cout << "List kosong!" << endl;
    } else {
        cout << "Masukkan update data node terakhir : " << endl;
        cout << "Nama makanan : ";
        getline(cin, List.last->isidata.nama);
        cout << "Jenis makanan : ";
        getline(cin, List.last->isidata.jenis);
        cout << "Harga : ";
        cin >> List.last->isidata.harga;
        cout << "Rating : ";
        cin >> List.last->isidata.rating;
        cin.ignore();
        cout << "Data Berhasil Diupdate!" << endl;
        cout << endl; 
    }
}

void updateAfter(linkedlist List, address nodePrev){
    if(isEmpty(List) == true){
        cout << "List kosong!" << endl;
    } else {
        if(nodePrev != Nil && nodePrev->next != Nil){
            address nodeBantu = nodePrev->next;
            cout << "masukkan update data node setelah node " << nodePrev->isidata.nama << " : " << endl;
            cout << "Nama makanan : ";
            getline(cin, nodeBantu->isidata.nama);
            cout << "Jenis makanan : ";
            getline(cin, nodeBantu->isidata.jenis);
            cout << "Harga : ";
            cin >> nodeBantu->isidata.harga;
            cout << "Rating : ";
            cin >> nodeBantu->isidata.rating;
            cin.ignore();
            cout << "Data Berhasil Diupdate!" << endl;
            cout << endl;
        } else {
            cout << "Node sebelumnya (nodePrev) tidak valid!" << endl;
        }
    }
}

void updateBefore(linkedlist List, address nodeNext){
    if(isEmpty(List) == true){
        cout << "List kosong!" << endl;
    } else {
        if (nodeNext != Nil && nodeNext->prev != Nil){
            address nodeBantu = nodeNext->prev;
            cout << "masukkan update data node sebelum node " << nodeNext->isidata.nama << " : " << endl;
            cout << "Nama makanan : ";
            getline(cin, nodeBantu->isidata.nama);
            cout << "Jenis makanan : ";
            getline(cin, nodeBantu->isidata.jenis);
            cout << "Harga : ";
            cin >> nodeBantu->isidata.harga;
            cout << "Rating : ";
            cin >> nodeBantu->isidata.rating;
            cin.ignore();
            cout << "Data Berhasil Diupdate!" << endl;
            cout << endl;
        } else {
            cout << "Node selanjutnya (nodeNext) tidak valid!" << endl;
        }
    }
}
```

**Penjelasan Program:**

Program ini mengimplementasikan struktur data Doubly Linked List untuk menyimpan data makanan dengan atribut nama, jenis, harga, dan rating. Doubly Linked List memiliki dua pointer pada setiap node (next dan prev) yang memungkinkan traversal dua arah.

**Struktur Data:**
- Struct `makanan` menyimpan data makanan (nama, jenis, harga, rating)
- Struct `node` berisi data makanan dan dua pointer (next dan prev)
- Struct `linkedlist` memiliki pointer first (awal) dan last (akhir)

**Operasi Insert:**
- `insertFirst()`: Menambah node di awal list dengan mengupdate pointer prev dan next
- `insertLast()`: Menambah node di akhir list
- `insertAfter()`: Menambah node setelah node tertentu dengan mengatur pointer prev dan next
- `insertBefore()`: Menambah node sebelum node tertentu (fitur khusus doubly linked list)

**Operasi Update:**
- `updateFirst()`: Mengupdate data node pertama
- `updateLast()`: Mengupdate data node terakhir  
- `updateAfter()`: Mengupdate data node setelah node tertentu
- `updateBefore()`: Mengupdate data node sebelum node tertentu (fitur khusus doubly linked list)

**Alur Program:**
1. Membuat 5 node makanan (Nasi Rames, Ayam Geprek, Risol Mayo, Mie Ayam, Donat)
2. Melakukan insert dengan urutan: insertFirst(D), insertLast(E), insertAfter(A,D), insertBefore(C,E), insertLast(B)
3. Hasil urutan list: D - A - C - E - B
4. Menampilkan isi list setelah insert
5. Melakukan update pada node pertama, terakhir, sebelum C, dan setelah C
6. Menampilkan isi list setelah update

**Kesimpulan:**

Program ini mendemonstrasikan keunggulan Doubly Linked List yaitu kemampuan untuk melakukan operasi insertBefore dan updateBefore yang tidak efisien pada Single Linked List.

---

### 2. Doubly Linked List Kendaraan dengan Operasi Search dan Delete

Program ini mengimplementasikan Doubly Linked List untuk data kendaraan dengan operasi insertLast, findElm (searching), dan deleteByNopol (delete).

#### main.cpp
```C++
#include "Doublylist.h"

using namespace std;

int main() {
    List L;
    CreateList(L);
    address P;
    infotype data;

    data = {"D001", "hitam", 90}; P = alokasi(data); insertLast(L, P);
    data = {"D003", "putih", 70}; P = alokasi(data); insertLast(L, P);
    data = {"D004", "kuning", 90}; P = alokasi(data); insertLast(L, P);

    cout << "DATA LIST AWAL" << endl;
    printInfo(L);

    string cariNopol = "D001";
    cout << "MENCARI NOPOL " << cariNopol << " -" << endl;
    address found = findElm(L, cariNopol);
    if (found != Nil) {
        cout << "Ditemukan: " << found->info.nopol << ", Warna: " << found->info.warna << endl << endl;
    } else {
        cout << cariNopol << " tidak ditemukan." << endl << endl;
    }

    string hapusNopol = "D003";
    cout << "MENGHAPUS NOPOL " << hapusNopol << " -" << endl;
    deleteByNopol(L, hapusNopol);
    cout << endl;

    cout << "DATA LIST SETELAH HAPUS" << endl;
    printInfo(L);

    cout << "MENGHAPUS ELEMEN PERTAMA " << endl;
    deleteByNopol(L, L.first->info.nopol);
    cout << endl;
    printInfo(L);

    return 0;
}
```

#### doublylist.h
```C++
#ifndef DOUBLYLIST_H
#define DOUBLYLIST_H

#include <iostream>
#include <string>
#define Nil NULL

using namespace std;

struct kendaraan {
    string nopol; 
    string warna;
    int thnBuat;
};
typedef kendaraan infotype;

typedef struct ElmList *address;
struct ElmList {
    infotype info;
    address next;
    address prev;
};

struct List {
    address first;
    address last;
};

void CreateList(List &L);
address alokasi(infotype x);
void dealokasi(address &P);
void insertLast(List &L, address P);
address findElm(List L, string nopol);
void deleteByNopol(List &L, string nopol);
void printInfo(List L);

#endif
```

#### doublylist.cpp
```C++
#include "Doublylist.h"
using namespace std;

void CreateList(List &L) {
    L.first = Nil;
    L.last = Nil;
}

address alokasi(infotype x) {
    address P = new ElmList;
    P->info = x;
    P->next = Nil;
    P->prev = Nil;
    return P;
}

void dealokasi(address &P) {
    delete P;
}

void insertLast(List &L, address P) {
    if (L.first == Nil) {
        L.first = P;
        L.last = P;
    } else {
        P->prev = L.last;
        (L.last)->next = P;
        L.last = P;
    }
}

address findElm(List L, string nopol) {
    address P = L.first;
    while (P != Nil) {
        if (P->info.nopol == nopol) {
            return P;
        }
        P = P->next;
    }
    return Nil;
}

void deleteByNopol(List &L, string nopol) {
    address P = findElm(L, nopol);
    if (P == Nil) {
        cout << "Nomor polisi " << nopol << " tidak ditemukan.\n";
    } else {
        if (P == L.first && P == L.last) {
            L.first = Nil; L.last = Nil;
        } else if (P == L.first) {
            L.first = P->next;
            (L.first)->prev = Nil;
        } else if (P == L.last) {
            L.last = P->prev;
            (L.last)->next = Nil; P->prev = Nil;
        } else {
            address Prec = P->prev;
            address Succ = P->next;
            Prec->next = Succ; Succ->prev = Prec;
            P->next = Nil; P->prev = Nil;
        }
        dealokasi(P);
        cout << "Data dengan nomor polisi " << nopol << " berhasil dihapus.\n";
    }
}

void printInfo(List L) {
    address P = L.first;
    if (P == Nil) {
        cout << "List Kosong.\n";
    } else {
        while (P != Nil) {
            cout << "no polisi: " << P->info.nopol << endl;
            cout << "warna    : " << P->info.warna << endl;
            cout << "tahun    : " << P->info.thnBuat << endl << endl;
            P = P->next;
        }
    }
}
```

**Penjelasan Program:**

Program ini mengimplementasikan Doubly Linked List untuk menyimpan data kendaraan dengan atribut nomor polisi, warna, dan tahun pembuatan. Program mendemonstrasikan operasi pencarian (search) dan penghapusan (delete) pada doubly linked list.

**Struktur Data:**
- Struct `kendaraan` menyimpan info kendaraan (nopol, warna, thnBuat)
- Struct `ElmList` berisi info kendaraan dan dua pointer (next dan prev)
- Struct `List` memiliki pointer first dan last untuk akses cepat ke kedua ujung list

**Operasi Utama:**

1. **CreateList(List &L)**:
   - Membuat list kosong dengan mengset first dan last ke Nil

2. **alokasi(infotype x)**:
   - Mengalokasikan memori untuk node baru
   - Menginisialisasi info dengan data x
   - Mengset next dan prev ke Nil
   - Return pointer ke node baru

3. **insertLast(List &L, address P)**:
   - Menambahkan node di akhir list
   - Jika list kosong: first dan last = P
   - Jika ada isi: hubungkan P dengan last, update last = P

4. **findElm(List L, string nopol)**:
   - Mencari node dengan nomor polisi tertentu
   - Melakukan traversal dari first hingga akhir
   - Return address node jika ditemukan, Nil jika tidak
   - Kompleksitas: O(n)

5. **deleteByNopol(List &L, string nopol)**:
   - Menghapus node berdasarkan nomor polisi
   - Memanggil findElm untuk mencari node
   - Menangani 4 kasus penghapusan:
     * Hanya 1 elemen: set first dan last = Nil
     * Hapus elemen pertama: update first dan prev
     * Hapus elemen terakhir: update last dan next
     * Hapus elemen tengah: hubungkan prev dan next node
   - Dealokasi memori node yang dihapus

6. **printInfo(List L)**:
   - Menampilkan seluruh isi list
   - Traversal dari first hingga Nil

**Alur Program:**
1. Membuat list kosong
2. Menambahkan 3 data kendaraan (D001, D003, D004) menggunakan insertLast
3. Menampilkan data list awal
4. Mencari kendaraan dengan nopol D001 menggunakan findElm
5. Menghapus kendaraan dengan nopol D003 menggunakan deleteByNopol
6. Menampilkan data list setelah penghapusan
7. Menghapus elemen pertama dari list
8. Menampilkan data list akhir

**Keunggulan Doubly Linked List dalam Program Ini:**
- **Penghapusan Efisien**: Dapat mengakses prev node langsung tanpa traversal dari awal
- **Fleksibilitas**: Mudah menghapus node di posisi manapun (first, last, middle)
- **Pointer Bidirectional**: Memudahkan operasi yang membutuhkan akses ke node sebelumnya

**Kompleksitas Operasi:**
- Insert Last: O(1) - karena memiliki pointer last
- Find Element: O(n) - harus traverse hingga ketemu atau sampai akhir
- Delete: O(n) - karena harus search dulu, tapi delete itu sendiri O(1)
- Print Info: O(n) - harus traverse semua node

---

## Unguided

### 1. Implementasi ADT Doubly Linked List Kendaraan

Implementasikan ADT Doubly Linked List pada file `Doublylist.h`/`Doublylist.cpp` dan uji di `main.cpp`.

Spesifikasi (singkat):
```
Tipe infotype : kendaraan {
    nopol : string
    warna : string
    thnBuat : integer
}

Tipe address : pointer ke ElmList
ElmList {
    info : infotype
    next : address
    prev : address
}

List {
    first : address
    last  : address
}
```

Prosedur/Fungsi yang diimplementasikan (singkat):
- CreateList(L)
- alokasi(x) -> address
- dealokasi(P)
- insertLast(L, P)
- findElm(L, x)
- deleteByNopol(L, nopol)
- printInfo(L)

Terapkan dan jalankan `main.cpp` untuk memverifikasi output.

Ringkasan implementasi dan alur (singkat):
- Buat list kosong, alokasikan node, tambahkan dengan insertLast.
- `findElm` melakukan traversal linear berdasarkan `nopol` dan mengembalikan address atau `Nil`.
- `deleteByNopol` mencari node lalu menangani 4 kasus (satu elemen, pertama, terakhir, tengah), kemudian dealokasi.
- Kompleksitas: insert/delete ujung O(1), pencarian O(n).

---

### Unguided 1

#### `unguided1/Doublylist.h`
```cpp
#ifndef DOUBLYLIST_H
#define DOUBLYLIST_H

#include <iostream>
#include <string>
#define Nil NULL

using namespace std;

struct kendaraan {
    string nopol; 
    string warna;
    int thnBuat;
};
typedef kendaraan infotype;

typedef struct ElmList *address;
struct ElmList {
    infotype info;
    address next;
    address prev;
};

struct List {
    address first;
    address last;
};

void CreateList(List &L);
address alokasi(infotype x);
void dealokasi(address &P);
void insertLast(List &L, address P);
address findElm(List L, string nopol);
void deleteByNopol(List &L, string nopol);
void printInfo(List L);

#endif
```

#### `unguided1/Doublylist.cpp`
```cpp
#include "Doublylist.h"
using namespace std;

void CreateList(List &L) {
    L.first = Nil;
    L.last = Nil;
}

address alokasi(infotype x) {
    address P = new ElmList;
    P->info = x;
    P->next = Nil;
    P->prev = Nil;
    return P;
}

void dealokasi(address &P) {
    delete P;
}

void insertLast(List &L, address P) {
    if (L.first == Nil) {
        L.first = P;
        L.last = P;
    } else {
        P->prev = L.last;
        (L.last)->next = P;
        L.last = P;
    }
}

address findElm(List L, string nopol) {
    address P = L.first;
    while (P != Nil) {
        if (P->info.nopol == nopol) {
            return P;
        }
        P = P->next;
    }
    return Nil;
}

void deleteByNopol(List &L, string nopol) {
    address P = findElm(L, nopol);
    if (P == Nil) {
        cout << "Nomor polisi " << nopol << " tidak ditemukan.\n";
    } else {
        if (P == L.first && P == L.last) {
            L.first = Nil; L.last = Nil;
        } else if (P == L.first) {
            L.first = P->next;
            (L.first)->prev = Nil;
        } else if (P == L.last) {
            L.last = P->prev;
            (L.last)->next = Nil; P->prev = Nil;
        } else {
            address Prec = P->prev;
            address Succ = P->next;
            Prec->next = Succ; Succ->prev = Prec;
            P->next = Nil; P->prev = Nil;
        }
        dealokasi(P);
        cout << "Data dengan nomor polisi " << nopol << " berhasil dihapus.\n";
    }
}

void printInfo(List L) {
    address P = L.first;
    if (P == Nil) {
        cout << "List Kosong.\n";
    } else {
        while (P != Nil) {
            cout << "no polisi: " << P->info.nopol << endl;
            cout << "warna    : " << P->info.warna << endl;
            cout << "tahun    : " << P->info.thnBuat << endl << endl;
            P = P->next;
        }
    }
}
```

#### `unguided1/main.cpp`
```cpp
#include "Doublylist.h"

using namespace std;

int main() {
    List L;
    CreateList(L);
    address P;
    infotype data;

    data = {"D001", "hitam", 90}; P = alokasi(data); insertLast(L, P);
    data = {"D003", "putih", 70}; P = alokasi(data); insertLast(L, P);
    data = {"D004", "kuning", 90}; P = alokasi(data); insertLast(L, P);

    cout << "DATA LIST AWAL" << endl;
    printInfo(L);

    string cariNopol = "D001";
    cout << "MENCARI NOPOL " << cariNopol << " -" << endl;
    address found = findElm(L, cariNopol);
    if (found != Nil) {
        cout << "Ditemukan: " << found->info.nopol << ", Warna: " << found->info.warna << endl << endl;
    } else {
        cout << cariNopol << " tidak ditemukan." << endl << endl;
    }

    string hapusNopol = "D003";
    cout << "MENGHAPUS NOPOL " << hapusNopol << " -" << endl;
    deleteByNopol(L, hapusNopol);
    cout << endl;

    cout << "DATA LIST SETELAH HAPUS" << endl;
    printInfo(L);

    cout << "MENGHAPUS ELEMEN PERTAMA " << endl;
    deleteByNopol(L, L.first->info.nopol);
    cout << endl;
    printInfo(L);

    return 0;
}
```

**Penjelasan singkat (Unguided 1):**
- Program mengimplementasikan ADT Doubly Linked List untuk menyimpan data kendaraan.
- `findElm(List, string)` mencari node berdasarkan `nopol`.
- `deleteByNopol` menghapus node yang ditemukan (menangani kasus first/last/middle).
- `printInfo` menampilkan semua node.

**Template output (letakkan screenshot program di path yang ditunjuk):**
![Output Unguided 1](images/unguided1_output.png)
[Link foto (lokal)](images/unguided1_output.png)

---

### Unguided 2

#### `unguided2/Doublylist.h`
```cpp
#ifndef DOUBLYLIST_H
#define DOUBLYLIST_H

#include <iostream>
#include <string>
#define Nil NULL

using namespace std;

struct kendaraan {
    string nopol; 
    string warna;
    int thnBuat;
};
typedef kendaraan infotype;

typedef struct ElmList *address;
struct ElmList {
    infotype info;
    address next;
    address prev;
};

struct List {
    address first;
    address last;
};

void CreateList(List &L);
address alokasi(infotype x);
void dealokasi(address &P);
void insertLast(List &L, address P);
address findElm(List L, infotype x);
void printInfo(List L);

#endif
```

#### `unguided2/Doublylist.cpp`
```cpp
#include "Doublylist.h"
using namespace std;

void CreateList(List &L) {
    L.first = Nil;
    L.last = Nil;
}

address alokasi(infotype x) {
    address P = new ElmList;
    P->info = x;
    P->next = Nil;
    P->prev = Nil;
    return P;
}

void dealokasi(address &P) {
    delete P;
}

void insertLast(List &L, address P) {
    if (L.first == Nil) {
        L.first = P;
        L.last = P;
    } else {
        P->prev = L.last;
        (L.last)->next = P;
        L.last = P;
    }
}

address findElm(List L, infotype x) {
    address P = L.first;
    while (P != Nil) {
        if (P->info.nopol == x.nopol) {
            return P;
        }
        P = P->next;
    }
    return Nil;
}

void printInfo(List L) {
    address P = L.first;
    if (P == Nil) {
        cout << "List Kosong.\n";
    } else {
        while (P != Nil) {
            cout << "nomor polisi : " << P->info.nopol << endl;
            cout << "warna        : " << P->info.warna << endl;
            cout << "tahun        : " << P->info.thnBuat << endl << endl;
            P = P->next;
        }
    }
}
```

#### `unguided2/main.cpp`
```cpp
#include "Doublylist.h"

using namespace std;

int main() {
    List L;
    CreateList(L);
    address P;
    infotype data;

    data = {"D001", "hitam", 90}; P = alokasi(data); insertLast(L, P);
    data = {"D003", "putih", 70}; P = alokasi(data); insertLast(L, P);
    data = {"D004", "kuning", 90}; P = alokasi(data); insertLast(L, P);

    infotype cari = {"D001", "", 0};
    address found = findElm(L, cari);
    
    if (found != Nil) {
        cout << "Masukkan Nomor Polisi yang dicari  : D001" << endl;
        cout << "nomor polisi : " << found->info.nopol << endl;
        cout << "warna        : " << found->info.warna << endl;
        cout << "tahun        : " << found->info.thnBuat << endl;
    } else {
        cout << "Data tidak ditemukan." << endl;
    }

    return 0;
}
```

**Penjelasan singkat (Unguided 2):**
- `findElm` di sini menerima `infotype` (dengan `nopol` diisi) dan mencari node berdasarkan `x.nopol`.
- Fungsi lain mengelola list dan menampilkan isi.

![Output Unguided 2](images/unguided2_output.png)
[Link foto (lokal)](images/unguided2_output.png)

---

### Unguided 3

#### `unguided3/Doublylist.h`
```cpp
#ifndef DOUBLYLIST_H
#define DOUBLYLIST_H

#include <iostream>
#include <string>
#define Nil NULL

using namespace std;

struct kendaraan {
    string nopol; 
    string warna;
    int thnBuat;
};
typedef kendaraan infotype;

typedef struct ElmList *address;
struct ElmList {
    infotype info;
    address next;
    address prev;
};

struct List {
    address first;
    address last;
};

void CreateList(List &L);
address alokasi(infotype x);
void dealokasi(address &P);
void insertLast(List &L, address P);
address findElm(List L, infotype x);
void deleteLast(List &L, address &P);
void deleteAfter(List &L, address Prec, address &P);
void printInfo(List L);

#endif
```

#### `unguided3/Doublylist.cpp`
```cpp
#include "Doublylist.h"
using namespace std;

void CreateList(List &L) {
    L.first = Nil;
    L.last = Nil;
}

address alokasi(infotype x) {
    address P = new ElmList;
    P->info = x;
    P->next = Nil;
    P->prev = Nil;
    return P;
}

void dealokasi(address &P) {
    delete P;
}

void insertLast(List &L, address P) {
    if (L.first == Nil) {
        L.first = P;
        L.last = P;
    } else {
        P->prev = L.last;
        (L.last)->next = P;
        L.last = P;
    }
}

address findElm(List L, infotype x) {
    address P = L.first;
    while (P != Nil) {
        if (P->info.nopol == x.nopol) {
            return P;
        }
        P = P->next;
    }
    return Nil;
}

void deleteLast(List &L, address &P) {
    if (L.first == Nil) {
        P = Nil;
    } else if (L.first == L.last) {
        P = L.first;
        L.first = Nil;
        L.last = Nil;
    } else {
        P = L.last;
        L.last = P->prev;
        L.last->next = Nil;
        P->prev = Nil;
    }
}

void deleteAfter(List &L, address Prec, address &P) {
    if (Prec != Nil && Prec->next != Nil) {
        P = Prec->next;
        if (P == L.last) {
            L.last = Prec;
            Prec->next = Nil;
        } else {
            Prec->next = P->next;
            P->next->prev = Prec;
        }
        P->next = Nil;
        P->prev = Nil;
    }
}

void printInfo(List L) {
    address P = L.first;
    if (P == Nil) {
        cout << "List Kosong.\n";
    } else {
        while (P != Nil) {
            cout << "nomor polisi : " << P->info.nopol << endl;
            cout << "warna        : " << P->info.warna << endl;
            cout << "tahun        : " << P->info.thnBuat << endl << endl;
            P = P->next;
        }
    }
}
```

#### `unguided3/main.cpp`
```cpp
#include "Doublylist.h"

using namespace std;

int main() {
    List L;
    CreateList(L);
    address P;
    infotype data;

    data = {"D001", "hitam", 90}; P = alokasi(data); insertLast(L, P);
    data = {"D003", "putih", 70}; P = alokasi(data); insertLast(L, P);
    data = {"D004", "kuning", 90}; P = alokasi(data); insertLast(L, P);

    infotype cari = {"D003", "", 0};
    address found = findElm(L, cari);
    
    if (found != Nil) {
        address Prec = found->prev;
        address toDelete;
        
        if (Prec != Nil) {
            deleteAfter(L, Prec, toDelete);
            cout << "Data dengan nomor polisi D003 berhasil dihapus." << endl << endl;
        } else if (found == L.last) {
            deleteLast(L, toDelete);
            cout << "Data dengan nomor polisi D003 berhasil dihapus." << endl << endl;
        }
        
        if (toDelete != Nil) {
            dealokasi(toDelete);
        }
        
        cout << "DATA LIST 1" << endl << endl;
        printInfo(L);
    } else {
        cout << "Data tidak ditemukan." << endl;
    }

    return 0;
}
```

**Penjelasan singkat (Unguided 3):**
- Sama seperti varian lain, tetapi menambahkan prosedur penghapusan `deleteLast` dan `deleteAfter` yang memudahkan operasi penghapusan tertentu.
- `findElm` menggunakan `infotype` sebagai parameter pencarian.

**Template output (screenshot):**
![Output Unguided 3](images/unguided3_output.png)
[Link foto (lokal)](images/unguided3_output.png)

---

Catatan: saya menempelkan source code persis dari file di folder `unguided1/`, `unguided2/`, dan `unguided3/`. Jika Anda ingin saya juga menambahkan sedikit komentar baris demi baris di setiap file atau menjalankan pengecekan kompilasi lokal, beri tahu — saya bisa lanjutkan.
```

#### Doublylist.cpp
```C++
#include "Doublylist.h"
using namespace std;

void CreateList(List &L) {
    L.first = Nil;
    L.last = Nil;
}

address alokasi(infotype x) {
    address P = new ElmList;
    P->info = x;
    P->next = Nil;
    P->prev = Nil;
    return P;
}

void dealokasi(address &P) {
    delete P;
}

void insertLast(List &L, address P) {
    if (L.first == Nil) {
        L.first = P;
        L.last = P;
    } else {
        P->prev = L.last;
        (L.last)->next = P;
        L.last = P;
    }
}

address findElm(List L, string nopol) {
    address P = L.first;
    while (P != Nil) {
        if (P->info.nopol == nopol) {
            return P;
        }
        P = P->next;
    }
    return Nil;
}

void deleteByNopol(List &L, string nopol) {
    address P = findElm(L, nopol);
    if (P == Nil) {
        cout << "Nomor polisi " << nopol << " tidak ditemukan.\n";
    } else {
        if (P == L.first && P == L.last) {
            L.first = Nil; L.last = Nil;
        } else if (P == L.first) {
            L.first = P->next;
            (L.first)->prev = Nil;
        } else if (P == L.last) {
            L.last = P->prev;
            (L.last)->next = Nil; P->prev = Nil;
        } else {
            address Prec = P->prev;
            address Succ = P->next;
            Prec->next = Succ; Succ->prev = Prec;
            P->next = Nil; P->prev = Nil;
        }
        dealokasi(P);
        cout << "Data dengan nomor polisi " << nopol << " berhasil dihapus.\n";
    }
}

void printInfo(List L) {
    address P = L.first;
    if (P == Nil) {
        cout << "List Kosong.\n";
    } else {
        while (P != Nil) {
            cout << "no polisi: " << P->info.nopol << endl;
            cout << "warna    : " << P->info.warna << endl;
            cout << "tahun    : " << P->info.thnBuat << endl << endl;
            P = P->next;
        }
    }
}
```

**Penjelasan Program:**

Program ini mengimplementasikan Abstract Data Type (ADT) Doubly Linked List untuk mengelola data kendaraan berdasarkan spesifikasi yang diberikan.

**Struktur Data:**

1. **infotype (kendaraan)**:
   - `nopol` (string): Nomor polisi kendaraan
   - `warna` (string): Warna kendaraan
   - `thnBuat` (integer): Tahun pembuatan kendaraan

2. **ElmList (Node)**:
   - `info` (infotype): Data kendaraan
   - `next` (address): Pointer ke node berikutnya
   - `prev` (address): Pointer ke node sebelumnya

3. **List**:
   - `First` (address): Pointer ke node pertama
   - `Last` (address): Pointer ke node terakhir

**Implementasi Procedure/Function:**

1. **CreateList(List &L)**:
   - Inisialisasi list kosong
   - Set First dan Last = Nil

2. **alokasi(infotype x) → address**:
   - Mengalokasikan memori untuk node baru
   - Mengisi data node dengan parameter x
   - Menginisialisasi next dan prev = Nil
   - Return address node baru

3. **dealokasi(address &P)**:
   - Membebaskan memori yang ditunjuk oleh P
   - Mencegah memory leak

4. **insertLast(List &L, address P)**:
   - Menambahkan node P di akhir list
   - Kasus list kosong: First = Last = P
   - Kasus list tidak kosong: Hubungkan P dengan Last, update Last = P

5. **findElm(List L, string nopol) → address**:
   - Mencari node berdasarkan nomor polisi
   - Traversal dari First hingga akhir
   - Return address node jika ditemukan, Nil jika tidak

6. **deleteByNopol(List &L, string nopol)**:
   - Menghapus node berdasarkan nomor polisi
   - Memanggil findElm untuk mencari node
   - Menangani 4 kasus penghapusan:
     * Hanya 1 elemen
     * Hapus elemen pertama
     * Hapus elemen terakhir
     * Hapus elemen tengah
   - Memanggil dealokasi untuk membebaskan memori

7. **printInfo(List L)**:
   - Menampilkan seluruh data dalam list
   - Format output: nopol, warna, tahun

**Alur Eksekusi Program:**

1. Membuat list kosong dengan CreateList
2. Mengalokasi dan menambahkan 3 data kendaraan:
   - D001: hitam, tahun 90
   - D003: putih, tahun 70
   - D004: kuning, tahun 90
3. Menampilkan data list awal
4. Mencari kendaraan D001 dengan findElm
5. Menghapus kendaraan D003 dengan deleteByNopol
6. Menampilkan data setelah penghapusan D003
7. Menghapus elemen pertama (D001)
8. Menampilkan data akhir list

**Keunggulan Implementasi:**

- **Modular**: Pemisahan header (.h), implementasi (.cpp), dan main program
- **Abstraksi**: ADT menyembunyikan detail implementasi dari user
- **Fleksibel**: Mudah ditambahkan fungsi baru tanpa mengubah struktur utama
- **Efisien**: Operasi insert dan delete di akhir list O(1) karena ada pointer Last
- **Aman**: Pengecekan kondisi pada setiap operasi untuk menghindari error

**Kompleksitas Waktu:**
- CreateList: O(1)
- alokasi: O(1)
- dealokasi: O(1)
- insertLast: O(1)
- findElm: O(n)
- deleteByNopol: O(n)
- printInfo: O(n)

![Output Program 1](https://raw.githubusercontent.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/master/WEEK%206/op1.png)

---

### 2. Pencarian Element dengan findElm

Carilah elemen dengan nomor polisi D001 dengan membuat fungsi baru:

```
function findElm(L : List, x : infotype) : address
```

#### main.cpp
```C++
#include "Doublylist.h"

using namespace std;

int main() {
    List L;
    CreateList(L);
    address P;
    infotype data;

    data = {"D001", "hitam", 90}; P = alokasi(data); insertLast(L, P);
    data = {"D003", "putih", 70}; P = alokasi(data); insertLast(L, P);
    data = {"D004", "kuning", 90}; P = alokasi(data); insertLast(L, P);

    infotype cari = {"D001", "", 0};
    address found = findElm(L, cari);
    
    if (found != Nil) {
        cout << "Masukkan Nomor Polisi yang dicari  : D001" << endl;
        cout << "nomor polisi : " << found->info.nopol << endl;
        cout << "warna        : " << found->info.warna << endl;
        cout << "tahun        : " << found->info.thnBuat << endl;
    } else {
        cout << "Data tidak ditemukan." << endl;
    }

    return 0;
}
```

#### Doublylist.h
```C++
#ifndef DOUBLYLIST_H
#define DOUBLYLIST_H

#include <iostream>
#include <string>
#define Nil NULL

using namespace std;

struct kendaraan {
    string nopol; 
    string warna;
    int thnBuat;
};
typedef kendaraan infotype;

typedef struct ElmList *address;
struct ElmList {
    infotype info;
    address next;
    address prev;
};

struct List {
    address first;
    address last;
};

void CreateList(List &L);
address alokasi(infotype x);
void dealokasi(address &P);
void insertLast(List &L, address P);
address findElm(List L, infotype x);
void printInfo(List L);

#endif
```

#### Doublylist.cpp
```C++
#include "Doublylist.h"
using namespace std;

void CreateList(List &L) {
    L.first = Nil;
    L.last = Nil;
}

address alokasi(infotype x) {
    address P = new ElmList;
    P->info = x;
    P->next = Nil;
    P->prev = Nil;
    return P;
}

void dealokasi(address &P) {
    delete P;
}

void insertLast(List &L, address P) {
    if (L.first == Nil) {
        L.first = P;
        L.last = P;
    } else {
        P->prev = L.last;
        (L.last)->next = P;
        L.last = P;
    }
}

address findElm(List L, infotype x) {
    address P = L.first;
    while (P != Nil) {
        if (P->info.nopol == x.nopol) {
            return P;
        }
        P = P->next;
    }
    return Nil;
}

void printInfo(List L) {
    address P = L.first;
    if (P == Nil) {
        cout << "List Kosong.\n";
    } else {
        while (P != Nil) {
            cout << "nomor polisi : " << P->info.nopol << endl;
            cout << "warna        : " << P->info.warna << endl;
            cout << "tahun        : " << P->info.thnBuat << endl << endl;
            P = P->next;
        }
    }
}
```

Bagian pencarian dan penghapusan sudah dirangkum di atas: `findElm` = traversal linear berdasarkan `nopol`; penggunaan utama: validasi sebelum update/delete dan mendapatkan address untuk operasi lanjutan.

![Output Program 2](https://raw.githubusercontent.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/master/WEEK%206/op2.png)

---

### 3. Penghapusan Element dengan Delete

Hapuslah elemen dengan nomor polisi D003 dengan prosedur delete:
```
procedure deleteLast(input/output L : List, input/output P : address)
procedure deleteAfter(input Prec : address, input/output P : address)
```

#### main.cpp
```C++
#include "Doublylist.h"

using namespace std;

int main() {
    List L;
    CreateList(L);
    address P;
    infotype data;

    data = {"D001", "hitam", 90}; P = alokasi(data); insertLast(L, P);
    data = {"D003", "putih", 70}; P = alokasi(data); insertLast(L, P);
    data = {"D004", "kuning", 90}; P = alokasi(data); insertLast(L, P);

    infotype cari = {"D003", "", 0};
    address found = findElm(L, cari);
    
    if (found != Nil) {
        address Prec = found->prev;
        address toDelete;
        
        if (Prec != Nil) {
            deleteAfter(L, Prec, toDelete);
            cout << "Data dengan nomor polisi D003 berhasil dihapus." << endl << endl;
        } else if (found == L.last) {
            deleteLast(L, toDelete);
            cout << "Data dengan nomor polisi D003 berhasil dihapus." << endl << endl;
        }
        
        if (toDelete != Nil) {
            dealokasi(toDelete);
        }
        
        cout << "DATA LIST 1" << endl << endl;
        printInfo(L);
    } else {
        cout << "Data tidak ditemukan." << endl;
    }

    return 0;
}
```

#### Doublylist.h
```C++
#ifndef DOUBLYLIST_H
#define DOUBLYLIST_H

#include <iostream>
#include <string>
#define Nil NULL

using namespace std;

struct kendaraan {
    string nopol; 
    string warna;
    int thnBuat;
};
typedef kendaraan infotype;

typedef struct ElmList *address;
struct ElmList {

    Ringkasan penghapusan (singkat):
    - `deleteLast`: hapus node terakhir, update pointer last; O(1)
    - `deleteAfter`: hapus node setelah `Prec`, sesuaikan `next`/`prev`; O(1)
    - Untuk menghapus berdasarkan kriteria (mis. `nopol`), panggil `findElm` lalu gunakan `deleteAfter`/`deleteLast` sesuai kasus.

    Sekilas: keunggulan utama adalah akses `prev` sehingga penghapusan di posisi manapun lebih mudah dibanding single linked list.
            cout << "nomor polisi : " << P->info.nopol << endl;
            cout << "warna        : " << P->info.warna << endl;
            cout << "tahun        : " << P->info.thnBuat << endl << endl;
            P = P->next;
        }
    }
}
```

**Penjelasan Program:**

Program ini mengimplementasikan dua prosedur penghapusan element pada Doubly Linked List: `deleteLast` dan `deleteAfter` untuk menghapus data kendaraan dengan nomor polisi D003.

**Prosedur deleteLast:**

```cpp
procedure deleteLast(input/output L : List, input/output P : address)
```

**Fungsi**: Menghapus node terakhir dari list

**Parameter:**
- `L` (List): List yang akan diubah
- `P` (address): Output berisi alamat node yang dihapus

**Algoritma:**
1. Jika list kosong (L.first == Nil):
   - Set P = Nil
2. Jika list hanya memiliki 1 elemen (L.first == L.last):
   - P = L.first
   - Set L.first dan L.last = Nil
3. Jika list memiliki lebih dari 1 elemen:
   - P = L.last (simpan node terakhir)
   - L.last = P->prev (update last ke node sebelumnya)
   - L.last->next = Nil (putuskan hubungan)
   - P->prev = Nil (bersihkan pointer P)

**Prosedur deleteAfter:**

```cpp
procedure deleteAfter(input/output L : List, input Prec : address, input/output P : address)
```

**Fungsi**: Menghapus node setelah node Prec

**Parameter:**
- `L` (List): List yang akan diubah
- `Prec` (address): Node sebelum node yang akan dihapus
- `P` (address): Output berisi alamat node yang dihapus

**Algoritma:**
1. Validasi Prec dan Prec->next tidak Nil
2. P = Prec->next (node yang akan dihapus)
3. Jika P adalah node terakhir (P == L.last):
   - Update L.last = Prec
   - Prec->next = Nil
4. Jika P di tengah list:
   - Prec->next = P->next (lewati P)
   - P->next->prev = Prec (hubungkan balik)
5. Bersihkan pointer P:
   - P->next = Nil
   - P->prev = Nil

**Alur Eksekusi Program:**

1. Membuat list kosong dan menambahkan 3 data kendaraan:
   - D001: hitam, tahun 90
   - D003: putih, tahun 70
   - D004: kuning, tahun 90
   - Urutan list: D001 → D003 → D004

2. Mencari kendaraan D003 dengan findElm

3. Jika D003 ditemukan:
   - Simpan Prec = found->prev (D001)
   - Jika Prec tidak Nil:
     * Panggil deleteAfter(L, Prec, toDelete)
     * Ini akan menghapus node setelah D001 (yaitu D003)
   - Jika found adalah last:
     * Panggil deleteLast(L, toDelete)
   
4. Dealokasi memori node yang dihapus

5. Tampilkan list setelah penghapusan

**Output Program:**
```
Data dengan nomor polisi D003 berhasil dihapus.

DATA LIST 1

nomor polisi : D001
warna        : hitam
tahun        : 90

nomor polisi : D004
warna        : kuning
tahun        : 90
```

**Keunggulan Doubly Linked List dalam Penghapusan:**

1. **Akses Prev Node**: Dapat mengakses node sebelumnya (Prec) langsung melalui pointer prev
2. **Efisiensi deleteLast**: O(1) karena memiliki pointer last
3. **Fleksibilitas**: Mudah menghapus node di posisi manapun
4. **Update Bidirectional**: Dapat update pointer next dan prev dengan mudah

**Kompleksitas Operasi:**
- **deleteLast**: O(1) - akses langsung ke last
- **deleteAfter**: O(1) - akses langsung ke node yang akan dihapus
- **findElm**: O(n) - harus traverse list untuk mencari
- **Total Kompleksitas Program**: O(n) - didominasi oleh operasi findElm

**Perbedaan dengan Single Linked List:**

Pada Single Linked List, untuk menghapus node tertentu diperlukan:
- Traversal dari awal untuk mendapatkan node sebelumnya
- Kompleksitas O(n) untuk setiap penghapusan

Pada Doubly Linked List:
- Node sebelumnya dapat diakses langsung via pointer prev
- Penghapusan itu sendiri O(1) setelah node ditemukan
- Lebih efisien untuk operasi delete

**Penggunaan dalam Program:**
Program ini mendemonstrasikan:
- Kombinasi operasi search (findElm) dan delete
- Penanganan kasus penghapusan di berbagai posisi
- Manajemen memori dengan dealokasi
- Keunggulan pointer bidirectional pada doubly linked list

![Output Program 3](https://raw.githubusercontent.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/master/WEEK%206/op3.png)

---


## Kesimpulan (singkat)

- Doubly Linked List: setiap node punya `next` dan `prev`, memungkinkan traversal dua arah.
- Operasi insert/delete di ujung bisa O(1) jika ada pointer `last`/`first`.
- Pencarian linear O(n); penghapusan setelah ditemukan bisa O(1).
- Kekurangan: penggunaan memori lebih besar dan implementasi sedikit lebih kompleks.

Referensi tetap sama seperti awal.

---

## Referensi

[1] Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press. Chapter 10: Elementary Data Structures.

[2] Karumanchi, N. (2016). *Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles* (5th ed.). CareerMonk Publications. pp. 117-145.

[3] Goodrich, M. T., Tamassia, R., & Goldwasser, M. H. (2014). *Data Structures and Algorithms in Java* (6th ed.). John Wiley & Sons. Chapter 3: Fundamental Data Structures, pp. 122-135.
