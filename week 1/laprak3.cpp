#include <iostream>
using namespace std;
int main() {
    int number;
    cout << "Masukkan angka: ";
    cin >> number;
    int N = number;

    int i = N;

    // Perulangan utama
    while (i >= 1) {

        // Loop untuk mencetak spasi di awal 
        int s = 1;
        while (s <= N - i) {
            cout << " ";
            s++;
        }
        

        // Sisi Kiri
        int j = i;
        while (j >= 1) {
            std::cout << j;
            j--;
        }

        // Tengah
        cout << "*";

        // Sisi Kanan
        int k = 1;
        while (k <= i) {
            std::cout << k;
            k++;
        }

        cout << std::endl;
        i--;
    }

    int s = 1;
    while (s <= N) {
        std::cout << " ";
        s++;
    }
    
    
    // Bintang terakhir
    cout << "*" << std::endl;

    return 0;
}