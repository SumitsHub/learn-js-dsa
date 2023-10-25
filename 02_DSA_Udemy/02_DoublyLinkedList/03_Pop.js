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

  /** Remove the last node from the list */
  pop() {
    // check for empty list
    if (!this.head) return undefined;

    // temp pointer to hold referance of last node -> will be used to return the node
    let temp = this.tail;
    // checking for the list with single element
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      // pointing tail of the list to 2nd last node and set next to null
      this.tail = temp.prev;
      this.tail.next = null;
      // remove prev of the tail
      temp.prev = null;
    }

    this.length--;
    return temp; // return removed element
  }
}

let dll = new DoublyLinkedList(7);
dll.push(8);
dll.push(9);
dll.pop();
