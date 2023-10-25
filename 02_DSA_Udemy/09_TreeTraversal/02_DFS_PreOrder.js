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
   * Depth First Search (DFS) - PreOrder
   * Pre Order: Root -> Left -> Right
   *
   * Root first
   */
  DFSPreOrder() {
    // array to store node values
    let results = [];
    // function to traverse tree
    function traverse(currentNode) {
      // push current node value then traverse left then traverse right
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    // start traversing from root node
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

bst.DFSPreOrder();
// [47, 21, 18, 27, 76, 52, 82]

/**
 *      [47]
 *   [21]     [76]
 * [18, 27] [52, 82]
 */
