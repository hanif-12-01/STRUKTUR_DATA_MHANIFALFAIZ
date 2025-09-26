#include <iostream>
using namespace std;
void Kalkulator() {
    int a, b;
    char op;
    cout << "Masukkan angka pertama: ";
    cin >> a;
    cout << "Masukkan operator (+, -, *, /): ";
    cin >> op;
    cout << "Masukkan angka kedua: ";
    cin >> b;
    switch (op) {  
        case '+':
            cout << "Hasil: " << a + b << endl;
            break;
        case '-':
            cout << "Hasil: " << a - b << endl;
            break;
        case '*':
            cout << "Hasil: " << a * b << endl;
            break;
        case '/':
            if (b != 0) {
                cout << "Hasil: " << a / b << endl;
            } else {
                cout << "Error: pembagian dengan 0 tidak terdefinisi" << endl;
            }
            break;
        default:
            cout << "Operator tidak valid!" << endl;
            break;
        }
}
int main() {
    Kalkulator();
    return 0;
}
