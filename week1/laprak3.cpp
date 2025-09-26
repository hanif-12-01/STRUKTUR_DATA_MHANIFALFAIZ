#include <iostream>

int main() {
    int number;
    std::cout << "Masukkan angka: ";
    std::cin >> number;
    int N = number;

    int i = N;

    // Perulangan utama
    while (i >= 1) {

        //Loop untuk mencetak spasi di awal
        int s = 1;
        while (s <= N - i) {
            std::cout << " ";
            s++;
        }
        

        // Sisi Kiri
        int j = i;
        while (j >= 1) {
            std::cout << j;
            j--;
        }

        // Tengah
        std::cout << "*";

        // Sisi Kanan
        int k = 1;
        while (k <= i) {
            std::cout << k;
            k++;
        }

        std::cout << std::endl;
        i--;
    }

    int s = 1;
    while (s <= N) {
        std::cout << " ";
        s++;
    }
    
    
    // Bintang terakhir
    std::cout << "*" << std::endl;

    return 0;
}