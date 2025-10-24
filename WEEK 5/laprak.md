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

4. **Search Operations** (Operasi Pencarian)
   - **findElm()**: Mencari node dengan nilai tertentu dalam list [3]
   - Menggunakan algoritma linear search dengan kompleksitas O(n)
   - Mengembalikan alamat node jika ditemukan, NULL jika tidak [3]

5. **Aggregate Operations** (Operasi Agregasi)
   - **sumInfo()**: Menghitung total nilai dari seluruh elemen dalam list
   - **avgInfo()**: Menghitung rata-rata nilai elemen
   - **findMax()**: Mencari nilai maksimum dalam list
   - **findMin()**: Mencari nilai minimum dalam list
   - Operasi ini menggunakan traversal pattern dengan akumulator [1][3]

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

---

## Guided

### 1. Linked List Buah dengan Operasi Insert dan Update

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

**Penjelasan Program:**

Program ini mengimplementasikan Single Linked List untuk menyimpan data buah dengan atribut nama, jumlah, dan harga. Program mendemonstrasikan operasi INSERT dan UPDATE pada linked list.

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
- Menampilkan hasil sebelum dan sesudah update dengan jumlah node

---

### 2. Linear Search pada Linked List

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

**Penjelasan Program:**

Program ini mengimplementasikan algoritma **Linear Search** pada Single Linked List dengan struktur sederhana untuk mencari elemen tertentu.

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

---

## Unguided 

### 1. Binary Search pada Linked List

Program ini mengimplementasikan algoritma **Binary Search** pada struktur data **Linked List** untuk mencari elemen tertentu. Program harus mampu:
1. Membuat linked list dengan menambahkan node di akhir
2. Mengimplementasikan binary search pada linked list terurut
3. Menampilkan detail proses pencarian dan hasil akhir

#### main.cpp
```C++
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void append(Node*& head, int value) {
    Node* newNode = new Node();
    newNode->data = value;
    newNode->next = nullptr;
    
    if (head == nullptr) {
        head = newNode;
        return;
    }
    
    Node* temp = head;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    temp->next = newNode;
}

void displayList(Node* head) {
    Node* temp = head;
    cout << "Linked List yang dibuat: ";
    while (temp != nullptr) {
        cout << temp->data;
        if (temp->next != nullptr) {
            cout << " -> ";
        }
        temp = temp->next;
    }
    cout << " -> NULL" << endl;
}

int getLength(Node* head) {
    int count = 0;
    Node* temp = head;
    while (temp != nullptr) {
        count++;
        temp = temp->next;
    }
    return count;
}

Node* getNodeAt(Node* head, int index) {
    Node* temp = head;
    for (int i = 0; i < index && temp != nullptr; i++) {
        temp = temp->next;
    }
    return temp;
}

Node* binarySearch(Node* head, int key) {
    int left = 0;
    int right = getLength(head) - 1;
    int iterasi = 1;
    
    cout << "\nProses Pencarian:" << endl;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        Node* midNode = getNodeAt(head, mid);
        
        cout << "Iterasi " << iterasi << ": Mid = " << midNode->data 
             << " (indeks tengah)";
        
        if (midNode->data == key) {
            cout << " - DITEMUKAN!" << endl;
            return midNode;
        }
        else if (midNode->data < key) {
            cout << " -> Cari di bagian kanan" << endl;
            left = mid + 1;
        }
        else {
            cout << " -> Cari di bagian kiri" << endl;
            right = mid - 1;
        }
        
        iterasi++;
    }
    
    cout << "Tidak ada elemen tersisa" << endl;
    return nullptr;
}

int main() {
    Node* head = nullptr;
    int n, value, search;
    
    cout << "BINARY SEARCH PADA LINKED LIST" << endl;
    cout << "Masukkan jumlah elemen (minimal 5): ";
    cin >> n;
    
    cout << "Masukkan " << n << " elemen (harus terurut/ascending):" << endl;
    for (int i = 0; i < n; i++) {
        cout << "Elemen ke-" << (i+1) << ": ";
        cin >> value;
        append(head, value);
    }
    
    displayList(head);
    
    cout << "Mencari nilai: ";
    cin >> search;
    
    Node* result = binarySearch(head, search);
    
    cout << endl;
    if (result != nullptr) {
        cout << "Hasil: Nilai " << search << " DITEMUKAN pada linked list!" << endl;
        cout << "Alamat node: " << result << endl;
        cout << "Data node: " << result->data << endl;
        cout << "Node berikutnya: " << result->next << endl;
    } else {
        cout << "Hasil: Nilai " << search << " TIDAK DITEMUKAN dalam linked list!" << endl;
    }
    
    cout << "\nMencari nilai: ";
    cin >> search;
    
    result = binarySearch(head, search);
    
    cout << endl;
    if (result != nullptr) {
        cout << "Hasil: Nilai " << search << " DITEMUKAN pada linked list!" << endl;
        cout << "Alamat node: " << result << endl;
        cout << "Data node: " << result->data << endl;
        cout << "Node berikutnya: " << result->next << endl;
    } else {
        cout << "Hasil: Nilai " << search << " TIDAK DITEMUKAN dalam linked list!" << endl;
    }
    
    return 0;
}
```

#### Penjelasan Program:

Program ini mengimplementasikan algoritma **Binary Search pada Linked List** untuk mencari elemen tertentu dengan metode divide and conquer.

**Fungsi-Fungsi Utama:**

1. **struct Node**:
   - `int data`: Menyimpan nilai integer pada node
   - `Node* next`: Pointer menunjuk ke node berikutnya

2. **append(Node*& head, int value)**:
   - Menambahkan node baru di akhir linked list
   - Jika list kosong, node baru menjadi head
   - Jika tidak, traverse hingga node terakhir dan tambahkan node baru

3. **displayList(Node* head)**:
   - Menampilkan seluruh isi linked list dengan format: `10 -> 20 -> 30 -> NULL`
   - Melakukan traversal dari head hingga akhir list

4. **getLength(Node* head)**:
   - Menghitung jumlah total node dalam linked list
   - Digunakan untuk menentukan batas kanan (right) pada binary search

5. **getNodeAt(Node* head, int index)**:
   - Mengambil node pada indeks tertentu
   - Digunakan untuk mendapatkan node tengah (mid) pada binary search

6. **binarySearch(Node* head, int key)**:
   - Implementasi algoritma binary search pada linked list
   - **Algoritma**:
     - Inisialisasi left = 0, right = panjang list - 1
     - Loop selama left <= right:
       - Hitung mid = left + (right - left) / 2
       - Ambil node pada indeks mid
       - Jika node->data == key: return node (ditemukan)
       - Jika node->data < key: cari di bagian kanan (left = mid + 1)
       - Jika node->data > key: cari di bagian kiri (right = mid - 1)
     - Return nullptr jika tidak ditemukan
   - Menampilkan setiap iterasi pencarian dengan nilai mid

7. **main()**:
   - Input jumlah elemen (minimal 5)
   - Input elemen-elemen (harus terurut/ascending)
   - Membuat linked list dengan memanggil append()
   - Menampilkan linked list
   - Melakukan 2 kali pencarian dengan binary search
   - Menampilkan hasil: alamat node, data node, dan node berikutnya (jika ditemukan)

**Karakteristik Program:**
- **Data Terurut**: Binary search memerlukan data yang sudah terurut ascending
- **Efisiensi**: Kompleksitas O(log n) untuk pencarian pada array, tapi O(n) pada linked list karena akses node memerlukan traversal
- **Detail Proses**: Menampilkan setiap iterasi dan keputusan pencarian (kiri/kanan)
- **Pencarian Ganda**: Program melakukan 2 kali pencarian untuk mendemonstrasikan kasus ditemukan dan tidak ditemukan

**Kompleksitas:**
- **append()**: O(n) - harus traverse hingga akhir list
- **binarySearch()**: O(n log n) - akses node O(n) × iterasi binary search O(log n)
- **Space Complexity**: O(1) - hanya menggunakan variabel tambahan

#### Output:
![Output Program 1](https://github.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/blob/master/WEEK%205/op1.png)

**Deskripsi Output:**
Program meminta user memasukkan jumlah elemen (minimal 5), kemudian nilai-nilai yang harus terurut secara ascending. Linked list ditampilkan dalam format `10 -> 20 -> 30 -> 40 -> 50 -> NULL`. Saat pencarian dilakukan, program menampilkan setiap iterasi binary search dengan nilai tengah (mid) dan keputusan pencarian (kiri/kanan). Hasil pencarian menampilkan status ditemukan/tidak ditemukan beserta alamat node, data node, dan alamat node berikutnya jika elemen ditemukan.

---

### 2. Linear Search pada Linked List

Program ini mengimplementasikan algoritma **Linear Search** pada struktur data **Linked List** untuk mencari elemen tertentu secara sekuensial. Program harus mampu:
1. Membuat linked list dengan menambahkan node di akhir
2. Mengimplementasikan linear search pada linked list
3. Menampilkan detail proses pencarian dan hasil akhir

#### main.cpp
```C++
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void append(Node*& head, int value) {
    Node* newNode = new Node();
    newNode->data = value;
    newNode->next = nullptr;
    
    if (head == nullptr) {
        head = newNode;
        return;
    }
    
    Node* temp = head;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    temp->next = newNode;
}

void displayList(Node* head) {
    Node* temp = head;
    cout << "Linked List yang dibuat: ";
    while (temp != nullptr) {
        cout << temp->data;
        if (temp->next != nullptr) {
            cout << " -> ";
        }
        temp = temp->next;
    }
    cout << " -> NULL" << endl;
}

Node* linearSearch(Node* head, int key) {
    Node* current = head;
    int position = 1;
    
    cout << "\nProses Pencarian:" << endl;
    
    while (current != nullptr) {
        cout << "Memeriksa node " << position << ": " << current->data;
        
        if (current->data == key) {
            cout << " (SAMA) - DITEMUKAN!" << endl;
            return current;
        }
        
        cout << " (tidak sama)" << endl;
        current = current->next;
        position++;
    }
    
    cout << "Tidak ada node lagi yang tersisa" << endl;
    return nullptr;
}

int main() {
    Node* head = nullptr;
    int n, value, search;
    
    cout << "LINEAR SEARCH PADA LINKED LIST" << endl;
    cout << "Masukkan jumlah elemen (minimal 3): ";
    cin >> n;
    
    cout << "Masukkan " << n << " elemen:" << endl;
    for (int i = 0; i < n; i++) {
        cout << "Elemen ke-" << (i+1) << ": ";
        cin >> value;
        append(head, value);
    }
    
    displayList(head);
    
    cout << "Mencari nilai: ";
    cin >> search;
    
    Node* result = linearSearch(head, search);
    
    cout << endl;
    if (result != nullptr) {
        cout << "Hasil: Nilai " << search << " DITEMUKAN pada linked list!" << endl;
        cout << "Alamat node: " << result << endl;
        cout << "Data node: " << result->data << endl;
        cout << "Node berikutnya: " << result->next << endl;
    } else {
        cout << "Hasil: Nilai " << search << " TIDAK DITEMUKAN dalam linked list!" << endl;
    }
    
    cout << "\nMencari nilai: ";
    cin >> search;
    
    result = linearSearch(head, search);
    
    cout << endl;
    if (result != nullptr) {
        cout << "Hasil: Nilai " << search << " DITEMUKAN pada linked list!" << endl;
        cout << "Alamat node: " << result << endl;
        cout << "Data node: " << result->data << endl;
        cout << "Node berikutnya: " << result->next << endl;
    } else {
        cout << "Hasil: Nilai " << search << " TIDAK DITEMUKAN dalam linked list!" << endl;
    }
    
    return 0;
}
```

#### Penjelasan Program:

Program ini mengimplementasikan algoritma **Linear Search pada Linked List** untuk mencari elemen dengan memeriksa setiap node secara berurutan dari awal hingga akhir.

**Fungsi-Fungsi Utama:**

1. **struct Node**:
   - `int data`: Menyimpan nilai integer pada node
   - `Node* next`: Pointer menunjuk ke node berikutnya

2. **append(Node*& head, int value)**:
   - Menambahkan node baru di akhir linked list
   - Sama seperti Unguided 1, untuk membangun linked list

3. **displayList(Node* head)**:
   - Menampilkan seluruh isi linked list dengan format: `10 -> 20 -> 30 -> NULL`
   - Melakukan traversal dari head hingga akhir list

4. **linearSearch(Node* head, int key)**:
   - Implementasi algoritma linear search pada linked list
   - **Algoritma**:
     - Mulai dari node pertama (head)
     - Loop untuk setiap node:
       - Tampilkan nomor node dan nilai yang diperiksa
       - Jika node->data == key: tampilkan "(SAMA) - DITEMUKAN!" dan return node
       - Jika tidak sama: tampilkan "(tidak sama)" dan lanjut ke node berikutnya
     - Jika sampai akhir list tidak ditemukan: return nullptr
   - Menampilkan setiap langkah pemeriksaan node

5. **main()**:
   - Input jumlah elemen (minimal 3)
   - Input elemen-elemen (tidak perlu terurut)
   - Membuat linked list dengan memanggil append()
   - Menampilkan linked list
   - Melakukan 2 kali pencarian dengan linear search
   - Menampilkan hasil: alamat node, data node, dan node berikutnya (jika ditemukan)

**Perbedaan dengan Binary Search:**
- **Data**: Linear search tidak memerlukan data terurut
- **Proses**: Memeriksa setiap node satu per satu dari awal
- **Kompleksitas**: O(n) untuk semua kasus (best, average, worst)
- **Sederhana**: Implementasi lebih mudah dibanding binary search

**Karakteristik Program:**
- **Sequential**: Pemeriksaan dilakukan berurutan node demi node
- **Tidak Perlu Sorting**: Dapat bekerja pada data yang tidak terurut
- **Detail Proses**: Menampilkan setiap node yang diperiksa dan statusnya (sama/tidak sama)
- **Pencarian Ganda**: Program melakukan 2 kali pencarian untuk mendemonstrasikan kasus ditemukan dan tidak ditemukan

**Kompleksitas:**
- **linearSearch()**: O(n) - worst case harus memeriksa semua node
- **append()**: O(n) - harus traverse hingga akhir list
- **Best Case**: O(1) - jika elemen ditemukan di node pertama
- **Average Case**: O(n/2) - rata-rata di tengah list
- **Worst Case**: O(n) - elemen di akhir atau tidak ada
- **Space Complexity**: O(1) - hanya menggunakan variabel tambahan

#### Output:
![Output Program 2](https://github.com/hanif-12-01/STRUKTUR_DATA_MHANIFALFAIZ/blob/master/WEEK%205/op2.png)

**Deskripsi Output:**
Program meminta user memasukkan jumlah elemen (minimal 3) dan nilai setiap elemen tanpa perlu terurut. Linked list ditampilkan dalam format `10 -> 20 -> 30 -> NULL`. Saat pencarian dilakukan, program menampilkan proses pemeriksaan setiap node secara berurutan dengan status "tidak sama" atau "SAMA - DITEMUKAN!". Hasil pencarian menampilkan status ditemukan/tidak ditemukan beserta alamat node, data node, dan alamat node berikutnya jika elemen ditemukan.

---

## Kesimpulan

Berdasarkan praktikum yang telah dilakukan tentang Singly Linked List dengan fokus pada operasi pencarian (searching), dapat disimpulkan beberapa hal penting sebagai berikut:

1. **Singly Linked List** merupakan struktur data dinamis yang sangat fleksibel dengan kemampuan alokasi memori secara dinamis. Struktur ini terdiri dari node-node yang saling terhubung melalui pointer, dimana setiap node memiliki komponen data dan pointer `next` yang menunjuk ke node berikutnya dalam list.

2. **Operasi Insert dan Update** pada Singly Linked List mencakup berbagai fungsi seperti insertFirst(), insertLast(), insertAfter(), updateFirst(), updateLast(), dan updateAfter(). Operasi-operasi ini memberikan fleksibilitas dalam memanipulasi data pada linked list di berbagai posisi (awal, akhir, atau setelah node tertentu).

3. **Binary Search pada Linked List** memiliki karakteristik unik dibanding implementasinya pada array. Meskipun algoritma binary search pada array memiliki kompleksitas O(log n), pada linked list kompleksitasnya menjadi O(n log n) karena setiap akses ke node tengah (mid) memerlukan traversal O(n). Data harus terurut (sorted) agar binary search dapat bekerja dengan benar.

4. **Linear Search pada Linked List** merupakan algoritma pencarian sequential yang memeriksa setiap node satu per satu dari awal hingga akhir. Kompleksitas waktu linear search adalah O(n) pada worst case, namun memiliki keuntungan tidak memerlukan data terurut dan implementasinya lebih sederhana dibanding binary search.

5. **Perbandingan Binary Search dan Linear Search** menunjukkan trade-off antara efisiensi dan persyaratan data. Binary search lebih cepat pada array terurut (O(log n)), tetapi kurang efisien pada linked list. Linear search lebih fleksibel karena dapat bekerja pada data yang tidak terurut, cocok untuk dataset kecil atau ketika sorting tidak diperlukan.

6. **Manajemen Memori** dalam C++ sangat krusial dalam implementasi linked list. Setiap operasi pembuatan node menggunakan operator `new` untuk mengalokasikan memori secara dinamis, dan harus diikuti dengan operator `delete` saat node tidak lagi digunakan untuk mencegah memory leak.

7. **Modularitas Program** dengan pemisahan kode menjadi file header (.h), implementation file (.cpp), dan main program merupakan praktik terbaik dalam pemrograman C++. Struktur ini meningkatkan readability, reusability, dan memudahkan debugging serta maintenance kode.

8. **Traversal** merupakan operasi fundamental dalam linked list yang digunakan oleh berbagai fungsi seperti displayList(), getLength(), dan algoritma pencarian. Proses traversal dilakukan dengan mengiterasi dari node pertama hingga mencapai nullptr, dengan kompleksitas waktu O(n).

9. **Input Dinamis** pada program Unguided memungkinkan user untuk menentukan jumlah dan nilai data secara bebas, membuat program lebih fleksibel dan interaktif. Fitur ini sangat berguna untuk testing berbagai skenario dan ukuran data yang berbeda.

10. Implementasi kedua algoritma pencarian (Binary dan Linear Search) pada linked list mendemonstrasikan pentingnya pemahaman tentang **pointer manipulation**, **algorithm analysis**, dan **data structure characteristics** dalam memilih algoritma yang tepat sesuai dengan karakteristik data dan kebutuhan program.

---

## Referensi

[1] Karumanchi, N. (2016). *Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles* (5th ed.). CareerMonk Publications.

[2] Goodrich, M. T., Tamassia, R., & Goldwasser, M. H. (2014). *Data Structures and Algorithms in Java* (6th ed.). John Wiley & Sons.

[3] Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

[4] Stroustrup, B. (2013). *The C++ Programming Language* (4th ed.). Addison-Wesley Professional.

[5] Wijaya, A., & Saputra, D. (2020). Implementasi Struktur Data Linked List dalam Sistem Manajemen Data Mahasiswa. *Jurnal Teknologi Informasi dan Komputer*, 6(2), 145-152.

[6] Prasetyo, R. A., & Hidayat, T. (2019). Analisis Perbandingan Kinerja Struktur Data Array dan Linked List pada Aplikasi Berbasis C++. *Jurnal Informatika dan Komputer*, 4(1), 28-35.
