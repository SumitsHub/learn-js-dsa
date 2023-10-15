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
  pop() {
    // check for empty list
    if (!this.head) {
      return undefined;
    } else {
      // pre - for storing previous value, temp - for storing next value
      let pre = this.head,
        temp = this.head;
      // iterating through list using while loop
      while (temp.next) {
        // if there is next node, store current node to pre
        pre = temp;
        // move to next node
        temp = temp.next;
      }
      // assign second last node to tail of the list
      this.tail = pre;
      // set next of tail to null
      this.tail.next = null;
      // decrement the length by 1
      this.length--;
      // check for list with single item
      if (this.length === 0) {
        // set both head and tail to null
        this.head = null;
        this.tail = null;
      }
      // return removed element
      return temp;
    }
  }

  /** insert node at the start of the list */
  unshift(value) {
    // create new node with value
    let node = new Node(value);

    // check for empty list
    if (!this.head) {
      // assign node to both head and tail
      this.head = node;
      this.tail = node;
    } else {
      // assign head to next of the new node
      node.next = this.head;
      // point head to the new node
      this.head = node;
    }
    // increment the length by 1 and return the current list
    this.length++;

    return this;
  }
}

let ll = new LinkedList(4);
ll.push(5);

ll.unshift(3);
