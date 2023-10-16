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

  /** Print list with arrow(>) separated values */
  print() {
    if (!this.head) return '';
    let temp = this.head;
    let output = '';
    while (temp.next) {
      output += temp.value + ' > ';
      temp = temp.next;
    }
    output += temp.value;
    return output;
  }

  getListFromIndex(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    // temp.next = null;
    return temp;
  }

  // insert(index, value) {
  //     if (index < 0 || index > this.length) return false;
  //     if (index === 0) return this.unshift(value);
  //     if (index === this.length) return this.push(value);
  //     let temp = this.getListFromIndex(index-1);
  //     let newNode = new Node(value);
  //     newNode.next = temp.next;
  //     temp.next = newNode;
  //     this.length++;
  //     return true;
  // }

  /** remove node at specified index */
  remove(index) {
    // for invalid index input
    if (index < 0 || index > this.length - 1) return false;

    // removing starting node
    if (index === 0) return this.shift();

    // removing last node
    if (index === this.length - 1) return this.pop();

    // get list from previous index node
    let prev = this.getListFromIndex(index - 1);
    let temp = prev.next; // current index node

    // set previous node's index to current node's index
    prev.next = temp.next;
    temp.next = null; // setting next to null since returning removed index
    this.length--;

    return temp;
  }
}

let ll = new LinkedList(4);
ll.push(5);

ll.print();
