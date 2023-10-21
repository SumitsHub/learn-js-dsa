/** Breadth First Search - BFS */
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
   * BST method to traverse tree using Breadth First Search
   *
   * @output array of node values traversed
   */
  BFS() {
    // pointer to root node -> starting point of the traversal
    let currentNode = this.root;

    // array to store node values in traversal order
    let results = [];
    // array to hold(temporary) current node while traversal
    let queue = [];

    // push current node
    queue.push(currentNode);

    // continue untill queue has elements
    while (queue.length) {
      // get first node from the queue
      currentNode = queue.shift();
      // add value of the node to results array
      results.push(currentNode.value);

      // if there are left/right nodes push to the queue
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
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

bst.BFS();
// [47, 21, 76, 18, 27, 52, 82]
