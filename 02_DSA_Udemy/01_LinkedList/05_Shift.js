class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /** remove element from start of the list */
  shift() {
    // if empty list return undefined
    if (!this.head) return undefined;

    // temp variable to store head node in order to return removed node
    let temp = this.head;
    // head's next will be the new head
    this.head = this.head.next;
    // setting next of temp to null as it currenlty holds whole linked list
    temp.next = null;
    this.length--;
    // check for single element
    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }
}

let ll = new LinkedList(4);
ll.push(5);
