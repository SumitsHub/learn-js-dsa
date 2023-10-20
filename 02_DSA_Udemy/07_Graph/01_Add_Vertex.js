/** Graph class */
class Graph {
  // constructor initializing adjacency list with empty object
  constructor() {
    this.adjacencyList = {};
  }

  /** method to add vertex to the graph */
  addVertex(vertex) {
    // if vertex doesn't exist the add empty array for the vertex in the adjacency list
    // array will then store vertex connections with other vertices
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
