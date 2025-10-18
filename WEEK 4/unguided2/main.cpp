#include "singlylist.h"

int main() {
    List L;
    address P;
    
    CreateList(L);
    
    P = alokasi(2);
    insertFirst(L, P);
    
    P = alokasi(0);
    insertFirst(L, P);
    
    P = alokasi(8);
    insertFirst(L, P);
    
    P = alokasi(12);
    insertFirst(L, P);
    
    P = alokasi(9);
    insertFirst(L, P);
    
    printInfo(L);
    
    deleteFirst(L, P);
    dealokasi(P);
    printInfo(L);
    
    deleteLast(L, P);
    dealokasi(P);
    printInfo(L);
    
    address Prec = L.First;
    deleteAfter(L, Prec, P);
    dealokasi(P);
    printInfo(L);
    
    cout << "Jumlah node : " << nbList(L) << endl;
    
    cout << endl;
    cout << "- List Berhasil Terhapus -" << endl;
    deleteList(L);
    cout << "Jumlah node : " << nbList(L) << endl;
    
    return 0;
}
