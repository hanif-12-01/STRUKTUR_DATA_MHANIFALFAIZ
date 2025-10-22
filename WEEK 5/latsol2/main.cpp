#include "Singlylist.h"
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    clock_t start = clock();
    
    List L;
    address P;
    int n, nilai, cari;
    
    CreateList(L);
    
    cout << "Masukkan jumlah elemen: ";
    cin >> n;
    
    for(int i = 0; i < n; i++) {
        cout << "Masukkan nilai elemen ke-" << (i+1) << ": ";
        cin >> nilai;
        P = alokasi(nilai);
        insertFirst(L, P);
    }
    
    cout << "\nIsi list: ";
    printInfo(L);
    
    cout << "\nMasukkan nilai yang ingin dicari: ";
    cin >> cari;
    
    address found = findElm(L, cari);
    
    if (found != NULL) {
        cout << "Elemen dengan info " << cari << " ditemukan dalam list" << endl;
    } else {
        cout << "Elemen dengan info " << cari << " tidak ditemukan" << endl;
    }
    
    clock_t end = clock();
    double time_taken = double(end - start) / CLOCKS_PER_SEC;
    cout << "execution time : " << time_taken << " s" << endl;
    
    return 0;
}
