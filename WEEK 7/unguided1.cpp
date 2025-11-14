#include <iostream>
using namespace std;

#define MAX 20

typedef int infotype;

struct Stack {
    infotype info[MAX];
    int top;
};

// Fungsi untuk membuat stack kosong
void createStack(Stack &S) {
    S.top = -1;
}

// Fungsi untuk mengecek apakah stack kosong
bool isEmpty(Stack S) {
    return S.top == -1;
}

// Fungsi untuk mengecek apakah stack penuh
bool isFull(Stack S) {
    return S.top == MAX - 1;
}

// Fungsi untuk menambah elemen ke stack (push)
void push(Stack &S, infotype x) {
    if (!isFull(S)) {
        S.top++;
        S.info[S.top] = x;
    } else {
        cout << "Stack Penuh!" << endl;
    }
}

// Fungsi untuk menghapus elemen dari stack (pop)
infotype pop(Stack &S) {
    infotype x = -999;
    if (!isEmpty(S)) {
        x = S.info[S.top];
        S.top--;
    } else {
        cout << "Stack Kosong!" << endl;
    }
    return x;
}

// Fungsi untuk menampilkan isi stack
void printInfo(Stack S) {
    if (isEmpty(S)) {
        cout << "Stack Kosong" << endl;
    } else {
        cout << "[TOP] ";
        for (int i = S.top; i >= 0; i--) {
            cout << S.info[i] << " ";
        }
        cout << endl;
    }
}

// Fungsi untuk membalik urutan elemen dalam stack
void balikStack(Stack &S) {
    if (!isEmpty(S)) {
        Stack temp1, temp2;
        createStack(temp1);
        createStack(temp2);

        // Pindahkan dari S ke temp1
        while (!isEmpty(S)) {
            push(temp1, pop(S));
        }

        // Pindahkan dari temp1 ke temp2
        while (!isEmpty(temp1)) {
            push(temp2, pop(temp1));
        }

        // Kembalikan ke S (urutan terbalik)
        while (!isEmpty(temp2)) {
            push(S, pop(temp2));
        }
    }
}

int main() {
    cout << "Hello world!" << endl;
    Stack S;
    createStack(S);

    push(S, 3);
    push(S, 4);
    push(S, 8);
    pop(S);
    push(S, 2);
    push(S, 3);
    pop(S);
    push(S, 9);
    
    printInfo(S);
    
    cout << "balik stack" << endl;
    balikStack(S);
    
    printInfo(S);

    return 0;
}
