#include "mll.h"
#include <string>
using namespace std;

void createListParent(MultiLinkedList &L) {
    L.first = NULL;
    L.last = NULL;
}

adrGenre alokasiNodeParent(string id, string nama) {
    adrGenre P = new elmGenre;
    P->info.IDGenre = id;
    P->info.namaGenre = nama;
    P->next = NULL;
    P->prev = NULL;
    P->firstChild = NULL;
    return P;
}

adrFilm alokasiNodeChild(string id, string judul, int durasi, int tahun, float rating) {
    adrFilm C = new elmFilm;
    C->info.IDFilm = id;
    C->info.judulFilm = judul;
    C->info.durasiFilm = durasi;
    C->info.tahunTayang = tahun;
    C->info.ratingFilm = rating;
    C->next = NULL;
    C->prev = NULL;
    return C;
}

void dealokasiNodeParent(adrGenre P) {
    delete P;
}

void dealokasiNodeChild(adrFilm C) {
    delete C;
}

void insertFirstParent(MultiLinkedList &L, adrGenre P) {
    if (L.first == NULL) {
        L.first = P;
        L.last = P;
    } else {
        P->next = L.first;
        L.first->prev = P;
        L.first = P;
    }
}

void insertLastChild(adrGenre P, adrFilm C) {
    if (P->firstChild == NULL) {
        P->firstChild = C;
    } else {
        adrFilm temp = P->firstChild;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = C;
        C->prev = temp;
    }
}

void hapusListChild(adrGenre P) {
    adrFilm C = P->firstChild;
    while (C != NULL) {
        adrFilm temp = C;
        C = C->next;
        dealokasiNodeChild(temp);
    }
    P->firstChild = NULL;
}

void deleteAfterParent(MultiLinkedList &L, string IDGenrePrev) {
   
    adrGenre prec = L.first;
    while (prec != NULL && prec->info.IDGenre != IDGenrePrev) {
        prec = prec->next;
    }

    if (prec == NULL || prec->next == NULL) {
        cout << "Node prev tidak ditemukan atau tidak ada node setelahnya." << endl;
        return;
    }

    adrGenre target = prec->next;

    hapusListChild(target);

    prec->next = target->next;
    if (target->next != NULL) {
        target->next->prev = prec;
    } else {
        L.last = prec;
    }

    dealokasiNodeParent(target);
}

void printStrukturMLL(MultiLinkedList L) {
    adrGenre P = L.first;
    int i = 1;
    while (P != NULL) {
        cout << "=== Parent " << i << " ===" << endl;
        cout << "ID Genre   : " << P->info.IDGenre << endl;
        cout << "Nama Genre : " << P->info.namaGenre << endl;

        adrFilm C = P->firstChild;
        int j = 1;
        if (C == NULL) {
            cout << "  - (Tidak ada film)" << endl;
        }
        while (C != NULL) {
            cout << "  - Child " << j << " :" << endl;
            cout << "      ID Film      : " << C->info.IDFilm << endl;
            cout << "      Judul Film   : " << C->info.judulFilm << endl;
            cout << "      Durasi Film  : " << C->info.durasiFilm << " menit" << endl;
            cout << "      Tahun Tayang : " << C->info.tahunTayang << endl;
            cout << "      Rating Film  : " << C->info.ratingFilm << endl;
            C = C->next;
            j++;
        }
        cout << "-----------------------" << endl;
        P = P->next;
        i++;
    }
}

void searchFilmByRatingRange(MultiLinkedList L, float minRating, float maxRating) {
    cout << "Hasil Pencarian Range Rating " << minRating << " - " << maxRating << ":" << endl;
    
    adrGenre P = L.first;
    int idxParent = 1;
    bool foundAny = false;

    while (P != NULL) {
        adrFilm C = P->firstChild;
        int idxChild = 1;

        while (C != NULL) {
            if (C->info.ratingFilm >= minRating && C->info.ratingFilm <= maxRating) {
                foundAny = true;
                cout << "Data Film ditemukan pada list child dari node parent " << P->info.namaGenre << " pada posisi ke-" << idxChild << "!" << endl;
                cout << "--- Data Film (Child) ---" << endl;
                cout << "Judul Film : " << C->info.judulFilm << endl;
                cout << "Posisi dalam list child : posisi ke-" << idxChild << endl;
                cout << "ID Film : " << C->info.IDFilm << endl;
                cout << "Durasi Film : " << C->info.durasiFilm << " menit" << endl;
                cout << "Tahun Tayang : " << C->info.tahunTayang << endl;
                cout << "Rating Film : " << C->info.ratingFilm << endl;
                cout << "-------------------------" << endl;
                cout << "--- Data Genre (Parent) ---" << endl;
                cout << "ID Genre : " << P->info.IDGenre << endl;
                cout << "Posisi dalam list parent : posisi ke-" << idxParent << endl;
                cout << "Nama Genre : " << P->info.namaGenre << endl;
                cout << "=========================" << endl;
            }
            C = C->next;
            idxChild++;
        }
        P = P->next;
        idxParent++;
    }

    if (!foundAny) {
        cout << "Tidak ada film dalam range rating tersebut." << endl;
    }
}