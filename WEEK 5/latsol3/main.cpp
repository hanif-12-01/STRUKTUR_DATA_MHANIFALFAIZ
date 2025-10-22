#include "Singlylist.h"
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    clock_t start = clock();
    
    List L;
    address P;
    int n, nilai;
    
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
    
    int total = sumInfo(L);
    cout << "Total info dari " << n << " elemen adalah " << total << endl;
    
    clock_t end = clock();
    double time_taken = double(end - start) / CLOCKS_PER_SEC;
    cout << "execution time : " << time_taken << " s" << endl;
    
    return 0;
}
