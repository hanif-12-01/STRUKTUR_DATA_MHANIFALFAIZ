#include <iostream>
#include <string>
using namespace std;

struct Node {
    string nama;
    Node* next;
};

class SinglyLinkedList {
private:
    Node* head;

public:
    SinglyLinkedList() {
        head = NULL;
    }

    void insertAkhir(string nama) {
        Node* newNode = new Node();
        newNode->nama = nama;
        newNode->next = NULL;

        if (head == NULL) {
            head = newNode;
        } else {
            Node* temp = head;
            while (temp->next != NULL) {
                temp = temp->next;
            }
            temp->next = newNode;
        }
    }

    void deleteNama(string nama) {
        if (head == NULL) {
            cout << "List kosong!\n";
            return;
        }

        if (head->nama == nama) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return;
        }

        Node* current = head;
        Node* previous = NULL;

        while (current != NULL && current->nama != nama) {
            previous = current;
            current = current->next;
        }

        if (current == NULL) {
            cout << "Nama " << nama << " tidak ditemukan.\n";
            return;
        }

        previous->next = current->next;
        delete current;
    }
    void viewList() {
        if (head == NULL) {
            cout << "List kosong!\n";
            return;
        }

        Node* temp = head;
        while (temp != NULL) {
            cout << temp->nama;
            if (temp->next != NULL) {
                cout << " ";
            }
            temp = temp->next;
        }
        cout << endl;
    }

    void hitungGenap() {
        if (head == NULL) {
            cout << "List kosong!\n";
            return;
        }

        Node* temp = head;
        int count = 0;
        
        while (temp != NULL) {
            if (temp->nama.length() % 2 == 0) {
                count++;
            }
            temp = temp->next;
        }
        
        cout << "Jumlah nama dengan huruf genap: " << count << endl;
    }

    ~SinglyLinkedList() {
        Node* current = head;
        while (current != NULL) {
            Node* next = current->next;
            delete current;
            current = next;
        }
    }
};

int main() {
    SinglyLinkedList list;
    int pilihan;
    string nama;

    do {
        cout << "Menu: 1 insert, 2 delete, 3 view, 4 hitung genap, 0 exit\n";
        cin >> pilihan;
        cin.ignore();

        switch (pilihan) {
            case 1:
                cout << "Masukkan nama: ";
                getline(cin, nama);
                list.insertAkhir(nama);
                break;
            case 2:
                cout << "Masukkan nama untuk delete: ";
                getline(cin, nama);
                list.deleteNama(nama);
                break;
            case 3:
                list.viewList();
                break;
            case 4:
                list.hitungGenap();
                break;
            case 0:
                break;
            default:
                cout << "Pilihan tidak valid!\n";
        }
    } while (pilihan != 0);

    return 0;
}
