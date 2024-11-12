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

  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.head.pev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  /** Remove first node from the list */
  shift() {
    // check for empty list
    if (!this.head) return undefined;

    // temporary reference to current head of the list
    let temp = this.head;
    // check for list with single element
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      // point head to next element of the list
      this.head = temp.next;
      // set prev pointer to null
      this.head.prev = null;
      // set temp pointer's next to null
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}

let dll = new DoublyLinkedList(7);

dll.push(8);
dll.push(9);

dll.shift();
