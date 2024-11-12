class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  /** Insert node with input value at the beginning of the list */
  unshift(value) {
    // create new node with input value
    let node = new Node(value);
    // check if empty list -> point head and tail to node
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      // establishing 2 way connection with current head of the list and the new node
      this.head.pev = node;
      node.next = this.head;
      // move head position to new node
      this.head = node;
    }

    this.length++;
    return this;
  }
}

let dll = new DoublyLinkedList(7);
dll.push(8);
dll.push(9);
dll.pop();
dll.unshift(6);
