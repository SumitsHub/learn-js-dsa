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

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }

  /** Get list starting from the index (starting from 0) */
  get(index) {
    // check for invalid input index
    if (index < 0 || index >= this.length) return undefined;

    // temp reference to the head for traversing the list
    let temp = this.head;

    // for first half of the list -> traverse from start to next
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      // for second half list -> traverse from back to prev
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }
}

let dll = new DoublyLinkedList(0);

dll.push(1);
dll.push(2);
dll.push(3);

dll.get(0);
