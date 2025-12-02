#ifndef QUEUEPENGIRIMAN_H
#define QUEUEPENGIRIMAN_H

#include <string>
#include <iostream>
using namespace std;

struct Paket {
    string KodeResi;
    string NamaPengirim;
    int BeratBarang;
    string Tujuan;
};

const int MAX = 5;

struct QueueEkspedisi {
    Paket dataPaket[MAX];
    int Head;
    int Tail;
};

bool isEmpty(QueueEkspedisi &Q);
bool isFull(QueueEkspedisi &Q);
void createQueue(QueueEkspedisi &Q);
void enQueue(QueueEkspedisi &Q, Paket data);
void deQueue(QueueEkspedisi &Q);
void viewQueue(QueueEkspedisi &Q);
int TotalBiayaPengiriman(QueueEkspedisi &Q);

bool isEmpty(QueueEkspedisi &Q) {
    return (Q.Head == -1 && Q.Tail == -1);
}

bool isFull(QueueEkspedisi &Q) {
    return (Q.Tail == MAX - 1);
}

void createQueue(QueueEkspedisi &Q) {
    Q.Head = -1;
    Q.Tail = -1;
}

void enQueue(QueueEkspedisi &Q, Paket data) {
    if (isFull(Q)) {
        cout << "Queue penuh! Tidak dapat menambah data paket.\n";
    } else {
        if (isEmpty(Q)) {
            Q.Head = 0;
            Q.Tail = 0;
        } else {
            Q.Tail++;
        }
        Q.dataPaket[Q.Tail] = data;
        cout << "Paket dengan kode resi " << data.KodeResi << " berhasil ditambahkan ke queue.\n";
    }
}

void deQueue(QueueEkspedisi &Q) {
    if (isEmpty(Q)) {
        cout << "Queue kosong! Tidak ada data untuk di-dequeue.\n";
    } else {
        cout << "Paket dengan kode resi " << Q.dataPaket[Q.Head].KodeResi 
             << " berhasil di-dequeue.\n";
        
        if (Q.Head == Q.Tail) {
            Q.Head = -1;
            Q.Tail = -1;
        } else {
            for (int i = Q.Head; i < Q.Tail; i++) {
                Q.dataPaket[i] = Q.dataPaket[i + 1];
            }
            Q.Tail--;
        }
    }
}

void viewQueue(QueueEkspedisi &Q) {
    if (isEmpty(Q)) {
        cout << "Queue kosong!\n";
        return;
    }
    
    cout << "\n=== Data Paket dalam Queue ===\n";
    for (int i = Q.Head; i <= Q.Tail; i++) {
        cout << "Paket " << (i - Q.Head + 1) << ":\n";
        cout << "  Kode Resi: " << Q.dataPaket[i].KodeResi << "\n";
        cout << "  Nama Pengirim: " << Q.dataPaket[i].NamaPengirim << "\n";
        cout << "  Berat Barang: " << Q.dataPaket[i].BeratBarang << " Kg\n";
        cout << "  Tujuan: " << Q.dataPaket[i].Tujuan << "\n";
        cout << "---\n";
    }
}

int TotalBiayaPengiriman(QueueEkspedisi &Q) {
    if (isEmpty(Q)) {
        return 0;
    }
    
    int totalBerat = 0;
    for (int i = Q.Head; i <= Q.Tail; i++) {
        totalBerat += Q.dataPaket[i].BeratBarang;
    }
    
    return totalBerat * 8250;
}

#endif
