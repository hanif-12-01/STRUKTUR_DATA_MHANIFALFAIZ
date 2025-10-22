#include "Singlylist.h"
#include <iostream>
using namespace std;

#define Nil NULL

void CreateList(List &L) {
    L.First = Nil;
}

address alokasi(infotype x) {
    address P;
    P = new ElmList;
    
    if (P != Nil) {
        P->info = x;
        P->next = Nil;
    }
    
    return P;
}

void dealokasi(address &P) {
    delete P;
    P = Nil;
}

void insertFirst(List &L, address P) {
    P->next = L.First;
    L.First = P;
}

void printInfo(List L) {
    address P;
    P = L.First;
    
    while (P != Nil) {
        cout << P->info << " ";
        P = P->next;
    }
    cout << endl;
}

int sumInfo(List L) {
    address P;
    int total = 0;
    
    P = L.First;
    
    while (P != Nil) {
        total += P->info;
        P = P->next;
    }
    
    return total;
}
