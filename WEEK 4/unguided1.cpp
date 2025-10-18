#include <iostream>
#include <string>
#include <sstream>
#include <vector>
using namespace std;

int sequentialSearch(vector<string> words, string target) {
    for (int i = 0; i < words.size(); i++) {
        if (words[i] == target) {
            return i;
        }
    }
    return -1;
}

int main() {
    string kalimat, kataDicari;
    
    cout << "Masukkan kalimat: ";
    getline(cin, kalimat);
    
    cout << "Masukkan kata yang ingin dicari: ";
    cin >> kataDicari;
    
    vector<string> words;
    stringstream ss(kalimat);
    string word;
    
    while (ss >> word) {
        words.push_back(word);
    }
    
    int hasil = sequentialSearch(words, kataDicari);
    
    if (hasil != -1) {
        cout << "\nKata \"" << kataDicari << "\" ditemukan pada indeks ke-" << hasil << endl;
    } else {
        cout << "\nKata \"" << kataDicari << "\" tidak ditemukan dalam kalimat." << endl;
    }
    
    return 0;
}
