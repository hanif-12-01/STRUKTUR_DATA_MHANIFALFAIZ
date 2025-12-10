#ifndef MULTILL_H
#define MULTILL_H

#include <iostream>
#include <string>
using namespace std;

// Struct golonganHewan - data untuk node parent
struct golonganHewan {
    string idGolongan;
    string namaGolongan;
};

// Struct dataHewan - data untuk node child
struct dataHewan {
    string idHewan;
    string namaHewan;
    string habitat;
    bool ekor;      // TRUE jika berekor, FALSE jika tidak berekor
    float bobot;    // dalam kg
};

// Forward declaration
typedef struct nodeParent *NodeParent;
typedef struct nodeChild *NodeChild;

// Struct nodeChild
struct nodeChild {
    dataHewan isidata;
    NodeChild next;
    NodeChild prev;
};

// Struct listChild
struct listChild {
    NodeChild first;
    NodeChild last;
};

// Struct nodeParent
struct nodeParent {
    golonganHewan isidata;
    NodeParent next;
    NodeParent prev;
    listChild L_child;
};

// Struct listParent
struct listParent {
    NodeParent first;
    NodeParent last;
};

// Function untuk cek kosong
bool isEmptyParent(listParent LParent);
bool isEmptyChild(listChild LChild);

// Procedure untuk create list
void createListParent(listParent &LParent);
void createListChild(listChild &LChild);

// Function untuk alokasi node
NodeParent allocNodeParent(string idGol, string namaGol);
NodeChild allocNodeChild(string idHwn, string namaHwn, string habitat, bool ekor, float bobot);

// Procedure untuk dealokasi node
void deallocNodeParent(NodeParent &NParent);
void deallocNodeChild(NodeChild &NChild);

// Procedure untuk insert parent
void insertFirstParent(listParent &LParent, NodeParent newNParent);
void insertLastParent(listParent &LParent, NodeParent newNParent);

// Procedure untuk delete parent
void deleteFirstParent(listParent &LParent);
void deleteAfterParent(listParent &LParent, NodeParent NPrev);

// Procedure untuk insert child
void insertFirstChild(listChild &LChild, NodeChild newNChild);
void insertLastChild(listChild &LChild, NodeChild newNChild);

// Procedure untuk delete child
void deleteFirstChild(listChild &LChild);
void deleteAfterChild(listChild &LChild, NodeChild NPrev);

// Procedure untuk print dan delete list child
void printMLLStructure(listParent &LParent);
void deleteListChild(listChild &LChild);

// Procedure untuk search (UNGUIDED 2)
void searchHewanByEkor(listParent &LParent, bool ekor);

#endif
