#include <iostream>
#include "StackMahasiswa.h"
using namespace std;

int main() {
    StackMahasiswa stack;
    createStack(stack);
    
    cout << "Program Stack Mahasiswa - Soal3\n";
    cout << "=================================\n\n";
    
    cout << "1) Stack kosong telah dibuat.\n\n";
    
    cout << "2) Input data mahasiswa:\n";
    
    Mahasiswa m1 = {"Venti", "11111", 75.7, 82.1, 65.5};
    Push(stack, m1);
    
    Mahasiswa m2 = {"Xiao", "22222", 87.4, 88.9, 81.9};
    Push(stack, m2);
    
    Mahasiswa m3 = {"Kazuha", "33333", 92.3, 88.8, 82.4};
    Push(stack, m3);
    
    Mahasiswa m4 = {"Wanderer", "44444", 95.5, 85.5, 90.5};
    Push(stack, m4);
    
    Mahasiswa m5 = {"Lynette", "55555", 77.7, 65.4, 79.9};
    Push(stack, m5);
    
    Mahasiswa m6 = {"Chasca", "66666", 99.9, 93.6, 87.3};
    Push(stack, m6);
    
    cout << "\n3) Tampilkan stack yang sudah diinputkan data mahasiswa:\n";
    View(stack);
    
    cout << "\n4) Lakukan pop sebanyak 1x:\n";
    Pop(stack);
    
    cout << "\n5) Tampilkan stack yang sudah dilakukan pop 1x:\n";
    View(stack);
    
    cout << "\n6) Lakukan update data pada posisi ke 3:\n";
    Mahasiswa m_update = {"Heizou", "77777", 99.9, 88.8, 77.7};
    stack.dataMahasiswa[3] = m_update;
    cout << "Data pada posisi 3 berhasil di-update menjadi:\n";
    cout << "  Nama: " << m_update.Nama << "\n";
    cout << "  NIM: " << m_update.NIM << "\n";
    cout << "  NilaiTugas: " << m_update.NilaiTugas << "\n";
    cout << "  NilaiUTS: " << m_update.NilaiUTS << "\n";
    cout << "  NilaiUAS: " << m_update.NilaiUAS << "\n";
    
    cout << "\n7) Tampilkan stack yang sudah dilakukan update:\n";
    View(stack);
    
    cout << "\n8) Lakukan searching data mahasiswa dengan NilaiAkhir 85.5 - 95.5:\n";
    SearchNilaiAkhir(stack, 85.5, 95.5);
    
    cout << "\n=== Bagian B (15 poin) ===\n";
    maxNilaiAkhir(stack);
    
    return 0;
}
