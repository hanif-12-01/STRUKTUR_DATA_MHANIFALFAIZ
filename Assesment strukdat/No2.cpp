#include <iostream>
using namespace std;

struct Node {
    int nilai;
    Node* prev;
    Node* next;
};

class DoublyLinkedList {
private:
    Node* head;
    Node* tail;

public:
    DoublyLinkedList() {
        head = NULL;
        tail = NULL;
    }

    void insertAkhir(int nilai) {
        Node* newNode = new Node();
        newNode->nilai = nilai;
        newNode->next = NULL;
        newNode->prev = NULL;

        if (head == NULL) {
            head = newNode;
            tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
    }

    void deleteLast() {
        if (head == NULL) {
            cout << "List kosong!\n";
            return;
        }

        if (head == tail) {
            delete head;
            head = NULL;
            tail = NULL;
        } else {
            Node* temp = tail;
            tail = tail->prev;
            tail->next = NULL;
            delete temp;
        }
    }

    void viewDepan() {
        if (head == NULL) {
            cout << "List kosong!\n";
            return;
        }

        Node* temp = head;
        while (temp != NULL) {
            cout << temp->nilai;
            if (temp->next != NULL) {
                cout << " ";
            }
            temp = temp->next;
        }
        cout << endl;
    }

    void reverseList() {
        if (head == NULL || head == tail) {
            return;
        }

        Node* current = head;
        Node* temp = NULL;

        while (current != NULL) {
            temp = current->prev;
            current->prev = current->next;
            current->next = temp;
            current = current->prev;
        }

        temp = head;
        head = tail;
        tail = temp;
    }

    void reverseAndView() {
        reverseList();
        if (head == NULL) {
            cout << "List kosong!\n";
            return;
        }
        
        cout << "List setelah di-reverse: ";
        Node* temp = head;
        while (temp != NULL) {
            cout << temp->nilai;
            if (temp->next != NULL) {
                cout << " ";
            }
            temp = temp->next;
        }
        cout << endl;
    }

    ~DoublyLinkedList() {
        Node* current = head;
        while (current != NULL) {
            Node* next = current->next;
            delete current;
            current = next;
        }
    }
};

int main() {
    DoublyLinkedList list;
    int pilihan;
    int nilai;

    do {
        cout << "Menu: 1 insert (end), 2 delete (last), 3 view (depan), 4 reverse & view (depan), 0 exit\n";
        cin >> pilihan;

        switch (pilihan) {
            case 1:
                cout << "Masukkan nilai: ";
                cin >> nilai;
                list.insertAkhir(nilai);
                break;
            case 2:
                list.deleteLast();
                break;
            case 3:
                list.viewDepan();
                break;
            case 4:
                list.reverseAndView();
                break;
            case 0:
                break;
            default:
                cout << "Pilihan tidak valid!\n";
        }
    } while (pilihan != 0);

    return 0;
}
