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
  /**
   * Depth First Search (DFS) - PostOrder
   * Post Order: Left -> Right -> Root
   *
   * Root last
   */
  DFSPostOrder() {
    // array to store traversed node values
    let results = [];
    // function to traverse nodes
    function traverse(currentNode) {
      // traverse left and right
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);

      // push value of node if left and right is null
      results.push(currentNode.value);
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

bst.DFSPostOrder();
// [18, 27, 21, 52, 82, 76, 47]
