#include <iostream>
#include <string>
using namespace std;

struct DataMahasiswa {
    string nama,nim,mataKuliah,kodeMK;
    float uts, uas, tugas;
    float nilaiAkhir;
    
};


float hitungNilaiAkhir(float uts, float uas, float tugas) {
    return (0.3 * uts) + (0.4 * uas) + (0.3 * tugas);
}

int main() {
    DataMahasiswa mahasiswa[10];
    int jumlah;
    
    cout << "Masukkan jumlah mahasiswa (max. 10): ";
    cin >> jumlah;
    
    if (jumlah > 10 || jumlah < 1) {
        cout << "Jumlah mahasiswa harus antara 1-10!" << endl;
        return 1;
    }
    
    // Input data mahasiswa
    for (int i = 0; i < jumlah; i++) {
        cout << "\nData Mahasiswa ke-" << (i + 1) << endl;
        cout << "Masukkan Nama: ";
        cin >> mahasiswa[i].nama;
        cout << "Masukkan NIM: ";
        cin >> mahasiswa[i].nim;
        cout << "Masukkan Nilai UTS: ";
        cin >> mahasiswa[i].uts;
        cout << "Masukkan Nilai UAS: ";
        cin >> mahasiswa[i].uas;
        cout << "Masukkan Nilai Tugas: ";
        cin >> mahasiswa[i].tugas;
        cout << "Masukkan Mata Kuliah: ";
        cin >> mahasiswa[i].mataKuliah;
        cout << "Masukkan Kode MK: ";
        cin >> mahasiswa[i].kodeMK;
        // Hitung nilai akhir
        mahasiswa[i].nilaiAkhir = hitungNilaiAkhir(mahasiswa[i].uts, mahasiswa[i].uas, mahasiswa[i].tugas);
    }
    
    // Tampilkan data mahasiswa
    cout << "\n=== Data Mahasiswa ===" << endl;
    for (int i = 0; i < jumlah; i++) {
        cout << "\nMahasiswa ke-" << (i + 1) << endl;
        cout << "Nama: " << mahasiswa[i].nama << endl;
        cout << "NIM: " << mahasiswa[i].nim << endl;
        cout << "UTS: " << mahasiswa[i].uts << endl;
        cout << "UAS: " << mahasiswa[i].uas << endl;
        cout << "Tugas: " << mahasiswa[i].tugas << endl;
        cout << "Nilai Akhir: " << mahasiswa[i].nilaiAkhir << endl;
        cout << "Mata Kuliah: " << mahasiswa[i].mataKuliah << endl;
        cout << "Kode MK: " << mahasiswa[i].kodeMK << endl;
    }
    
    return 0;
}