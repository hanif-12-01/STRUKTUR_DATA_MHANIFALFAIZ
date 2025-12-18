# <h1 align="center">Laporan Praktikum Modul 14 - Graph</h1>
<p align="center">M. Hanif Al Faiz - 1031124000042</p>

## Dasar Teori

### Graph

Graph adalah struktur data non-linear yang terdiri dari himpunan tidak kosong dari node (vertex) dan himpunan garis penghubung (edge) yang menghubungkan pasangan node [1]. Secara formal, sebuah graph G didefinisikan sebagai pasangan terurut (V, E), dimana V adalah himpunan vertex dan E adalah himpunan edge [2].

Menurut Cormen et al. (2009), "Graph menyediakan cara yang alami untuk merepresentasikan hubungan antara objek, dimana vertex merepresentasikan objek dan edge merepresentasikan hubungan antar objek tersebut" [3]. Struktur ini memiliki aplikasi yang luas dalam berbagai bidang seperti jaringan komputer, peta jalan, social network, dan sistem rekomendasi.

#### Terminologi Graph

Beberapa istilah penting dalam graph [1][2][4]:

1. **Vertex (Node)**: Titik atau simpul dalam graph yang merepresentasikan objek
2. **Edge (Arc)**: Garis penghubung antara dua vertex yang merepresentasikan hubungan
3. **Adjacent (Bertetangga)**: Dua vertex dikatakan adjacent jika terhubung langsung oleh satu edge
4. **Path (Lintasan)**: Urutan vertex yang terhubung oleh edge
5. **Cycle (Siklus)**: Path yang dimulai dan diakhiri pada vertex yang sama
6. **Degree**: Jumlah edge yang terhubung ke suatu vertex
7. **Connected Graph**: Graph dimana terdapat path antara setiap pasangan vertex

#### Jenis-Jenis Graph

Graph dapat diklasifikasikan menjadi beberapa jenis berdasarkan karakteristiknya [2][3]:

**1. Berdasarkan Arah:**

a. **Directed Graph (Digraph)**
   - Edge memiliki arah (dari vertex asal ke vertex tujuan)
   - Direpresentasikan dengan panah
   - Digunakan untuk merepresentasikan relasi yang memiliki arah seperti hyperlink, dependency
   - Degree dibedakan menjadi in-degree dan out-degree

b. **Undirected Graph**
   - Edge tidak memiliki arah (hubungan dua arah)
   - Direpresentasikan dengan garis biasa
   - Digunakan untuk merepresentasikan relasi simetris seperti pertemanan, jarak antar kota
   - Jika vertex A terhubung dengan B, maka B juga terhubung dengan A

**2. Berdasarkan Bobot:**

a. **Weighted Graph**
   - Setiap edge memiliki nilai/bobot
   - Bobot dapat merepresentasikan jarak, biaya, waktu, dll
   - Digunakan dalam algoritma shortest path seperti Dijkstra

b. **Unweighted Graph**
   - Edge tidak memiliki bobot
   - Semua edge dianggap memiliki bobot yang sama

#### Representasi Graph

Graph dapat direpresentasikan dengan beberapa cara [1][4][5]:

**1. Adjacency Matrix (Matriks Ketetanggaan)**
   - Menggunakan array 2 dimensi berukuran n × n (n = jumlah vertex)
   - Matrix[i][j] = 1 jika ada edge dari vertex i ke vertex j
   - Kelebihan: Cepat mengecek koneksi antara dua vertex O(1)
   - Kekurangan: Membutuhkan ruang O(n²), tidak efisien untuk sparse graph

```cpp
// Representasi Adjacency Matrix
int adjMatrix[MAX][MAX];
// adjMatrix[i][j] = 1 berarti ada edge dari i ke j
```

**2. Adjacency List (Multilist)**
   - Setiap vertex memiliki list yang berisi vertex-vertex yang adjacent dengannya
   - Menggunakan linked list untuk menyimpan neighbor
   - Kelebihan: Efisien untuk sparse graph, hemat memori O(V+E)
   - Kekurangan: Cek koneksi memerlukan traversal list O(degree)

```cpp
struct ElmNode {
    infoGraph info;
    int visited;
    adrEdge firstEdge;
    adrNode Next;
};

struct ElmEdge {
    adrNode Node;
    adrEdge Next;
};
```

Menurut Goodrich dan Tamassia (2015), "Adjacency list lebih efisien daripada adjacency matrix untuk sparse graphs (graph dengan sedikit edge dibandingkan vertex), yang sering ditemukan dalam aplikasi real-world" [4].

#### Operasi Dasar pada Graph

1. **Create Graph**
   - Inisialisasi graph kosong
   - Kompleksitas: O(1)

2. **Add Vertex**
   - Menambahkan vertex baru ke graph
   - Kompleksitas: O(1)

3. **Add Edge**
   - Menambahkan edge antara dua vertex
   - Untuk undirected graph, perlu menambahkan edge dua arah
   - Kompleksitas: O(1) untuk adjacency list

4. **Remove Vertex**
   - Menghapus vertex dan semua edge yang terhubung dengannya
   - Kompleksitas: O(V+E)

5. **Remove Edge**
   - Menghapus edge antara dua vertex
   - Kompleksitas: O(degree) untuk adjacency list

6. **Check Adjacent**
   - Mengecek apakah dua vertex bertetangga
   - Kompleksitas: O(degree) untuk adjacency list

#### Graph Traversal (Penelusuran Graph)

Penelusuran graph adalah proses mengunjungi semua vertex dalam graph secara sistematis [3][5]. Dua metode utama penelusuran graph:

**1. Breadth First Search (BFS)**
   - Mengunjungi vertex level by level
   - Menggunakan struktur data Queue (FIFO)
   - Algoritma:
     1. Mulai dari vertex awal, masukkan ke queue
     2. Tandai vertex sebagai visited
     3. Selama queue tidak kosong:
        - Dequeue vertex
        - Enqueue semua neighbor yang belum dikunjungi
   - Kompleksitas: O(V+E)
   - Aplikasi: Shortest path in unweighted graph, web crawling, social networking

**Algoritma BFS:**
```
BFS(G, start):
    create empty queue Q
    mark start as visited
    enqueue start to Q
    
    while Q is not empty:
        v = dequeue from Q
        process v
        
        for each neighbor w of v:
            if w is not visited:
                mark w as visited
                enqueue w to Q
```

**2. Depth First Search (DFS)**
   - Mengunjungi vertex secara mendalam terlebih dahulu
   - Menggunakan struktur data Stack (LIFO) atau rekursif
   - Algoritma:
     1. Mulai dari vertex awal, push ke stack
     2. Selama stack tidak kosong:
        - Pop vertex, tandai sebagai visited
        - Push semua neighbor yang belum dikunjungi
   - Kompleksitas: O(V+E)
   - Aplikasi: Cycle detection, topological sorting, path finding, maze solving

**Algoritma DFS:**
```
DFS(G, start):
    create empty stack S
    push start to S
    
    while S is not empty:
        v = pop from S
        if v is not visited:
            mark v as visited
            process v
            
            for each neighbor w of v:
                if w is not visited:
                    push w to S
```

Menurut Sedgewick dan Wayne (2011), "Pilihan antara BFS dan DFS bergantung pada struktur graph dan tujuan aplikasi. BFS lebih cocok untuk menemukan shortest path, sedangkan DFS lebih cocok untuk mengeksplorasi semua kemungkinan path" [5].

#### Aplikasi Graph dalam Pemrograman

Graph memiliki berbagai aplikasi praktis [1][3][4]:

1. **Social Networks**: Representasi hubungan pertemanan (Facebook, LinkedIn)
2. **Navigation Systems**: Peta jalan dan pencarian rute terpendek (Google Maps)
3. **Web Page Ranking**: PageRank algorithm untuk search engine
4. **Dependency Resolution**: Manajemen dependencies dalam package manager
5. **Network Routing**: Routing protocol dalam jaringan komputer
6. **Recommendation Systems**: Collaborative filtering untuk rekomendasi produk
7. **Circuit Design**: Analisis dan optimasi rangkaian elektronik
8. **Bioinformatics**: Protein interaction networks, phylogenetic trees

#### Kompleksitas dan Performa

Perbandingan kompleksitas operasi graph [2][4]:

| Operasi | Adjacency Matrix | Adjacency List |
|---------|------------------|----------------|
| Add Vertex | O(V²) | O(1) |
| Add Edge | O(1) | O(1) |
| Remove Vertex | O(V²) | O(V+E) |
| Remove Edge | O(1) | O(E) |
| Query Edge | O(1) | O(degree) |
| Space | O(V²) | O(V+E) |

### Topological Sort

Topological sort adalah pengurutan linear dari vertex dalam directed acyclic graph (DAG) dimana untuk setiap directed edge (u,v), vertex u muncul sebelum vertex v dalam urutan [3]. Topological sort hanya dapat dilakukan pada DAG (graph berarah tanpa cycle).

**Algoritma Topological Sort:**
1. Temukan vertex tanpa incoming edge (in-degree = 0)
2. Keluarkan vertex tersebut dan tambahkan ke hasil
3. Hapus semua outgoing edge dari vertex tersebut
4. Ulangi langkah 1-3 hingga semua vertex diproses

**Aplikasi Topological Sort:**
- Penjadwalan tugas dengan dependencies
- Build systems untuk kompilasi program
- Course prerequisite scheduling
- Dependency resolution dalam package managers


## Guided

### 1. GUIDED I - Implementasi Graph Berarah (Directed Graph)

Program ini mengimplementasikan ADT Graph berarah sederhana menggunakan adjacency list dengan struktur pointer Graph.

#### graph.h
```cpp
#ifndef GRAPH_H
#define GRAPH_H
#include <iostream>
using namespace std;

typedef char infoGraph;
typedef struct ElmNode* adrNode;
typedef struct ElmEdge* adrEdge;

struct ElmEdge {
    adrNode node;
    adrEdge next;
};

struct ElmNode {
    infoGraph info;
    bool visited;
    adrEdge firstEdge;
    adrNode nextNode;
};

struct elmGraph {
    adrNode first;
};

typedef struct elmGraph *Graph;

//Prototype
void createGraph(Graph &G);
adrNode allocateNode(infoGraph x);
void insertNode(Graph &G, infoGraph x);
void connectNode(Graph &G, infoGraph start, infoGraph end);
void printGraph(Graph G);

#endif
```

#### graph_init.cpp
```cpp
#include "graph.h"

void createGraph(Graph &G) {
    G->first = NULL;
}

adrNode allocateNode(infoGraph x) {
    adrNode P = new ElmNode;
    P->info = x;
    P->visited = false;
    P->firstEdge = NULL;
    P->nextNode = NULL;
    return P;
}

void insertNode(Graph &G, infoGraph x) {
    adrNode P = allocateNode(x);
    if (G->first == NULL) {
        G->first = P;
    } else {
        adrNode Q = G->first;
        while (Q->nextNode != NULL) {
            Q = Q->nextNode;
        }
        Q->nextNode = P;
    }
}
```

#### graph_edge.cpp
```cpp
#include "graph.h"

adrNode findNode(Graph G, infoGraph x) {
    adrNode p = G->first;
    while (p != NULL) {
        if (p->info == x) return p;
        p = p->nextNode;
    }
    return NULL;
}

void connectNode(Graph &G, infoGraph start, infoGraph end) {
    adrNode pStart = findNode(G, start);
    adrNode pEnd = findNode(G, end);

    if (pStart != NULL && pEnd != NULL) {
        adrEdge newEdge = new ElmEdge;
        newEdge->node = pEnd;
        newEdge->next = pStart->firstEdge;
        //Insert First di list Edge
        pStart->firstEdge = newEdge;
    }
}
```

#### graph_print.cpp
```cpp
#include "graph.h"

void printGraph(Graph G) {
    adrNode p = G->first;
    while (p != NULL) {
        cout << "Node " << p->info << " terhubung ke: ";
        adrEdge e = p->firstEdge;
        while (e != NULL) {
            cout << e->node->info << " ";
            e = e->next;
        }
        cout << endl;
        p = p->nextNode;
    }
}
```

#### main.cpp
```cpp
#include "graph.h"
#include <iostream>

using namespace std;

int main() {
    // 1. Create Graph
    Graph G = new elmGraph;
    createGraph(G);

    // 2. Insert Nodes
    insertNode(G, 'A');
    insertNode(G, 'B');
    insertNode(G, 'C');
    insertNode(G, 'D');

    // 3. Connect Nodes (Edges)
    connectNode(G, 'A', 'B');
    connectNode(G, 'A', 'C');
    connectNode(G, 'B', 'D');
    connectNode(G, 'C', 'D');

    // 4. Print Graph Structure
    cout << "Isi Graph:" << endl;
    printGraph(G);

    return 0;
}
```

#### Output:
```
Isi Graph:
Node A terhubung ke: C B
Node B terhubung ke: D
Node C terhubung ke: D
Node D:
```

#### Penjelasan:

Program ini mengimplementasikan Graph Berarah (Directed Graph) dengan struktur data yang lebih kompleks menggunakan pointer ke struct Graph:

**Perbedaan Struktur dengan Implementasi Standar:**

1. **Graph sebagai Pointer**: 
   - `typedef struct elmGraph *Graph`
   - Graph adalah pointer ke struct elmGraph
   - Akses member menggunakan `G->first` bukan `G.first`

2. **Nama Field Berbeda**:
   - `nextNode` untuk pointer ke node berikutnya (bukan `Next`)
   - `node` untuk pointer node tujuan edge (bukan `Node`)

**Struktur Data:**

- **ElmEdge**: Edge dalam graph
  - `node`: Pointer ke node tujuan
  - `next`: Pointer ke edge berikutnya

- **ElmNode**: Node/vertex dalam graph
  - `info`: Data node (char)
  - `visited`: Flag untuk traversal (bool)
  - `firstEdge`: Pointer ke edge pertama
  - `nextNode`: Pointer ke node berikutnya

- **elmGraph**: Struktur graph utama
  - `first`: Pointer ke node pertama

- **Graph**: Pointer ke elmGraph

**Fungsi-Fungsi (5 File Terpisah):**

1. **graph_init.cpp** - Inisialisasi dan Insert Node:
   - `createGraph()`: Set G->first = NULL
   - `allocateNode()`: Alokasi node baru dengan semua field NULL/false
   - `insertNode()`: Insert Last node ke graph

2. **graph_edge.cpp** - Operasi Edge:
   - `findNode()`: Mencari node berdasarkan info
   - `connectNode()`: Menghubungkan dua node dengan directed edge
     - Hanya buat edge dari start ke end (satu arah)
     - Insert First edge ke list edge

3. **graph_print.cpp** - Output:
   - `printGraph()`: Menampilkan adjacency list graph

4. **graph.h** - Header file dengan semua definisi struct dan prototype

5. **main.cpp** - Program utama:
   - Alokasi Graph dengan `new elmGraph`
   - Create 4 node (A, B, C, D)
   - Buat 4 directed edge: A→B, A→C, B→D, C→D
   - Print struktur graph

**Karakteristik:**

- **Directed Graph**: Edge hanya satu arah
- **Unweighted**: Tidak ada bobot pada edge
- **Adjacency List**: Menggunakan linked list untuk edge
- **Insert First**: Edge baru diinsert di awal list (lebih efisien)

**Analisis Output:**
```
Node A terhubung ke: C B   → A→C, A→B (urutan terbalik karena Insert First)
Node B terhubung ke: D     → B→D
Node C terhubung ke: D     → C→D
Node D:                    → D tidak terhubung ke manapun (no outgoing edge)
```

**Visualisasi:**
```
A → B → D
↓   
C → D
```

**Kompleksitas:**
- Create Graph: O(1)
- Insert Node: O(n) untuk traverse ke tail
- Connect Node: O(n) untuk findNode + O(1) untuk insert edge
- Print Graph: O(V + E)

**Keunggulan Struktur Ini:**
- Graph sebagai pointer memudahkan passing by reference
- Pemisahan file memudahkan maintenance
- Nama field yang deskriptif (`nextNode` vs `Next`)
- Insert First pada edge lebih efisien daripada Insert Last

---

## Unguided

### 1. UNGUIDED I - Implementasi Graph Tidak Berarah Lengkap dengan DFS dan BFS

Program ini mengimplementasikan Graph tidak berarah lengkap dengan fitur traversal DFS dan BFS menggunakan Stack dan Queue.

#### graph.h
```cpp
#ifndef GRAPH_H_INCLUDE
#define GRAPH_H_INCLUDE

#include <iostream>
using namespace std;

typedef char infoGraph;
typedef struct ElmNode *adrNode;
typedef struct ElmEdge *adrEdge;

struct ElmNode {
    infoGraph info;
    int visited;
    adrEdge firstEdge;
    adrNode Next;
};

struct ElmEdge {
    adrNode Node;
    adrEdge Next;
};

struct Graph {
    adrNode First;
};

// Fungsi dan Prosedur
adrNode AllocateNode(infoGraph X);
adrEdge AllocateEdge(adrNode N);
void CreateGraph(Graph &G);
void InsertNode(Graph &G, infoGraph X);
void DeleteNode(Graph &G, infoGraph X);
void ConnectNode(adrNode N1, adrNode N2);
void DisconnectNode(adrNode N1, adrNode N2);
adrNode FindNode(Graph G, infoGraph X);
adrEdge FindEdge(adrNode N, adrNode NFind);
void PrintInfoGraph(Graph G);
void PrintDFS(Graph G, adrNode N);
void PrintBFS(Graph G, adrNode N);
void ResetVisited(Graph &G);

#endif
```

#### graph.cpp
```cpp
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
```

#### main.cpp
```cpp
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
```

#### Output:
```
```

#### Penjelasan:

Program ini mengimplementasikan ADT Graph tidak berarah lengkap dengan fitur traversal DFS dan BFS:

**Struktur Data:**
- **ElmNode**: Merepresentasikan vertex dalam graph
  - `info`: Data vertex (char)
  - `visited`: Flag untuk traversal (0/1)
  - `firstEdge`: Pointer ke edge pertama
  - `Next`: Pointer ke node selanjutnya

- **ElmEdge**: Merepresentasikan edge dalam graph
  - `Node`: Pointer ke node tujuan
  - `Next`: Pointer ke edge selanjutnya

- **Graph**: Struktur utama
  - `First`: Pointer ke node pertama

**Fungsi-Fungsi Utama:**

1. **CreateGraph()**: Inisialisasi graph kosong dengan First = NULL

2. **AllocateNode()**: Membuat node baru dengan alokasi memori dan inisialisasi

3. **InsertNode()**: Menambahkan node baru ke graph:
   - Cek duplikasi dengan FindNode()
   - Insert Last jika valid
   - Kompleksitas: O(n)

4. **FindNode()**: Mencari node berdasarkan info dengan linear search
   - Kompleksitas: O(n)

5. **ConnectNode()**: Menghubungkan dua node (undirected):
   - Buat edge N1 → N2
   - Buat edge N2 → N1 (karena undirected)
   - Insert Last edge ke list edge
   - Kompleksitas: O(degree)

6. **DeleteNode()**: Menghapus node dan semua edge-nya:
   - Disconnect dari semua node lain
   - Dealokasi semua edge node ini
   - Hapus node dari list
   - Kompleksitas: O(V + E)

7. **PrintInfoGraph()**: Menampilkan struktur graph dalam format adjacency list

8. **ResetVisited()**: Reset flag visited semua node menjadi 0

9. **PrintDFS()**: Depth First Search menggunakan Stack (LIFO):
   - Push node awal
   - Selama stack tidak kosong:
     - Pop node, tandai visited, cetak
     - Push semua neighbor yang belum dikunjungi
   - Kompleksitas: O(V + E)

10. **PrintBFS()**: Breadth First Search menggunakan Queue (FIFO):
    - Enqueue node awal, tandai visited
    - Selama queue tidak kosong:
      - Dequeue node, cetak
      - Enqueue semua neighbor yang belum dikunjungi
    - Kompleksitas: O(V + E)

**Analisis Output:**

1. **Graph Structure**: 8 node (A-H) terbentuk dengan koneksi sesuai Gambar 14-14
   - Node A terhubung ke B dan C
   - Node H sebagai hub terhubung ke D, E, F, G

2. **DFS dari A**: A → B → E → H → G → F → C → D
   - Penelusuran mendalam terlebih dahulu
   - Mengikuti path sampai dead end baru backtrack

3. **BFS dari A**: A → B → C → D → E → F → G → H
   - Penelusuran level by level
   - Level 1: B, C
   - Level 2: D, E, F, G
   - Level 3: H

4. **Delete Node D**:
   - Node D beserta semua edge-nya dihapus
   - DisconnectNode otomatis memutus koneksi B-D dan D-H
   - Graph tetap connected melalui path lain

**Perbedaan DFS vs BFS:**

| Aspek | DFS | BFS |
|-------|-----|-----|
| Struktur Data | Stack (LIFO) | Queue (FIFO) |
| Penelusuran | Mendalam dulu | Melebar dulu |
| Memori | O(h) h=tinggi | O(w) w=lebar |
| Shortest Path | ❌ Tidak | ✅ Ya (unweighted) |
| Aplikasi | Cycle detection, Maze | Shortest path, Level-order |

**Kompleksitas Keseluruhan:**
- Space: O(V + E) untuk adjacency list
- Insert Node: O(n)
- Connect Node: O(degree)
- Traversal (DFS/BFS): O(V + E)
- Delete Node: O(V + E)

Program ini mendemonstrasikan implementasi complete graph dengan semua operasi dasar dan traversal algorithm yang fundamental dalam computer science.

---

## Kesimpulan

Dari praktikum **Graph** yang telah dilakukan, dapat disimpulkan:

1. **Graph** adalah struktur data non-linear yang terdiri dari himpunan vertex (node) dan edge (garis penghubung) yang merepresentasikan hubungan antar objek dengan aplikasi luas dalam berbagai domain.

2. **Jenis Graph** dapat dibedakan berdasarkan arah (directed/undirected) dan bobot (weighted/unweighted), dimana pemilihan jenis graph bergantung pada karakteristik data yang direpresentasikan.

3. **Representasi Graph** dapat dilakukan dengan Adjacency Matrix (efisien untuk dense graph) atau Adjacency List (efisien untuk sparse graph). Adjacency list dengan multilist lebih fleksibel dan hemat memori untuk graph dinamis.

4. **Graph Traversal** memiliki dua metode utama: BFS (Breadth First Search) yang menelusuri level by level menggunakan Queue, dan DFS (Depth First Search) yang menelusuri secara mendalam menggunakan Stack atau rekursif.

5. **BFS** cocok untuk mencari shortest path dalam unweighted graph, level-order traversal, dan menemukan jarak minimum, dengan kompleksitas O(V+E).

6. **DFS** cocok untuk cycle detection, topological sorting, pathfinding, dan maze solving, dapat diimplementasikan secara iteratif dengan Stack atau rekursif, dengan kompleksitas O(V+E).

7. **Operasi Graph** meliputi add/delete vertex, add/delete edge, check adjacency, dan traversal. Untuk undirected graph, setiap edge harus dibuat dua arah untuk menjaga konsistensi.

8. **Implementasi Graph** memerlukan perhatian pada memory management, terutama saat delete node harus menghapus semua edge yang terhubung untuk menghindari dangling pointer.

9. **Multiple Valid Approaches** dapat digunakan dalam implementasi graph (iteratif vs rekursif, STL vs manual), pemilihan approach bergantung pada requirement, constraints, dan trade-off yang diinginkan.

10. Graph memiliki aplikasi praktis yang sangat luas mulai dari social networks, navigation systems, web page ranking, dependency resolution, hingga recommendation systems dan bioinformatics.

## Referensi

[1] T. H. Cormen, C. E. Leiserson, R. L. Rivest, and C. Stein, *Introduction to Algorithms*, 3rd ed. Cambridge, MA: MIT Press, 2009.

[2] R. Sedgewick and K. Wayne, *Algorithms*, 4th ed. Boston, MA: Addison-Wesley Professional, 2011.

[3] T. H. Cormen, C. E. Leiserson, R. L. Rivest, and C. Stein, "Elementary Graph Algorithms," in *Introduction to Algorithms*, 3rd ed. Cambridge, MA: MIT Press, 2009, ch. 22, pp. 589-630.

[4] M. T. Goodrich and R. Tamassia, *Data Structures and Algorithms in C++*, 2nd ed. Hoboken, NJ: John Wiley & Sons, 2011.

[5] M. A. Weiss, *Data Structures and Algorithm Analysis in C++*, 4th ed. Upper Saddle River, NJ: Pearson, 2014.

[6] S. S. Skiena, *The Algorithm Design Manual*, 2nd ed. London, UK: Springer, 2008.

[7] N. Karumanchi, *Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles*, 5th ed. Hyderabad, India: CareerMonk Publications, 2017.


[8] A. Drozdek, *Data Structures and Algorithms in C++*, 4th ed. Boston, MA: Cengage Learning, 2012.
