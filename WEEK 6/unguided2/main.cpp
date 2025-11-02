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

    infotype cari = {"D001", "", 0};
    address found = findElm(L, cari);
    
    if (found != Nil) {
        cout << "Masukkan Nomor Polisi yang dicari  : D001" << endl;
        cout << "nomor polisi : " << found->info.nopol << endl;
        cout << "warna        : " << found->info.warna << endl;
        cout << "tahun        : " << found->info.thnBuat << endl;
    } else {
        cout << "Data tidak ditemukan." << endl;
    }

    return 0;
}
