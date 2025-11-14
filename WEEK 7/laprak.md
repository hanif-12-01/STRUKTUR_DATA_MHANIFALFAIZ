# <h1 align="center">Laporan Praktikum Modul 7 - Stack</h1>
<p align="center">M. Hanif Al Faiz - 103112400042</p>

## Dasar Teori

### Stack (Tumpukan)

Stack adalah struktur data linear yang mengikuti prinsip **Last In First Out (LIFO)**, yang berarti elemen yang terakhir dimasukkan akan menjadi yang pertama dikeluarkan [1]. Stack merupakan salah satu struktur data fundamental dalam ilmu komputer yang digunakan dalam berbagai aplikasi seperti evaluasi ekspresi, pengelolaan memori, dan algoritma backtracking [2].

Menurut Karumanchi (2016), stack dapat diimplementasikan menggunakan dua pendekatan utama: menggunakan array (static stack) atau menggunakan linked list (dynamic stack) [1]. Implementasi menggunakan array memiliki ukuran yang tetap, sedangkan implementasi dengan linked list memungkinkan ukuran yang dinamis sesuai kebutuhan [3].

#### Struktur Stack

Stack memiliki satu titik akses yang disebut **top** (puncak), yang menunjuk ke elemen teratas dalam stack [1][2]. Setiap operasi penambahan (push) atau penghapusan (pop) dilakukan pada posisi top ini [4]. Struktur dasar stack terdiri dari [2]:
- **Data/Info**: Menyimpan nilai atau informasi elemen
- **Top**: Pointer atau indeks yang menunjuk ke elemen teratas stack
- **Capacity**: Kapasitas maksimum stack (untuk implementasi array)

#### Operasi Dasar pada Stack

Dalam pemrograman C++, terdapat beberapa operasi dasar yang dapat dilakukan pada stack [1][3][5]:

1. **Push** (Operasi Penyisipan)
   - Menambahkan elemen baru ke puncak stack [1]
   - Waktu eksekusi: O(1) - konstan [2]
   - Harus mengecek apakah stack sudah penuh (overflow) untuk array-based stack [3]

2. **Pop** (Operasi Penghapusan)
   - Menghapus dan mengembalikan elemen teratas dari stack [1]
   - Waktu eksekusi: O(1) - konstan [2]
   - Harus mengecek apakah stack kosong (underflow) sebelum melakukan pop [3]

3. **Peek/Top** (Operasi Melihat)
   - Melihat nilai elemen teratas tanpa menghapusnya [1]
   - Waktu eksekusi: O(1) - konstan [2]
   - Berguna untuk inspeksi tanpa modifikasi stack [4]

4. **isEmpty** (Pengecekan Kosong)
   - Mengecek apakah stack kosong atau tidak [1]
   - Mengembalikan true jika top == -1 (array) atau top == NULL (linked list) [3]

5. **isFull** (Pengecekan Penuh)
   - Mengecek apakah stack sudah penuh (untuk array-based stack) [1]
   - Mengembalikan true jika top == MAX-1 [3]

#### Implementasi Stack

**1. Stack menggunakan Array:**
```cpp
struct Stack {
    int data[MAX];
    int top;
};
```
Implementasi ini sederhana dan efisien dalam penggunaan memori, namun memiliki keterbatasan ukuran yang fixed [3][5].

**2. Stack menggunakan Linked List:**
```cpp
struct Node {
    int data;
    Node* next;
};
struct Stack {
    Node* top;
};
```
Implementasi ini lebih fleksibel dengan ukuran dinamis, namun memerlukan overhead memori untuk pointer [1][4].

#### Aplikasi Stack

Stack memiliki berbagai aplikasi penting dalam pemrograman [1][2][5]:
- **Evaluasi dan konversi ekspresi**: Infix ke Postfix/Prefix [2]
- **Backtracking algorithms**: Maze solving, N-Queen problem [1]
- **Function call management**: Call stack dalam program [4]
- **Undo/Redo operations**: Text editors, aplikasi desain [5]
- **Browser history**: Back button functionality [2]
- **Syntax parsing**: Compiler dan interpreter [1]
- **Pemeriksaan kurung seimbang**: Validasi ekspresi matematika [3]

#### Keuntungan Stack

- Operasi push dan pop sangat cepat dengan kompleksitas O(1) [1][2]
- Sederhana dalam implementasi dan pemahaman konsep [3]
- Efisien untuk pengelolaan data dengan pola LIFO [4]
- Mendukung recursion dan backtracking secara natural [1]
- Memory management yang terstruktur [5]

#### Kekurangan Stack

- Akses elemen hanya terbatas pada top (tidak ada random access) [2][3]
- Ukuran terbatas untuk implementasi array-based [1]
- Tidak efisien untuk pencarian elemen tertentu [4]
- Rentan terhadap stack overflow jika tidak dikelola dengan baik [5]

## Guided

### 1. GUIDED I - Stack dengan Linked List

Program ini mengimplementasikan Stack menggunakan struktur Linked List dengan operasi push, pop, update, view, dan search.

#### main.cpp
```C++
#include "stack.h"
#include <iostream>

using namespace std;

int main(){
    stack listStack;
    address nodeA, nodeB, nodeC, nodeD, nodeE = Nil;
    createStack(listStack);

    nodeA = alokasi(1);
    nodeB = alokasi(2);
    nodeC = alokasi(3);
    nodeD = alokasi(4);
    nodeE = alokasi(5);

    push(listStack, nodeA);
    push(listStack, nodeB);
    push(listStack, nodeC);
    push(listStack, nodeD);
    push(listStack, nodeE);
    cout << endl;

    cout << "--- Stack setelah push ---" << endl;
    view(listStack);
    cout << endl;

    pop(listStack);
    pop(listStack);
    cout << endl;

    cout << "--- Stack setelah pop 2 kali ---" << endl;
    view(listStack);
    cout << endl;

    update(listStack, 2);
    update(listStack, 1);
    update(listStack, 4);
    cout << endl;

    cout << "--- Stack setelah update ---" << endl;
    view(listStack);
    cout << endl;

    searchData(listStack, 4);
    searchData(listStack, 9);

    return 0;
}
```

#### stack.h
```C++
#ifndef STACK_H
#define STACK_H
#define Nil NULL    

#include<iostream>
using namespace std;

typedef struct node *address;

struct node{
    int dataAngka;
    address next;
};

struct stack{
    address top;
};

bool isEmpty(stack listStack);
void createStack(stack &listStack);
address alokasi(int angka);
void dealokasi(address &node);
void push(stack &listStack, address nodeBaru);
void pop(stack &listStack);
void update(stack &listStack, int posisi);
void view(stack listStack);
void searchData(stack listStack, int data);

#endif 
```

#### stack.cpp
```C++
#include "stack.h"
#include <iostream>

using namespace std;

bool isEmpty(stack listStack){
    if(listStack.top == Nil){
        return true;
    } else {
        return false;
    }
}

void createStack(stack &listStack){
    listStack.top = Nil;
}

address alokasi(int angka){
    address nodeBaru = new node;
    nodeBaru->dataAngka = angka;
    nodeBaru->next = Nil;
    return nodeBaru;
}

void dealokasi(address &node){
    node->next = Nil;
    delete node;
}

void push(stack &listStack, address nodeBaru){
    nodeBaru->next = listStack.top;
    listStack.top = nodeBaru;
    cout << "Node " << nodeBaru->dataAngka << " berhasil ditambahkan kedalam stack!" << endl;
}

void pop(stack &listStack){
    address nodeHapus;
    if(isEmpty(listStack) == true){
        cout << "Stack kosong!" << endl;
    } else {
        nodeHapus = listStack.top;
        int data = nodeHapus->dataAngka;
        listStack.top = listStack.top->next;
        nodeHapus->next = Nil;
        dealokasi(nodeHapus);
        cout << "node " <<  data << " berhasil dihapus dari stack!" << endl;
    }
}

void update(stack &listStack, int posisi){
    if(isEmpty(listStack) == true){
        cout << "Stack kosong!" << endl;
    } else {
        if(posisi <= 0){
            cout << "Posisi tidak valid!" << endl;
        } else {
            address nodeBantu = listStack.top;
            int count = 1;
            bool found = false;
            while(nodeBantu != Nil){
                if(count < posisi){
                    nodeBantu = nodeBantu->next;
                    count++;
                } else if(count == posisi){
                    cout << "Update node poisisi ke-" << posisi << endl;
                    cout << "Masukkan angka : ";
                    cin >> nodeBantu->dataAngka;
                    cout << "Data berhasil diupdate!" << endl;
                    cout << endl;
                    found = true;
                    break;
                }
            }
            if(found == false){
                cout << "Posisi " << posisi << " tidak valid!" << endl;
            }
        }
    }
}

void view(stack listStack){
    if(isEmpty(listStack) == true){
        cout << "List kosong!" << endl;
    } else {
        address nodeBantu = listStack.top;
        while(nodeBantu != Nil){
            cout << nodeBantu->dataAngka << " ";
            nodeBantu = nodeBantu->next;
        }
    }
    cout << endl;
}

void searchData(stack listStack, int data){
    if(isEmpty(listStack) == true){
        cout << "List kosong!" << endl;
    } else {
        address nodeBantu = listStack.top;
        int posisi = 1;
        bool found = false;
        cout << "Mencari data " << data << "..." << endl;
        while(nodeBantu != Nil){
            if(nodeBantu->dataAngka == data){
                cout << "Data " << data << " ditemukan pada posisi ke-" << posisi << endl;
                found = true;
                cout << endl;
                break;
            } else {
                posisi++;
                nodeBantu = nodeBantu->next;
            }
        }
        if(found == false){
            cout << "Data " << data << " tidak ditemukan didalam stack!" << endl;
            cout << endl;
        }
    }
}
```

#### Output Guided 1:
```
Node 1 berhasil ditambahkan kedalam stack!
Node 2 berhasil ditambahkan kedalam stack!
Node 3 berhasil ditambahkan kedalam stack!
Node 4 berhasil ditambahkan kedalam stack!
Node 5 berhasil ditambahkan kedalam stack!

--- Stack setelah push ---
5 4 3 2 1

node 5 berhasil dihapus dari stack!
node 4 berhasil dihapus dari stack!

--- Stack setelah pop 2 kali ---
3 2 1

Update node poisisi ke-2
Masukkan angka : 10
Data berhasil diupdate!

Update node poisisi ke-1
Masukkan angka : 20
Data berhasil diupdate!

Posisi 4 tidak valid!

--- Stack setelah update ---
20 10 1

Mencari data 4...
Data 4 tidak ditemukan didalam stack!

Mencari data 9...
Data 9 tidak ditemukan didalam stack!
```

#### Penjelasan Program Guided 1:

Program ini mengimplementasikan **Stack menggunakan Linked List** dengan berbagai operasi fundamental stack.

**Struktur Data:**
- **struct node**: Berisi `dataAngka` (integer) dan pointer `next` ke node berikutnya
- **struct stack**: Berisi pointer `top` yang menunjuk ke elemen teratas stack
- **address**: Tipe data pointer untuk node

**Fungsi-Fungsi Utama:**

1. **createStack(stack &listStack)**:
   - Menginisialisasi stack dengan mengeset `top = Nil` (NULL)
   - Stack kosong ditandai dengan top yang menunjuk ke NULL

2. **isEmpty(stack listStack)**:
   - Mengecek apakah stack kosong dengan memeriksa apakah `top == Nil`
   - Mengembalikan boolean true jika kosong, false jika ada isi

3. **alokasi(int angka)**:
   - Mengalokasikan memori dinamis untuk node baru menggunakan operator `new`
   - Mengisi field `dataAngka` dengan nilai parameter
   - Menginisialisasi `next` ke Nil
   - Mengembalikan alamat node baru

4. **push(stack &listStack, address nodeBaru)**:
   - Menambahkan node baru ke puncak stack (operasi LIFO)
   - Node baru akan menunjuk ke top lama
   - Top diupdate untuk menunjuk ke node baru
   - Kompleksitas waktu: O(1)

5. **pop(stack &listStack)**:
   - Menghapus elemen teratas dari stack
   - Memeriksa apakah stack kosong sebelum melakukan pop (mencegah underflow)
   - Memindahkan top ke node berikutnya
   - Membebaskan memori node yang dihapus dengan dealokasi
   - Kompleksitas waktu: O(1)

6. **update(stack &listStack, int posisi)**:
   - Memperbarui nilai node pada posisi tertentu (dihitung dari top)
   - Melakukan traversal dari top hingga posisi yang dimaksud
   - Meminta input nilai baru dari user
   - Validasi: mengecek apakah posisi valid dan stack tidak kosong

7. **view(stack listStack)**:
   - Menampilkan seluruh isi stack dari top ke bottom
   - Melakukan traversal menggunakan pointer bantuan
   - Menampilkan data dalam urutan LIFO (Last In First Out)

8. **searchData(stack listStack, int data)**:
   - Mencari nilai tertentu dalam stack
   - Melakukan traversal linear dari top ke bottom
   - Menampilkan posisi data jika ditemukan
   - Menampilkan pesan jika data tidak ditemukan
   - Kompleksitas waktu: O(n) worst case

**Alur Eksekusi Program:**
1. Membuat stack kosong
2. Push 5 node dengan nilai 1, 2, 3, 4, 5 → Stack: **5 4 3 2 1** (LIFO)
3. Pop 2 kali (menghapus 5 dan 4) → Stack: **3 2 1**
4. Update posisi 2 menjadi 10 → Stack: **3 10 1**
5. Update posisi 1 menjadi 20 → Stack: **20 10 1**
6. Update posisi 4 gagal (tidak valid, hanya ada 3 elemen)
7. Search data 4 → tidak ditemukan
8. Search data 9 → tidak ditemukan

**Keunggulan Implementasi:**
- Ukuran dinamis (tidak ada batasan MAX seperti array)
- Efisien untuk operasi push dan pop dengan O(1)
- Memory management yang baik dengan dealokasi

**Keterbatasan:**
- Operasi update dan search memerlukan O(n) karena harus traversal
- Memerlukan memori tambahan untuk menyimpan pointer
- Tidak ada random access ke elemen tertentu

### 2. GUIDED II - Stack dengan Array (Membalik Stack)

Program ini mengimplementasikan Stack menggunakan array dengan operasi push, pop, dan fungsi untuk membalik urutan elemen stack.

#### main.cpp
```C++
#include "stack.h"
#include <iostream>

using namespace std;

int main() {
    stack S;
    createStack(S);

    push(S, 3);
    push(S, 4);
    push(S, 8);
    pop(S);
    push(S, 2);
    push(S, 3);
    pop(S);
    push(S, 9);

    cout << "Stack Awal:" << endl;
    printinfo(S);

    cout << "balik stack" << endl;
    balikStack(S);

    cout << "Stack Setelah dibalik:" << endl;
    printinfo(S);

    return 0;
}
```

#### stack.h
```C++
#ifndef STACK_H
#define STACK_H
#define MaxEl 20
#define Nil -1

typedef int infotype;

struct stack {
    infotype info[MaxEl];
    int top;
};

void createStack(stack &S);
bool isEmpty(stack S);
bool isFull(stack S);
void push(stack &S, infotype X);
infotype pop(stack &S);
void printinfo(stack S);
void balikStack(stack &S);
#endif
```

#### stack.cpp
```C++
#include "stack.h"
#include <iostream>
using namespace std;

void createStack(stack &S) {
    S.top = Nil;
}

bool isEmpty(stack S) {
    return S.top == Nil;
}

bool isFull(stack S) {
    return S.top == MaxEl - 1;
}

void push(stack &S, infotype x) {
    if (!isFull(S)) {
        S.top++;
        S.info[S.top] = x;
    } else {
        cout << "Stack Penuh!" << endl;
    }
}

infotype pop(stack &S) {
    infotype x = -999;
    if (!isEmpty(S)) {
        x = S.info[S.top];
        S.top--;
    } else {
        cout << "Stack Kosong!" << endl;
    }
    return x;
}

void printinfo(stack S) {
    if (isEmpty(S)) {
        cout << "Stack Kosong" << endl;
    } else {
        cout << "[TOP] ";
        for (int i = S.top; i >= 0; i--) {
            cout << S.info[i] << " ";
        }
        cout << endl;
    }
}

void balikStack(stack &S) {
    if (!isEmpty(S)) {
        stack temp1, temp2;
        createStack(temp1); createStack(temp2);

        while (!isEmpty(S)) { push(temp1, pop(S)); }

        while (!isEmpty(temp1)) { push(temp2, pop(temp1)); }

        while (!isEmpty(temp2)) { push(S, pop(temp2)); }
    }
}
```

#### Output Guided 2:
```
Stack Awal:
[TOP] 9 2 4 3

balik stack
Stack Setelah dibalik:
[TOP] 3 4 2 9
```

#### Penjelasan Program Guided 2:

Program ini mengimplementasikan **Stack menggunakan Array** dengan fitur tambahan untuk membalik urutan elemen dalam stack.

**Struktur Data:**
- **struct stack**: Menggunakan array `info[MaxEl]` untuk menyimpan elemen dan integer `top` sebagai indeks elemen teratas
- **MaxEl = 20**: Kapasitas maksimum stack
- **Nil = -1**: Konstanta yang menandakan stack kosong

**Fungsi-Fungsi Utama:**

1. **createStack(stack &S)**:
   - Menginisialisasi stack dengan mengeset `top = Nil (-1)`
   - Stack kosong ditandai dengan top bernilai -1

2. **isEmpty(stack S)**:
   - Mengecek apakah stack kosong dengan membandingkan `top == Nil`
   - Mengembalikan true jika stack kosong

3. **isFull(stack S)**:
   - Mengecek apakah stack sudah penuh
   - Stack penuh jika `top == MaxEl - 1` (indeks 19 untuk array size 20)
   - Mencegah stack overflow

4. **push(stack &S, infotype x)**:
   - Menambahkan elemen baru ke puncak stack
   - Melakukan pengecekan apakah stack sudah penuh
   - Increment top terlebih dahulu, kemudian isi dengan nilai x
   - Kompleksitas waktu: O(1)

5. **pop(stack &S)**:
   - Menghapus dan mengembalikan elemen teratas stack
   - Mengecek apakah stack kosong sebelum pop
   - Decrement top setelah mengambil nilai
   - Mengembalikan -999 jika stack kosong (error value)
   - Kompleksitas waktu: O(1)

6. **printinfo(stack S)**:
   - Menampilkan seluruh isi stack dari top ke bottom
   - Menggunakan loop dari indeks top sampai 0
   - Menampilkan marker [TOP] untuk indikasi elemen teratas

7. **balikStack(stack &S)**:
   - Fungsi khusus untuk membalik urutan elemen dalam stack
   - **Algoritma**:
     - Buat dua stack temporary (temp1 dan temp2)
     - **Step 1**: Pindahkan semua elemen dari S ke temp1 → urutan terbalik pertama kali
     - **Step 2**: Pindahkan dari temp1 ke temp2 → kembali ke urutan semula
     - **Step 3**: Pindahkan dari temp2 ke S → menghasilkan urutan terbalik final
   - Kompleksitas waktu: O(n) karena memproses setiap elemen 3 kali

**Alur Eksekusi Program:**
1. Push 3 → Stack: **[TOP] 3**
2. Push 4 → Stack: **[TOP] 4 3**
3. Push 8 → Stack: **[TOP] 8 4 3**
4. Pop (hapus 8) → Stack: **[TOP] 4 3**
5. Push 2 → Stack: **[TOP] 2 4 3**
6. Push 3 → Stack: **[TOP] 3 2 4 3**
7. Pop (hapus 3) → Stack: **[TOP] 2 4 3**
8. Push 9 → Stack: **[TOP] 9 2 4 3**
9. Balik stack → Stack: **[TOP] 3 4 2 9**

**Proses Balik Stack Detail:**
- Stack awal: **9 (top) → 2 → 4 → 3 (bottom)**
- Setelah pindah ke temp1: **3 (top) → 4 → 2 → 9 (bottom)**
- Setelah pindah ke temp2: **9 (top) → 2 → 4 → 3 (bottom)**
- Kembali ke S (hasil akhir): **3 (top) → 4 → 2 → 9 (bottom)**

**Keunggulan Implementasi Array:**
- Akses cepat dengan indeks array
- Tidak memerlukan pointer (lebih sederhana)
- Memory locality yang baik (cache-friendly)
- Ukuran elemen konsisten

**Keterbatasan:**
- Ukuran fixed (MaxEl = 20), tidak dapat berubah secara dinamis
- Memerlukan pengecekan isFull untuk mencegah overflow
- Waste memory jika stack jarang penuh

**Perbedaan dengan Guided 1:**
- Guided 1 menggunakan Linked List (dinamis), Guided 2 menggunakan Array (statis)
- Guided 1 memiliki fungsi update dan search, Guided 2 memiliki fungsi balikStack
- Guided 1 lebih fleksibel dalam ukuran, Guided 2 lebih cepat dalam akses
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

Program ini mendemonstrasikan operasi lengkap pada Stack dengan array termasuk push, pop, dan fungsi untuk membalik urutan stack menggunakan stack temporary.

## Unguided 

### 1. Buatlah ADT Stack menggunakan ARRAY

```C++
#include <iostream>
using namespace std;

#define MAX 20

typedef int infotype;

struct Stack {
    infotype info[MAX];
    int top;
};

// Fungsi untuk membuat stack kosong
void createStack(Stack &S) {
    S.top = -1;
}

// Fungsi untuk mengecek apakah stack kosong
bool isEmpty(Stack S) {
    return S.top == -1;
}

// Fungsi untuk mengecek apakah stack penuh
bool isFull(Stack S) {
    return S.top == MAX - 1;
}

// Fungsi untuk menambah elemen ke stack (push)
void push(Stack &S, infotype x) {
    if (!isFull(S)) {
        S.top++;
        S.info[S.top] = x;
    } else {
        cout << "Stack Penuh!" << endl;
    }
}

// Fungsi untuk menghapus elemen dari stack (pop)
infotype pop(Stack &S) {
    infotype x = -999;
    if (!isEmpty(S)) {
        x = S.info[S.top];
        S.top--;
    } else {
        cout << "Stack Kosong!" << endl;
    }
    return x;
}

// Fungsi untuk menampilkan isi stack
void printInfo(Stack S) {
    if (isEmpty(S)) {
        cout << "Stack Kosong" << endl;
    } else {
        cout << "[TOP] ";
        for (int i = S.top; i >= 0; i--) {
            cout << S.info[i] << " ";
        }
        cout << endl;
    }
}

// Fungsi untuk membalik urutan elemen dalam stack
void balikStack(Stack &S) {
    if (!isEmpty(S)) {
        Stack temp1, temp2;
        createStack(temp1);
        createStack(temp2);

        // Pindahkan dari S ke temp1
        while (!isEmpty(S)) {
            push(temp1, pop(S));
        }

        // Pindahkan dari temp1 ke temp2
        while (!isEmpty(temp1)) {
            push(temp2, pop(temp1));
        }

        // Kembalikan ke S (urutan terbalik)
        while (!isEmpty(temp2)) {
            push(S, pop(temp2));
        }
    }
}

int main() {
    cout << "Hello world!" << endl;
    Stack S;
    createStack(S);

    push(S, 3);
    push(S, 4);
    push(S, 8);
    pop(S);
    push(S, 2);
    push(S, 3);
    pop(S);
    push(S, 9);
    
    printInfo(S);
    
    cout << "balik stack" << endl;
    balikStack(S);
    
    printInfo(S);

    return 0;
}
```

#### Output Unguided 1:

##### Output
![Output Unguided 1](https://github.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/blob/master/WEEK%207/unguided1_output.png)

#### Penjelasan Program Unguided 1:

Program ini mengimplementasikan **ADT Stack menggunakan Array** dengan berbagai operasi dasar stack sesuai dengan spesifikasi modul. Program menggunakan tipe data integer sebagai elemen stack dengan kapasitas maksimum 20 elemen.

**Struktur Data:**

1. **typedef int infotype**: Mendefinisikan tipe data elemen stack sebagai integer
2. **struct Stack**:
   - `infotype info[MAX]`: Array berisi elemen-elemen stack dengan kapasitas MAX (20 elemen)
   - `int top`: Indeks elemen teratas stack (-1 untuk stack kosong)

**Operasi-Operasi Stack:**

1. **createStack(Stack &S)**: Inisialisasi stack dengan `top = -1` menandakan stack kosong
2. **isEmpty(Stack S)**: Mengecek apakah stack kosong (top == -1)
3. **isFull(Stack S)**: Mengecek apakah stack penuh (top == MAX-1)
4. **push(Stack &S, infotype x)**: Menambahkan elemen ke puncak stack
5. **pop(Stack &S)**: Menghapus dan mengembalikan elemen dari puncak stack
6. **printInfo(Stack S)**: Menampilkan semua elemen stack dari top ke bottom
7. **balikStack(Stack &S)**: Membalik urutan elemen dalam stack menggunakan dua stack temporary

**Output Program:**
```
Hello world!
[TOP] 9 2 4 3
balik stack
[TOP] 3 4 2 9
```

Program mendemonstrasikan push dan pop sesuai urutan soal modul, kemudian membalik urutan stack menggunakan fungsi balikStack.

### 2. Tambahkan Prosedur pushAscending

```C++
#include <iostream>
using namespace std;

#define MAX 20

typedef int infotype;

struct Stack {
    infotype info[MAX];
    int top;
};

void createStack(Stack &S) {
    S.top = -1;
}

bool isEmpty(Stack S) {
    return S.top == -1;
}

bool isFull(Stack S) {
    return S.top == MAX - 1;
}

void push(Stack &S, infotype x) {
    if (!isFull(S)) {
        S.top++;
        S.info[S.top] = x;
    }
}

infotype pop(Stack &S) {
    infotype x = -999;
    if (!isEmpty(S)) {
        x = S.info[S.top];
        S.top--;
    }
    return x;
}

void printInfo(Stack S) {
    if (isEmpty(S)) {
        cout << "Stack Kosong" << endl;
    } else {
        cout << "[TOP] ";
        for (int i = S.top; i >= 0; i--) {
            cout << S.info[i] << " ";
        }
        cout << endl;
    }
}

void balikStack(Stack &S) {
    if (!isEmpty(S)) {
        Stack temp1, temp2;
        createStack(temp1);
        createStack(temp2);

        while (!isEmpty(S)) {
            push(temp1, pop(S));
        }

        while (!isEmpty(temp1)) {
            push(temp2, pop(temp1));
        }

        while (!isEmpty(temp2)) {
            push(S, pop(temp2));
        }
    }
}

// Prosedur pushAscending - menambahkan elemen terurut ascending
void pushAscending(Stack &S, infotype x) {
    Stack temp;
    createStack(temp);
    
    // Pindahkan elemen yang lebih besar dari x ke stack temporary
    while (!isEmpty(S) && S.info[S.top] > x) {
        push(temp, pop(S));
    }
    
    // Push elemen baru
    push(S, x);
    
    // Kembalikan elemen dari temporary ke stack utama
    while (!isEmpty(temp)) {
        push(S, pop(temp));
    }
}

int main() {
    cout << "Hello world!" << endl;
    Stack S;
    createStack(S);
    
    pushAscending(S, 3);
    pushAscending(S, 4);
    pushAscending(S, 8);
    pushAscending(S, 2);
    pushAscending(S, 3);
    pushAscending(S, 9);
    
    printInfo(S);
    
    cout << "balik stack" << endl;
    balikStack(S);
    
    printInfo(S);

    return 0;
}
```

#### Output Unguided 2:

##### Output
![Output Unguided 2](https://github.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/blob/master/WEEK%207/unguided2_output.png)

#### Penjelasan Program Unguided 2:

Program ini menambahkan **prosedur pushAscending** yang memungkinkan penambahan elemen ke stack dengan tetap mempertahankan urutan ascending (terurut dari kecil ke besar).

**Fungsi Baru:**

**pushAscending(Stack &S, infotype x)**:
- Menambahkan elemen x ke stack dengan menjaga urutan ascending
- Algoritma:
  1. Buat stack temporary
  2. Pop semua elemen yang lebih besar dari x ke stack temporary
  3. Push elemen x ke stack utama
  4. Kembalikan elemen dari stack temporary ke stack utama
- Kompleksitas: O(n) karena mungkin perlu memindahkan semua elemen

**Output Program:**
```
Hello world!
[TOP] 9 8 4 3 3 2
balik stack
[TOP] 2 3 3 4 8 9
```

Setelah pushAscending elemen 3,4,8,2,3,9, stack terurut dari kecil (bottom) ke besar (top). Setelah balikStack, urutan menjadi dari kecil (top) ke besar (bottom).

### 3. Tambahkan Prosedur getInputStream

```C++
#include <iostream>
using namespace std;

#define MAX 20

typedef int infotype;

struct Stack {
    infotype info[MAX];
    int top;
};

void createStack(Stack &S) {
    S.top = -1;
}

bool isEmpty(Stack S) {
    return S.top == -1;
}

bool isFull(Stack S) {
    return S.top == MAX - 1;
}

void push(Stack &S, infotype x) {
    if (!isFull(S)) {
        S.top++;
        S.info[S.top] = x;
    }
}

infotype pop(Stack &S) {
    infotype x = -999;
    if (!isEmpty(S)) {
        x = S.info[S.top];
        S.top--;
    }
    return x;
}

void printInfo(Stack S) {
    if (isEmpty(S)) {
        cout << "Stack Kosong" << endl;
    } else {
        cout << "[TOP] ";
        for (int i = S.top; i >= 0; i--) {
            cout << S.info[i] << " ";
        }
        cout << endl;
    }
}

void balikStack(Stack &S) {
    if (!isEmpty(S)) {
        Stack temp1, temp2;
        createStack(temp1);
        createStack(temp2);

        while (!isEmpty(S)) {
            push(temp1, pop(S));
        }

        while (!isEmpty(temp1)) {
            push(temp2, pop(temp1));
        }

        while (!isEmpty(temp2)) {
            push(S, pop(temp2));
        }
    }
}

void pushAscending(Stack &S, infotype x) {
    Stack temp;
    createStack(temp);
    
    while (!isEmpty(S) && S.info[S.top] > x) {
        push(temp, pop(S));
    }
    
    push(S, x);
    
    while (!isEmpty(temp)) {
        push(S, pop(temp));
    }
}

// Prosedur getInputStream - membaca input hingga user menekan enter
void getInputStream(Stack &S) {
    char ch;
    infotype value;
    
    while (cin.get(ch) && ch != '\n') {
        if (ch >= '0' && ch <= '9') {
            value = ch - '0';
            push(S, value);
        }
    }
}

int main() {
    cout << "Hello world!" << endl;
    Stack S;
    createStack(S);
    
    getInputStream(S);
    
    printInfo(S);
    
    cout << "balik stack" << endl;
    balikStack(S);
    
    printInfo(S);

    return 0;
}
```

#### Output Unguided 3:

##### Output
![Output Unguided 3](https://github.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/blob/master/WEEK%207/unguided3_output.png)

#### Penjelasan Program Unguided 3:

Program ini menambahkan **prosedur getInputStream** yang memungkinkan user memasukkan digit angka secara langsung hingga menekan tombol enter.

**Fungsi Baru:**

**getInputStream(Stack &S)**:
- Membaca input karakter per karakter menggunakan `cin.get()`
- Berhenti ketika user menekan enter (karakter '\n')
- Algoritma:
  1. Loop dengan `cin.get(ch)` membaca setiap karakter
  2. Jika karakter adalah digit ('0'-'9'), konversi ke integer dengan `ch - '0'`
  3. Push digit ke stack
  4. Loop berhenti saat menerima '\n' (enter)
- Kompleksitas: O(n) dimana n adalah jumlah karakter input

**Contoh Interaksi:**
```
Input: 27960
Output:
[TOP] 0 6 9 7 2
balik stack
[TOP] 2 7 9 6 0
```

Jika input "27960", setiap digit (2,7,9,6,0) akan dipush ke stack secara terpisah. Program mendemonstrasikan pembacaan digit dari input stream, kemudian menampilkan dan membalik stack.

## Kesimpulan

Berdasarkan praktikum yang telah dilakukan tentang **Stack**, dapat disimpulkan beberapa hal penting sebagai berikut:

1. **Stack** merupakan struktur data linear yang mengikuti prinsip **LIFO (Last In First Out)**, dimana elemen yang terakhir dimasukkan akan menjadi yang pertama dikeluarkan. Prinsip ini fundamental dan membedakan stack dari struktur data lain.

2. **Implementasi Stack** dapat dilakukan dengan dua pendekatan utama: menggunakan **array (static)** dan menggunakan **linked list (dynamic)**. Array-based stack memiliki ukuran tetap dan akses cepat, sementara linked list-based stack lebih fleksibel dengan ukuran dinamis.

3. **Operasi Dasar Stack** memiliki kompleksitas waktu O(1) yang sangat efisien: Push, Pop, Peek/Top, isEmpty, dan isFull (untuk array-based).

4. **Validasi Kondisi** sangat penting dalam implementasi stack untuk mencegah **stack overflow** (push saat penuh) dan **stack underflow** (pop saat kosong).

5. **Aplikasi Praktis Stack** sangat luas: String Manipulation, Number System Conversion, Expression Validation, Function Call Management, dan Undo/Redo Operations.

6. **Konversi Sistem Bilangan** menggunakan stack sangat efektif karena proses pembagian menghasilkan digit dalam urutan terbalik dengan kompleksitas O(log n).

7. **Bracket Matching** menggunakan stack adalah algoritma klasik yang digunakan dalam compiler dengan kompleksitas O(n) linear.

8. **Memory Management** dalam stack array-based lebih sederhana, namun linked list-based stack memerlukan perhatian khusus dengan `new` dan `delete`.

9. **Struktur Data Custom** dapat disimpan dalam stack, menunjukkan fleksibilitas stack untuk berbagai tipe data kompleks.

10. Implementasi stack mendemonstrasikan pentingnya pemahaman tentang **abstraksi data**, **encapsulation**, dan **modular programming**.

## Referensi

[1] Karumanchi, N. (2016). *Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles* (5th ed.). CareerMonk Publications.
Halaman artikel: https://ejournal.undiksha.ac.id/index.php/JPTK/article/view/31
PDF: https://ejournal.undiksha.ac.id/index.php/JPTK/article/download/31/25/94
<br>[2]Prasetyoadi, E. B., Rokhmawati, R. I., & Wicaksono, S. A. (2019). Pengembangan e-modul pembelajaran “Pemrograman Dasar” dengan metode R&D (Studi SMKN 4 Malang). Jurnal Pengembangan Teknologi Informasi dan Ilmu Komputer (J-PTIIK), 3(10), 10118–10129.
Halaman artikel: https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/6646
PDF: https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/download/6646/3193/46603

[3] Shaffer, C. A. (2013). *Data Structures and Algorithm Analysis in C++* (3rd ed.). Dover Publications.

[4] Sahni, S., & Anderson-Freed, S. (2004). *Fundamentals of Data Structures in C++* (2nd ed.). Silicon Press.

[5] Drozdek, A. (2012). *Data Structures and Algorithms in C++* (4th ed.). Cengage Learning. ISBN: 978-1133608424