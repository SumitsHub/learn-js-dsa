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

  /** search if node with input value exists in the BST */
  contains(value) {
    // check for empty BST
    if (this.root === null) return false;

    // temp pointer for tree traversal
    let temp = this.root;

    // while node exists
    while (temp) {
      // check if value matches with the current node
      if (temp.value === value) return true;
      // else traverse to left or right based on searched value
      else if (value < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }
    // finally return false
    return false;
  }
}

let bst = new BST();
bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(18);

bst.insert(52);
bst.insert(82);
