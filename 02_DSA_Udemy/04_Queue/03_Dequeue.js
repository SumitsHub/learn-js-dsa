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

  enqueue(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  /** remove element from the start of queue */
  dequeue() {
    // if empty queue
    if (!this.first) {
      return undefined;
    }
    // store first pointer referance
    let temp = this.first;

    // move first to next node
    this.first = temp.next;

    // remove temp node's pointer
    temp.next = null;

    this.length--;
    // check if queue becomes empty -> set last to null
    if (this.length === 0) {
      this.last = null;
    }

    return temp;
  }
}

let q = new Queue(1);
