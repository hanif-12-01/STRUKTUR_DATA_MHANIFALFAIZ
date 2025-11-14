// UNGUIDED 1
// Program Stack untuk mengelola data mahasiswa
// Operasi: push, pop, isEmpty, isFull, peek, view

#include <iostream>
#include <string>
using namespace std;

#define MAX 5

struct Mahasiswa {
    string nama;
    string nim;
};

struct Stack {
    Mahasiswa data[MAX];
    int top;
};

// Fungsi untuk membuat stack kosong
void createStack(Stack &S) {
    S.top = -1;
}

// Fungsi untuk mengecek apakah stack kosong
bool isEmpty(Stack S) {
    return S.top == -1;
}

// Fungsi untuk mengecek apakah stack penuh
bool isFull(Stack S) {
    return S.top == MAX - 1;
}

// Fungsi untuk menambah data ke stack (push)
void push(Stack &S, Mahasiswa mhs) {
    if (isFull(S)) {
        cout << "Stack penuh! Tidak dapat menambah data." << endl;
    } else {
        S.top++;
        S.data[S.top] = mhs;
        cout << "Data mahasiswa " << mhs.nama << " berhasil ditambahkan ke stack." << endl;
    }
}

// Fungsi untuk menghapus data dari stack (pop)
void pop(Stack &S) {
    if (isEmpty(S)) {
        cout << "Stack kosong! Tidak ada data yang dapat dihapus." << endl;
    } else {
        cout << "Data mahasiswa " << S.data[S.top].nama << " berhasil dihapus dari stack." << endl;
        S.top--;
    }
}

// Fungsi untuk melihat data teratas stack (peek)
void peek(Stack S) {
    if (isEmpty(S)) {
        cout << "Stack kosong! Tidak ada data untuk ditampilkan." << endl;
    } else {
        cout << "\n=== Data Teratas Stack ===" << endl;
        cout << "Nama: " << S.data[S.top].nama << endl;
        cout << "NIM : " << S.data[S.top].nim << endl;
    }
}

// Fungsi untuk menampilkan semua data dalam stack
void view(Stack S) {
    if (isEmpty(S)) {
        cout << "Stack kosong! Tidak ada data untuk ditampilkan." << endl;
    } else {
        cout << "\n=== Isi Stack ===" << endl;
        cout << "Jumlah data: " << S.top + 1 << " dari " << MAX << endl;
        for (int i = S.top; i >= 0; i--) {
            cout << i + 1 << ". Nama: " << S.data[i].nama << " | NIM: " << S.data[i].nim << endl;
        }
    }
}

// Fungsi untuk menghitung jumlah elemen dalam stack
int countStack(Stack S) {
    return S.top + 1;
}

int main() {
    Stack S;
    createStack(S);
    
    cout << "=====================================" << endl;
    cout << "   PROGRAM STACK DATA MAHASISWA" << endl;
    cout << "=====================================" << endl;
    
    // Membuat data mahasiswa
    Mahasiswa mhs1 = {"Andi Pratama", "2311102001"};
    Mahasiswa mhs2 = {"Budi Santoso", "2311102002"};
    Mahasiswa mhs3 = {"Citra Dewi", "2311102003"};
    Mahasiswa mhs4 = {"Dedi Kurniawan", "2311102004"};
    Mahasiswa mhs5 = {"Eka Putri", "2311102005"};
    Mahasiswa mhs6 = {"Fajar Ramadhan", "2311102006"}; // untuk test stack penuh
    
    // Test operasi Push
    cout << "\n--- Test Push ---" << endl;
    push(S, mhs1);
    push(S, mhs2);
    push(S, mhs3);
    push(S, mhs4);
    push(S, mhs5);
    
    // Menampilkan isi stack
    view(S);
    
    // Test push saat stack penuh
    cout << "\n--- Test Push saat Stack Penuh ---" << endl;
    push(S, mhs6);
    
    // Test Peek
    cout << "\n--- Test Peek ---" << endl;
    peek(S);
    
    // Test Pop
    cout << "\n--- Test Pop ---" << endl;
    pop(S);
    pop(S);
    
    // Menampilkan isi stack setelah pop
    view(S);
    
    // Test Peek setelah pop
    cout << "\n--- Test Peek setelah Pop ---" << endl;
    peek(S);
    
    // Test count
    cout << "\n--- Jumlah Data dalam Stack ---" << endl;
    cout << "Jumlah data: " << countStack(S) << endl;
    
    // Hapus semua data
    cout << "\n--- Hapus Semua Data ---" << endl;
    while (!isEmpty(S)) {
        pop(S);
    }
    
    // Test pop saat stack kosong
    cout << "\n--- Test Pop saat Stack Kosong ---" << endl;
    pop(S);
    
    // Test peek saat stack kosong
    cout << "\n--- Test Peek saat Stack Kosong ---" << endl;
    peek(S);
    
    view(S);
    
    cout << "\n=====================================" << endl;
    cout << "        PROGRAM SELESAI" << endl;
    cout << "=====================================" << endl;
    
    return 0;
}
