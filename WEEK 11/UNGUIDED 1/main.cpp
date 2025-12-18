#include "graph.h"

int main() {
    Graph G;
    CreateGraph(G);
    
    cout << "========================================" << endl;
    cout << "   PROGRAM IMPLEMENTASI GRAPH" << endl;
    cout << "========================================\n" << endl;
    
    // Membuat graph sesuai dengan Gambar 14-14
    cout << "Menambahkan node A, B, C, D, E, F, G, H..." << endl;
    InsertNode(G, 'A');
    InsertNode(G, 'B');
    InsertNode(G, 'C');
    InsertNode(G, 'D');
    InsertNode(G, 'E');
    InsertNode(G, 'F');
    InsertNode(G, 'G');
    InsertNode(G, 'H');
    
    cout << "\nMenghubungkan node-node..." << endl;
    // Koneksi sesuai Gambar 14-14
    ConnectNode(FindNode(G, 'A'), FindNode(G, 'B'));
    ConnectNode(FindNode(G, 'A'), FindNode(G, 'C'));
    ConnectNode(FindNode(G, 'B'), FindNode(G, 'D'));
    ConnectNode(FindNode(G, 'B'), FindNode(G, 'E'));
    ConnectNode(FindNode(G, 'C'), FindNode(G, 'F'));
    ConnectNode(FindNode(G, 'C'), FindNode(G, 'G'));
    ConnectNode(FindNode(G, 'D'), FindNode(G, 'H'));
    ConnectNode(FindNode(G, 'E'), FindNode(G, 'H'));
    ConnectNode(FindNode(G, 'F'), FindNode(G, 'H'));
    ConnectNode(FindNode(G, 'G'), FindNode(G, 'H'));
    
    // Menampilkan informasi graph
    PrintInfoGraph(G);
    
    // Testing DFS (Latihan 2)
    cout << "\n========================================" << endl;
    cout << "   LATIHAN 2: DEPTH FIRST SEARCH (DFS)" << endl;
    cout << "========================================" << endl;
    PrintDFS(G, FindNode(G, 'A'));
    
    // Testing BFS (Latihan 3)
    cout << "\n========================================" << endl;
    cout << "   LATIHAN 3: BREADTH FIRST SEARCH (BFS)" << endl;
    cout << "========================================" << endl;
    PrintBFS(G, FindNode(G, 'A'));
    
    // Testing dari node lain
    cout << "\n--- Testing DFS dari node B ---" << endl;
    PrintDFS(G, FindNode(G, 'B'));
    
    cout << "\n--- Testing BFS dari node C ---" << endl;
    PrintBFS(G, FindNode(G, 'C'));
    
    // Testing DeleteNode
    cout << "\n========================================" << endl;
    cout << "   TESTING DELETE NODE" << endl;
    cout << "========================================" << endl;
    cout << "Menghapus node D..." << endl;
    DeleteNode(G, 'D');
    PrintInfoGraph(G);
    
    cout << "DFS setelah menghapus node D:" << endl;
    PrintDFS(G, FindNode(G, 'A'));
    
    cout << "\n========================================" << endl;
    cout << "   PROGRAM SELESAI" << endl;
    cout << "========================================" << endl;
    
    return 0;
}