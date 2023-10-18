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

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length++;

    return this;
  }

  /** remove the element from the stack */
  pop() {
    // check for empty list
    if (this.length === 0) {
      return undefined;
    }

    // create temp variable to store the current top node
    let temp = this.top;

    // move top to next node -> removing 1st node
    this.top = temp.next;
    // remove the link from temp variable -> as it is pointing to complete stack
    temp.next = null;

    this.length--;

    return temp;
  }
}

let myStack = new Stack(null);

myStack.push(1);
myStack.push(2);
