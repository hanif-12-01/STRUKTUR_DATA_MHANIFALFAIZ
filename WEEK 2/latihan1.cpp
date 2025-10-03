#include <iostream>
using namespace std;

void jumlahMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]);
void kurangMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]);
void kaliMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]);
void tampilMatriks(int matriks[][3]);

int main() {
    int matriksA[3][3] = {
        {7, 12, 22},
        {31, 6, 41},
        {15, 19, 36}
    };
    
    int matriksB[3][3] = {
        {11, 34, 7},
        {3, 25, 41},
        {5, 18, 33}
    };
    
    int hasil[3][3];
    int pilihan;
    
    do {
        cout << "\n--- Menu Program Matriks ---" << endl;
        cout << "1. Penjumlahan matriks" << endl;
        cout << "2. Pengurangan matriks" << endl;
        cout << "3. Perkalian matriks" << endl;
        cout << "4. Keluar" << endl;
        cout << "Pilih operasi (1-4): ";
        cin >> pilihan;
        
        switch(pilihan) {
            case 1:
                cout << "\nMatriks A:" << endl;
                tampilMatriks(matriksA);
                cout << "\nMatriks B:" << endl;
                tampilMatriks(matriksB);
                cout << "\nHasil Penjumlahan:" << endl;
                jumlahMatriks(matriksA, matriksB, hasil);
                tampilMatriks(hasil);
                break;
                
            case 2:
                cout << "\nMatriks A:" << endl;
                tampilMatriks(matriksA);
                cout << "\nMatriks B:" << endl;
                tampilMatriks(matriksB);
                cout << "\nHasil Pengurangan:" << endl;
                kurangMatriks(matriksA, matriksB, hasil);
                tampilMatriks(hasil);
                break;
                
            case 3:
                cout << "\nMatriks A:" << endl;
                tampilMatriks(matriksA);
                cout << "\nMatriks B:" << endl;
                tampilMatriks(matriksB);
                cout << "\nHasil Perkalian:" << endl;
                kaliMatriks(matriksA, matriksB, hasil);
                tampilMatriks(hasil);
                break;
                
            case 4:
                cout << "Program selesai!" << endl;
                break;
                
            default:
                cout << "Pilihan tidak valid!" << endl;
        }
    } while(pilihan != 4);
    
    return 0;
}

void jumlahMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]) {
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            hasil[i][j] = matriksA[i][j] + matriksB[i][j];
        }
    }
}

void kurangMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]) {
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            hasil[i][j] = matriksA[i][j] - matriksB[i][j];
        }
    }
}

void kaliMatriks(int matriksA[][3], int matriksB[][3], int hasil[][3]) {
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            hasil[i][j] = 0;
            for(int k = 0; k < 3; k++) {
                hasil[i][j] += matriksA[i][k] * matriksB[k][j];
            }
        }
    }
}
void tampilMatriks(int matriks[][3]) {
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            cout << matriks[i][j] << "\t";
        }
        cout << endl;
    }
}
