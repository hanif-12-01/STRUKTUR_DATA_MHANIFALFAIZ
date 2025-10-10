#include <iostream>
#include <cstdlib>

using namespace std;

// Definisi struct mahasiswa (dari guided1.cpp)
struct mahasiswa {
    char nim[10];
    int nilai1, nilai2;
};

// Deklarasi fungsi
void inputMhs(mahasiswa &m);
float rata2(mahasiswa m);

// Implementasi fungsi (dari guided2.cpp)
void inputMhs(mahasiswa &m) {
    cout << "Input NIM: "; 
    cin >> m.nim;
    cout << "Input Nilai 1: "; 
    cin >> m.nilai1;
    cout << "Input Nilai 2: "; 
    cin >> m.nilai2;
}

float rata2(mahasiswa m) {
    return (float) (m.nilai1 + m.nilai2) / 2;
}

// Fungsi main (dari main.cpp)
int main() {
    mahasiswa mhs;
    inputMhs(mhs);
    cout << "nilai rata Rata-rata adalah : " << rata2(mhs) << endl;
    system("pause");    
    return 0;
}
