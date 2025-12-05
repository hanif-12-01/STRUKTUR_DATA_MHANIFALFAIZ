# <h1 align="center">Laporan Praktikum Modul 10 - Tree</h1>
<p align="center">M. Hanif Al Faiz - 103112400042</p>

## Dasar Teori

### Tree (Pohon)

Tree atau pohon adalah struktur data non-linear yang terdiri dari kumpulan node yang saling terhubung secara hierarkis [1]. Berbeda dengan struktur data linear seperti array atau linked list, tree memungkinkan representasi hubungan hierarkis antar data yang lebih kompleks [2]. Setiap tree memiliki satu node khusus yang disebut root (akar), dan setiap node dapat memiliki nol atau lebih node anak (child nodes) [1].

Tree banyak digunakan dalam berbagai aplikasi seperti sistem file komputer, struktur organisasi, pengindeksan database, dan algoritma pencarian [3]. Struktur hierarkis tree memungkinkan operasi pencarian, penyisipan, dan penghapusan yang efisien dengan kompleksitas waktu logaritmik pada kasus rata-rata [4].

#### Terminologi Tree

Beberapa istilah penting dalam struktur data tree [1][2][5]:

1. **Root (Akar)**: Node paling atas dalam tree yang tidak memiliki parent
2. **Node**: Elemen dalam tree yang menyimpan data
3. **Edge (Sisi)**: Penghubung antara satu node dengan node lainnya
4. **Parent (Induk)**: Node yang memiliki anak (child)
5. **Child (Anak)**: Node yang memiliki parent
6. **Sibling (Saudara)**: Node-node yang memiliki parent yang sama
7. **Leaf (Daun)**: Node yang tidak memiliki child (node terminal)
8. **Internal Node**: Node yang memiliki setidaknya satu child
9. **Depth (Kedalaman)**: Jumlah edge dari root ke node tertentu
10. **Height (Tinggi)**: Jumlah edge maksimum dari node ke leaf paling dalam
11. **Subtree (Subpohon)**: Bagian tree yang terdiri dari suatu node dan semua keturunannya
12. **Level**: Tingkat node dalam tree, root berada pada level 0

### Binary Tree (Pohon Biner)

Binary tree adalah jenis tree khusus dimana setiap node memiliki paling banyak dua anak, yaitu anak kiri (left child) dan anak kanan (right child) [1]. Binary tree merupakan struktur data fundamental yang menjadi dasar untuk berbagai struktur data lanjutan seperti Binary Search Tree, AVL Tree, dan Heap [4].

Menurut Celko (2012), binary tree memiliki sifat matematis yang unik dimana jumlah binary tree yang berbeda dengan n node adalah bilangan Catalan yang diberikan oleh rumus $(2n)!/((n+1)!n!)$ [2].

#### Jenis-jenis Binary Tree

1. **Full Binary Tree**: Setiap node memiliki tepat 0 atau 2 anak [2]
2. **Complete Binary Tree**: Semua level terisi penuh kecuali level terakhir yang terisi dari kiri [2]
3. **Perfect Binary Tree**: Setiap node internal memiliki tepat 2 anak dan semua leaf berada pada level yang sama [2]
4. **Balanced Binary Tree**: Tidak ada leaf yang jaraknya dari root lebih dari satu level dari leaf lainnya [2]
5. **Skewed Binary Tree**: Tree yang miring ke satu sisi (semua node hanya memiliki child kiri atau kanan saja)

### Binary Search Tree (BST)

Binary Search Tree adalah implementasi binary tree yang terurut, dimana setiap node menyimpan elemen dengan properti khusus [3][4]:
- Semua kunci di subtree kiri lebih kecil dari kunci di node tersebut
- Semua kunci di subtree kanan lebih besar dari kunci di node tersebut
- Subtree kiri dan kanan juga merupakan BST

Menurut Edelkamp dan Schrödl (2012), operasi pada binary search tree membutuhkan waktu proporsional terhadap tinggi tree. Jika tree adalah rantai linear node, perbandingan linear mungkin diinduksi pada kasus terburuk. Jika tree seimbang, jumlah operasi logaritmik untuk penyisipan dan penghapusan cukup [4].

#### Struktur Node BST

```cpp
struct Node {
    int info;           // Data yang disimpan
    Node* left;         // Pointer ke anak kiri
    Node* right;        // Pointer ke anak kanan
};
```

#### Operasi pada BST

1. **Alokasi (Create Node)**
   - Membuat node baru dengan nilai tertentu
   - Menginisialisasi pointer left dan right ke NULL
   - Kompleksitas: O(1)

2. **Insert (Penyisipan)**
   - Menyisipkan node baru ke posisi yang tepat sesuai aturan BST
   - Dimulai dari root, bandingkan nilai dengan node saat ini
   - Jika lebih kecil, lanjut ke subtree kiri; jika lebih besar, ke subtree kanan
   - Kompleksitas rata-rata: O(log n), worst case: O(n)

3. **Search (Pencarian)**
   - Mencari node dengan nilai tertentu
   - Proses mirip dengan insert, mengikuti jalur berdasarkan perbandingan nilai
   - Kompleksitas rata-rata: O(log n), worst case: O(n)

4. **Delete (Penghapusan)**
   - Menghapus node dengan nilai tertentu
   - Tiga kasus: node leaf, node dengan satu anak, node dengan dua anak
   - Kompleksitas rata-rata: O(log n)

### Tree Traversal (Penelusuran Tree)

Tree traversal adalah proses mengunjungi setiap node dalam tree tepat satu kali [1][5]. Terdapat tiga metode traversal utama untuk binary tree:

1. **Pre-Order (Root-Left-Right)**
   - Kunjungi root terlebih dahulu
   - Telusuri subtree kiri secara rekursif
   - Telusuri subtree kanan secara rekursif
   - Aplikasi: Menyalin tree, ekspresi prefix

2. **In-Order (Left-Root-Right)**
   - Telusuri subtree kiri secara rekursif
   - Kunjungi root
   - Telusuri subtree kanan secara rekursif
   - Aplikasi: Menampilkan BST secara terurut

3. **Post-Order (Left-Right-Root)**
   - Telusuri subtree kiri secara rekursif
   - Telusuri subtree kanan secara rekursif
   - Kunjungi root terakhir
   - Aplikasi: Menghapus tree, ekspresi postfix

#### Ilustrasi Traversal

Untuk tree berikut:
```
        6
       / \
      4   7
     / \
    2   5
   / \
  1   3
```

- **Pre-Order**: 6 - 4 - 2 - 1 - 3 - 5 - 7
- **In-Order**: 1 - 2 - 3 - 4 - 5 - 6 - 7
- **Post-Order**: 1 - 3 - 2 - 5 - 4 - 7 - 6

### Kompleksitas Waktu BST

| Operasi | Average Case | Worst Case |
|---------|-------------|------------|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |
| Traversal | O(n) | O(n) |

Worst case terjadi ketika tree menjadi skewed (seperti linked list), sedangkan average case diasumsikan tree relatif seimbang [4].

### Keunggulan dan Kekurangan BST

**Keunggulan:**
- Pencarian efisien dengan O(log n) pada tree seimbang [4]
- Penyisipan dan penghapusan dinamis
- Data tersimpan secara terurut
- Mendukung operasi range query

**Kekurangan:**
- Dapat menjadi tidak seimbang, menurunkan performa ke O(n) [4]
- Membutuhkan memori tambahan untuk pointer
- Tidak efisien untuk data yang sudah terurut (menjadi skewed)

### Aplikasi Tree

Tree memiliki berbagai aplikasi dalam ilmu komputer [1][3][5]:
- **Sistem File**: Struktur direktori dan file
- **Database**: B-Tree dan B+ Tree untuk indexing
- **Compiler**: Abstract Syntax Tree (AST)
- **Jaringan**: Routing algorithms
- **AI**: Decision trees, game trees
- **Kompresi Data**: Huffman coding

## Guided

### 1. GUIDED I - Rekursif Pangkat 2

Program ini mendemonstrasikan penggunaan rekursi untuk menghitung pangkat 2.

#### rekursif_pangkat2.cpp
```cpp
#include<iostream>
using namespace std;

int pangkat_2(int x) { //adalah pengkatnya
    if(x == 0) { //basis
        return 1;
    } else if (x > 0) { //rekurens
        return 2 * pangkat_2(x - 1);
    }
}

int main() {
    cout << "=== REKURSIF PANGKAT 2 ===" << endl;

    int x;
    cout << "Masukkan nilai x: "; 
    cin >> x;
    cout << endl;
    cout << " pangkat 2 dari " << x << " adalah : " << pangkat_2(x) ;

    return 0;
}

//misal x = 3
//pangkat_2(3)
// 2 * pangkat_2(2);
// 2 * (2 * pangkat_2(1));
// 2 * (2 * (2 * pangkat_2(0)));
// = 2 * 2 * 2
// = 8
```

#### Penjelasan:
Program ini menggunakan rekursi untuk menghitung $2^x$. 
- **Base case**: Ketika x = 0, hasilnya 1 (karena $2^0 = 1$)
- **Recursive case**: Mengalikan 2 dengan hasil `pangkat_2(x - 1)`

Contoh eksekusi untuk x = 3:
```
pangkat_2(3) = 2 * pangkat_2(2)
             = 2 * (2 * pangkat_2(1))
             = 2 * (2 * (2 * pangkat_2(0)))
             = 2 * 2 * 2 * 1
             = 8
```

### 2. GUIDED II - Binary Search Tree Insert & Traversal

Program ini mengimplementasikan BST dengan operasi insert, traversal, dan utility functions.

#### BST1.h
```cpp
#ifndef BST1_H
#define BST1_H

#include <iostream>

using namespace std;

typedef int infotype;//alias infotype untuk data integer
typedef struct Node *address;//alias address untuk pointer ke struct Node (*Node)
typedef struct Node {
    infotype info;//data integer yang disimpan
    address left;//pointer ke anak kiri
    address right;//pointer ke anak kanan
} Node;

//isEmpty & createTree
bool isEmpty(address root); //function untuk mengecek apakah tree kosong
void createTree(address &root); //function untuk membuat tree kosong

//alokasi &insertBST
address newNode(infotype x); //function untuk memasukkan data(infotype) ke dalam node baru
address insertNode(address root, infotype x); //function untuk memasukkan node baru ke dalam BST

//Traversal
void preOrder(address root); //function traversal tree secara preOrder (tengah -> kiri -> kanan atau root -> child kiri -> child kanan)
void inOrder(address root); //function traversal tree secara inOrder (kiri -> tengah -> kanan atau child kiri -> root -> child kanan)
void postOrder(address root); //function traversal tree secara postOrder (kiri -> kanan -> tengah atau child kiri -> child kanan -> root)

//Utility
int countNodes(address root); //function untuk menghitung size atau ukurun atau jumlah node yang ada pada tree
int treeDepth(address root); //function untuk menghitung depth atau kedalaman atau level tree

#endif
```

#### BST1.cpp
```cpp
#include "BST1.h"
#include <iostream>

using namespace std;

//isEmpty & createTree
bool isEmpty(address root) { //function untuk mengecek apakah BST kosong atau tidak
    if(root == NULL){
        return true;
    } else {
        return false;
    }
}

void createTree(address &root) { //function untuk membuat BST nya (root di-set sebagai NULL)
    root = NULL;
}


//alokasi & insert
address newNode(infotype x) { //function untuk memasukkan data (infotype) kedalam node
    address temp = new Node;
    temp->info = x;
    temp->left = NULL;
    temp->right = NULL;
    return temp;
}

address insertNode(address root, infotype x) { //function untuk memasukkan node kedalam BST
    if (root == NULL) {
        return newNode(x);
    }

    if (x < root->info) {
        root->left = insertNode(root->left, x);
    } else if (x > root->info) {
        root->right = insertNode(root->right, x);
    }

    return root;
}


//Traversal
void preOrder(address root) { //function traversal tree secara pre-order (tengah - kiri - kanan atau root - child kiri - child kanan)
    if (root != NULL) {
        cout << root->info << " ";
        preOrder(root->left);
        preOrder(root->right);
    }
}

void inOrder(address root) { //function traversal tree secara in-order (kiri - tengah - kanan atau child kiri - root - child kanan)
    if (root != NULL) {
        inOrder(root->left);
        cout << root->info << " ";
        inOrder(root->right);
    }
}

void postOrder(address root) { //function traversal tree secara post-order (kiri - kanan - tengah atau child kiri - child kanan - root)
    if (root != NULL) {
        postOrder(root->left);
        postOrder(root->right);
        cout << root->info << " ";
    }
}


//Utilities
int countNodes(address root) { //function untuk menghitung size atau ukuran atau jumlah node yang ada didalam tree
    if (isEmpty(root) == true) {
        return 0;
    } else {
        return 1 + countNodes(root->left) + countNodes(root->right);
    }
}

int treeDepth(address root) { //function untuk menghitung height atau kedalaman atau level tree
    if (isEmpty(root) == true) {
        return -1; //tree kosong jika depth = -1
    } else {
        int leftDepth = treeDepth(root->left);
        int rightDepth = treeDepth(root->right);
    
        return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;
    }
}
```

#### main.cpp
```cpp
#include <iostream>
#include "BST1.h"

using namespace std;

int main(){
    address root;
    createTree(root);

    cout << "Binary Search Tree Insert & Traversal" << endl;
    cout << endl;

    root = insertNode(root, 20); // Root awal
    insertNode(root, 10);
    insertNode(root, 35);
    insertNode(root, 5);
    insertNode(root, 18);
    insertNode(root, 40);

    cout << "Hasil InOrder Traversal : ";
    inOrder(root);
    cout << endl;

    cout << "Hasil PreOrder Traversal : ";
    preOrder(root);
    cout << endl;

    cout << "Hasil PostOrder Traversal : ";
    postOrder(root);
    cout << endl;

    cout << endl;
    cout << "Jumlah Node : " << countNodes(root) << endl;
    cout << "Kedalaman Tree : " << treeDepth(root) << endl;


    return 0;
}
```

#### Penjelasan:
Program ini mengimplementasikan Binary Search Tree dengan fitur lengkap:
- **createTree()**: Membuat tree kosong dengan root = NULL
- **isEmpty()**: Mengecek apakah tree kosong
- **newNode()**: Alokasi node baru dengan nilai tertentu
- **insertNode()**: Menyisipkan node ke BST secara rekursif
- **inOrder(), preOrder(), postOrder()**: Tiga metode traversal tree
- **countNodes()**: Menghitung jumlah node dalam tree
- **treeDepth()**: Menghitung kedalaman tree

### 3. GUIDED III - BST dengan Search, Delete, dan MostLeft/MostRight

Program ini mengimplementasikan BST dengan operasi lengkap termasuk search, delete, mostLeft, dan mostRight.

#### BST2.h
```cpp
#ifndef BST2_H
#define BST2_H

#include <iostream>

using namespace std;

typedef int infotype;//alias infotype untuk data integer
typedef struct Node *address;//alias address untuk pointer ke struct Node (*Node)
typedef struct Node {
    infotype info;//data integer yang disimpan
    address left;//pointer ke anak kiri
    address right;//pointer ke anak kanan
} Node;

//isEmpty & createTree
bool isEmpty(address root); //function untuk mengecek apakah tree kosong
void createTree(address &root); //function untuk membuat tree kosong

//alokasi &insertBST
address newNode(infotype x); //function untuk memasukkan data(infotype) ke dalam node baru
address insertNode(address root, infotype x); //function untuk memasukkan node baru ke dalam BST

//Traversal
void preOrder(address root); //function traversal tree secara preOrder (tengah -> kiri -> kanan atau root -> child kiri -> child kanan)
void inOrder(address root); //function traversal tree secara inOrder (kiri -> tengah -> kanan atau child kiri -> root -> child kanan)
void postOrder(address root); //function traversal tree secara postOrder (kiri -> kanan -> tengah atau child kiri -> child kanan -> root)

//Utility
int countNodes(address root); //function untuk menghitung size atau ukurun atau jumlah node yang ada pada tree
int treeDepth(address root); //function untuk menghitung depth atau kedalaman atau level tree

//FUNCTION & Prosedur Baru
//searching
void searchByData(address root, infotype x); //function untuk melakukan searching data tertentu

// Mostleft & Mostright
address mostLeft(address root); //function untuk menampilkan mostleft atau node paling kiri (node dengan nilai terkecil) didalam BST
address mostRight(address root); //function untuk menampilkan mostright atau node paling kanan (node dengan nilai terbesar) didalam BST
//delete
bool deleteNode(address &root, infotype x); //function untuk menghapus node tertentu didalam BST (menghapus berdasarkan parameter infotype)
void deleteTree(address &root); //prosedur untuk menghapus seluruh node yang ada didalam BST

#endif
```

#### BST2.cpp
```cpp
#include "BST2.h"
#include <iostream>

using namespace std;

//FUNCTION & PROSEDUR SEBELUMNYA
//isEmpty & createTree
bool isEmpty(address root) {
    if(root == NULL){
        return true;
    } else {
        return false;
    }
}

void createTree(address &root) {
    root = NULL;
}

//alokasi & insert
address newNode(infotype x) {
    address temp = new Node;
    temp->info = x;
    temp->left = NULL;
    temp->right = NULL;
    return temp;
}

address insertNode(address root, infotype x) {
    if (root == NULL) {
        return newNode(x);
    }

    if (x < root->info) {
        root->left = insertNode(root->left, x);
    } else if (x > root->info) {
        root->right = insertNode(root->right, x);
    }

    return root;
}

//Traversal
void preOrder(address root) {
    if (root != NULL) {
        cout << root->info << " ";
        preOrder(root->left);
        preOrder(root->right);
    }
}

void inOrder(address root) {
    if (root != NULL) {
        inOrder(root->left);
        cout << root->info << " ";
        inOrder(root->right);
    }
}

void postOrder(address root) {
    if (root != NULL) {
        postOrder(root->left);
        postOrder(root->right);
        cout << root->info << " ";
    }
}

//Utilities
int countNodes(address root) {
    if (isEmpty(root) == true) {
        return 0;
    } else {
        return 1 + countNodes(root->left) + countNodes(root->right);
    }
}

int treeDepth(address root) {
    if (isEmpty(root) == true) {
        return -1;
    } else {
        int leftDepth = treeDepth(root->left);
        int rightDepth = treeDepth(root->right);
    
        return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;
    }
}

//FUNCTION & PROSEDUR BARU
//searching
void searchByData(address root, infotype x) {
    if(isEmpty(root) == true){
        cout << "BST kosong!" << endl;
    } else {
        address nodeBantu = root;
        address parent = NULL;
        bool ketemu = false;
        while(nodeBantu != NULL){
            if(x < nodeBantu->info){
                parent = nodeBantu;
                nodeBantu = nodeBantu->left;
            } else if(x > nodeBantu->info){
                parent = nodeBantu;
                nodeBantu = nodeBantu->right;
            } else if(x == nodeBantu->info){
                ketemu = true;
                break;
            }
        }
        if(ketemu == false){
            cout << "Data tidak ditemukan" << endl;
        } else if(ketemu == true){
            cout << "Data ditemukan didalam BST!" << endl;
            cout << "Data Angka : " << nodeBantu->info << endl;

            //menampilkan parentnya & pengecekan sibling
            address sibling = NULL;
            if(parent != NULL){
                cout << "Parent : " << parent->info << endl;
                if(parent->left == nodeBantu){
                    sibling = parent->right;
                } else if(parent->right == nodeBantu){
                    sibling = parent->left;
                }
            } else {
                cout << "Parent : - (node root)"<< endl;
            }

            //menampilkan siblingnya
            if(sibling != NULL){
                cout << "Sibling : " << sibling->info << endl;
            } else {
                cout << "Sibling : - " << endl;
            }

            //menampilkan childnya
            if(nodeBantu->left != NULL){
                cout << "Child kiri : " << nodeBantu->left->info << endl;
            } else if(nodeBantu->left == NULL){
                cout << "Child kiri : -" << endl;
            }
            if(nodeBantu->right != NULL){
                cout << "Child kanan : " << nodeBantu->right->info << endl;
            } else if(nodeBantu->right == NULL){
                cout << "Child kanan : -" << endl;
            }
        }
    }
}

//mostleft & mostright
address mostLeft(address root) {
    while (root->left != NULL){
        root = root->left;
    }
    return root;
}

address mostRight(address root) {
    while (root->right != NULL){
        root = root->right;
    }
    return root;
}

//delete
bool deleteNode(address &root, infotype x) {
    if (root == NULL) {
        return false;
    } else {
        if (x < root->info) {
            return deleteNode(root->left, x);
        } else if (x > root->info) {
            return deleteNode(root->right, x);
        } else {
            //Case 1 : node yang mau dihapus adalah leaf
            if (root->left == NULL && root->right == NULL) {
                address temp = root;
                root = NULL;
                delete temp;
            }
            //Case 2 : node yang mau dihapus hanya punya right child
            else if (root->left == NULL) {
                address temp = root;
                root = root->right;
                delete temp;
            }
            //Case 3 : node yang mau dihapus hanya punya left child
            else if (root->right == NULL) {
                address temp = root;
                root = root->left;
                delete temp;
            }
            // Case 4 : jika node yang mau dihapus punya dua child
            else {
                address successor = mostLeft(root->right);
                root->info = successor->info;
                return deleteNode(root->right, successor->info);
            }
            return true;
        }
    }
}

void deleteTree(address &root) {
    if(root == NULL){
        return;
    } else {
        deleteTree(root->left);
        deleteTree(root->right);
        delete root;
        root = NULL;
    }
}
```

#### main.cpp
```cpp
#include <iostream>
#include "BST2.h"

using namespace std;

int main(){
    address root;
    createTree(root);

    cout << "=== Binary Search Tree ==" << endl;
    cout << endl;

    root = insertNode(root, 30); // Root awal
    insertNode(root, 15);
    insertNode(root, 35);
    insertNode(root, 11);
    insertNode(root, 17);
    insertNode(root, 20);
    insertNode(root, 38);
    insertNode(root, 16);
    insertNode(root, 22);
    insertNode(root, 33);
    insertNode(root, 18);

    cout << "Hasil InOrder Traversal : ";
    inOrder(root);
    cout << endl;

    cout << endl;
    cout << "Jumlah Node : " << countNodes(root) << endl;
    cout << "Kedalaman Tree : " << treeDepth(root) << endl;

    cout << endl;
    searchByData(root, 17);
    
    cout << endl;
    cout << "Node mostleft : " << mostLeft(root)->info << endl;
    cout << "Node mostright : " << mostRight(root)->info << endl;

    cout << endl;
    infotype angkaHapus;
    cout << "Masukkan angka yang ingin dihapus: ";
    cin >> angkaHapus;
    if(deleteNode(root, angkaHapus)){
        cout << "Data " << angkaHapus << " berhasil dihapus!" << endl;
    } else {
        cout << "Data " << angkaHapus << " tidak ditemukan!" << endl;
    }
    cout << endl;

    searchByData(root, 17);
    cout << endl;
    searchByData(root, 18);

    cout << endl;
    cout << "Hasil InOrder Traversal : ";
    inOrder(root);
    cout << endl;

    cout << endl;
    deleteTree(root);
    cout << "Seluruh tree berhasil dihapus!" << endl;

    cout << endl;
    if(isEmpty(root) == true){
        cout << "BST kosong!" << endl;
    } else {
        cout << "Hasil InOrder Traversal : ";
        inOrder(root);
    }
    return 0;
}
```

#### Penjelasan:
Program ini menambahkan fitur-fitur baru pada BST:
- **searchByData()**: Mencari data dan menampilkan info lengkap (parent, sibling, children)
- **mostLeft()**: Mencari node paling kiri (nilai terkecil)
- **mostRight()**: Mencari node paling kanan (nilai terbesar)
- **deleteNode()**: Menghapus node dengan 4 kasus berbeda:
  - Case 1: Node leaf (tidak punya child)
  - Case 2: Node dengan satu child kanan
  - Case 3: Node dengan satu child kiri
  - Case 4: Node dengan dua child (gunakan successor)
- **deleteTree()**: Menghapus seluruh tree secara rekursif

## Unguided

### 1. Implementasi ADT Binary Search Tree

#### bstree.h
```cpp
#ifndef BSTREE_H
#define BSTREE_H

typedef int infotype;
struct Node;
typedef Node* address;
#define Nil NULL

struct Node {
    infotype info;
    address left;
    address right;
};

address alokasi(infotype x);
void insertNode(address &root, infotype x);
address findNode(infotype x, address root);
void printInorder(address root);
void InOrder(address root);

#endif
```

#### bstree.cpp
```cpp
#include <iostream>
#include "bstree.h"
using namespace std;

address alokasi(infotype x) {
    address newNode = new Node;
    newNode->info = x;
    newNode->left = Nil;
    newNode->right = Nil;
    return newNode;
}

void insertNode(address &root, infotype x) {
    if (root == Nil) {
        root = alokasi(x);
    } else if (x < root->info) {
        insertNode(root->left, x);
    } else if (x > root->info) {
        insertNode(root->right, x);
    }
}

address findNode(infotype x, address root) {
    if (root == Nil) {
        return Nil;
    } else if (x == root->info) {
        return root;
    } else if (x < root->info) {
        return findNode(x, root->left);
    } else {
        return findNode(x, root->right);
    }
}

void printInorder(address root) {
    if (root != Nil) {
        printInorder(root->left);
        cout << root->info << " - ";
        printInorder(root->right);
    }
}

void InOrder(address root) {
    printInorder(root);
}
```

#### main.cpp
```cpp
#include <iostream>
#include "bstree.h"
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    
    address root = Nil;
    
    insertNode(root, 1);
    insertNode(root, 2);
    insertNode(root, 6);
    insertNode(root, 4);
    insertNode(root, 5);
    insertNode(root, 3);
    insertNode(root, 6);
    insertNode(root, 7);
    
    InOrder(root);
    
    return 0;
}
```

#### Output:


#### Penjelasan:
Program ini mengimplementasikan ADT Binary Search Tree dengan operasi dasar:
- **alokasi()**: Membuat node baru dengan nilai x
- **insertNode()**: Menyisipkan node secara rekursif sesuai aturan BST
- **findNode()**: Mencari node dengan nilai tertentu
- **InOrder()**: Mencetak tree secara inorder (terurut)

---

### 2. Fungsi Hitung Node, Total, dan Kedalaman

Buatlah fungsi untuk menghitung jumlah node, total info, dan kedalaman BST.

#### bstree.h
```cpp
#ifndef BSTREE_H
#define BSTREE_H

typedef int infotype;
struct Node;
typedef Node* address;
#define Nil NULL

struct Node {
    infotype info;
    address left;
    address right;
};

address alokasi(infotype x);
void insertNode(address &root, infotype x);
void InOrder(address root);
int hitungNode(address root);
int hitungTotal(address root);
int hitungKedalaman(address root, int level);

#endif
```

#### bstree.cpp
```cpp
#include <iostream>
#include "bstree.h"
using namespace std;

address alokasi(infotype x) {
    address newNode = new Node;
    newNode->info = x;
    newNode->left = Nil;
    newNode->right = Nil;
    return newNode;
}

void insertNode(address &root, infotype x) {
    if (root == Nil) {
        root = alokasi(x);
    } else if (x < root->info) {
        insertNode(root->left, x);
    } else if (x > root->info) {
        insertNode(root->right, x);
    }
}

void InOrder(address root) {
    if (root != Nil) {
        InOrder(root->left);
        cout << root->info << " - ";
        InOrder(root->right);
    }
}

int hitungNode(address root) {
    if (root == Nil) {
        return 0;
    }
    return 1 + hitungNode(root->left) + hitungNode(root->right);
}

int hitungTotal(address root) {
    if (root == Nil) {
        return 0;
    }
    return root->info + hitungTotal(root->left) + hitungTotal(root->right);
}

int hitungKedalaman(address root, int level) {
    if (root == Nil) {
        return level;
    }
    int kedalamanKiri = hitungKedalaman(root->left, level + 1);
    int kedalamanKanan = hitungKedalaman(root->right, level + 1);
    
    if (kedalamanKiri > kedalamanKanan) {
        return kedalamanKiri;
    } else {
        return kedalamanKanan;
    }
}
```

#### main.cpp
```cpp
#include <iostream>
#include "bstree.h"
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    
    address root = Nil;
    
    insertNode(root, 1);
    insertNode(root, 2);
    insertNode(root, 6);
    insertNode(root, 4);
    insertNode(root, 5);
    insertNode(root, 3);
    insertNode(root, 6);
    insertNode(root, 7);
    
    InOrder(root);
    cout << "\n";
    
    cout << "kedalaman : " << hitungKedalaman(root, 0) << endl;
    cout << "jumlah node : " << hitungNode(root) << endl;
    cout << "total : " << hitungTotal(root) << endl;
    
    return 0;
}
```

#### Output:
```

```

#### Penjelasan:
Program menambahkan 3 fungsi baru:
- **hitungNode()**: Menghitung jumlah node secara rekursif (1 + left + right)
- **hitungTotal()**: Menjumlahkan semua nilai info (1+2+3+4+5+6+7 = 28)
- **hitungKedalaman()**: Mencari kedalaman maksimal dengan membandingkan kedalaman subtree kiri dan kanan

---

### 3. Pre-Order dan Post-Order Traversal

Print tree secara pre-order dan post-order.

#### bstree.h
```cpp
#ifndef BSTREE_H
#define BSTREE_H

typedef int infotype;
struct Node;
typedef Node* address;
#define Nil NULL

struct Node {
    infotype info;
    address left;
    address right;
};

address alokasi(infotype x);
void insertNode(address &root, infotype x);
void InOrder(address root);
void PreOrder(address root);
void PostOrder(address root);

#endif
```

#### bstree.cpp
```cpp
#include <iostream>
#include "bstree.h"
using namespace std;

address alokasi(infotype x) {
    address newNode = new Node;
    newNode->info = x;
    newNode->left = Nil;
    newNode->right = Nil;
    return newNode;
}

void insertNode(address &root, infotype x) {
    if (root == Nil) {
        root = alokasi(x);
    } else if (x < root->info) {
        insertNode(root->left, x);
    } else if (x > root->info) {
        insertNode(root->right, x);
    }
}

void InOrder(address root) {
    if (root != Nil) {
        InOrder(root->left);
        cout << root->info << " - ";
        InOrder(root->right);
    }
}

void PreOrder(address root) {
    if (root != Nil) {
        cout << root->info << " - ";
        PreOrder(root->left);
        PreOrder(root->right);
    }
}

void PostOrder(address root) {
    if (root != Nil) {
        PostOrder(root->left);
        PostOrder(root->right);
        cout << root->info << " - ";
    }
}
```

#### main.cpp
```cpp
#include <iostream>
#include "bstree.h"
using namespace std;

int main() {
    address root = Nil;
    
    insertNode(root, 6);
    insertNode(root, 4);
    insertNode(root, 7);
    insertNode(root, 2);
    insertNode(root, 5);
    insertNode(root, 1);
    insertNode(root, 3);
    
    cout << "Pre-Order: ";
    PreOrder(root);
    cout << endl;
    
    cout << "Post-Order: ";
    PostOrder(root);
    cout << endl;
    
    return 0;
}
```

#### Output:
```

```

#### Penjelasan:
Program mengimplementasikan traversal:
- **Pre-Order (Root-Left-Right)**: Kunjungi root → subtree kiri → subtree kanan
- **Post-Order (Left-Right-Root)**: Kunjungi subtree kiri → subtree kanan → root

Untuk tree:
```
        6
       / \
      4   7
     / \
    2   5
   / \
  1   3
```

## Kesimpulan

Dari praktikum **Tree** yang telah dilakukan, dapat disimpulkan:

1. **Tree** adalah struktur data non-linear hierarkis yang terdiri dari node-node yang saling terhubung, dengan satu node root dan setiap node dapat memiliki child nodes.

2. **Binary Search Tree (BST)** adalah implementasi binary tree terurut dimana nilai di subtree kiri lebih kecil dari root dan nilai di subtree kanan lebih besar dari root.

3. **Operasi dasar BST** meliputi alokasi node, insert, search, dan delete dengan kompleksitas rata-rata O(log n) pada tree seimbang.

4. **Tree Traversal** memiliki tiga metode utama:
   - **In-Order (Left-Root-Right)**: Menghasilkan data terurut
   - **Pre-Order (Root-Left-Right)**: Root dikunjungi pertama
   - **Post-Order (Left-Right-Root)**: Root dikunjungi terakhir

5. **Rekursi** sangat efektif untuk mengimplementasikan operasi pada tree karena sifat hierarkis tree yang rekursif.

6. **Fungsi-fungsi tambahan** seperti hitungNode, hitungTotal, dan hitungKedalaman menunjukkan bagaimana rekursi dapat dimanfaatkan untuk menghitung properti tree.

7. BST efisien untuk pencarian data terurut, namun dapat menjadi tidak efisien jika tree menjadi skewed (tidak seimbang).

8. Tree memiliki berbagai aplikasi penting seperti sistem file, database indexing, compiler, dan algoritma AI.

## Referensi

[1] Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press. ISBN: 978-0262033848

[2] Celko, J. (2012). *Joe Celko's Trees and Hierarchies in SQL for Smarties* (2nd ed.). Morgan Kaufmann. ISBN: 978-0123877338

[3] Dwyer, B. (2016). *Systems Analysis and Synthesis: Bridging Computer Science and Information Technology*. Academic Press. ISBN: 978-0128053041

[4] Edelkamp, S., & Schrödl, S. (2012). *Heuristic Search: Theory and Applications*. Morgan Kaufmann. ISBN: 978-0123725127

[5] Klinger, A. (2003). Data Structures. In *Encyclopedia of Physical Science and Technology* (3rd ed.). Academic Press. DOI: 10.1016/B0-12-227410-5/00846-2
