#include "graph.h"
#include <queue>
#include <stack>

// Alokasi Node baru
adrNode AllocateNode(infoGraph X) {
    adrNode P = new ElmNode;
    P->info = X;
    P->visited = 0;
    P->firstEdge = NULL;
    P->Next = NULL;
    return P;
}

// Alokasi Edge baru
adrEdge AllocateEdge(adrNode N) {
    adrEdge P = new ElmEdge;
    P->Node = N;
    P->Next = NULL;
    return P;
}

// Membuat Graph kosong
void CreateGraph(Graph &G) {
    G.First = NULL;
}

// Mencari Node berdasarkan info
adrNode FindNode(Graph G, infoGraph X) {
    adrNode P = G.First;
    while (P != NULL) {
        if (P->info == X) {
            return P;
        }
        P = P->Next;
    }
    return NULL;
}

// Insert Node ke Graph
void InsertNode(Graph &G, infoGraph X) {
    // Cek apakah node sudah ada
    if (FindNode(G, X) != NULL) {
        cout << "Node " << X << " sudah ada!" << endl;
        return;
    }
    
    adrNode P = AllocateNode(X);
    
    if (G.First == NULL) {
        G.First = P;
    } else {
        adrNode Q = G.First;
        while (Q->Next != NULL) {
            Q = Q->Next;
        }
        Q->Next = P;
    }
}

// Menghubungkan dua Node (Undirected Graph)
void ConnectNode(adrNode N1, adrNode N2) {
    if (N1 == NULL || N2 == NULL) {
        cout << "Node tidak ditemukan!" << endl;
        return;
    }
    
    // Tambah edge dari N1 ke N2
    adrEdge E1 = AllocateEdge(N2);
    if (N1->firstEdge == NULL) {
        N1->firstEdge = E1;
    } else {
        adrEdge temp = N1->firstEdge;
        while (temp->Next != NULL) {
            temp = temp->Next;
        }
        temp->Next = E1;
    }
    
    // Tambah edge dari N2 ke N1 (karena undirected)
    adrEdge E2 = AllocateEdge(N1);
    if (N2->firstEdge == NULL) {
        N2->firstEdge = E2;
    } else {
        adrEdge temp = N2->firstEdge;
        while (temp->Next != NULL) {
            temp = temp->Next;
        }
        temp->Next = E2;
    }
}

// Mencari Edge
adrEdge FindEdge(adrNode N, adrNode NFind) {
    if (N == NULL) return NULL;
    
    adrEdge E = N->firstEdge;
    while (E != NULL) {
        if (E->Node == NFind) {
            return E;
        }
        E = E->Next;
    }
    return NULL;
}

// Memutuskan koneksi dua Node
void DisconnectNode(adrNode N1, adrNode N2) {
    if (N1 == NULL || N2 == NULL) return;
    
    // Hapus edge dari N1 ke N2
    adrEdge E = N1->firstEdge;
    adrEdge prev = NULL;
    while (E != NULL) {
        if (E->Node == N2) {
            if (prev == NULL) {
                N1->firstEdge = E->Next;
            } else {
                prev->Next = E->Next;
            }
            delete E;
            break;
        }
        prev = E;
        E = E->Next;
    }
    
    // Hapus edge dari N2 ke N1
    E = N2->firstEdge;
    prev = NULL;
    while (E != NULL) {
        if (E->Node == N1) {
            if (prev == NULL) {
                N2->firstEdge = E->Next;
            } else {
                prev->Next = E->Next;
            }
            delete E;
            break;
        }
        prev = E;
        E = E->Next;
    }
}

// Hapus Node dari Graph
void DeleteNode(Graph &G, infoGraph X) {
    adrNode P = FindNode(G, X);
    if (P == NULL) {
        cout << "Node " << X << " tidak ditemukan!" << endl;
        return;
    }
    
    // Hapus semua edge yang terhubung ke node ini
    adrNode temp = G.First;
    while (temp != NULL) {
        if (temp != P) {
            DisconnectNode(temp, P);
        }
        temp = temp->Next;
    }
    
    // Hapus node dari list
    if (G.First == P) {
        G.First = P->Next;
    } else {
        adrNode Q = G.First;
        while (Q->Next != P && Q->Next != NULL) {
            Q = Q->Next;
        }
        if (Q->Next == P) {
            Q->Next = P->Next;
        }
    }
    
    // Dealokasi edge dari node yang akan dihapus
    adrEdge E = P->firstEdge;
    while (E != NULL) {
        adrEdge temp = E;
        E = E->Next;
        delete temp;
    }
    
    delete P;
}

// Menampilkan info Graph
void PrintInfoGraph(Graph G) {
    if (G.First == NULL) {
        cout << "Graph kosong!" << endl;
        return;
    }
    
    cout << "\n=== Informasi Graph ===" << endl;
    adrNode P = G.First;
    while (P != NULL) {
        cout << "Node " << P->info << " terhubung dengan: ";
        adrEdge E = P->firstEdge;
        if (E == NULL) {
            cout << "(tidak ada koneksi)";
        } else {
            while (E != NULL) {
                cout << E->Node->info;
                if (E->Next != NULL) cout << ", ";
                E = E->Next;
            }
        }
        cout << endl;
        P = P->Next;
    }
    cout << "======================\n" << endl;
}

// Reset visited untuk traversal
void ResetVisited(Graph &G) {
    adrNode P = G.First;
    while (P != NULL) {
        P->visited = 0;
        P = P->Next;
    }
}

// Depth First Search (DFS) menggunakan Stack
void PrintDFS(Graph G, adrNode N) {
    if (N == NULL) {
        cout << "Node tidak ditemukan!" << endl;
        return;
    }
    
    ResetVisited(G);
    stack<adrNode> S;
    
    cout << "DFS Traversal: ";
    S.push(N);
    
    while (!S.empty()) {
        adrNode current = S.top();
        S.pop();
        
        if (current->visited == 0) {
            current->visited = 1;
            cout << current->info << " ";
            
            // Push semua neighbor yang belum dikunjungi
            adrEdge E = current->firstEdge;
            while (E != NULL) {
                if (E->Node->visited == 0) {
                    S.push(E->Node);
                }
                E = E->Next;
            }
        }
    }
    cout << endl;
}

// Breadth First Search (BFS) menggunakan Queue
void PrintBFS(Graph G, adrNode N) {
    if (N == NULL) {
        cout << "Node tidak ditemukan!" << endl;
        return;
    }
    
    ResetVisited(G);
    queue<adrNode> Q;
    
    cout << "BFS Traversal: ";
    Q.push(N);
    N->visited = 1;
    
    while (!Q.empty()) {
        adrNode current = Q.front();
        Q.pop();
        
        cout << current->info << " ";
        
        // Enqueue semua neighbor yang belum dikunjungi
        adrEdge E = current->firstEdge;
        while (E != NULL) {
            if (E->Node->visited == 0) {
                E->Node->visited = 1;
                Q.push(E->Node);
            }
            E = E->Next;
        }
    }
    cout << endl;
}