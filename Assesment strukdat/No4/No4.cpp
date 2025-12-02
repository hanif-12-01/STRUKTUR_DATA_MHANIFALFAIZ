#include <iostream>
#include "QueuePengiriman.h"
using namespace std;

void displayMenu() {
    cout << "\n--- Komaniya Ekspress ---\n";
    cout << "1. Input Data Paket\n";
    cout << "2. Hapus Data Paket\n";
    cout << "3. Tampilkan Queue Paket\n";
    cout << "4. Hitung Total Biaya Pengiriman\n";
    cout << "Pilihan anda : ";
}

int main() {
    QueueEkspedisi queue;
    
    cout << "Program Queue Pengiriman Paket - Soal4\n";
    cout << "========================================\n\n";
    
    cout << "1) Buat queue kosong (createQueue)\n";
    createQueue(queue);
    cout << "Queue kosong telah dibuat.\n";
    
    cout << "\n2) Buat tampilan menu seperti dibawah ini:\n";
    displayMenu();
    cout << "\n";
    
    cout << "\n3) Input data paket (enQueue) dengan rincian sebagai berikut:\n";
    
    Paket p1 = {"123456", "Hutao", 14, "Sumeru"};
    enQueue(queue, p1);
    
    Paket p2 = {"234567", "Ayaka", 10, "Fontaine"};
    enQueue(queue, p2);
    
    Paket p3 = {"345678", "Bennet", 7, "Natlan"};
    enQueue(queue, p3);
    
    Paket p4 = {"456789", "Furina", 16, "Liyue"};
    enQueue(queue, p4);
    
    Paket p5 = {"567890", "Nefer", 6, "Inazuma"};
    enQueue(queue, p5);
    
    cout << "\n4) Tampilkan queue yang sudah diinputkan data paket:\n";
    viewQueue(queue);
    
    cout << "\n5) Lakukan deQueue sebanyak 1x:\n";
    deQueue(queue);
    
    cout << "\n6) Tampilkan queue yang sudah dilakukan deQueue 1x:\n";
    viewQueue(queue);
    
    cout << "\n=== Bagian B (15 poin) ===\n";
    cout << "Total Biaya Pengiriman semua paket: Rp. " << TotalBiayaPengiriman(queue) << endl;
    
    return 0;
}
