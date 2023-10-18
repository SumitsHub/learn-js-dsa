class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const node = new Node(value);
    this.first = node;
    this.last = node;
    this.length = 1;
  }

  /** insert element at the end of the queue */
  enqueue(value) {
    // create node with input value
    let node = new Node(value);

    // check if queue is empty
    if (this.length === 0) {
      this.first = this.last = node;
    } else {
      // set next of last to new node
      this.last.next = node;
      // move last pointer to node
      this.last = node;
    }

    this.length++;
    return this;
  }
}

let q = new Queue(1);
