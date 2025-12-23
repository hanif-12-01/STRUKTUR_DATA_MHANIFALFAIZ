#include <iostream>
#ifdef _WIN32
#undef main
#endif
#include "mll.h"

using namespace std;

int main() {
    MultiLinkedList MLL;
    createListParent(MLL);

    adrGenre G4 = alokasiNodeParent("G004", "Romance");
    insertFirstParent(MLL, G4);

    adrGenre G3 = alokasiNodeParent("G003", "Horror");
    insertFirstParent(MLL, G3);

    adrGenre G2 = alokasiNodeParent("G002", "Comedy");
    insertFirstParent(MLL, G2);

    adrGenre G1 = alokasiNodeParent("G001", "Action");
    insertFirstParent(MLL, G1);

    insertLastChild(G1, alokasiNodeChild("FA001", "The Raid", 101, 2011, 7.6));

    insertLastChild(G2, alokasiNodeChild("FC001", "Agak Laen", 119, 2024, 8.0));
    insertLastChild(G2, alokasiNodeChild("FC002", "My Stupid Boss", 108, 2016, 6.8));

    insertLastChild(G3, alokasiNodeChild("FH001", "Pengabdi Setan", 107, 2017, 8.4));

    insertLastChild(G4, alokasiNodeChild("FR001", "Habibie & Ainun", 118, 2012, 7.6));
    insertLastChild(G4, alokasiNodeChild("FR002", "Dilan 1990", 110, 2018, 6.6));

    cout << "### TAMPILAN AWAL STRUKTUR MLL ###" << endl;
    printStrukturMLL(MLL);
    cout << endl;

    cout << "### PENCARIAN FILM (RATING 8.0 - 8.5) ###" << endl;
    searchFilmByRatingRange(MLL, 8.0, 8.5);
    cout << endl;

    cout << "### MENGHAPUS GENRE G002 (COMEDY) ###" << endl;

    deleteAfterParent(MLL, "G001"); 
    cout << "Penghapusan selesai." << endl << endl;

    cout << "### TAMPILAN AKHIR STRUKTUR MLL ###" << endl;
    printStrukturMLL(MLL);

    return 0;
}