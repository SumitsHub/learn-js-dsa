class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      );

      return true;
    }
    return false;
  }

  /** remove the vertex from the graph */
  removeVertex(vertex) {
    // check if vertex exists
    if (this.adjacencyList[vertex]) {
      // while adjacency list of vertex have vertices
      while (this.adjacencyList[vertex].length) {
        // get vertex connected to current vertex which will be removed
        let temp = this.adjacencyList[vertex].pop();

        // remove the edge with that vertex and current vertex
        this.removeEdge(vertex, temp);
      }
      // deleting the entry of the vertex
      delete this.adjacencyList[vertex];

      // returning this graph
      return this;
    }
    return false;
  }
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

graph.removeVertex('D');
