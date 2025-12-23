#include <iostream>
#include "graph.h"

using namespace std;

int main() {
    Graph G;
    createGraph(G);

    addNode(G, 'A');
    addNode(G, 'B');
    addNode(G, 'C');
    addNode(G, 'D');
    addNode(G, 'E');
    
    addEdge(G, 'A', 'B');  
    addEdge(G, 'C', 'B'); 
    addEdge(G, 'E', 'B');  
    addEdge(G, 'D', 'C');  

    printGraph(G);

    analisisKotaKritis(G);

    return 0;
}
