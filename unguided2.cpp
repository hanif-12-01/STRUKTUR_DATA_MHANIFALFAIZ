// UNGUIDED 2
// Program Stack untuk membalik urutan kata dalam kalimat
// Menggunakan stack untuk reverse string

#include <iostream>
#include <string>
using namespace std;

#define MAX 100

struct Stack {
    char data[MAX];
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
void push(Stack &S, char c) {
    if (!isFull(S)) {
        S.top++;
        S.data[S.top] = c;
    } else {
        cout << "Stack penuh!" << endl;
    }
}

// Fungsi untuk menghapus dan mengembalikan data dari stack (pop)
char pop(Stack &S) {
    if (!isEmpty(S)) {
        char c = S.data[S.top];
        S.top--;
        return c;
    }
    return '\0';
}

// Fungsi untuk melihat data teratas tanpa menghapus
char peek(Stack S) {
    if (!isEmpty(S)) {
        return S.data[S.top];
    }
    return '\0';
}

// Fungsi untuk menampilkan isi stack
void viewStack(Stack S) {
    if (isEmpty(S)) {
        cout << "Stack kosong!" << endl;
    } else {
        cout << "Isi Stack (dari atas ke bawah): ";
        for (int i = S.top; i >= 0; i--) {
            cout << S.data[i];
        }
        cout << endl;
    }
}

// Fungsi untuk membalik string menggunakan stack
string reverseString(string str) {
    Stack S;
    createStack(S);
    string hasil = "";
    
    // Push semua karakter ke stack
    for (int i = 0; i < str.length(); i++) {
        push(S, str[i]);
    }
    
    // Pop semua karakter untuk mendapatkan urutan terbalik
    while (!isEmpty(S)) {
        hasil += pop(S);
    }
    
    return hasil;
}

// Fungsi untuk membalik setiap kata dalam kalimat
string reverseWords(string kalimat) {
    Stack S;
    createStack(S);
    string hasil = "";
    string kata = "";
    
    for (int i = 0; i < kalimat.length(); i++) {
        if (kalimat[i] == ' ') {
            // Jika menemui spasi, balik kata yang sudah dikumpulkan
            while (!isEmpty(S)) {
                kata += pop(S);
            }
            hasil += kata + " ";
            kata = "";
        } else {
            // Push karakter ke stack
            push(S, kalimat[i]);
        }
    }
    
    // Balik kata terakhir
    while (!isEmpty(S)) {
        kata += pop(S);
    }
    hasil += kata;
    
    return hasil;
}

// Fungsi untuk mengecek apakah string adalah palindrome
bool isPalindrome(string str) {
    Stack S;
    createStack(S);
    
    // Konversi ke lowercase dan hapus spasi
    string cleaned = "";
    for (int i = 0; i < str.length(); i++) {
        if (str[i] != ' ') {
            if (str[i] >= 'A' && str[i] <= 'Z') {
                cleaned += str[i] + 32; // konversi ke lowercase
            } else {
                cleaned += str[i];
            }
        }
    }
    
    // Push setengah karakter ke stack
    int len = cleaned.length();
    for (int i = 0; i < len / 2; i++) {
        push(S, cleaned[i]);
    }
    
    // Bandingkan dengan setengah kedua
    int start = (len % 2 == 0) ? len / 2 : (len / 2) + 1;
    for (int i = start; i < len; i++) {
        if (isEmpty(S) || pop(S) != cleaned[i]) {
            return false;
        }
    }
    
    return true;
}

int main() {
    Stack S;
    string input;
    int pilihan;
    
    cout << "=====================================" << endl;
    cout << "  PROGRAM STACK - REVERSE STRING" << endl;
    cout << "=====================================" << endl;
    
    do {
        cout << "\n=== MENU ===" << endl;
        cout << "1. Balik seluruh kalimat" << endl;
        cout << "2. Balik setiap kata dalam kalimat" << endl;
        cout << "3. Cek Palindrome" << endl;
        cout << "4. Demo Stack Character" << endl;
        cout << "0. Keluar" << endl;
        cout << "Pilihan: ";
        cin >> pilihan;
        cin.ignore(); // membersihkan buffer
        
        switch(pilihan) {
            case 1: {
                cout << "\nMasukkan kalimat: ";
                getline(cin, input);
                cout << "Kalimat asli    : " << input << endl;
                cout << "Kalimat terbalik: " << reverseString(input) << endl;
                break;
            }
            case 2: {
                cout << "\nMasukkan kalimat: ";
                getline(cin, input);
                cout << "Kalimat asli           : " << input << endl;
                cout << "Setiap kata terbalik   : " << reverseWords(input) << endl;
                break;
            }
            case 3: {
                cout << "\nMasukkan kata/kalimat: ";
                getline(cin, input);
                cout << "Input: " << input << endl;
                if (isPalindrome(input)) {
                    cout << "Hasil: \"" << input << "\" adalah PALINDROME" << endl;
                } else {
                    cout << "Hasil: \"" << input << "\" BUKAN palindrome" << endl;
                }
                break;
            }
            case 4: {
                createStack(S);
                cout << "\n--- Demo Stack Character ---" << endl;
                string demo = "STACK";
                cout << "String: " << demo << endl;
                
                cout << "\nProses PUSH:" << endl;
                for (int i = 0; i < demo.length(); i++) {
                    push(S, demo[i]);
                    cout << "Push '" << demo[i] << "' -> ";
                    viewStack(S);
                }
                
                cout << "\nProses POP:" << endl;
                while (!isEmpty(S)) {
                    char c = peek(S);
                    cout << "Peek: '" << c << "' -> ";
                    viewStack(S);
                    pop(S);
                    cout << "Setelah Pop -> ";
                    viewStack(S);
                    cout << endl;
                }
                break;
            }
            case 0:
                cout << "\nTerima kasih!" << endl;
                break;
            default:
                cout << "\nPilihan tidak valid!" << endl;
        }
    } while (pilihan != 0);
    
    cout << "\n=====================================" << endl;
    cout << "        PROGRAM SELESAI" << endl;
    cout << "=====================================" << endl;
    
    return 0;
}
