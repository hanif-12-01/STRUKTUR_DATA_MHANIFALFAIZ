#include "BST.h"

Node::Node(int berat, string nama, string tier) {
    beratBadan = berat;
    namaMember = nama;
    tierMember = tier;
    left = NULL;
    right = NULL;
}

BST::BST() {
    root = NULL;
}


Node* BST::insertNodeHelper(Node* node, int berat, string nama, string tier) {
    if (node == NULL) {
        return new Node(berat, nama, tier);
    }
    
    if (berat < node->beratBadan) {
        node->left = insertNodeHelper(node->left, berat, nama, tier);
    } else if (berat > node->beratBadan) {
        node->right = insertNodeHelper(node->right, berat, nama, tier);
    }
    
    return node;
}

void BST::inOrderHelper(Node* node) {
    if (node == NULL) return;
    
    inOrderHelper(node->left);
    cout << node->beratBadan << " - ";
    inOrderHelper(node->right);
}

Node* BST::mostLeftHelper(Node* node) {
    if (node == NULL) return NULL;
    
    while (node->left != NULL) {
        node = node->left;
    }
    return node;
}

Node* BST::mostRightHelper(Node* node) {
    if (node == NULL) return NULL;
    
    while (node->right != NULL) {
        node = node->right;
    }
    return node;
}

Node* BST::searchByBeratBadanHelper(Node* node, int berat) {
    if (node == NULL || node->beratBadan == berat) {
        return node;
    }
    
    if (berat < node->beratBadan) {
        return searchByBeratBadanHelper(node->left, berat);
    } else {
        return searchByBeratBadanHelper(node->right, berat);
    }
}

void BST::printMemberData(Node* node, bool showParent, Node* parent) {
    if (node == NULL) return;
    
    cout << "--- Data Node Yang Dicari ---" << endl;
    cout << "Nama Member : " << node->namaMember << endl;
    cout << "Berat Badan : " << node->beratBadan << endl;
    cout << "Tier Member : " << node->tierMember << endl;
    cout << "-------------------------" << endl;
    
    if (showParent && parent != NULL) {
        cout << "--- Data Parent ---" << endl;
        cout << "Nama Member : " << parent->namaMember << endl;
        cout << "Berat Badan : " << parent->beratBadan << endl;
        cout << "Tier Member : " << parent->tierMember << endl;
        cout << "-------------------------" << endl;
    }
    
    if (parent != NULL) {
        bool hasSibling = false;
        if (parent->left != NULL && parent->left != node) {
            hasSibling = true;
            cout << "--- Data Sibling ---" << endl;
            cout << "Nama Member : " << parent->left->namaMember << endl;
            cout << "Berat Badan : " << parent->left->beratBadan << endl;
            cout << "Tier Member : " << parent->left->tierMember << endl;
            cout << "-------------------------" << endl;
        } else if (parent->right != NULL && parent->right != node) {
            hasSibling = true;
            cout << "--- Data Sibling ---" << endl;
            cout << "Nama Member : " << parent->right->namaMember << endl;
            cout << "Berat Badan : " << parent->right->beratBadan << endl;
            cout << "Tier Member : " << parent->right->tierMember << endl;
            cout << "-------------------------" << endl;
        }
        
        if (!hasSibling) {
            cout << "Tidak Memiliki Sibling" << endl;
            cout << "-------------------------" << endl;
        }
    }
    
    // Tampilkan child
    if (node->left != NULL) {
        cout << "--- Data Child Kiri ---" << endl;
        cout << "Nama Member : " << node->left->namaMember << endl;
        cout << "Berat Badan : " << node->left->beratBadan << endl;
        cout << "Tier Member : " << node->left->tierMember << endl;
        cout << "-------------------------" << endl;
    }
    
    if (node->right != NULL) {
        cout << "--- Data Child Kanan ---" << endl;
        cout << "Nama Member : " << node->right->namaMember << endl;
        cout << "Berat Badan : " << node->right->beratBadan << endl;
        cout << "Tier Member : " << node->right->tierMember << endl;
        cout << "-------------------------" << endl;
    }
}

void BST::searchWithParent(Node* node, int berat, Node* parent) {
    if (node == NULL) {
        cout << "Data tidak ditemukan dalam BST!" << endl;
        return;
    }
    
    if (node->beratBadan == berat) {
        printMemberData(node, true, parent);
        return;
    }
    
    if (berat < node->beratBadan) {
        searchWithParent(node->left, berat, node);
    } else {
        searchWithParent(node->right, berat, node);
    }
}

void BST::createTree() {
    root = NULL;
}

void BST::insertNode(int berat, string nama, string tier) {
    root = insertNodeHelper(root, berat, nama, tier);
}

void BST::inOrder() {
    cout << "=== Traversal InOrder ===" << endl;
    inOrderHelper(root);
    cout << endl;
}

void BST::mostLeft() {
    Node* leftmost = mostLeftHelper(root);
    if (leftmost != NULL) {
        cout << "Node MostLeft : " << leftmost->beratBadan << endl;
    } else {
        cout << "BST kosong!" << endl;
    }
}

void BST::mostRight() {
    Node* rightmost = mostRightHelper(root);
    if (rightmost != NULL) {
        cout << "Node MostRight : " << rightmost->beratBadan << endl;
    } else {
        cout << "BST kosong!" << endl;
    }
}

void BST::searchByBeratBadan(int berat) {
    searchWithParent(root, berat, NULL);
}

Node* BST::getRoot() {
    return root;
}