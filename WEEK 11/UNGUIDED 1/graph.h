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