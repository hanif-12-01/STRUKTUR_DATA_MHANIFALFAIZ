#include "MultiLL.h"

// Function untuk cek kosong
bool isEmptyParent(listParent LParent) {
    return LParent.first == NULL;
}

bool isEmptyChild(listChild LChild) {
    return LChild.first == NULL;
}

// Procedure untuk create list
void createListParent(listParent &LParent) {
    LParent.first = NULL;
    LParent.last = NULL;
}

void createListChild(listChild &LChild) {
    LChild.first = NULL;
    LChild.last = NULL;
}

// Function untuk alokasi node parent
NodeParent allocNodeParent(string idGol, string namaGol) {
    NodeParent newNode = new nodeParent;
    newNode->isidata.idGolongan = idGol;
    newNode->isidata.namaGolongan = namaGol;
    newNode->next = NULL;
    newNode->prev = NULL;
    createListChild(newNode->L_child);
    return newNode;
}

// Function untuk alokasi node child
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

// Procedure untuk dealokasi node parent
void deallocNodeParent(NodeParent &NParent) {
    if (NParent != NULL) {
        // Hapus semua child terlebih dahulu
        deleteListChild(NParent->L_child);
        NParent->next = NULL;
        NParent->prev = NULL;
        delete NParent;
        NParent = NULL;
    }
}

// Procedure untuk dealokasi node child
void deallocNodeChild(NodeChild &NChild) {
    if (NChild != NULL) {
        NChild->next = NULL;
        NChild->prev = NULL;
        delete NChild;
        NChild = NULL;
    }
}

// Procedure untuk insert first parent
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

// Procedure untuk insert last parent
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

// Procedure untuk delete first parent
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

// Procedure untuk delete after parent
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

// Procedure untuk insert first child
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

// Procedure untuk insert last child
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

// Procedure untuk delete first child
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

// Procedure untuk delete after child
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

// Procedure untuk delete seluruh list child
void deleteListChild(listChild &LChild) {
    while (!isEmptyChild(LChild)) {
        deleteFirstChild(LChild);
    }
}

// Procedure untuk print struktur MLL
void printMLLStructure(listParent &LParent) {
    if (isEmptyParent(LParent)) {
        cout << "List Parent kosong!" << endl;
        return;
    }
    
    NodeParent pBantu = LParent.first;
    int indexParent = 1;
    
    while (pBantu != NULL) {
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
                cout << "    Ekor : " << (cBantu->isidata.ekor ? "1" : "0") << endl;
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

// Procedure untuk search hewan by ekor (UNGUIDED 2)
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
                cout << "Ekor : " << (cBantu->isidata.ekor ? "1" : "0") << endl;
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
