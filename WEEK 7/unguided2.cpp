#include <iostream>
using namespace std;

#define MAX 20

typedef int infotype;

struct Stack {
    infotype info[MAX];
    int top;
};

void createStack(Stack &S) {
    S.top = -1;
}

bool isEmpty(Stack S) {
    return S.top == -1;
}

bool isFull(Stack S) {
    return S.top == MAX - 1;
}

void push(Stack &S, infotype x) {
    if (!isFull(S)) {
        S.top++;
        S.info[S.top] = x;
    }
}

infotype pop(Stack &S) {
    infotype x = -999;
    if (!isEmpty(S)) {
        x = S.info[S.top];
        S.top--;
    }
    return x;
}

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

void balikStack(Stack &S) {
    if (!isEmpty(S)) {
        Stack temp1, temp2;
        createStack(temp1);
        createStack(temp2);

        while (!isEmpty(S)) {
            push(temp1, pop(S));
        }

        while (!isEmpty(temp1)) {
            push(temp2, pop(temp1));
        }

        while (!isEmpty(temp2)) {
            push(S, pop(temp2));
        }
    }
}

// Prosedur pushAscending - menambahkan elemen terurut ascending
void pushAscending(Stack &S, infotype x) {
    Stack temp;
    createStack(temp);
    
    // Pindahkan elemen yang lebih besar dari x ke stack temporary
    while (!isEmpty(S) && S.info[S.top] > x) {
        push(temp, pop(S));
    }
    
    // Push elemen baru
    push(S, x);
    
    // Kembalikan elemen dari temporary ke stack utama
    while (!isEmpty(temp)) {
        push(S, pop(temp));
    }
}

int main() {
    cout << "Hello world!" << endl;
    Stack S;
    createStack(S);
    
    pushAscending(S, 3);
    pushAscending(S, 4);
    pushAscending(S, 8);
    pushAscending(S, 2);
    pushAscending(S, 3);
    pushAscending(S, 9);
    
    printInfo(S);
    
    cout << "balik stack" << endl;
    balikStack(S);
    
    printInfo(S);

    return 0;
}
