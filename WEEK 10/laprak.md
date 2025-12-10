# <h1 align="center">Laporan Praktikum Modul 13 - Multi Linked List</h1>
<p align="center">M. Hanif Al Faiz - 103112400042</p>

## Dasar Teori

### Multi Linked List (MLL)

Multi Linked List adalah struktur data yang terdiri dari beberapa linked list yang saling terhubung, dimana setiap node pada list utama (parent) memiliki pointer ke linked list lain (child) [1]. Struktur ini memungkinkan representasi hubungan hierarkis antara data dengan lebih fleksibel dibandingkan linked list biasa [2].

Menurut Sharma dan Sharma (2018), "Multi linked list merupakan perluasan dari konsep linked list dimana setiap node dapat memiliki lebih dari satu pointer yang menunjuk ke node-node lain dalam struktur yang berbeda" [1]. Hal ini memungkinkan pemodelan data yang lebih kompleks seperti hubungan one-to-many.

Multi Linked List sangat berguna dalam berbagai aplikasi seperti sistem database relasional, representasi graph, dan pengelolaan data hierarkis [3]. Menurut Karumanchi (2017), "MLL menyediakan cara efisien untuk mengorganisir data yang memiliki hubungan parent-child tanpa duplikasi data" [2].

#### Karakteristik Multi Linked List

Beberapa karakteristik utama Multi Linked List [1][2][4]:

1. **Struktur Hierarkis**: Terdiri dari list parent (induk) dan list child (anak)
2. **Pointer Ganda**: Setiap node parent memiliki pointer ke node parent lain dan pointer ke list child
3. **Fleksibilitas**: Setiap parent dapat memiliki jumlah child yang berbeda-beda
4. **Efisiensi Memori**: Tidak memerlukan alokasi memori berlebih untuk relasi yang tidak ada
5. **Traversal Dua Arah**: Mendukung penelusuran baik pada level parent maupun child

#### Komponen Multi Linked List

Multi Linked List umumnya terdiri dari komponen-komponen berikut [2][4]:

1. **Node Parent**: Node pada list utama yang menyimpan data parent dan pointer ke list child
2. **Node Child**: Node pada list anak yang menyimpan data child
3. **List Parent**: Linked list yang menghubungkan semua node parent
4. **List Child**: Linked list yang menghubungkan semua node child dalam satu parent
5. **Pointer Next/Prev**: Pointer untuk navigasi antar node dalam list yang sama
6. **Pointer ke List Child**: Pointer dari node parent ke head list child

#### Struktur Node Multi Linked List

```cpp
// Node Child
struct nodeChild {
    dataChild isidata;
    NodeChild next;
    NodeChild prev;
};

// List Child
struct listChild {
    NodeChild first;
    NodeChild last;
};

// Node Parent
struct nodeParent {
    dataParent isidata;
    NodeParent next;
    NodeParent prev;
    listChild L_child; // pointer ke list anak
};

// List Parent
struct listParent {
    NodeParent first;
    NodeParent last;
};
```

#### Operasi pada Multi Linked List

1. **Create List**
   - Menginisialisasi list parent dan list child
   - Mengatur pointer first dan last ke NULL
   - Kompleksitas: O(1)

2. **Alokasi Node**
   - Membuat node baru (parent atau child) dengan data tertentu
   - Menginisialisasi pointer next dan prev ke NULL
   - Untuk parent, juga menginisialisasi list child
   - Kompleksitas: O(1)

3. **Insert (Penyisipan)**
   - Insert First: Menyisipkan node di awal list
   - Insert Last: Menyisipkan node di akhir list
   - Dapat dilakukan pada list parent maupun list child
   - Kompleksitas: O(1)

4. **Delete (Penghapusan)**
   - Delete First: Menghapus node pertama
   - Delete After: Menghapus node setelah node tertentu
   - Untuk parent, harus menghapus semua child terlebih dahulu
   - Kompleksitas: O(1) untuk delete, O(n) jika harus menghapus child

5. **Search (Pencarian)**
   - Mencari data pada list child dengan menelusuri semua parent
   - Dapat mencari berdasarkan ID, nama, atau atribut lainnya
   - Kompleksitas: O(n × m) dimana n = jumlah parent, m = rata-rata child

6. **Print Structure**
   - Menampilkan seluruh struktur MLL
   - Menelusuri setiap parent dan child-nya
   - Kompleksitas: O(n × m)

### Keunggulan dan Kekurangan MLL

**Keunggulan:**
- Representasi hubungan hierarkis yang natural [2]
- Fleksibel dalam jumlah child per parent
- Operasi insert dan delete yang efisien
- Mendukung data dengan relasi one-to-many

**Kekurangan:**
- Kompleksitas implementasi lebih tinggi [4]
- Membutuhkan memori tambahan untuk pointer
- Pencarian data child memerlukan traversal pada multiple list

### Aplikasi Multi Linked List

Multi Linked List memiliki berbagai aplikasi dalam pemrograman [1][3][4]:
- **Sistem Database**: Representasi relasi antar tabel
- **File System**: Struktur direktori dan file
- **E-Commerce**: Kategori produk dan item produk
- **Organisasi**: Struktur departemen dan karyawan
- **Menu Restoran**: Kategori makanan dan item menu

## Guided

### 1. GUIDED I - Implementasi Multi Linked List (Sistem Kategori Makanan)

Program ini mengimplementasikan Multi Linked List untuk sistem kategori makanan restoran, dimana setiap kategori (parent) memiliki beberapa menu makanan (child).

#### multilist.h
```cpp
#ifndef MULTILIST_H
#define MULTILIST_H

#include <iostream>
using namespace std;

typedef struct nodeParent *NodeParent; //alias pointer ke struct nodeParent
typedef struct nodeChild *NodeChild;   //alias pointer ke struct nodeChild

struct  nodeChild{ //node child
    string idMakanan;
    string namaMakanan;
    NodeChild next;
    NodeChild prev;
};

struct listAnak{ //list child
    NodeChild first;    
    NodeChild last;
};

struct nodeParent{ //node parent
 string idKategoriMakanan;
 string namaKategoriMakanan;
 NodeParent next;
 NodeParent prev;
 listAnak L_Anak; //list child
};

struct listInduk{ //list parent
    NodeParent first;
    NodeParent last;
};

//create list 
void createListInduk(listInduk &LInduk);
void createListAnak(listAnak &Lanak);

//alokasi &d elokasi parent
NodeParent alokasiNodeParent(string idkategoriMakanan, string namaKategoriMakanan);
void dealokasiNodeParent(NodeParent &NodeInduk);

//alokasi & delokasi child
NodeChild alokasiNodeChild(string idmakanan, string namamakanan);
void dealokasiNodeChild(NodeChild &NodeAnak);

//operasi pada parent
void insertLastParent(listInduk &LInduk, NodeParent nodeBaruParent);
void hapusListAnak(listAnak &LAnak);
void deleteAfterParent(listInduk &LInduk, NodeParent nodePrev);

//operasi pada child
void insertLastChild(listAnak &LAnak, NodeChild nodeBaruChild);
void deleteAfterChild(listAnak &LAnak, NodeChild nodePrev); 
void findChildByID(listInduk &LInduk, string IDCari);

//operasi print
void printStrukturMLL(listInduk &LInduk);

#endif
```

#### multilist.cpp
```cpp
#include "multilist.h"
#include <iostream>

using namespace std;

//create list
void createListInduk(listInduk &LInduk){
    LInduk.first = LInduk.last = NULL;
}

void createListAnak(listAnak &LAnak){
    LAnak.first = LAnak.last = NULL;
}

//alokasi & dealokasi parent
NodeParent alokasiNodeParent(string idKategoriMakanan, string namaKategoriMakanan){
    NodeParent nodeBaruParent = new nodeParent;
    nodeBaruParent->idKategoriMakanan = idKategoriMakanan;
    nodeBaruParent->namaKategoriMakanan = namaKategoriMakanan;
    nodeBaruParent->next = NULL;
    nodeBaruParent->prev = NULL;
    createListAnak(nodeBaruParent->L_Anak);
    return nodeBaruParent;
}

void dealokasiNodeParent(NodeParent &nodeInduk){
    if(nodeInduk != NULL) {
        nodeInduk->next = nodeInduk->prev = NULL;
        delete nodeInduk;
        nodeInduk = NULL;
    }
}

//alokasi & delaokasi child
NodeChild alokasiNodeChild(string idMakanan, string namaMakanan){
    NodeChild nodeBaruChild = new nodeChild;
    nodeBaruChild->idMakanan = idMakanan;
    nodeBaruChild->namaMakanan = namaMakanan;
    nodeBaruChild->next = NULL;
    nodeBaruChild->prev = NULL;
    return nodeBaruChild;
}

void dealokasiNodeChild(NodeChild &nodeAnak){
    if(nodeAnak != NULL) {
        nodeAnak->next = nodeAnak->prev = NULL;
        delete nodeAnak;
        nodeAnak = NULL;
    }
}

//operasi pada parent
void insertLastParent(listInduk &LInduk, NodeParent nodeBaruParent){
    if(LInduk.first == NULL) {
        LInduk.first = LInduk.last = nodeBaruParent;
    } else {
        nodeBaruParent->prev = LInduk.last;
        LInduk.last->next = nodeBaruParent;
        LInduk.last = nodeBaruParent;
    }
    cout << "Node parent "<< nodeBaruParent->namaKategoriMakanan << " berhasil ditambahkan kedalam urutan terakhir di list Induk!" << endl;
}

void hapusListAnak(listAnak &LAnak){
    NodeChild nodeBantu = LAnak.first;
    while(nodeBantu != NULL) {
        NodeChild nodeHapus = nodeBantu;
        nodeBantu = nodeBantu->next;
        dealokasiNodeChild(nodeHapus);
    }
    LAnak.first = LAnak.last = NULL;
}

void deleteAfterParent(listInduk &LInduk, NodeParent nodePrev){
    if(LInduk.first == NULL){
        cout << "List induk kosong!" << endl;
    } else {
        if(nodePrev != NULL && nodePrev->next != NULL){
            NodeParent nodeHapus = nodePrev->next;
            nodePrev->next = nodeHapus->next;
            if (nodeHapus->next != NULL){
                (nodeHapus->next)->prev = nodePrev;
            } else {
                LInduk.last = nodePrev;
            }
            nodeHapus->next = NULL;
            if(nodeHapus->L_Anak.first != NULL){
                hapusListAnak(nodeHapus->L_Anak);
            }
            dealokasiNodeParent(nodeHapus);
            cout << "Node parent setelah node " << nodePrev->namaKategoriMakanan << " berhasil dihapus beserta anak-anaknya!" << endl;
        } else {
            cout << "Node prev tidak valid!" << endl;
        }
    }
}

//operasi pada child
void insertLastChild(listAnak &LAnak, NodeChild nodeBaruChild){
    if(LAnak.first == NULL) {
        LAnak.first = LAnak.last = nodeBaruChild;
    } else {
        nodeBaruChild->prev = LAnak.last;
        LAnak.last->next = nodeBaruChild;
        LAnak.last = nodeBaruChild;
    }
    cout << "Node child "<< nodeBaruChild->namaMakanan << " berhasil ditambahkan kedalam urutan terakhir di list Anak!" << endl;
}

void deleteAfterChild(listAnak &LAnak, NodeChild nodePrev){
    if(LAnak.first == NULL){
        cout << "List anak kosong!" << endl;
    } else {
        if(nodePrev != NULL && nodePrev->next != NULL){
            NodeChild nodeHapus = nodePrev->next;
            nodePrev->next = nodeHapus->next;
            if (nodeHapus->next != NULL){
                (nodeHapus->next)->prev = nodePrev;
            } else {
                LAnak.last = nodePrev;
            }
            nodeHapus->next = NULL;
            dealokasiNodeChild(nodeHapus);
            cout << "Node child setelah node " << nodePrev->namaMakanan << " berhasil dihapus!" << endl;
        } else {
            cout << "Node prev tidak valid!" << endl;
        }
    }
}

void findChildByID(listInduk &LInduk, string IDCari){
    if(LInduk.first == NULL){
        cout << "List induk kosong!" << endl;
    } else {
        NodeParent nodeBantuParent = LInduk.first;
        int indexParent = 1;
        int ketemu = false;
        while(nodeBantuParent != NULL){
            NodeChild nodeBantuChild = nodeBantuParent->L_Anak.first;
            int indexChild = 1;
            while(nodeBantuChild != NULL){
                if(nodeBantuChild->idMakanan == IDCari) {
                    cout << "Data ID child ditemukan pada list anak dari node parent " << nodeBantuParent->namaKategoriMakanan << " pada posisi ke-" << indexChild << "!" << endl;
                    cout << "--- Data Child ---" << endl;
                    cout << "ID Child (ID Makanan) : " << nodeBantuChild->idMakanan << endl;
                    cout << "Posisi dalam list anak : posisi ke-" << indexChild << endl;
                    cout << "Nama Makanan : " << nodeBantuChild->namaMakanan << endl;
                    cout << "---------------------------" << endl;
                    cout << "--- Data Parent ---" << endl;
                    cout << "ID Parent (ID Kategori Makanan): " << nodeBantuParent->idKategoriMakanan << endl;
                    cout << "Posisi dalam list induk : posisi ke-" << indexParent << endl;
                    cout << "Nama Kategori Makanan : " << nodeBantuParent->namaKategoriMakanan << endl;
                    ketemu = true;
                    break;
                } else {
                    nodeBantuChild = nodeBantuChild->next;
                    indexChild++;
                }
            }
            if(ketemu){
                break;
            } else {
                nodeBantuParent = nodeBantuParent->next;
                indexParent++;
            }
        }
        if(!ketemu){
            cout << "Data ID child tidak ditemukan didalam list anak!" << endl;
        }
    }
}

//operasi print
void printStrukturMLL(listInduk &LInduk){
    if(LInduk.first == NULL) {
        cout << "List induk kosong!" << endl;
    } else {
        NodeParent nodeBantuParent = LInduk.first;
        int indexParent = 1;
        while(nodeBantuParent != NULL) {
            cout << "=== Parent " << indexParent << " ===" << endl;
            cout << "ID Kategori Makanan : " << nodeBantuParent->idKategoriMakanan << endl;
            cout << "Nama Kategori Makanan : " << nodeBantuParent->namaKategoriMakanan << endl;

            //print list anak dari node parentnya
            NodeChild nodeBantuChild = nodeBantuParent->L_Anak.first;
            if(nodeBantuChild == NULL) {
                cout << "  (tidak ada child)" << endl;
            } else {
                int indexChild = 1;
                while(nodeBantuChild != NULL) {
                    cout << "  - Child " << indexChild << " :" << endl;
                    cout << "      ID Makanan : " << nodeBantuChild->idMakanan << endl;
                    cout << "      Nama Makanan : " << nodeBantuChild->namaMakanan << endl;
                    nodeBantuChild = nodeBantuChild->next;
                    indexChild++;
                }
            }
            cout << "---------------------------" << endl;
            nodeBantuParent = nodeBantuParent->next;
            indexParent++;
        }
    }
}
```

#### main.cpp
```cpp
#include "multilist.h"
#include <iostream>
using namespace std;

int main(){
    //1.instalasi List
    listInduk LInduk;
    createListInduk(LInduk);

    //2.membuat Data Parent (kategori makanan)
    NodeParent k01 = alokasiNodeParent("K01", "Makanan Berat");
    insertLastParent(LInduk, k01);
    NodeParent k02 = alokasiNodeParent("K02", "Minuman");
    insertLastParent(LInduk, k02);
    NodeParent k03 = alokasiNodeParent("K03", "Dessert");
    insertLastParent(LInduk, k03);
    cout<<endl;

    //3.masukkan Data Child (menu makanan) ke kategori tertentu
    //-->isi kategori makanan berat (k01)
    NodeChild M01 = alokasiNodeChild("M01", "Nasi Goreng");
    insertLastChild(k01->L_Anak, M01);
    NodeChild M02 = alokasiNodeChild("M02", "Ayam Bakar Madu");
    insertLastChild(k01->L_Anak, M02);  
    //--> isi kategori minuman (k02)
    NodeChild D02 = alokasiNodeChild("D02", "Jus Alpukat");
    insertLastChild(k02->L_Anak, D02);
    NodeChild D03 = alokasiNodeChild("D03", "Jus Alpukat");
    insertLastChild(k02->L_Anak, D03);
    //--> isi kategori dessert (k03)
    NodeChild S01 = alokasiNodeChild("DS01", "Puding Coklat");
    insertLastChild(k03->L_Anak, S01);
    cout << endl;  

    //4.print mll setelah insert-insert
    printStrukturMLL(LInduk);
    cout << endl;

    //5.searching node child
    findChildByID(LInduk, "D01");
    cout << endl;
    //6.delete node child
    deleteAfterChild(k01->L_Anak, M01);//menghapus node child ayam bakar madu
    cout<< endl;
    //7.delete node parent
    deleteAfterParent(LInduk, k02); //menghapus node parent minuman
    cout << endl;
    //8.print mll setelah delete
    printStrukturMLL(LInduk);
    cout << endl;
    
    return 0;
}
```
#### Penjelasan:
Program ini mengimplementasikan Multi Linked List untuk sistem menu restoran:
- **createListInduk() & createListAnak()**: Menginisialisasi list dengan first dan last = NULL
- **alokasiNodeParent()**: Membuat node parent baru dengan ID dan nama kategori
- **alokasiNodeChild()**: Membuat node child baru dengan ID dan nama makanan
- **insertLastParent()**: Menyisipkan node parent di akhir list induk
- **insertLastChild()**: Menyisipkan node child di akhir list anak
- **findChildByID()**: Mencari child berdasarkan ID dengan menelusuri semua parent
- **deleteAfterChild()**: Menghapus node child setelah node tertentu
- **deleteAfterParent()**: Menghapus node parent beserta semua child-nya
- **printStrukturMLL()**: Menampilkan seluruh struktur MLL

## Unguided

### 1. Implementasi ADT Multi Linked List (Sistem Golongan Hewan)

Buatlah ADT Multi Linked List dengan struktur data untuk sistem klasifikasi hewan berdasarkan golongan.

#### MultiLL.h
```cpp
#ifndef MULTILL_H
#define MULTILL_H

#include <iostream>
#include <string>
using namespace std;

struct golonganHewan {
    string idGolongan;
    string namaGolongan;
};

struct dataHewan {
    string idHewan;
    string namaHewan;
    string habitat;
    bool ekor;
    float bobot;
};

typedef struct nodeParent *NodeParent;
typedef struct nodeChild *NodeChild;

struct nodeChild {
    dataHewan isidata;
    NodeChild next;
    NodeChild prev;
};

struct listChild {
    NodeChild first;
    NodeChild last;
};

struct nodeParent {
    golonganHewan isidata;
    NodeParent next;
    NodeParent prev;
    listChild L_child;
};

struct listParent {
    NodeParent first;
    NodeParent last;
};

bool isEmptyParent(listParent LParent);
bool isEmptyChild(listChild LChild);

void createListParent(listParent &LParent);
void createListChild(listChild &LChild);

NodeParent allocNodeParent(string idGol, string namaGol);
NodeChild allocNodeChild(string idHwn, string namaHwn, string habitat, bool ekor, float bobot);

void deallocNodeParent(NodeParent &NParent);
void deallocNodeChild(NodeChild &NChild);

void insertFirstParent(listParent &LParent, NodeParent newNParent);
void insertLastParent(listParent &LParent, NodeParent newNParent);

void deleteFirstParent(listParent &LParent);
void deleteAfterParent(listParent &LParent, NodeParent NPrev);

void insertFirstChild(listChild &LChild, NodeChild newNChild);
void insertLastChild(listChild &LChild, NodeChild newNChild);

void deleteFirstChild(listChild &LChild);
void deleteAfterChild(listChild &LChild, NodeChild NPrev);

void printMLLStructure(listParent &LParent);
void deleteListChild(listChild &LChild);

void searchHewanByEkor(listParent &LParent, bool ekor);

#endif
```

#### MultiLL.cpp
```cpp
#include "MultiLL.h"

bool isEmptyParent(listParent LParent) {
    return LParent.first == NULL;
}

bool isEmptyChild(listChild LChild) {
    return LChild.first == NULL;
}

void createListParent(listParent &LParent) {
    LParent.first = NULL;
    LParent.last = NULL;
}

void createListChild(listChild &LChild) {
    LChild.first = NULL;
    LChild.last = NULL;
}

NodeParent allocNodeParent(string idGol, string namaGol) {
    NodeParent newNode = new nodeParent;
    newNode->isidata.idGolongan = idGol;
    newNode->isidata.namaGolongan = namaGol;
    newNode->next = NULL;
    newNode->prev = NULL;
    createListChild(newNode->L_child);
    return newNode;
}

NodeChild allocNodeChild(string idHwn, string namaHwn, string habitat, bool ekor, float bobot) {
    NodeChild newNode = new nodeChild;
    newNode->isidata.idHewan = idHwn;
    newNode->isidata.namaHewan = namaHwn;
    newNode->isidata.habitat = habitat;
    newNode->isidata.ekor = ekor;
    newNode->isidata.bobot = bobot;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

void deallocNodeParent(NodeParent &NParent) {
    if (NParent != NULL) {
        deleteListChild(NParent->L_child);
        NParent->next = NULL;
        NParent->prev = NULL;
        delete NParent;
        NParent = NULL;
    }
}

void deallocNodeChild(NodeChild &NChild) {
    if (NChild != NULL) {
        NChild->next = NULL;
        NChild->prev = NULL;
        delete NChild;
        NChild = NULL;
    }
}

void insertFirstParent(listParent &LParent, NodeParent newNParent) {
    if (isEmptyParent(LParent)) {
        LParent.first = newNParent;
        LParent.last = newNParent;
    } else {
        newNParent->next = LParent.first;
        LParent.first->prev = newNParent;
        LParent.first = newNParent;
    }
}

void insertLastParent(listParent &LParent, NodeParent newNParent) {
    if (isEmptyParent(LParent)) {
        LParent.first = newNParent;
        LParent.last = newNParent;
    } else {
        newNParent->prev = LParent.last;
        LParent.last->next = newNParent;
        LParent.last = newNParent;
    }
}

void deleteFirstParent(listParent &LParent) {
    if (!isEmptyParent(LParent)) {
        NodeParent nodeHapus = LParent.first;
        if (LParent.first == LParent.last) {
            LParent.first = NULL;
            LParent.last = NULL;
        } else {
            LParent.first = LParent.first->next;
            LParent.first->prev = NULL;
        }
        deallocNodeParent(nodeHapus);
    }
}

void deleteAfterParent(listParent &LParent, NodeParent NPrev) {
    if (!isEmptyParent(LParent) && NPrev != NULL && NPrev->next != NULL) {
        NodeParent nodeHapus = NPrev->next;
        NPrev->next = nodeHapus->next;
        if (nodeHapus->next != NULL) {
            nodeHapus->next->prev = NPrev;
        } else {
            LParent.last = NPrev;
        }
        deallocNodeParent(nodeHapus);
    }
}

void insertFirstChild(listChild &LChild, NodeChild newNChild) {
    if (isEmptyChild(LChild)) {
        LChild.first = newNChild;
        LChild.last = newNChild;
    } else {
        newNChild->next = LChild.first;
        LChild.first->prev = newNChild;
        LChild.first = newNChild;
    }
}

void insertLastChild(listChild &LChild, NodeChild newNChild) {
    if (isEmptyChild(LChild)) {
        LChild.first = newNChild;
        LChild.last = newNChild;
    } else {
        newNChild->prev = LChild.last;
        LChild.last->next = newNChild;
        LChild.last = newNChild;
    }
}

void deleteFirstChild(listChild &LChild) {
    if (!isEmptyChild(LChild)) {
        NodeChild nodeHapus = LChild.first;
        if (LChild.first == LChild.last) {
            LChild.first = NULL;
            LChild.last = NULL;
        } else {
            LChild.first = LChild.first->next;
            LChild.first->prev = NULL;
        }
        deallocNodeChild(nodeHapus);
    }
}

void deleteAfterChild(listChild &LChild, NodeChild NPrev) {
    if (!isEmptyChild(LChild) && NPrev != NULL && NPrev->next != NULL) {
        NodeChild nodeHapus = NPrev->next;
        NPrev->next = nodeHapus->next;
        if (nodeHapus->next != NULL) {
            nodeHapus->next->prev = NPrev;
        } else {
            LChild.last = NPrev;
        }
        deallocNodeChild(nodeHapus);
    }
}

void deleteListChild(listChild &LChild) {
    while (!isEmptyChild(LChild)) {
        deleteFirstChild(LChild);
    }
}

void printMLLStructure(listParent &LParent) {
    if (isEmptyParent(LParent)) {
        cout << "List Parent kosong!" << endl;
        return;
    }
    
    NodeParent pBantu = LParent.first;
    int indexParent = 1;
    
    while (pBantu != NULL) {
        cout << endl;
        cout << "=== Parent " << indexParent << " ===" << endl;
        cout << "ID Golongan : " << pBantu->isidata.idGolongan << endl;
        cout << "Nama Golongan : " << pBantu->isidata.namaGolongan << endl;
        
        if (isEmptyChild(pBantu->L_child)) {
            cout << "(tidak ada child)" << endl;
        } else {
            NodeChild cBantu = pBantu->L_child.first;
            int indexChild = 1;
            while (cBantu != NULL) {
                cout << "- Child " << indexChild << " :" << endl;
                cout << "    ID Hewan : " << cBantu->isidata.idHewan << endl;
                cout << "    Nama Hewan : " << cBantu->isidata.namaHewan << endl;
                cout << "    Habitat : " << cBantu->isidata.habitat << endl;
                cout << "    Ekor : " << (cBantu->isidata.ekor ? 1 : 0) << endl;
                cout << "    Bobot : " << cBantu->isidata.bobot << endl;
                cBantu = cBantu->next;
                indexChild++;
            }
        }
        cout << "------------------------------" << endl;
        pBantu = pBantu->next;
        indexParent++;
    }
}

void searchHewanByEkor(listParent &LParent, bool ekor) {
    if (isEmptyParent(LParent)) {
        cout << "List Parent kosong!" << endl;
        return;
    }
    
    NodeParent pBantu = LParent.first;
    int indexParent = 1;
    bool found = false;
    
    while (pBantu != NULL) {
        NodeChild cBantu = pBantu->L_child.first;
        int indexChild = 1;
        
        while (cBantu != NULL) {
            if (cBantu->isidata.ekor == ekor) {
                found = true;
                cout << "Data ditemukan pada list anak dari node parent " 
                     << pBantu->isidata.namaGolongan << " pada posisi ke-" << indexChild << "!" << endl;
                cout << "--- Data Child ---" << endl;
                cout << "ID Child : " << cBantu->isidata.idHewan << endl;
                cout << "Posisi dalam list anak : posisi ke-" << indexChild << endl;
                cout << "Nama Hewan : " << cBantu->isidata.namaHewan << endl;
                cout << "Habitat : " << cBantu->isidata.habitat << endl;
                cout << "Ekor : " << (cBantu->isidata.ekor ? 1 : 0) << endl;
                cout << "Bobot : " << cBantu->isidata.bobot << endl;
                cout << "------------------------------" << endl;
                cout << "--- Data Parent ---" << endl;
                cout << "ID Parent : " << pBantu->isidata.idGolongan << endl;
                cout << "Posisi dalam list induk : posisi ke-" << indexParent << endl;
                cout << "Nama golongan : " << pBantu->isidata.namaGolongan << endl;
                cout << "------------------------------" << endl;
                cout << endl;
            }
            cBantu = cBantu->next;
            indexChild++;
        }
        pBantu = pBantu->next;
        indexParent++;
    }
    
    if (!found) {
        cout << "Data hewan dengan ekor = " << (ekor ? "TRUE" : "FALSE") << " tidak ditemukan!" << endl;
    }
}
```

#### main.cpp
```cpp
#include "MultiLL.h"

int main() {
    listParent LParent;
    createListParent(LParent);
    
    NodeParent G001 = allocNodeParent("G001", "Aves");
    insertLastParent(LParent, G001);
    
    NodeParent G002 = allocNodeParent("G002", "Mamalia");
    insertLastParent(LParent, G002);
    
    NodeParent G003 = allocNodeParent("G003", "Pisces");
    insertLastParent(LParent, G003);
    
    NodeParent G004 = allocNodeParent("G004", "Amfibi");
    insertLastParent(LParent, G004);
    
    NodeParent G005 = allocNodeParent("G005", "Reptil");
    insertLastParent(LParent, G005);
    
    NodeChild AV001 = allocNodeChild("AV001", "Cendrawasih", "Hutan", true, 0.3);
    insertLastChild(G001->L_child, AV001);
    
    NodeChild AV002 = allocNodeChild("AV002", "Bebek", "Air", true, 2);
    insertLastChild(G001->L_child, AV002);
    
    NodeChild M001 = allocNodeChild("M001", "Harimau", "Hutan", true, 200);
    insertLastChild(G002->L_child, M001);
    
    NodeChild M003 = allocNodeChild("M003", "Gorila", "Hutan", false, 160);
    insertLastChild(G002->L_child, M003);
    
    NodeChild M002 = allocNodeChild("M002", "Kucing", "Darat", true, 4);
    insertLastChild(G002->L_child, M002);
    
    NodeChild AM001 = allocNodeChild("AM001", "Kodok", "Sawah", false, 0.2);
    insertLastChild(G004->L_child, AM001);
    
    printMLLStructure(LParent);
    cout << endl;
    
    searchHewanByEkor(LParent, false);
    cout << endl;
    
    deleteAfterParent(LParent, G003);
    
    printMLLStructure(LParent);
    
    return 0;
}
```

#### Output:
![Output Unguided 1](LINK_GAMBAR_GITHUB_UNGUIDED1)

#### Penjelasan:
Program ini mengimplementasikan ADT Multi Linked List untuk sistem klasifikasi hewan:

**Soal 1 - Implementasi ADT MLL:**
- Membuat struktur data dengan `golonganHewan` sebagai data parent dan `dataHewan` sebagai data child
- Node child memiliki atribut: idHewan, namaHewan, habitat, ekor (boolean), dan bobot
- Mengimplementasikan semua operasi dasar: create, alloc, insert, delete, dan print

**Soal 2 - Search Hewan By Ekor:**
- Prosedur `searchHewanByEkor()` mencari semua hewan dengan nilai ekor = FALSE
- Menelusuri semua parent dan child untuk menemukan data yang cocok
- Menampilkan informasi lengkap child dan parent-nya
- Hasil: Gorila (M003) di Mamalia dan Kodok (AM001) di Amfibi

**Soal 3 - Delete Node Parent:**
- Menghapus node G004 (Amfibi) beserta semua child-nya
- Menggunakan `deleteAfterParent()` dengan G003 sebagai node sebelumnya
- Setelah delete, MLL hanya memiliki 4 parent: G001, G002, G003, G005

---

## Kesimpulan

Dari praktikum **Multi Linked List** yang telah dilakukan, dapat disimpulkan:

1. **Multi Linked List (MLL)** adalah struktur data yang terdiri dari beberapa linked list yang saling terhubung secara hierarkis, dimana setiap node parent memiliki pointer ke linked list child.

2. **Struktur MLL** terdiri dari komponen utama: node parent, node child, list parent, dan list child. Setiap node parent memiliki pointer next/prev untuk navigasi horizontal dan pointer ke list child untuk navigasi vertikal.

3. **Operasi dasar MLL** meliputi create list, alokasi node, insert (first/last), delete (first/after), search, dan print structure dengan kompleksitas yang bervariasi.

4. **Implementasi MLL** sangat cocok untuk data yang memiliki hubungan one-to-many seperti kategori-item, golongan-anggota, atau departemen-karyawan.

5. **Pencarian pada MLL** memerlukan traversal pada multiple list (parent dan child) sehingga kompleksitasnya O(n × m) dimana n = jumlah parent dan m = rata-rata child per parent.

6. **Penghapusan node parent** harus memperhatikan dealokasi semua child terlebih dahulu untuk menghindari memory leak.

7. MLL memberikan fleksibilitas dalam pengelolaan data hierarkis dengan efisiensi memori yang baik karena tidak memerlukan alokasi untuk relasi yang tidak ada.

8. Aplikasi MLL sangat luas mencakup sistem database, file system, e-commerce, dan berbagai sistem informasi lainnya.

## Referensi

[1] Sharma, A. K., & Sharma, P. (2018). *Data Structures Using C* (2nd ed.). Pearson Education India. ISBN: 978-9332585522

[2] Karumanchi, N. (2017). *Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles* (5th ed.). CareerMonk Publications. ISBN: 978-8193245279

[3] Weiss, M. A. (2014). *Data Structures and Algorithm Analysis in C++* (4th ed.). Pearson. ISBN: 978-0132847377

[4] Drozdek, A. (2012). *Data Structures and Algorithms in C++* (4th ed.). Cengage Learning. ISBN: 978-1133608424

