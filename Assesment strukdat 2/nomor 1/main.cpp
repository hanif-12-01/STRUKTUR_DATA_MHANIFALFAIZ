#include "BST.h"

int main() {
    BST bst;

    bst.createTree();
    
    bst.insertNode(60, "Rizkina Azizah", "Basic");
    bst.insertNode(50, "Hakan Ismail", "Bronze");
    bst.insertNode(65, "Olivia Saevali", "Silver");
    bst.insertNode(47, "Felix Pedrosa", "Gold");
    bst.insertNode(56, "Gamel Al Ghifari", "Platinum");
    bst.insertNode(70, "Hanif Al Faiz", "Basic");
    bst.insertNode(52, "Mutiara Fauziah", "Bronze");
    bst.insertNode(68, "Davi Ilyas", "Silver");
    bst.insertNode(81, "Abdad Mubarok", "Gold");
    
    bst.inOrder();
    
    bst.mostLeft();
    bst.mostRight();

    bst.searchByBeratBadan(70);
    
    return 0;
}