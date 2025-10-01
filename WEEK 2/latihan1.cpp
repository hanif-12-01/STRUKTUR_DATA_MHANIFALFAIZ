/*
=======================================================================
    PROGRAM OPERASI MATRIKS 3x3 - STRUKTUR DATA
    Nama    : M. Hanif Al Faiz
    NIM     : S1IF-11-01
    
    DOKUMENTASI FUNGSI DAN COMMAND:
=======================================================================
*/

#include <iostream>
#include <string>
using namespace std;

/*
=======================================================================
    FUNGSI: tampilkanMatriks()
    KEGUNAAN: Menampilkan isi matriks 3x3 dalam format yang rapi
    PARAMETER: int mat[3][3] - matriks yang akan ditampilkan
    COMMAND: tampilkanMatriks(namaMatriks);
    CONTOH OUTPUT:
        1    2    3
        4    5    6
        7    8    9
=======================================================================
*/
void tampilkanMatriks(int mat[3][3]) {
    for (int i = 0; i < 3; i++) {        // Loop untuk baris
        for (int j = 0; j < 3; j++) {    // Loop untuk kolom
            cout << mat[i][j] << "\t";   // Print elemen dengan tab spacing
        }
        cout << endl;                    // Pindah ke baris baru
    }
}

/*
=======================================================================
    FUNGSI: inputMatriks()
    KEGUNAAN: Meminta user untuk memasukkan nilai-nilai matriks 3x3
    PARAMETER: 
        - int mat[3][3]: matriks yang akan diisi
        - string namaMatriks: nama matriks (A atau B)
    COMMAND: inputMatriks(matriksA, "Matriks A");
    CONTOH PROMPT:
        Masukkan elemen Matriks A (3x3):
        Elemen [0][0]: 1
        Elemen [0][1]: 2
        ...dst
=======================================================================
*/
void inputMatriks(int mat[3][3], string namaMatriks) {
    cout << "\nMasukkan elemen " << namaMatriks << " (3x3):" << endl;
    for (int i = 0; i < 3; i++) {        // Loop untuk baris
        for (int j = 0; j < 3; j++) {    // Loop untuk kolom
            cout << "Elemen [" << i << "][" << j << "]: ";
            cin >> mat[i][j];            // Input nilai dari user
        }
    }
}

/*
=======================================================================
    FUNGSI: jumlahMatriks()
    KEGUNAAN: Melakukan operasi penjumlahan dua matriks 3x3
    RUMUS: C[i][j] = A[i][j] + B[i][j]
    PARAMETER:
        - int matA[3][3]: matriks pertama
        - int matB[3][3]: matriks kedua
        - int hasil[3][3]: matriks hasil penjumlahan
    COMMAND: jumlahMatriks(matriksA, matriksB, hasil);
    CONTOH: [1 2] + [5 6] = [6 8]
            [3 4]   [7 8]   [10 12]
=======================================================================
*/
void jumlahMatriks(int matA[3][3], int matB[3][3], int hasil[3][3]) {
    for (int i = 0; i < 3; i++) {        // Loop untuk baris
        for (int j = 0; j < 3; j++) {    // Loop untuk kolom
            hasil[i][j] = matA[i][j] + matB[i][j];  // Penjumlahan elemen
        }
    }
}   

/*
=======================================================================
    FUNGSI: kurangMatriks()
    KEGUNAAN: Melakukan operasi pengurangan dua matriks 3x3
    RUMUS: C[i][j] = A[i][j] - B[i][j]
    PARAMETER:
        - int matA[3][3]: matriks pertama (pengurang)
        - int matB[3][3]: matriks kedua (pengurang)
        - int hasil[3][3]: matriks hasil pengurangan
    COMMAND: kurangMatriks(matriksA, matriksB, hasil);
    CONTOH: [5 6] - [1 2] = [4 4]
            [7 8]   [3 4]   [4 4]
=======================================================================
*/
void kurangMatriks(int matA[3][3], int matB[3][3], int hasil[3][3]) {
    for (int i = 0; i < 3; i++) {        // Loop untuk baris
        for (int j = 0; j < 3; j++) {    // Loop untuk kolom
            hasil[i][j] = matA[i][j] - matB[i][j];  // Pengurangan elemen
        }
    }
}

/*
=======================================================================
    FUNGSI: kaliMatriks()
    KEGUNAAN: Melakukan operasi perkalian dua matriks 3x3
    RUMUS: C[i][j] = Σ(A[i][k] * B[k][j]) untuk k = 0 sampai 2
    PARAMETER:
        - int matA[3][3]: matriks pertama
        - int matB[3][3]: matriks kedua
        - int hasil[3][3]: matriks hasil perkalian
    COMMAND: kaliMatriks(matriksA, matriksB, hasil);
    CONTOH: [1 2] × [5 6] = [19 22]
            [3 4]   [7 8]   [43 50]
    PENJELASAN: hasil[0][0] = (1×5)+(2×7) = 5+14 = 19
=======================================================================
*/
void kaliMatriks(int matA[3][3], int matB[3][3], int hasil[3][3]) {
    for (int i = 0; i < 3; i++) {        // Loop untuk baris hasil
        for (int j = 0; j < 3; j++) {    // Loop untuk kolom hasil
            hasil[i][j] = 0;             // Inisialisasi dengan 0
            for (int k = 0; k < 3; k++) { // Loop untuk perkalian dot product
                hasil[i][j] += matA[i][k] * matB[k][j];  // Akumulasi perkalian
            }
        }
    }
}

/*
=======================================================================
    FUNGSI UTAMA: main()
    KEGUNAAN: Mengontrol alur program dan menu interaktif
    
    VARIABEL YANG DIGUNAKAN:
    - int matriksA[3][3]: Menyimpan matriks pertama
    - int matriksB[3][3]: Menyimpan matriks kedua  
    - int hasil[3][3]: Menyimpan hasil operasi matriks
    - int pilihan: Menyimpan pilihan menu operasi (1-5)
    - int pilihanInput: Menyimpan pilihan cara input (1-2)
    
    COMMAND UNTUK MENJALANKAN PROGRAM:
    1. Kompilasi: g++ Latihan1.cpp -o Latihan1.exe
    2. Jalankan: .\Latihan1.exe
    
    MENU PROGRAM:
    1. Penjumlahan matriks   -> Memanggil jumlahMatriks()
    2. Pengurangan matriks   -> Memanggil kurangMatriks()
    3. Perkalian matriks     -> Memanggil kaliMatriks()
    4. Ganti input matriks   -> Reset/ganti nilai matriks
    5. Keluar               -> Keluar dari program
=======================================================================
*/
int main() {
    // Deklarasi variabel untuk menyimpan matriks dan pilihan user
    int matriksA[3][3];      // Matriks pertama (A)
    int matriksB[3][3];      // Matriks kedua (B)
    int hasil[3][3];         // Matriks hasil operasi
    int pilihan;             // Pilihan menu operasi (1-5)
    int pilihanInput;        // Pilihan cara input matriks (1-2)
    
    // TAHAP 1: Pilihan cara input matriks
    cout << "=== PROGRAM OPERASI MATRIKS 3x3 ===" << endl;
    cout << "Pilih cara input matriks:" << endl;
    cout << "1. Gunakan matriks default (sesuai soal)" << endl;
    cout << "2. Input matriks sendiri" << endl;
    cout << "Pilihan (1-2): ";
    cin >> pilihanInput;
    
    if (pilihanInput == 1) {
        // Inisialisasi matriks A dan B sesuai soal
        int defaultA[3][3] = {
            {7, 12, 22},
            {31, 6, 41},
            {15, 19, 36}
        };
        
        int defaultB[3][3] = {
            {11, 34, 7},
            {3, 25, 41},
            {5, 18, 33}
        };
        
        // Copy matriks default
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                matriksA[i][j] = defaultA[i][j];
                matriksB[i][j] = defaultB[i][j];
            }
        }
        
        cout << "\nMatriks default telah dimuat!" << endl;
    } else {
        // Input matriks dari user
        inputMatriks(matriksA, "Matriks A");
        inputMatriks(matriksB, "Matriks B");
        cout << "\nMatriks berhasil diinput!" << endl;
    }
    
    /*
    =======================================================================
        TAHAP 2: MENU PROGRAM UTAMA (DO-WHILE LOOP)
        
        KEGUNAAN DO-WHILE:
        - Loop akan dijalankan minimal 1 kali
        - Menu akan terus muncul sampai user memilih "Keluar" (pilihan 5)
        - Kondisi dicek SETELAH eksekusi, bukan sebelum
        
        STRUKTUR MENU:
        1. Penjumlahan matriks   -> case 1
        2. Pengurangan matriks   -> case 2  
        3. Perkalian matriks     -> case 3
        4. Ganti input matriks   -> case 4
        5. Keluar               -> case 5 (keluar dari loop)
    =======================================================================
    */
    do {
        // Tampilkan menu program
        cout << "\n--- Menu Program Matriks ---" << endl;
        cout << "1. Penjumlahan matriks" << endl;
        cout << "2. Pengurangan matriks" << endl;
        cout << "3. Perkalian matriks" << endl;
        cout << "4. Ganti input matriks" << endl;
        cout << "5. Keluar" << endl;
        cout << "Pilih operasi (1-5): ";
        cin >> pilihan;                    // Input pilihan dari user
        
        // SWITCH-CASE untuk menangani pilihan menu
        switch(pilihan) {
            /*
            ===============================================================
                CASE 1: PENJUMLAHAN MATRIKS
                COMMAND: Pilih menu 1
                PROSES: 
                1. Tampilkan matriks A dan B
                2. Panggil fungsi jumlahMatriks()
                3. Tampilkan hasil penjumlahan
                RUMUS: C[i][j] = A[i][j] + B[i][j]
            ===============================================================
            */
            case 1:
                cout << "\n=== PENJUMLAHAN MATRIKS ===" << endl;
                cout << "Matriks A:" << endl;
                tampilkanMatriks(matriksA);        // Tampilkan matriks A
                cout << "\nMatriks B:" << endl;
                tampilkanMatriks(matriksB);        // Tampilkan matriks B
                
                jumlahMatriks(matriksA, matriksB, hasil);  // Proses penjumlahan
                cout << "\nHasil A + B:" << endl;
                tampilkanMatriks(hasil);           // Tampilkan hasil
                break;
                
            /*
            ===============================================================
                CASE 2: PENGURANGAN MATRIKS
                COMMAND: Pilih menu 2
                PROSES:
                1. Tampilkan matriks A dan B
                2. Panggil fungsi kurangMatriks()
                3. Tampilkan hasil pengurangan
                RUMUS: C[i][j] = A[i][j] - B[i][j]
            ===============================================================
            */
            case 2:
                cout << "\n=== PENGURANGAN MATRIKS ===" << endl;
                cout << "Matriks A:" << endl;
                tampilkanMatriks(matriksA);        // Tampilkan matriks A
                cout << "\nMatriks B:" << endl;
                tampilkanMatriks(matriksB);        // Tampilkan matriks B
                
                kurangMatriks(matriksA, matriksB, hasil);  // Proses pengurangan
                cout << "\nHasil A - B:" << endl;
                tampilkanMatriks(hasil);           // Tampilkan hasil
                break;
                
            /*
            ===============================================================
                CASE 3: PERKALIAN MATRIKS
                COMMAND: Pilih menu 3
                PROSES:
                1. Tampilkan matriks A dan B
                2. Panggil fungsi kaliMatriks()
                3. Tampilkan hasil perkalian
                RUMUS: C[i][j] = Σ(A[i][k] × B[k][j]) untuk k=0 sampai 2
            ===============================================================
            */
            case 3:
                cout << "\n=== PERKALIAN MATRIKS ===" << endl;
                cout << "Matriks A:" << endl;
                tampilkanMatriks(matriksA);        // Tampilkan matriks A
                cout << "\nMatriks B:" << endl;
                tampilkanMatriks(matriksB);        // Tampilkan matriks B
                
                kaliMatriks(matriksA, matriksB, hasil);    // Proses perkalian
                cout << "\nHasil A × B:" << endl;
                tampilkanMatriks(hasil);           // Tampilkan hasil
                break;
                
            /*
            ===============================================================
                CASE 4: GANTI INPUT MATRIKS
                COMMAND: Pilih menu 4
                PROSES:
                1. Beri pilihan input ulang (default atau manual)
                2. Reset nilai matriks A dan B
                3. Kembali ke menu utama dengan matriks baru
            ===============================================================
            */
            case 4:
                cout << "\n=== GANTI INPUT MATRIKS ===" << endl;
                cout << "Pilih cara input matriks:" << endl;
                cout << "1. Gunakan matriks default (sesuai soal)" << endl;
                cout << "2. Input matriks sendiri" << endl;
                cout << "Pilihan (1-2): ";
                cin >> pilihanInput;
                
                if (pilihanInput == 1) {
                    // Reset ke matriks default
                    int defaultA[3][3] = {
                        {7, 12, 22},
                        {31, 6, 41},
                        {15, 19, 36}
                    };
                    
                    int defaultB[3][3] = {
                        {11, 34, 7},
                        {3, 25, 41},
                        {5, 18, 33}
                    };
                    
                    for (int i = 0; i < 3; i++) {
                        for (int j = 0; j < 3; j++) {
                            matriksA[i][j] = defaultA[i][j];
                            matriksB[i][j] = defaultB[i][j];
                        }
                    }
                    cout << "Matriks default telah dimuat ulang!" << endl;
                } else {
                    inputMatriks(matriksA, "Matriks A");
                    inputMatriks(matriksB, "Matriks B");
                    cout << "Matriks baru berhasil diinput!" << endl;
                }
                break;
                
            /*
            ===============================================================
                CASE 5: KELUAR DARI PROGRAM
                COMMAND: Pilih menu 5
                PROSES:
                1. Tampilkan pesan terima kasih
                2. Keluar dari do-while loop
                3. Mengakhiri program
            ===============================================================
            */
            case 5:
                cout << "Terima kasih! Program selesai." << endl;
                break;
                
            /*
            ===============================================================
                DEFAULT CASE: HANDLE INPUT INVALID
                COMMAND: Input selain 1-5
                PROSES: Tampilkan pesan error dan kembali ke menu
            ===============================================================
            */
            default:
                cout << "Pilihan tidak valid! Silakan pilih 1-5." << endl;
                break;
        }
        
    } while(pilihan != 5);  // Loop berlanjut selama pilihan bukan 5 (Keluar)
    
    /*
    =======================================================================
        AKHIR PROGRAM
        return 0: Menandakan program berakhir dengan sukses
    =======================================================================
    */
    return 0;
}

/*
=======================================================================
    RINGKASAN COMMAND DAN KEGUNAAN PROGRAM:
    
    COMMAND KOMPILASI DAN EKSEKUSI:
    1. g++ Latihan1.cpp -o Latihan1.exe    -> Kompilasi program
    2. .\Latihan1.exe                      -> Jalankan program
    
    FUNGSI-FUNGSI UTAMA:
    1. tampilkanMatriks()  -> Menampilkan matriks dalam format rapi
    2. inputMatriks()      -> Input matriks dari user
    3. jumlahMatriks()     -> Penjumlahan dua matriks
    4. kurangMatriks()     -> Pengurangan dua matriks  
    5. kaliMatriks()       -> Perkalian dua matriks
    
    MENU PROGRAM:
    1. Penjumlahan matriks -> A + B
    2. Pengurangan matriks -> A - B
    3. Perkalian matriks   -> A × B
    4. Ganti input matriks -> Reset nilai matriks
    5. Keluar             -> Mengakhiri program
    
    FITUR KHUSUS:
    - Input fleksibel (default atau manual)
    - Menu interaktif dengan do-while loop
    - Error handling untuk input invalid
    - Format output yang rapi dan mudah dibaca
=======================================================================
*/
