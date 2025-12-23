#include "graph.h"

void createGraph(Graph &G) {
    G.first = NULL;
    G.totalNodes = 0;
}

void addNode(Graph &G, char id) {
    Node* newNode = new Node;
    newNode->id = id;
    newNode->isLockedDown = false; 
    newNode->visited = false;
    newNode->firstEdge = NULL;
    newNode->next = NULL;

    if (G.first == NULL) {
        G.first = newNode;
    } else {
        Node* temp = G.first;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
    G.totalNodes++;
}

Node* findNode(Graph G, char id) {
    Node* curr = G.first;
    while (curr != NULL) {
        if (curr->id == id) return curr;
        curr = curr->next;
    }
    return NULL;
}

void addEdge(Graph &G, char src, char dest) {
    Node* srcNode = findNode(G, src);
    Node* destNode = findNode(G, dest);

    if (srcNode != NULL && destNode != NULL) {
    
        Edge* newEdge1 = new Edge;
        newEdge1->dest = destNode;
        newEdge1->next = srcNode->firstEdge;
        srcNode->firstEdge = newEdge1;

        Edge* newEdge2 = new Edge;
        newEdge2->dest = srcNode;
        newEdge2->next = destNode->firstEdge;
        destNode->firstEdge = newEdge2;
    }
}

void resetVisited(Graph &G) {
    Node* curr = G.first;
    while (curr != NULL) {
        curr->visited = false;
        curr = curr->next;
    }
}

int countVisitedNodes(Graph G) {
    int count = 0;
    Node* curr = G.first;
    while (curr != NULL) {
    
        if (curr->visited && !curr->isLockedDown) {
            count++;
        }
        curr = curr->next;
    }
    return count;
}

void DFS(Node* curr) {
   
    if (curr == NULL || curr->visited || curr->isLockedDown) {
        return;
    }

    curr->visited = true;

    Edge* edge = curr->firstEdge;
    while (edge != NULL) {
      
        if (!edge->dest->visited && !edge->dest->isLockedDown) {
            DFS(edge->dest);
        }
        edge = edge->next;
    }
}

void printGraph(Graph G) {
    cout << "Membangun Jaringan Distribusi Vaksin" << endl;
    Node* curr = G.first;
    while (curr != NULL) {
        cout << "Node " << curr->id << " terhubung ke: ";
        Edge* edge = curr->firstEdge;
        while (edge != NULL) {
            cout << edge->dest->id << " ";
            edge = edge->next;
        }
        cout << endl;
        curr = curr->next;
    }
    cout << endl;
}

void analisisKotaKritis(Graph G) {
    cout << "Analisis Kota Kritis (Single Point of Failure)" << endl;
    
    Node* target = G.first;
    while (target != NULL) {
  
        target->isLockedDown = true;

        resetVisited(G);

        Node* startNode = G.first;
        if (startNode == target) {
            startNode = startNode->next; 
        }

            // 4. JALANKAN TRAVERSAL (Jika masih ada node tersisa)
        if (startNode != NULL) {
            DFS(startNode);
        }

        int visitedCount = countVisitedNodes(G);
        int expectedCount = G.totalNodes - 1;

        if (visitedCount < expectedCount) {
           
            cout << "[PERINGATAN] Kota " << target->id << " adalah KOTA KRITIS!" << endl;
            cout << " -> Jika " << target->id << " lockdown, distribusi terputus." << endl;
        } else {
            cout << "Kota " << target->id << " aman (redundansi oke)." << endl;
        }

        target->isLockedDown = false;
        
        target = target->next;
    }
}