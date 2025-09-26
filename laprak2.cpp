#include <iostream>
#include <string>
#include <vector>

using namespace std;

void angkaKeTeks() {
    int input;
    cout << "masukkan angka 1-100: ";
    cin >> input;

    if (input < 1 || input > 100) {
        cout << "mohon masukkan angka 1-100" << endl;
    } else {
        vector<string> satuan = {"nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"};
        string hasil;

        if (input < 12) {
            hasil = satuan[input];
        } else if (input < 20) {
            hasil = satuan[input % 10] + " belas";
        } else if (input < 100) {
            int puluhan = input / 10;
            int sisa = input % 10;
            if (sisa == 0) {
                hasil = satuan[puluhan] + " puluh";
            } else {
                hasil = satuan[puluhan] + " puluh " + satuan[sisa];
            }
        } else {
            hasil = "seratus";
        }
        cout << hasil << endl;
    }
}

int main() {
    angkaKeTeks();
    return 0;
}
