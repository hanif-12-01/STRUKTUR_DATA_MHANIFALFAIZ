#ifndef BST_H
#define BST_H

#include <iostream>
#include <string>
using namespace std;

struct Node {
    int beratBadan;
    string namaMember;
    string tierMember;
    Node* left;
    Node* right;
    
 
    Node(int berat, string nama, string tier);
};

// Class BST
class BST {
private:
    Node* root;
    
    // Helper functions
    Node* insertNodeHelper(Node* node, int berat, string nama, string tier);
    void inOrderHelper(Node* node);
    Node* mostLeftHelper(Node* node);
    Node* mostRightHelper(Node* node);
    Node* searchByBeratBadanHelper(Node* node, int berat);
    void printMemberData(Node* node, bool showParent, Node* parent);
    void searchWithParent(Node* node, int berat, Node* parent);

public:
    BST();
    
    void createTree();
    void insertNode(int berat, string nama, string tier);
    void inOrder();
    void mostLeft();
    void mostRight();
    void searchByBeratBadan(int berat);
    Node* getRoot();
};

#endif