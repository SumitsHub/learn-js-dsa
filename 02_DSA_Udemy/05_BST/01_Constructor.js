/** BST node - contains value, and pointer to it's left and right */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/** BST class - initializes tree root to null */
class BST {
  constructor() {
    this.root = null;
  }
}

// create new BS Tree
let bst = new BST();
