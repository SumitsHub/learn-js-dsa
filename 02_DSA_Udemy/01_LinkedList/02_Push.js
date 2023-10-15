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

  /** Adding node to the end of the linked list */
  push(value) {
    // creating new node
    const node = new Node(value);

    // check if linked list is empty
    if (!this.head) {
      // assign new node to head and tail both
      this.head = node;
      this.tail = node;
    } else {
      // add node to next of tail
      this.tail.next = node;
      // assign new node to tail
      this.tail = node;
    }

    // increment length of the list
    this.length++;
    // return current list
    return this;
  }
}

let ll = new LinkedList(4);
ll.push(5);
