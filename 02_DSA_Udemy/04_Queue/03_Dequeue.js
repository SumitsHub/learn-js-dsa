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
    // store first pointer reference
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

  printQueue() {
    let temp = this.first;
    let output = "";
    while (temp.next) {
      output += temp.value + " > ";
      temp = temp.next;
    }
    output += temp.value;
    console.log(output);
  }
}

let q = new Queue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

q.printQueue();

q.dequeue();
q.dequeue();
q.printQueue();
