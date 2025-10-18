#include <iostream>
#include <algorithm>
using namespace std;

int binarySearch(int arr[], int n, int target) {
    int left = 0;
    int right = n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    
    return -1;
}

int main() {
    int n, angkaDicari;
    
    cout << "Masukkan jumlah elemen array: ";
    cin >> n;
    
    int arr[n];
    
    cout << "Masukkan " << n << " angka (dipisahkan dengan spasi): ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    sort(arr, arr + n);
    
    cout << "\nArray setelah diurutkan: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    cout << "\nMasukkan angka yang ingin dicari: ";
    cin >> angkaDicari;
    
    int hasil = binarySearch(arr, n, angkaDicari);
    
    if (hasil != -1) {
        cout << "\nAngka " << angkaDicari << " ditemukan pada indeks ke-" << hasil << endl;
    } else {
        cout << "\nAngka " << angkaDicari << " tidak ditemukan dalam array." << endl;
    }
    
    return 0;
}
