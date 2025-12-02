#ifndef STACKMAHASISWA_H
#define STACKMAHASISWA_H

#include <string>
#include <iostream>
using namespace std;

struct Mahasiswa {
    string Nama;
    string NIM;
    float NilaiTugas;
    float NilaiUTS;
    float NilaiUAS;
};

const int MAX = 6;

struct StackMahasiswa {
    Mahasiswa dataMahasiswa[MAX];
    int Top;
};

bool isEmpty(StackMahasiswa &S);
bool isFull(StackMahasiswa &S);
void createStack(StackMahasiswa &S);
void Push(StackMahasiswa &S, Mahasiswa data);
void Pop(StackMahasiswa &S);
void Update(StackMahasiswa &S, int posisi);
void View(StackMahasiswa &S);
void SearchNilaiAkhir(StackMahasiswa &S, float NilaiAkhirMin, float NilaiAkhirMax);
void maxNilaiAkhir(StackMahasiswa &S);

bool isEmpty(StackMahasiswa &S) {
    return (S.Top == -1);
}

bool isFull(StackMahasiswa &S) {
    return (S.Top == MAX - 1);
}

void createStack(StackMahasiswa &S) {
    S.Top = -1;
}

void Push(StackMahasiswa &S, Mahasiswa data) {
    if (isFull(S)) {
        cout << "Stack penuh! Tidak dapat menambah data.\n";
    } else {
        S.Top++;
        S.dataMahasiswa[S.Top] = data;
        cout << "Data mahasiswa " << data.Nama << " berhasil ditambahkan.\n";
    }
}

void Pop(StackMahasiswa &S) {
    if (isEmpty(S)) {
        cout << "Stack kosong! Tidak ada data untuk di-pop.\n";
    } else {
        cout << "Data mahasiswa " << S.dataMahasiswa[S.Top].Nama << " berhasil di-pop.\n";
        S.Top--;
    }
}

void Update(StackMahasiswa &S, int posisi) {
    if (isEmpty(S)) {
        cout << "Stack kosong! Tidak ada data untuk di-update.\n";
        return;
    }
    
    if (posisi < 0 || posisi > S.Top) {
        cout << "Posisi tidak valid!\n";
        return;
    }
    
    cout << "Update data mahasiswa pada posisi " << posisi << ":\n";
    cout << "Nama: ";
    cin.ignore();
    getline(cin, S.dataMahasiswa[posisi].Nama);
    cout << "NIM: ";
    cin >> S.dataMahasiswa[posisi].NIM;
    cout << "NilaiTugas: ";
    cin >> S.dataMahasiswa[posisi].NilaiTugas;
    cout << "NilaiUTS: ";
    cin >> S.dataMahasiswa[posisi].NilaiUTS;
    cout << "NilaiUAS: ";
    cin >> S.dataMahasiswa[posisi].NilaiUAS;
    
    cout << "Data berhasil di-update.\n";
}

void View(StackMahasiswa &S) {
    if (isEmpty(S)) {
        cout << "Stack kosong!\n";
        return;
    }
    
    cout << "\n=== Data Mahasiswa dalam Stack ===\n";
    for (int i = S.Top; i >= 0; i--) {
        float nilaiAkhir = 0.2 * S.dataMahasiswa[i].NilaiTugas + 
                          0.4 * S.dataMahasiswa[i].NilaiUTS + 
                          0.4 * S.dataMahasiswa[i].NilaiUAS;
        
        cout << "Posisi " << i << ":\n";
        cout << "  Nama: " << S.dataMahasiswa[i].Nama << "\n";
        cout << "  NIM: " << S.dataMahasiswa[i].NIM << "\n";
        cout << "  NilaiTugas: " << S.dataMahasiswa[i].NilaiTugas << "\n";
        cout << "  NilaiUTS: " << S.dataMahasiswa[i].NilaiUTS << "\n";
        cout << "  NilaiUAS: " << S.dataMahasiswa[i].NilaiUAS << "\n";
        cout << "  NilaiAkhir: " << nilaiAkhir << "\n";
        cout << "---\n";
    }
}

void SearchNilaiAkhir(StackMahasiswa &S, float NilaiAkhirMin, float NilaiAkhirMax) {
    if (isEmpty(S)) {
        cout << "Stack kosong!\n";
        return;
    }
    
    cout << "\n=== Mahasiswa dengan NilaiAkhir antara " << NilaiAkhirMin 
         << " - " << NilaiAkhirMax << " ===\n";
    
    bool found = false;
    for (int i = S.Top; i >= 0; i--) {
        float nilaiAkhir = 0.2 * S.dataMahasiswa[i].NilaiTugas + 
                          0.4 * S.dataMahasiswa[i].NilaiUTS + 
                          0.4 * S.dataMahasiswa[i].NilaiUAS;
        
        if (nilaiAkhir >= NilaiAkhirMin && nilaiAkhir <= NilaiAkhirMax) {
            cout << "Posisi " << i << ":\n";
            cout << "  Nama: " << S.dataMahasiswa[i].Nama << "\n";
            cout << "  NIM: " << S.dataMahasiswa[i].NIM << "\n";
            cout << "  NilaiTugas: " << S.dataMahasiswa[i].NilaiTugas << "\n";
            cout << "  NilaiUTS: " << S.dataMahasiswa[i].NilaiUTS << "\n";
            cout << "  NilaiUAS: " << S.dataMahasiswa[i].NilaiUAS << "\n";
            cout << "  NilaiAkhir: " << nilaiAkhir << "\n";
            cout << "---\n";
            found = true;
        }
    }
    
    if (!found) {
        cout << "Tidak ada mahasiswa dengan NilaiAkhir dalam rentang tersebut.\n";
    }
}

void maxNilaiAkhir(StackMahasiswa &S) {
    if (isEmpty(S)) {
        cout << "Stack kosong!\n";
        return;
    }
    
    float maxNilai = -1;
    int maxPosisi = -1;
    
    for (int i = 0; i <= S.Top; i++) {
        float nilaiAkhir = 0.2 * S.dataMahasiswa[i].NilaiTugas + 
                          0.4 * S.dataMahasiswa[i].NilaiUTS + 
                          0.4 * S.dataMahasiswa[i].NilaiUAS;
        
        if (nilaiAkhir > maxNilai) {
            maxNilai = nilaiAkhir;
            maxPosisi = i;
        }
    }
    
    cout << "\n=== Mahasiswa dengan NilaiAkhir Terbesar ===\n";
    cout << "Posisi: " << maxPosisi << "\n";
    cout << "Nama: " << S.dataMahasiswa[maxPosisi].Nama << "\n";
    cout << "NIM: " << S.dataMahasiswa[maxPosisi].NIM << "\n";
    cout << "NilaiTugas: " << S.dataMahasiswa[maxPosisi].NilaiTugas << "\n";
    cout << "NilaiUTS: " << S.dataMahasiswa[maxPosisi].NilaiUTS << "\n";
    cout << "NilaiUAS: " << S.dataMahasiswa[maxPosisi].NilaiUAS << "\n";
    cout << "NilaiAkhir: " << maxNilai << "\n";
}

#endif
