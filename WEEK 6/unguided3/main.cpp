#include "Doublylist.h"

using namespace std;

int main() {
    List L;
    CreateList(L);
    address P;
    infotype data;

    data = {"D001", "hitam", 90}; P = alokasi(data); insertLast(L, P);
    data = {"D003", "putih", 70}; P = alokasi(data); insertLast(L, P);
    data = {"D004", "kuning", 90}; P = alokasi(data); insertLast(L, P);

    infotype cari = {"D003", "", 0};
    address found = findElm(L, cari);
    
    if (found != Nil) {
        address Prec = found->prev;
        address toDelete;
        
        if (Prec != Nil) {
            deleteAfter(L, Prec, toDelete);
            cout << "Data dengan nomor polisi D003 berhasil dihapus." << endl << endl;
        } else if (found == L.last) {
            deleteLast(L, toDelete);
            cout << "Data dengan nomor polisi D003 berhasil dihapus." << endl << endl;
        }
        
        if (toDelete != Nil) {
            dealokasi(toDelete);
        }
        
        cout << "DATA LIST 1" << endl << endl;
        printInfo(L);
    } else {
        cout << "Data tidak ditemukan." << endl;
    }

    return 0;
}
