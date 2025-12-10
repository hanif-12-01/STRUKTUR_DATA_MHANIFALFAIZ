#include "MultiLL.h"

int main() {
    // 1. Inisialisasi List Parent
    listParent LParent;
    createListParent(LParent);
    
    // 2. Membuat node parent (golongan hewan)
    // G001 - Aves
    NodeParent G001 = allocNodeParent("G001", "Aves");
    insertLastParent(LParent, G001);
    
    // G002 - Mamalia
    NodeParent G002 = allocNodeParent("G002", "Mamalia");
    insertLastParent(LParent, G002);
    
    // G003 - Pisces
    NodeParent G003 = allocNodeParent("G003", "Pisces");
    insertLastParent(LParent, G003);
    
    // G004 - Amfibi
    NodeParent G004 = allocNodeParent("G004", "Amfibi");
    insertLastParent(LParent, G004);
    
    // G005 - Reptil
    NodeParent G005 = allocNodeParent("G005", "Reptil");
    insertLastParent(LParent, G005);
    
    // 3. Memasukkan data child ke masing-masing parent
    
    // --> List Child G001 (Aves)
    NodeChild AV001 = allocNodeChild("AV001", "Cendrawasih", "Hutan", true, 0.3);
    insertLastChild(G001->L_child, AV001);
    
    NodeChild AV002 = allocNodeChild("AV002", "Bebek", "Air", true, 2);
    insertLastChild(G001->L_child, AV002);
    
    // --> List Child G002 (Mamalia)
    NodeChild M001 = allocNodeChild("M001", "Harimau", "Hutan", true, 200);
    insertLastChild(G002->L_child, M001);
    
    NodeChild M003 = allocNodeChild("M003", "Gorila", "Hutan", false, 160);
    insertLastChild(G002->L_child, M003);
    
    NodeChild M002 = allocNodeChild("M002", "Kucing", "Darat", true, 4);
    insertLastChild(G002->L_child, M002);
    
    // --> List Child G003 (Pisces) - tidak ada child
    
    // --> List Child G004 (Amfibi)
    NodeChild AM001 = allocNodeChild("AM001", "Kodok", "Sawah", false, 0.2);
    insertLastChild(G004->L_child, AM001);
    
    // --> List Child G005 (Reptil) - tidak ada child
    
    // 4. Print struktur MLL setelah INSERT
    cout << "========================================" << endl;
    cout << "STRUKTUR MULTI LINKED LIST SETELAH INSERT" << endl;
    cout << "========================================" << endl;
    printMLLStructure(LParent);
    cout << endl;
    
    // 5. Search hewan dengan ekor = FALSE (UNGUIDED 2)
    cout << "========================================" << endl;
    cout << "SEARCHING HEWAN DENGAN EKOR = FALSE" << endl;
    cout << "========================================" << endl;
    searchHewanByEkor(LParent, false);
    cout << endl;
    
    // 6. Delete node G004 beserta list childnya (UNGUIDED 3)
    // G004 berada setelah G003, jadi kita hapus after G003
    cout << "========================================" << endl;
    cout << "MENGHAPUS NODE G004 (Amfibi)" << endl;
    cout << "========================================" << endl;
    deleteAfterParent(LParent, G003);
    cout << "Node G004 (Amfibi) beserta childnya berhasil dihapus!" << endl;
    cout << endl;
    
    // 7. Print struktur MLL setelah DELETE
    cout << "========================================" << endl;
    cout << "STRUKTUR MULTI LINKED LIST SETELAH DELETE" << endl;
    cout << "========================================" << endl;
    printMLLStructure(LParent);
    
    return 0;
}
