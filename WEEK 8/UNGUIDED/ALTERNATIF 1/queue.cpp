#include "queue.h"
#include <iostream>
using namespace std;

// Alternatif 1: queue linear sederhana
void CreateQueue(Queue& Q) {
    Q.head = 0;
    Q.tail = 0;
}

bool isEmptyQueue(Queue Q) {
    return Q.head == Q.tail;
}

bool isFullQueue(Queue Q) {
    return Q.tail == 5;
}

void enqueue(Queue& Q, infotype x) {
    if (!isFullQueue(Q)) {
        Q.info[Q.tail] = x;
        Q.tail++;
    } else {
        cout << "Queue penuh!" << endl;
    }
}

infotype dequeue(Queue& Q) {
    infotype x = 0;
    if (!isEmptyQueue(Q)) {
        x = Q.info[Q.head];
        Q.head++;
    } else {
        cout << "Queue kosong!" << endl;
    }
    return x;
}

void printInfo(Queue Q) {
    cout << "H=" << Q.head << " T=" << Q.tail << " | ";
    if (isEmptyQueue(Q)) {
        cout << "Queue kosong!" << endl;
    } else {
        cout << "Isi: ";
        for (int i = Q.head; i < Q.tail; i++) {
            cout << Q.info[i] << " ";
        }
        cout << endl;
    }
}
