#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void append(Node*& head, int value) {
    Node* newNode = new Node();
    newNode->data = value;
    newNode->next = nullptr;
    
    if (head == nullptr) {
        head = newNode;
        return;
    }
    
    Node* temp = head;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    temp->next = newNode;
}

void displayList(Node* head) {
    Node* temp = head;
    cout << "Linked List yang dibuat: ";
    while (temp != nullptr) {
        cout << temp->data;
        if (temp->next != nullptr) {
            cout << " -> ";
        }
        temp = temp->next;
    }
    cout << " -> NULL" << endl;
}

int getLength(Node* head) {
    int count = 0;
    Node* temp = head;
    while (temp != nullptr) {
        count++;
        temp = temp->next;
    }
    return count;
}

Node* getNodeAt(Node* head, int index) {
    Node* temp = head;
    for (int i = 0; i < index && temp != nullptr; i++) {
        temp = temp->next;
    }
    return temp;
}

Node* binarySearch(Node* head, int key) {
    int left = 0;
    int right = getLength(head) - 1;
    int iterasi = 1;
    
    cout << "\nProses Pencarian:" << endl;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        Node* midNode = getNodeAt(head, mid);
        
        cout << "Iterasi " << iterasi << ": Mid = " << midNode->data 
             << " (indeks tengah)";
        
        if (midNode->data == key) {
            cout << " - DITEMUKAN!" << endl;
            return midNode;
        }
        else if (midNode->data < key) {
            cout << " -> Cari di bagian kanan" << endl;
            left = mid + 1;
        }
        else {
            cout << " -> Cari di bagian kiri" << endl;
            right = mid - 1;
        }
        
        iterasi++;
    }
    
    cout << "Tidak ada elemen tersisa" << endl;
    return nullptr;
}

int main() {
    Node* head = nullptr;
    int n, value, search;
    
    cout << "BINARY SEARCH PADA LINKED LIST" << endl;
    cout << "Masukkan jumlah elemen (minimal 5): ";
    cin >> n;
    
    cout << "Masukkan " << n << " elemen (harus terurut/ascending):" << endl;
    for (int i = 0; i < n; i++) {
        cout << "Elemen ke-" << (i+1) << ": ";
        cin >> value;
        append(head, value);
    }
    
    displayList(head);
    
    cout << "Mencari nilai: ";
    cin >> search;
    
    Node* result = binarySearch(head, search);
    
    cout << endl;
    if (result != nullptr) {
        cout << "Hasil: Nilai " << search << " DITEMUKAN pada linked list!" << endl;
        cout << "Alamat node: " << result << endl;
        cout << "Data node: " << result->data << endl;
        cout << "Node berikutnya: " << result->next << endl;
    } else {
        cout << "Hasil: Nilai " << search << " TIDAK DITEMUKAN dalam linked list!" << endl;
    }
    
    cout << "\nMencari nilai: ";
    cin >> search;
    
    result = binarySearch(head, search);
    
    cout << endl;
    if (result != nullptr) {
        cout << "Hasil: Nilai " << search << " DITEMUKAN pada linked list!" << endl;
        cout << "Alamat node: " << result << endl;
        cout << "Data node: " << result->data << endl;
        cout << "Node berikutnya: " << result->next << endl;
    } else {
        cout << "Hasil: Nilai " << search << " TIDAK DITEMUKAN dalam linked list!" << endl;
    }
    
    return 0;
}
