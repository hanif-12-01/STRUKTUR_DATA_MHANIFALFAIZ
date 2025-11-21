#include "queue.h"
#include <iostream>
using namespace std;

// Alternatif 3: head dan tail berputar (circular queue)
void CreateQueue(Queue& Q) {
    Q.head = 0;
    Q.tail = 0;
}

bool isEmptyQueue(Queue Q) {
    return Q.head == Q.tail;
}

bool isFullQueue(Queue Q) {
    return (Q.tail + 1) % 5 == Q.head;
}

void enqueue(Queue& Q, infotype x) {
    if (!isFullQueue(Q)) {
        Q.info[Q.tail] = x;
        Q.tail = (Q.tail + 1) % 5;
    } else {
        cout << "Queue penuh!" << endl;
    }
}

infotype dequeue(Queue& Q) {
    infotype x = 0;
    if (!isEmptyQueue(Q)) {
        x = Q.info[Q.head];
        Q.head = (Q.head + 1) % 5;
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
        int i = Q.head;
        while (i != Q.tail) {
            cout << Q.info[i] << " ";
            i = (i + 1) % 5;
        }
        cout << endl;
    }
}
