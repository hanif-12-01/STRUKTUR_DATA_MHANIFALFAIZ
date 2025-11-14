// UNGUIDED 3
// Program Stack untuk konversi bilangan desimal ke biner
// dan pengecekan kurung seimbang dalam ekspresi matematika

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
        cout << "[Stack Kosong]" << endl;
    } else {
        cout << "Isi Stack: ";
        for (int i = S.top; i >= 0; i--) {
            cout << S.data[i] << " ";
        }
        cout << endl;
    }
}

// Fungsi untuk mengkonversi desimal ke biner menggunakan stack
string decimalToBinary(int decimal) {
    Stack S;
    createStack(S);
    string biner = "";
    
    if (decimal == 0) {
        return "0";
    }
    
    cout << "\nProses konversi:" << endl;
    int temp = decimal;
    
    // Proses pembagian dan push sisa ke stack
    while (temp > 0) {
        int sisa = temp % 2;
        cout << temp << " / 2 = " << temp / 2 << " sisa " << sisa << endl;
        push(S, (sisa == 0) ? '0' : '1');
        temp = temp / 2;
    }
    
    cout << "\nPop dari stack untuk mendapatkan biner:" << endl;
    // Pop untuk mendapatkan urutan biner yang benar
    while (!isEmpty(S)) {
        char bit = pop(S);
        biner += bit;
        cout << bit;
    }
    cout << endl;
    
    return biner;
}

// Fungsi untuk mengkonversi desimal ke oktal menggunakan stack
string decimalToOctal(int decimal) {
    Stack S;
    createStack(S);
    string oktal = "";
    
    if (decimal == 0) {
        return "0";
    }
    
    cout << "\nProses konversi ke oktal:" << endl;
    int temp = decimal;
    
    while (temp > 0) {
        int sisa = temp % 8;
        cout << temp << " / 8 = " << temp / 8 << " sisa " << sisa << endl;
        push(S, '0' + sisa);
        temp = temp / 8;
    }
    
    cout << "\nPop dari stack untuk mendapatkan oktal:" << endl;
    while (!isEmpty(S)) {
        char digit = pop(S);
        oktal += digit;
        cout << digit;
    }
    cout << endl;
    
    return oktal;
}

// Fungsi untuk mengkonversi desimal ke heksadesimal menggunakan stack
string decimalToHex(int decimal) {
    Stack S;
    createStack(S);
    string hex = "";
    
    if (decimal == 0) {
        return "0";
    }
    
    cout << "\nProses konversi ke heksadesimal:" << endl;
    int temp = decimal;
    
    while (temp > 0) {
        int sisa = temp % 16;
        cout << temp << " / 16 = " << temp / 16 << " sisa " << sisa;
        
        if (sisa < 10) {
            push(S, '0' + sisa);
            cout << " (" << (char)('0' + sisa) << ")" << endl;
        } else {
            push(S, 'A' + (sisa - 10));
            cout << " (" << (char)('A' + (sisa - 10)) << ")" << endl;
        }
        temp = temp / 16;
    }
    
    cout << "\nPop dari stack untuk mendapatkan heksadesimal:" << endl;
    while (!isEmpty(S)) {
        char digit = pop(S);
        hex += digit;
        cout << digit;
    }
    cout << endl;
    
    return hex;
}

// Fungsi untuk mengecek apakah kurung dalam ekspresi seimbang
bool isBalancedParentheses(string expression) {
    Stack S;
    createStack(S);
    
    cout << "\nProses pengecekan:" << endl;
    for (int i = 0; i < expression.length(); i++) {
        char ch = expression[i];
        
        // Jika kurung buka, push ke stack
        if (ch == '(' || ch == '[' || ch == '{') {
            push(S, ch);
            cout << "Karakter '" << ch << "' -> Push ke stack" << endl;
        }
        // Jika kurung tutup, cek dengan top stack
        else if (ch == ')' || ch == ']' || ch == '}') {
            if (isEmpty(S)) {
                cout << "Karakter '" << ch << "' -> Stack kosong, TIDAK SEIMBANG!" << endl;
                return false;
            }
            
            char top = peek(S);
            cout << "Karakter '" << ch << "' -> Bandingkan dengan top stack '" << top << "'";
            
            if ((ch == ')' && top == '(') ||
                (ch == ']' && top == '[') ||
                (ch == '}' && top == '{')) {
                pop(S);
                cout << " -> COCOK! Pop dari stack" << endl;
            } else {
                cout << " -> TIDAK COCOK!" << endl;
                return false;
            }
        }
    }
    
    // Jika stack kosong, maka seimbang
    if (isEmpty(S)) {
        cout << "\nStack kosong -> Kurung SEIMBANG!" << endl;
        return true;
    } else {
        cout << "\nStack masih ada isi -> Kurung TIDAK SEIMBANG!" << endl;
        return false;
    }
}

int main() {
    int pilihan;
    
    cout << "==========================================" << endl;
    cout << "  PROGRAM STACK - APLIKASI PRAKTIS" << endl;
    cout << "==========================================" << endl;
    
    do {
        cout << "\n=== MENU ===" << endl;
        cout << "1. Konversi Desimal ke Biner" << endl;
        cout << "2. Konversi Desimal ke Oktal" << endl;
        cout << "3. Konversi Desimal ke Heksadesimal" << endl;
        cout << "4. Cek Kurung Seimbang dalam Ekspresi" << endl;
        cout << "0. Keluar" << endl;
        cout << "Pilihan: ";
        cin >> pilihan;
        cin.ignore();
        
        switch(pilihan) {
            case 1: {
                int desimal;
                cout << "\nMasukkan bilangan desimal: ";
                cin >> desimal;
                
                if (desimal < 0) {
                    cout << "Masukkan bilangan positif!" << endl;
                } else {
                    string biner = decimalToBinary(desimal);
                    cout << "\n=== HASIL ===" << endl;
                    cout << "Desimal: " << desimal << endl;
                    cout << "Biner  : " << biner << endl;
                }
                break;
            }
            case 2: {
                int desimal;
                cout << "\nMasukkan bilangan desimal: ";
                cin >> desimal;
                
                if (desimal < 0) {
                    cout << "Masukkan bilangan positif!" << endl;
                } else {
                    string oktal = decimalToOctal(desimal);
                    cout << "\n=== HASIL ===" << endl;
                    cout << "Desimal: " << desimal << endl;
                    cout << "Oktal  : " << oktal << endl;
                }
                break;
            }
            case 3: {
                int desimal;
                cout << "\nMasukkan bilangan desimal: ";
                cin >> desimal;
                
                if (desimal < 0) {
                    cout << "Masukkan bilangan positif!" << endl;
                } else {
                    string hex = decimalToHex(desimal);
                    cout << "\n=== HASIL ===" << endl;
                    cout << "Desimal       : " << desimal << endl;
                    cout << "Heksadesimal  : " << hex << endl;
                }
                break;
            }
            case 4: {
                string ekspresi;
                cout << "\nMasukkan ekspresi matematika: ";
                getline(cin, ekspresi);
                
                cout << "Ekspresi: " << ekspresi << endl;
                
                if (isBalancedParentheses(ekspresi)) {
                    cout << "\n✓ Kurung dalam ekspresi SEIMBANG" << endl;
                } else {
                    cout << "\n✗ Kurung dalam ekspresi TIDAK SEIMBANG" << endl;
                }
                
                cout << "\nContoh ekspresi seimbang:" << endl;
                cout << "  - (a + b) * c" << endl;
                cout << "  - {[a + (b * c)] / d}" << endl;
                cout << "  - ((a + b) * (c - d))" << endl;
                cout << "\nContoh ekspresi tidak seimbang:" << endl;
                cout << "  - (a + b * c" << endl;
                cout << "  - {[a + b)] * c}" << endl;
                cout << "  - ((a + b) * c))" << endl;
                break;
            }
            case 0:
                cout << "\nTerima kasih!" << endl;
                break;
            default:
                cout << "\nPilihan tidak valid!" << endl;
        }
    } while (pilihan != 0);
    
    cout << "\n==========================================" << endl;
    cout << "           PROGRAM SELESAI" << endl;
    cout << "==========================================" << endl;
    
    return 0;
}
