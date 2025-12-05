#ifndef BSTREE_H
#define BSTREE_H

typedef int infotype;
struct Node;
typedef Node* address;
#define Nil NULL

struct Node {
    infotype info;
    address left;
    address right;
};

address alokasi(infotype x);
void insertNode(address &root, infotype x);
address findNode(infotype x, address root);
void printInorder(address root);
void InOrder(address root);

#endif
