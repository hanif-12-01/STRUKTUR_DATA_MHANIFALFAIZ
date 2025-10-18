#include "singlylist.h"
#include <ctime>

int main() {
    clock_t start = clock();
    
    List L;
    address P;
    int n, nilai;
    
    CreateList(L);
    
    cout << "Masukkan jumlah data: ";
    cin >> n;
    
    cout << "Masukkan " << n << " data integer:" << endl;
    for (int i = 0; i < n; i++) {
        cout << "Data ke-" << (i+1) << ": ";
        cin >> nilai;
        P = alokasi(nilai);
        insertFirst(L, P);
    }
    
    cout << "\nIsi Linked List: " << endl;
    printInfo(L);
    
    clock_t end = clock();
    double duration = double(end - start) / CLOCKS_PER_SEC;
    
    cout << "\nProcess returned 0 (0x0)   execution time : " << duration << " s" << endl;
    cout << "Press any key to continue." << endl;
    
    return 0;
}
