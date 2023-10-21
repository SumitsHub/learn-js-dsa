class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return this;
    }

    let temp = this.root;
    while (true) {
      if (node.value === temp.value) return undefined;
      if (node.value < temp.value) {
        if (temp.left === null) {
          temp.left = node;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = node;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  BFS() {
    let currentNode = this.root;

    let results = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  /**
   * Depth First Search (DFS) - In Order
   * In Order: Left -> Root -> Right
   *
   * @returns array of node values In Order -> in accending order for BST
   */
  DFSInOrder() {
    let results = [];
    function traverse(currentNode) {
      // traverse the tree in left
      if (currentNode.left) traverse(currentNode.left);
      // push the node value
      results.push(currentNode.value);
      // traverse the tree in right
      if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root);
    return results;
  }
}

let bst = new BST();
bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(18);
bst.insert(27);
bst.insert(52);
bst.insert(82);

bst.DFSInOrder();
// [18, 21, 27, 47, 52, 76, 82]
