#include <iostream>
using namespace std;

void hitungPersegiPanjang(int *ptrPanjang, int *ptrLebar, int *ptrLuas, int *ptrKeliling) {
    *ptrLuas = (*ptrPanjang) * (*ptrLebar);
    *ptrKeliling = 2 * (*ptrPanjang + *ptrLebar);
}

int main() {
    int panjang = 10;
    int lebar = 5;
    int luas = 0;
    
    int *ptrPanjang = &panjang;
    int *ptrLebar = &lebar;
    int *ptrLuas = &luas;
    int keliling;
    int *ptrKeliling = &keliling;
    cout << "--- Nilai Awal ---" << endl;
    cout << "Panjang: " << panjang << endl;
    cout << "Lebar: " << lebar << endl;
    cout << endl;
    
    hitungPersegiPanjang(ptrPanjang, ptrLebar, ptrLuas, ptrKeliling);
    
    cout << "--- Hasil Perhitungan ---" << endl;
    cout << "Luas Persegi Panjang: " << *ptrLuas << endl;
    cout << "Keliling Persegi Panjang: " << *ptrKeliling << endl;
    cout << endl;
    
    *ptrPanjang = 12;
    *ptrLebar = 6;
    
    hitungPersegiPanjang(ptrPanjang, ptrLebar, ptrLuas, ptrKeliling);
    cout << "--- Nilai Setelah Diubah Melalui Pointer ---" << endl;
    cout << "Panjang Baru: " << *ptrPanjang << endl;
    cout << "Lebar Baru: " << *ptrLebar << endl;
    cout << "Luas Baru: " << *ptrLuas << endl;
    cout << "Keliling Baru: " << *ptrKeliling << endl;
    
    return 0;
}
