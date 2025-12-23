#ifndef GRAPH_H
#define GRAPH_H

#include <iostream>
using namespace std;

struct Edge; 

struct Node {
    char id;           
    bool isLockedDown;  
    bool visited;      
    
    Edge* firstEdge;    
    Node* next;         
};

struct Edge {
    Node* dest;         
    Edge* next;         
};

struct Graph {
    Node* first;        
    int totalNodes;     
};

void createGraph(Graph &G);
void addNode(Graph &G, char id);
void addEdge(Graph &G, char src, char dest);
Node* findNode(Graph G, char id);


void resetVisited(Graph &G);
void DFS(Node* startNode);
int countVisitedNodes(Graph G);

void printGraph(Graph G);
void analisisKotaKritis(Graph G);

#endif