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

  /** get node at particular index */
  get(index) {
    // check for valid index
    if (index < 0 || index > this.length - 1) return undefined;
    // temp pointer to iterate through the list
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    // DANGER - setting next of temp to null will also affect the original list node it's referencing
    // temp.next = null;
    // to avoid change in original list and return node with value without having reference to rest of the list, do following way
    temp = new Node(temp.value);
    return temp;
  }
}

let ll = new LinkedList(4);
ll.push(5);
