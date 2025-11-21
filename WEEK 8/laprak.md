# <h1 align="center">Laporan Praktikum Modul 8 - Queue</h1>
<p align="center">M. Hanif Al Faiz - 103112400042</p>

## Dasar Teori

### Queue (Antrian)

Queue adalah struktur data linear yang mengikuti prinsip **First In First Out (FIFO)**, artinya elemen yang pertama masuk akan keluar pertama kali [1]. Queue sering digunakan dalam berbagai aplikasi seperti penjadwalan proses, manajemen buffer, dan algoritma breadth-first search [1].

Queue dapat diimplementasikan dengan dua cara: menggunakan array (static queue) atau linked list (dynamic queue) [2]. Implementasi array memiliki ukuran tetap, sedangkan linked list ukurannya dinamis dan dapat menyesuaikan kebutuhan [3].

#### Struktur Queue

Queue memiliki dua titik akses yaitu **head** (depan) dan **tail** (belakang). Head menunjuk ke elemen yang akan dikeluarkan, sedangkan tail menunjuk ke posisi penambahan elemen baru [1]. Struktur dasar queue terdiri dari [2]:
- **Data/Info**: Menyimpan nilai atau informasi elemen
- **Head/Front**: Pointer atau indeks yang menunjuk ke elemen depan queue
- **Tail/Rear**: Pointer atau indeks yang menunjuk ke elemen belakang queue
- **Capacity**: Kapasitas maksimum queue (untuk implementasi array)

#### Operasi Dasar pada Queue

Dalam pemrograman C++, terdapat beberapa operasi dasar yang dapat dilakukan pada queue [1][2]:

1. **Enqueue** (Operasi Penyisipan)
   - Menambahkan elemen baru ke belakang queue (tail) [1]
   - Waktu eksekusi: O(1) - konstan [1]
   - Harus mengecek apakah queue sudah penuh (overflow) untuk array-based queue [2]

2. **Dequeue** (Operasi Penghapusan)
   - Menghapus dan mengembalikan elemen dari depan queue (head) [1]
   - Waktu eksekusi: O(1) - konstan [1]
   - Harus mengecek apakah queue kosong (underflow) sebelum melakukan dequeue [2]

3. **Peek/Front** (Operasi Melihat)
   - Melihat nilai elemen depan tanpa menghapusnya [1]
   - Waktu eksekusi: O(1) - konstan [1]
   - Berguna untuk inspeksi tanpa modifikasi queue [2]

4. **isEmpty** (Pengecekan Kosong)
   - Mengecek apakah queue kosong atau tidak [1]
   - Mengembalikan true jika head == tail atau count == 0 [2]

5. **isFull** (Pengecekan Penuh)
   - Mengecek apakah queue sudah penuh (untuk array-based queue) [1]
   - Mengembalikan true jika count == MAX atau tail == MAX [2]

#### Implementasi Queue

**1. Queue menggunakan Array (Circular Queue):**
```cpp
struct Queue {
    int info[MAX];
    int head, tail;
    int count;
};
```
Implementasi circular queue efisien dengan memanfaatkan ruang array secara memutar menggunakan operasi modulo [2][3].

**2. Queue menggunakan Linked List:**
```cpp
struct Node {
    int data;
    Node* next;
};
struct Queue {
    Node* head;
    Node* tail;
};
```
Implementasi ini lebih fleksibel dengan ukuran dinamis, namun memerlukan overhead memori untuk pointer [2][3].

#### Aplikasi Queue

Queue memiliki berbagai aplikasi penting dalam pemrograman [1][2]:
- **Penjadwalan CPU**: Round-robin scheduling, process management [1]
- **Buffer management**: Keyboard buffer, printer spooler [1]
- **Breadth-First Search (BFS)**: Graph traversal algorithm [1]
- **Handling of interrupts**: Operating system interrupt handling [1]
- **Call center systems**: Customer service queue management [2]
- **Asynchronous data transfer**: IO Buffers, pipes, file IO [1]

#### Keuntungan Queue

- Operasi enqueue dan dequeue sangat cepat dengan kompleksitas O(1) [1]
- Sederhana dalam implementasi dan pemahaman konsep [2]
- Efisien untuk pengelolaan data dengan pola FIFO [1]
- Mendukung fairness dalam pemrosesan data [1]
- Cocok untuk sistem real-time [1]

#### Kekurangan Queue

- Akses elemen hanya terbatas pada head dan tail (tidak ada random access) [1]
- Ukuran terbatas untuk implementasi array-based [2]
- Tidak efisien untuk pencarian elemen tertentu [1]
- Circular queue memerlukan manajemen indeks yang hati-hati [2]

## Guided

### 1. GUIDED I - Queue dengan Linked List

Program ini mengimplementasikan Queue menggunakan struktur Linked List dengan operasi enqueue, dequeue, update, view, dan search.

#### main.cpp
```C++
#include "queue.h"
#include <iostream>

using namespace std;

int main(){
    queue Q;
    address nodeA, nodeB, nodeC, nodeD, nodeE = Nil;
    createQueue(Q);

    nodeA = alokasi(1);
    nodeB = alokasi(2);
    nodeC = alokasi(3);
    nodeD = alokasi(4);
    nodeE = alokasi(5);

    enQueue(Q, nodeA);
    enQueue(Q, nodeB);
    enQueue(Q, nodeC);
    enQueue(Q, nodeD);
    enQueue(Q, nodeE);
    cout << endl;

    cout << "--- Queue setelah enQueue ---" << endl;
    viewQueue(Q);
    cout << endl;

    deQueue(Q);
    deQueue(Q);
    cout << endl;

    cout << "--- Queue setelah deQueue 2 kali ---" << endl;
    viewQueue(Q);
    cout << endl;
    
    updateQueue(Q, 2);
    updateQueue(Q, 1);
    updateQueue(Q, 4);
    cout << endl;

    cout << "--- Queue setelah update ---" << endl;
    viewQueue(Q);
    cout << endl;

    searchData(Q, 4);
    searchData(Q, 9);

    return 0;
}
```

#### queue.h
```C++
#ifndef QUEUE_H
#define QUEUE_H
#define Nil NULL    

#include<iostream>
using namespace std;

typedef struct node *address;

struct node{
    int dataAngka;
    address next;
};

struct queue{
    address head;
    address tail;
};

bool isEmpty(queue Q);
void createQueue(queue &Q);
address alokasi(int angka);
void dealokasi(address &node);

void enQueue(queue &Q, address nodeBaru);
void deQueue(queue &Q);
void updateQueue(queue &Q, int posisi);
void viewQueue(queue Q);
void searchData(queue Q, int data);

#endif 
```

#### queue.cpp
```C++
#include "queue.h"
#include <iostream>

using namespace std;

bool isEmpty(queue Q){
    if(Q.head == Nil){
        return true;
    } else {
        return false;
    }
}

void createQueue(queue &Q){
    Q.head =  Q.tail = Nil;
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

void enQueue(queue &Q, address nodeBaru){
    if(isEmpty(Q) == true){
        Q.head = Q.tail = nodeBaru;
    } else {
        Q.tail->next = nodeBaru;
        Q.tail = nodeBaru;
    }
    cout << "Node " << nodeBaru->dataAngka << " berhasil ditambahkan kedalam queue!" << endl;
}

void deQueue(queue &Q){
    address nodeHapus;
    if(isEmpty(Q) == true){
        cout << "Queue kosong!" << endl;
    } else {
        nodeHapus = Q.head;
        int data = nodeHapus->dataAngka;
        Q.head = Q.head->next;
        nodeHapus->next = Nil;
        if(Q.head == Nil){
            Q.tail = Nil;
        }
        dealokasi(nodeHapus);
        cout << "node " <<  data << " berhasil dihapus dari queue!" << endl;
    }
}

void updateQueue(queue &Q, int posisi){
    if(isEmpty(Q) == true){
        cout << "Queue kosong!" << endl;
    } else {
        if(posisi == 0){
            cout << "Posisi tidak valid!" << endl;
        } else {
            address nodeBantu = Q.head;
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

void viewQueue(queue Q){
    if(isEmpty(Q) == true){
        cout << "Queue kosong!" << endl;
    } else {
        address nodeBantu = Q.head;
        while(nodeBantu != Nil){
            cout << nodeBantu->dataAngka << " ";
            nodeBantu = nodeBantu->next;
        }
    }
    cout << endl;
}

void searchData(queue Q, int data){
    if(isEmpty(Q) == true){
        cout << "Queue kosong!" << endl;
    } else {
        address nodeBantu = Q.head;
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
            cout << "Data " << data << " tidak ditemukan didalam queue!" << endl;
            cout << endl;
        }
    }
}
```



#### Penjelasan Program Guided 1:

Program ini mengimplementasikan **Queue menggunakan Linked List** dengan operasi-operasi dasar queue yang mengikuti prinsip FIFO (First In First Out).

**Struktur Data:**
- **struct node**: Berisi `dataAngka` (integer) dan pointer `next` ke node berikutnya
- **struct queue**: Berisi pointer `head` (depan) dan `tail` (belakang) queue
- **address**: Tipe data pointer untuk node

**Fungsi-Fungsi Utama:**

1. **createQueue(queue &Q)**:
   - Inisialisasi queue dengan set `head = tail = Nil` (NULL)
   - Queue kosong ditandai head dan tail menunjuk ke NULL

2. **isEmpty(queue Q)**:
   - Cek apakah queue kosong dengan memeriksa `head == Nil`
   - Return true jika kosong, false jika ada isi

3. **alokasi(int angka)**:
   - Alokasi memori dinamis untuk node baru menggunakan operator `new`
   - Isi field `dataAngka` dengan nilai parameter
   - Inisialisasi `next` ke Nil
   - Return alamat node baru

4. **enQueue(queue &Q, address nodeBaru)**:
   - Tambah node baru ke belakang queue
   - Jika queue kosong, head dan tail tunjuk ke node baru
   - Jika tidak kosong, tail->next tunjuk ke node baru lalu update tail
   - Kompleksitas: O(1)

5. **deQueue(queue &Q)**:
   - Hapus elemen dari depan queue (head)
   - Cek apakah queue kosong sebelum dequeue (cegah underflow)
   - Pindahkan head ke node berikutnya
   - Jika queue jadi kosong, tail juga di-set ke Nil
   - Bebaskan memori node yang dihapus dengan dealokasi
   - Kompleksitas: O(1)

6. **updateQueue(queue &Q, int posisi)**:
   - Update nilai node pada posisi tertentu (hitung dari head)
   - Lakukan traversal dari head sampai posisi yang dimaksud
   - Minta input nilai baru dari user
   - Validasi posisi dan cek queue tidak kosong

7. **viewQueue(queue Q)**:
   - Tampilkan seluruh isi queue dari head ke tail
   - Traversal menggunakan pointer bantuan
   - Data ditampilkan sesuai urutan FIFO

8. **searchData(queue Q, int data)**:
   - Cari nilai tertentu dalam queue
   - Traversal linear dari head ke tail
   - Tampilkan posisi data jika ketemu
   - Tampilkan pesan jika tidak ketemu
   - Kompleksitas: O(n) worst case

**Alur Eksekusi Program:**
1. Membuat queue kosong
2. EnQueue 5 node dengan nilai 1, 2, 3, 4, 5 â†’ Queue: **1 2 3 4 5** (FIFO)
3. DeQueue 2 kali (menghapus 1 dan 2) â†’ Queue: **3 4 5**
4. Update posisi tertentu dengan nilai baru dari input user
5. Search data tertentu dalam queue

**Keunggulan Implementasi:**
- Ukuran dinamis (tidak ada batasan MAX seperti array)
- Efisien untuk operasi enqueue dan dequeue dengan O(1)
- Memory management yang baik dengan dealokasi
- Mendukung prinsip FIFO dengan sempurna

**Keterbatasan:**
- Operasi update dan search memerlukan O(n) karena harus traversal
- Memerlukan memori tambahan untuk menyimpan pointer head dan tail
- Tidak ada random access ke elemen tertentu

### 2. GUIDED II - Queue dengan Array (Circular Queue)

Program ini mengimplementasikan Queue menggunakan array dengan metode circular (memutar) untuk efisiensi penggunaan memori.

#### main.cpp
```C++
#include<iostream>
#include "queue.h"
using namespace std;

int main() {
    Queue Q;
    createQueue(Q);
    printInfo(Q);

    cout<<"\n enqueue 3 elemen"<< endl;
    enqueue(Q, 5);
    printInfo(Q);
    enqueue(Q, 2);
    printInfo(Q);
    enqueue(Q, 7);
    printInfo(Q);
    cout<<"\n dequeue 1 elemen"<< endl;
    cout<<"elemen keluar"<< dequeue(Q)<< endl;
    printInfo(Q);
    cout<<"\n enqueue 1 elemen"<< endl;
    enqueue(Q, 4);
    printInfo(Q);
    cout<<"\n dequeue 2 elemen"<<endl;
    cout<< "elemen keluar"<< dequeue(Q) <<endl;
    cout<< "elemen keluar"<<dequeue(Q)<< endl;
    printInfo(Q);
    return 0;

}
```

#### queue.h
```C++
#ifndef QUEUE_H
#define QUEUE_H
#define MAX_QUEUE 5

struct Queue{
    int info[MAX_QUEUE];
    int head;
    int tail;
    int count;
};

void createQueue(Queue &Q);
bool isEmpty(Queue Q);
bool isFull(Queue Q);
void enqueue(Queue &Q, int x);
int dequeue(Queue &Q);
void printInfo(Queue Q);
#endif
```

#### queue.cpp
```C++
#include "queue.h" 
#include <iostream>

using namespace std;

void createQueue(Queue &Q) {
    Q.head = 0; 
    Q.tail = 0; 
    Q.count = 0;
}

bool isEmpty(Queue Q) {
    return Q.count == 0; //Kembalikan true jika jumlah elemen adalah 0
}

bool isFull(Queue Q) {
    return Q.count == MAX_QUEUE; // Kembalikan true jika jumlah elemen sama dengan maks
}

// Definisi prosedur untuk menambahkan elemen (enqueue)
void enqueue(Queue &Q, int x) {
    if (!isFull(Q)) { 
        Q.info[Q.tail] = x; // Masukkan data (x) ke posisi ekor (tail)
        // Pindahkan ekor secara circular (memutar)
        Q.tail = (Q.tail + 1) % MAX_QUEUE; 
        Q.count++; //Tambah jumlah elemen
    } else { 
        cout << "Antrean Penuh!" << endl;
    }
}

//Definisi fungsi untuk menghapus elemen (dequeue)
int dequeue(Queue &Q) {
    if (!isEmpty(Q)) { 
        int x = Q.info[Q.head]; // Ambil data di posisi  (head)
        Q.head = (Q.head + 1) % MAX_QUEUE;
        Q.count--; // Kurangi jumlah elemen
        return x;
    } else {
        cout << "Antrean Kosong!" << endl;
        return -1;
    }
}

// Definisi prosedur untuk menampilkan isi queue 
void printInfo(Queue Q) {
    cout << "Isi Queue: [ ";
    if (!isEmpty(Q)) { 
        int i = Q.head; // Mulai dari head
        int n = 0; //Penghitung elemen yang sudah dicetak
        while (n < Q.count) { // Ulangi sebanyak jumlah elemen
            cout << Q.info[i] << " "; // Cetak info
            i = (i + 1) % MAX_QUEUE; // Geser i secara circular
            n++; // Tambah penghitung
        }
    }
    cout << "]" << endl;
}
```



#### Penjelasan Program Guided 2:

Program ini mengimplementasikan **Queue menggunakan Array** dengan metode **Circular Queue** untuk optimalisasi penggunaan ruang array.

**Struktur Data:**
- **struct Queue**: Menggunakan array `info[MAX_QUEUE]` untuk menyimpan elemen, `head` sebagai indeks depan, `tail` sebagai indeks belakang, dan `count` untuk menghitung jumlah elemen
- **MAX_QUEUE = 5**: Kapasitas maksimum queue

**Fungsi-Fungsi Utama:**

1. **createQueue(Queue &Q)**:
   - Menginisialisasi queue dengan `head = 0`, `tail = 0`, dan `count = 0`
   - Queue kosong ditandai dengan count bernilai 0

2. **isEmpty(Queue Q)**:
   - Mengecek apakah queue kosong dengan membandingkan `count == 0`
   - Lebih akurat daripada membandingkan head dan tail karena circular

3. **isFull(Queue Q)**:
   - Mengecek apakah queue sudah penuh
   - Queue penuh jika `count == MAX_QUEUE`
   - Mencegah queue overflow

4. **enqueue(Queue &Q, int x)**:
   - Menambahkan elemen baru ke belakang queue (tail)
   - Melakukan pengecekan apakah queue sudah penuh
   - Memasukkan data ke posisi tail
   - **Circular operation**: `tail = (tail + 1) % MAX_QUEUE` memungkinkan tail kembali ke indeks 0 setelah mencapai MAX_QUEUE
   - Increment count
   - Kompleksitas waktu: O(1)

5. **dequeue(Queue &Q)**:
   - Menghapus dan mengembalikan elemen dari depan queue (head)
   - Mengecek apakah queue kosong sebelum dequeue
   - Mengambil nilai di posisi head
   - **Circular operation**: `head = (head + 1) % MAX_QUEUE` memungkinkan head kembali ke indeks 0
   - Decrement count
   - Mengembalikan -1 jika queue kosong (error value)
   - Kompleksitas waktu: O(1)

6. **printInfo(Queue Q)**:
   - Menampilkan seluruh isi queue dari head ke tail
   - Menggunakan loop dengan counter untuk menghitung jumlah elemen yang dicetak
   - **Circular traversal**: Menggunakan modulo untuk navigasi circular
   - Menampilkan format array dengan bracket

**Alur Eksekusi Program:**
1. Create queue â†’ Queue: **[ ]**
2. Enqueue 5 â†’ Queue: **[ 5 ]**
3. Enqueue 2 â†’ Queue: **[ 5 2 ]**
4. Enqueue 7 â†’ Queue: **[ 5 2 7 ]**
5. Dequeue (keluar 5) â†’ Queue: **[ 2 7 ]**
6. Enqueue 4 â†’ Queue: **[ 2 7 4 ]**
7. Dequeue (keluar 2) â†’ Queue: **[ 7 4 ]**
8. Dequeue (keluar 7) â†’ Queue: **[ 4 ]**

**Keunggulan Circular Queue:**
- **Efisiensi memori**: Memanfaatkan kembali ruang array yang sudah dikosongkan oleh dequeue
- **Tidak ada pemindahan elemen**: Berbeda dengan implementasi linear queue, tidak perlu shift elemen
- **Operasi O(1)**: Semua operasi dasar (enqueue, dequeue, isEmpty, isFull) berkompleksitas konstan
- **Penggunaan count**: Memudahkan pengecekan kosong/penuh tanpa perhitungan rumit

**Perbedaan dengan Linear Queue:**
- Linear queue: Setelah beberapa kali dequeue, tail bisa mencapai MAX meskipun ada ruang kosong di depan
- Circular queue: Menggunakan modulo untuk "memutar" indeks, memanfaatkan seluruh ruang array

**Ilustrasi Circular:**
```
Array Index: [0] [1] [2] [3] [4]
Awal:        [ ] [ ] [ ] [ ] [ ]
             H/T

Setelah enqueue 5,2,7:
             [5] [2] [7] [ ] [ ]
              H       T

Setelah dequeue (5 keluar):
             [ ] [2] [7] [ ] [ ]
                  H   T

Setelah enqueue 4,8,9:
             [9] [2] [7] [4] [8]
                  H           T (memutar)
```

**Keterbatasan:**
- Ukuran fixed (MAX_QUEUE = 5), tidak dapat berubah secara dinamis
- Memerlukan pengecekan isFull untuk mencegah overflow
- Waste memory jika queue jarang penuh

## Unguided 

### 1. Implementasi Queue dengan 3 Alternatif Mekanisme

#### ALTERNATIF 1: Head Diam, Tail Bergerak

Pada alternatif ini, **head tetap di posisi awal (0)**, sedangkan **tail bergerak** setiap kali ada enqueue. Ketika dequeue, head bergerak maju tanpa menggeser elemen.

##### queue.h
```C++
#ifndef QUEUE_H
#define QUEUE_H

typedef int infotype;
typedef struct {
    infotype info[5];
    int head, tail;
} Queue;

void CreateQueue(Queue& Q);
bool isEmptyQueue(Queue Q);
bool isFullQueue(Queue Q);
void enqueue(Queue& Q, infotype x);
infotype dequeue(Queue& Q);
void printInfo(Queue Q);

#endif
```

##### queue.cpp
```C++
#include "queue.h"
#include <iostream>
using namespace std;

// Alternatif 1: head diam, tail bergerak
void CreateQueue(Queue& Q) {
    Q.head = 0;
    Q.tail = 0;
}

bool isEmptyQueue(Queue Q) {
    return Q.head == Q.tail;
}

bool isFullQueue(Queue Q) {
    return Q.tail == 5;
}

void enqueue(Queue& Q, infotype x) {
    if (!isFullQueue(Q)) {
        Q.info[Q.tail] = x;
        Q.tail++;
    } else {
        cout << "Queue penuh!" << endl;
    }
}

infotype dequeue(Queue& Q) {
    infotype x = 0;
    if (!isEmptyQueue(Q)) {
        x = Q.info[Q.head];
        Q.head++;
    } else {
        cout << "Queue kosong!" << endl;
    }
    return x;
}

void printInfo(Queue Q) {
    if (isEmptyQueue(Q)) {
        cout << "Queue kosong!" << endl;
    } else {
        cout << "Isi Queue: ";
        for (int i = Q.head; i < Q.tail; i++) {
            cout << Q.info[i] << " ";
        }
        cout << endl;
    }
}
```

##### main.cpp
```C++
#include "queue.h"
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World" << endl;
    Queue Q;
    CreateQueue(Q);
    
    cout << "----------------------" << endl;
    cout << " H = T \\t | Queue Info" << endl;
    cout << "----------------------" << endl;
    printInfo(Q);
    
    enqueue(Q, 5); printInfo(Q);
    enqueue(Q, 2); printInfo(Q);
    enqueue(Q, 7); printInfo(Q);
    dequeue(Q); printInfo(Q);
    enqueue(Q, 4); printInfo(Q);
    dequeue(Q); printInfo(Q);
    dequeue(Q); printInfo(Q);
    
    return 0;
}
```

##### Output Alternatif 1:
![Output Alternatif 1](link_output_alternatif_1)

##### Penjelasan Alternatif 1:

**Mekanisme**: Head dan tail bergerak maju tanpa ada reset atau operasi circular.

**Karakteristik**:
- **Head**: Dimulai dari indeks 0, bergerak maju saat dequeue
- **Tail**: Dimulai dari indeks 0, bergerak maju saat enqueue
- **isEmpty**: Terjadi ketika head == tail
- **isFull**: Terjadi ketika tail == 5 (maksimum array)

**Kelebihan**:
- Implementasi sederhana dan mudah dipahami
- Tidak perlu perhitungan modulo
- Operasi enqueue dan dequeue O(1)

**Kekurangan**:
- Tidak efisien dalam penggunaan memori
- Queue bisa dianggap penuh meskipun ada ruang kosong di depan

---

#### ALTERNATIF 2: Head Bergerak, Tail Bergerak

##### queue.h
```C++
#ifndef QUEUE_H
#define QUEUE_H

typedef int infotype;
typedef struct {
    infotype info[5];
    int head, tail;
} Queue;

void CreateQueue(Queue& Q);
bool isEmptyQueue(Queue Q);
bool isFullQueue(Queue Q);
void enqueue(Queue& Q, infotype x);
infotype dequeue(Queue& Q);
void printInfo(Queue Q);

#endif
```

##### queue.cpp
```C++
#include "queue.h"
#include <iostream>
using namespace std;

// Alternatif 2: head bergerak, tail bergerak
void CreateQueue(Queue& Q) {
    Q.head = 0;
    Q.tail = 0;
}

bool isEmptyQueue(Queue Q) {
    return Q.head == Q.tail;
}

bool isFullQueue(Queue Q) {
    return Q.tail == 5;
}

void enqueue(Queue& Q, infotype x) {
    if (!isFullQueue(Q)) {
        Q.info[Q.tail] = x;
        Q.tail++;
    } else {
        cout << "Queue penuh!" << endl;
    }
}

infotype dequeue(Queue& Q) {
    infotype x = 0;
    if (!isEmptyQueue(Q)) {
        x = Q.info[Q.head];
        Q.head++;
        // Jika queue kosong setelah dequeue, reset head dan tail
        if (Q.head == Q.tail) {
            Q.head = 0;
            Q.tail = 0;
        }
    } else {
        cout << "Queue kosong!" << endl;
    }
    return x;
}

void printInfo(Queue Q) {
    if (isEmptyQueue(Q)) {
        cout << "Queue kosong!" << endl;
    } else {
        cout << "Isi Queue: ";
        for (int i = Q.head; i < Q.tail; i++) {
            cout << Q.info[i] << " ";
        }
        cout << endl;
    }
}
```

##### main.cpp
```C++
#include "queue.h"
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World" << endl;
    Queue Q;
    CreateQueue(Q);
    
    cout << "----------------------" << endl;
    cout << " H = T \\t | Queue Info" << endl;
    cout << "----------------------" << endl;
    printInfo(Q);
    
    enqueue(Q, 5); printInfo(Q);
    enqueue(Q, 2); printInfo(Q);
    enqueue(Q, 7); printInfo(Q);
    dequeue(Q); printInfo(Q);
    enqueue(Q, 4); printInfo(Q);
    dequeue(Q); printInfo(Q);
    dequeue(Q); printInfo(Q);
    
    return 0;
}
```

##### Output Alternatif 2:
![Output Alternatif 2](link_output_alternatif_2)

##### Penjelasan Alternatif 2:

**Mekanisme**: Head dan tail sama-sama bergerak maju setiap ada operasi. Ketika queue kosong, head dan tail direset ke posisi 0.

**Karakteristik**:
- **Head**: Bergerak maju saat dequeue
- **Tail**: Bergerak maju saat enqueue
- **isEmpty**: Terjadi ketika head == tail
- **isFull**: Terjadi ketika tail == 5
- **Reset**: Jika queue kosong (head == tail), keduanya direset ke 0

**Kelebihan**:
- Operasi dequeue tetap O(1) tanpa shifting
- Implementasi sederhana
- Lebih efisien dari Alternatif 1

**Kekurangan**:
- Tetap bisa penuh meskipun ada ruang kosong di depan
- Tidak seefisien circular queue

---

#### ALTERNATIF 3: Head dan Tail Berputar (Circular Queue)

##### queue.h
```C++
#ifndef QUEUE_H
#define QUEUE_H

typedef int infotype;
typedef struct {
    infotype info[5];
    int head, tail;
} Queue;

void CreateQueue(Queue& Q);
bool isEmptyQueue(Queue Q);
bool isFullQueue(Queue Q);
void enqueue(Queue& Q, infotype x);
infotype dequeue(Queue& Q);
void printInfo(Queue Q);

#endif
```

##### queue.cpp
```C++
#include "queue.h"
#include <iostream>
using namespace std;

// Alternatif 3: head dan tail berputar (circular queue)
void CreateQueue(Queue& Q) {
    Q.head = 0;
    Q.tail = 0;
}

bool isEmptyQueue(Queue Q) {
    return Q.head == Q.tail;
}

bool isFullQueue(Queue Q) {
    return (Q.tail + 1) % 5 == Q.head;
}

void enqueue(Queue& Q, infotype x) {
    if (!isFullQueue(Q)) {
        Q.info[Q.tail] = x;
        Q.tail = (Q.tail + 1) % 5;
    } else {
        cout << "Queue penuh!" << endl;
    }
}

infotype dequeue(Queue& Q) {
    infotype x = 0;
    if (!isEmptyQueue(Q)) {
        x = Q.info[Q.head];
        Q.head = (Q.head + 1) % 5;
    } else {
        cout << "Queue kosong!" << endl;
    }
    return x;
}

void printInfo(Queue Q) {
    if (isEmptyQueue(Q)) {
        cout << "Queue kosong!" << endl;
    } else {
        cout << "Isi Queue: ";
        int i = Q.head;
        while (i != Q.tail) {
            cout << Q.info[i] << " ";
            i = (i + 1) % 5;
        }
        cout << endl;
    }
}
```

##### main.cpp
```C++
#include "queue.h"
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World" << endl;
    Queue Q;
    CreateQueue(Q);
    
    cout << "----------------------" << endl;
    cout << " H = T \\t | Queue Info" << endl;
    cout << "----------------------" << endl;
    printInfo(Q);
    
    enqueue(Q, 5); printInfo(Q);
    enqueue(Q, 2); printInfo(Q);
    enqueue(Q, 7); printInfo(Q);
    dequeue(Q); printInfo(Q);
    enqueue(Q, 4); printInfo(Q);
    dequeue(Q); printInfo(Q);
    dequeue(Q); printInfo(Q);
    
    return 0;
}
```

##### Output Alternatif 3:
![Output Alternatif 3](link_output_alternatif_3)

##### Penjelasan Alternatif 3:

**Mekanisme**: Head dan tail bergerak secara circular menggunakan operasi modulo, sehingga ketika mencapai akhir array, indeks kembali ke awal.

**Karakteristik**:
- **Head**: Bergerak circular dengan `(head + 1) % 5`
- **Tail**: Bergerak circular dengan `(tail + 1) % 5`
- **isEmpty**: Terjadi ketika head == tail
- **isFull**: Terjadi ketika `(tail + 1) % 5 == head`

**Kelebihan**:
- Efisien dalam penggunaan memori - semua ruang array dapat dimanfaatkan
- Operasi O(1) - baik enqueue maupun dequeue berkompleksitas konstan
- Tidak ada shifting - tidak perlu menggeser elemen
- Optimal untuk aplikasi real-time

**Kekurangan**:
- Implementasi sedikit lebih kompleks dengan modulo
- Perlu hati-hati dalam menentukan kondisi full

---

### Perbandingan 3 Alternatif

| Aspek | Alternatif 1 | Alternatif 2 | Alternatif 3 |
|-------|-------------|-------------|-------------|
| **Kompleksitas Enqueue** | O(1) | O(1) | O(1) |
| **Kompleksitas Dequeue** | O(1) | O(1) | O(1) |
| **Efisiensi Memori** | Rendah | Sedang | Tinggi |
| **Implementasi** | Mudah | Mudah | Kompleks |
| **Penggunaan Ruang** | Boros | Boros | Sangat Efisien |
| **Cocok Untuk** | Pembelajaran | Pembelajaran | Produksi |

**Kesimpulan**:
- **Alternatif 1**: Cocok untuk pembelajaran konsep dasar queue (head dan tail bergerak linear)
- **Alternatif 2**: Cocok untuk pembelajaran konsep queue (head dan tail bergerak dengan reset)
- **Alternatif 3** (Circular Queue): **Yang terbaik** untuk aplikasi real-world karena efisien dalam waktu dan ruang

#### Perbedaan Nyata Ketiga Alternatif

Dari output di atas, terlihat bahwa ketiga alternatif menghasilkan urutan data yang sama. Namun, **perbedaan sesungguhnya terletak pada pergerakan head (H) dan tail (T)**:

**Pergerakan Head dan Tail:**
- Semua alternatif menunjukkan H dan T yang bergerak dari 0 ke posisi lebih besar
- Pada operasi yang sama, hasilnya identik: `H=0 T=0` → `H=3 T=4`

**Perbedaan Muncul Saat:**

1. **Alternatif 1 (Linear)**: 
   - Jika queue dikosongkan total (misal H=5, T=5), **tidak bisa** enqueue lagi karena T sudah mencapai MAX
   - Ruang array di indeks 0-4 terbuang sia-sia
   - Contoh: Setelah 5x enqueue dan 5x dequeue → H=5, T=5 → enqueue GAGAL meski array kosong

2. **Alternatif 2 (Dengan Reset)**:
   - Saat queue kosong (H==T), keduanya **direset ke 0**
   - Bisa menggunakan array dari awal lagi
   - Contoh: Setelah 5x enqueue dan 5x dequeue → H=0, T=0 (reset) → enqueue BERHASIL

3. **Alternatif 3 (Circular)**:
   - Indeks berputar menggunakan modulo: `(T+1)%5` dan `(H+1)%5`
   - **Tidak pernah** ada ruang terbuang, bahkan di tengah operasi
   - Contoh: H=2, T=4 → enqueue → T=0 (memutar!) → masih bisa pakai indeks 0,1

**Visualisasi Perbedaan:**
```
Kondisi: Enqueue 5x, Dequeue 5x, Coba Enqueue 1x

Alternatif 1: H=5 T=5 → Enqueue GAGAL ❌ (T==MAX padahal kosong)
Alternatif 2: H=0 T=0 → Enqueue BERHASIL ✅ (Reset ke 0)  
Alternatif 3: H=0 T=1 → Enqueue BERHASIL ✅ (Circular, tidak perlu reset)
```

Jadi **perbedaan utama** adalah pada **efisiensi penggunaan ruang array** ketika head dan tail sudah bergerak jauh dari posisi awal.

## Kesimpulan

Dari praktikum **Queue** yang telah dilakukan, dapat disimpulkan:

1. **Queue** adalah struktur data linear dengan prinsip **FIFO (First In First Out)**, dimana elemen yang pertama masuk akan keluar pertama. Prinsip ini membedakan queue dari struktur data lain seperti stack.

2. **Implementasi Queue** bisa dilakukan dengan dua cara: **array (static)** dan **linked list (dynamic)**. Queue berbasis array punya ukuran tetap, sedangkan yang berbasis linked list lebih fleksibel dengan ukuran dinamis.

3. **Operasi Dasar Queue** (enqueue dan dequeue) punya kompleksitas O(1) pada ketiga alternatif implementasi yang dibuat, baik menggunakan linked list maupun array.

4. **Circular Queue** adalah implementasi queue berbasis array yang paling efisien karena memanfaatkan ruang array secara optimal dengan operasi modulo agar indeks bisa berputar.

5. **Tiga Alternatif Implementasi Queue dengan Array**:
   - **Alternatif 1**: Head dan tail bergerak linear tanpa reset atau circular
   - **Alternatif 2**: Head dan tail bergerak dengan reset ke 0 saat queue kosong
   - **Alternatif 3 (Circular)**: Paling optimal dengan operasi modulo untuk efisiensi maksimal

6. **Validasi Kondisi** penting untuk mencegah **overflow** (enqueue saat penuh) dan **underflow** (dequeue saat kosong).

7. **Aplikasi Queue** sangat luas: penjadwalan CPU (round-robin), buffer management, BFS, handling interrupts, dan sistem antrian pelayanan.

8. **Memory Management** pada queue berbasis linked list butuh perhatian khusus dengan alokasi (`new`) dan dealokasi (`delete`) agar tidak terjadi memory leak.

9. **Operasi Modulo** pada circular queue bikin indeks bisa "berputar" kembali ke awal array sehingga ruang array terpakai maksimal.

10. Implementasi queue menunjukkan pentingnya pemahaman **abstraksi data**, **efisiensi algoritma**, dan pemilihan struktur data yang sesuai kebutuhan.

## Referensi

[1] Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

[2] Karumanchi, N. (2016). *Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles* (5th ed.). CareerMonk Publications.

[3] Shaffer, C. A. (2013). *Data Structures and Algorithm Analysis in C++* (3rd ed.). Dover Publications.

[4] Sahni, S., & Anderson-Freed, S. (2004). *Fundamentals of Data Structures in C++* (2nd ed.). Silicon Press.

[5] Drozdek, A. (2012). *Data Structures and Algorithms in C++* (4th ed.). Cengage Learning. ISBN: 978-1133608424
