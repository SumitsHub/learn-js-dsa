/** Node class to store nodes in (Queue) linked list */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/** Queue class -> create one node with input value and 2 pointers to hold start and end nodes */
class Queue {
  constructor(value) {
    const node = new Node(value);
    this.first = node;
    this.last = node;
    this.length = 1;
  }
}

let q = new Queue(1);
