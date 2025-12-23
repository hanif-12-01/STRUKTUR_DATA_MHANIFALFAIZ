#ifndef MLL_H
#define MLL_H

#include <iostream>
#include <string>

using namespace std;

struct infoGenre {
    string IDGenre;
    string namaGenre;
};

struct infoFilm {
    string IDFilm;
    string judulFilm;
    int durasiFilm;
    int tahunTayang;
    float ratingFilm;
};

typedef struct elmGenre *adrGenre;
typedef struct elmFilm *adrFilm;

struct elmFilm {
    infoFilm info;
    adrFilm next;
    adrFilm prev;
};

struct elmGenre {
    infoGenre info;
    adrGenre next;
    adrGenre prev;
    adrFilm firstChild; 
};

struct MultiLinkedList {
    adrGenre first;
    adrGenre last;
};

void createListParent(MultiLinkedList &L);
adrGenre alokasiNodeParent(string id, string nama);
adrFilm alokasiNodeChild(string id, string judul, int durasi, int tahun, float rating);
void dealokasiNodeParent(adrGenre P);
void dealokasiNodeChild(adrFilm C);

void insertFirstParent(MultiLinkedList &L, adrGenre P);
void insertLastChild(adrGenre P, adrFilm C);

void hapusListChild(adrGenre P);
void deleteAfterParent(MultiLinkedList &L, string IDGenrePrev);

void searchFilmByRatingRange(MultiLinkedList L, float minRating, float maxRating);
void printStrukturMLL(MultiLinkedList L);

#endif