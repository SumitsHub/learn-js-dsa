class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const node = value ? new Node(value) : null;
    this.top = node;
    this.length = value ? 1 : 0;
  }

  /** push method to add elements in the Stack */
  // NOTE - Elements can be added only at start of the Stack
  push(value) {
    // create node with given value
    let node = new Node(value);
    // add reference of top of the stack to next of the new node
    node.next = this.top;

    // new node becomes the top -> FIFO
    this.top = node;

    this.length++;
    return this;
  }
}

let myStack = new Stack(null);

myStack.push(1);
myStack.push(2);
