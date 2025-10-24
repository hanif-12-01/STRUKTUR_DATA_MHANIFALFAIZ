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

Node* linearSearch(Node* head, int key) {
    Node* current = head;
    int position = 1;
    
    cout << "\nProses Pencarian:" << endl;
    
    while (current != nullptr) {
        cout << "Memeriksa node " << position << ": " << current->data;
        
        if (current->data == key) {
            cout << " (SAMA) - DITEMUKAN!" << endl;
            return current;
        }
        
        cout << " (tidak sama)" << endl;
        current = current->next;
        position++;
    }
    
    cout << "Tidak ada node lagi yang tersisa" << endl;
    return nullptr;
}

int main() {
    Node* head = nullptr;
    int n, value, search;
    
    cout << "LINEAR SEARCH PADA LINKED LIST" << endl;
    cout << "Masukkan jumlah elemen (minimal 3): ";
    cin >> n;
    
    cout << "Masukkan " << n << " elemen:" << endl;
    for (int i = 0; i < n; i++) {
        cout << "Elemen ke-" << (i+1) << ": ";
        cin >> value;
        append(head, value);
    }
    
    displayList(head);
    
    cout << "Mencari nilai: ";
    cin >> search;
    
    Node* result = linearSearch(head, search);
    
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
    
    result = linearSearch(head, search);
    
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
