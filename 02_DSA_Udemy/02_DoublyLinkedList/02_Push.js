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

  /** Push node with input value at the end of the DLL */
  push(value) {
    // create new node
    const node = new Node(value);
    // check for empty list
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      // set next pointer of the tail to new node
      this.tail.next = node;
      // previous of new node to current tail
      node.prev = this.tail;
      // shift tail to the attached new node
      this.tail = node;
    }

    // decrease length of the list
    this.length++;
    return this;
  }
}

let dll = new DoublyLinkedList(7);
dll.push(8);
dll.push(9);
