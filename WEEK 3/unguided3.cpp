#include <iostream>

using namespace std;

void tampilkanMatriks(int matriks[3][3]);
void tukarNilaiViaPointer(int *ptrA, int *ptrB);

int main() {
   
    int matriksA[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    int matriksB[3][3] = {
        {99, 88, 77},
        {66, 55, 44},
        {33, 22, 11}
    };
    
    
    int *pointerA;
    int *pointerB;
    
    
    cout << "--- KONDISI AWAL ---" << endl;
    cout << "Matriks A:" << endl;
    tampilkanMatriks(matriksA);
    cout << "\nMatriks B:" << endl;
    tampilkanMatriks(matriksB);
    
   
    int baris, kolom;
    cout << "\nMasukkan posisi yang akan ditukar:" << endl;
    cout << "Baris (0-2): ";
    cin >> baris;
    cout << "Kolom (0-2): ";
    cin >> kolom;

    
    if (baris < 0 || baris > 2 || kolom < 0 || kolom > 2) {
        cout << "Posisi tidak valid! Program berhenti." << endl;
        return 1; // Keluar dari program karena error
    }
    
    
    pointerA = &matriksA[baris][kolom];
    pointerB = &matriksB[baris][kolom];
    
    cout << "\nMenukar nilai pada posisi [" << baris << "][" << kolom << "]..." << endl;
    cout << "Nilai awal: Matriks A = " << *pointerA << ", Matriks B = " << *pointerB << endl;
    
  
    tukarNilaiViaPointer(pointerA, pointerB);
    
  
    cout << "\n--- KONDISI AKHIR ---" << endl;
    cout << "Matriks A:" << endl;
    tampilkanMatriks(matriksA);
    cout << "\nMatriks B:" << endl;
    tampilkanMatriks(matriksB);
    
    return 0;
}


void tampilkanMatriks(int matriks[3][3]) {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matriks[i][j] << "\t";
        }
        cout << endl;
    }
}


void tukarNilaiViaPointer(int *ptrA, int *ptrB) {

    int temp = *ptrA;
    *ptrA = *ptrB;
    *ptrB = temp;
}