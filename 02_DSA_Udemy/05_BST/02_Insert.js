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

  /** inserting node with input value into BST */
  insert(value) {
    // create new node with input value
    let node = new Node(value);

    // if tree is empty
    if (this.root === null) {
      this.root = node;
      return this;
    }

    // temp pointer to root -> for traversal
    let temp = this.root;

    while (true) {
      // check if value already exists -> duplicate not allowed -> return undefined
      if (node.value === temp.value) return undefined;
      // traverse left tree if input value is less that current node value else traverse right
      if (node.value < temp.value) {
        // if there is no left node -> attach the new node
        if (temp.left === null) {
          temp.left = node;
          return this;
        }
        // move to next node in left
        temp = temp.left;
      } else {
        // if there is no node on right of the current node -> attach the new node
        if (temp.right === null) {
          temp.right = node;
          return this;
        }
        // move to the next right node
        temp = temp.right;
      }
    }
  }
}

let bst = new BST();
bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(18);

bst.insert(52);
bst.insert(82);

/* 
        47
        /  \
      21  76
      /\   /\
     18 -  52 82
     
*/

// bst.insert(27)
