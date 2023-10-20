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

  /** add an edge to the graph */
  addEdge(vertex1, vertex2) {
    // if both vertex exists
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // add connection of vertex1 with vertex2
      this.adjacencyList[vertex1].push(vertex2);
      // add connection of vertex2 with vertex1
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');

graph.addEdge('A', 'B');
