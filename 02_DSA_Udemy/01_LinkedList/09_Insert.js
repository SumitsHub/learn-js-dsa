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

  /** function to get list from specified index */
  getListFromIndex(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    // temp.next = null;
    return temp;
  }

  /** insert node at specified index */
  insert(index, value) {
    // return false for invalid index
    if (index < 0 || index > this.length) return false;

    // if inserting at 1st position use unshift() to insert
    if (index === 0) return this.unshift(value);

    // if inserting at last index use push to insert
    if (index === this.length) return this.push(value);

    // get list starting from index - 1, previous node
    let temp = this.getListFromIndex(index - 1);
    // create new node
    let newNode = new Node(value);

    // set new node next to previous(index - 1) node's next
    newNode.next = temp.next;
    // set previous node's next to new node
    temp.next = newNode;

    this.length++;
    return true;
  }
}

let ll = new LinkedList(4);
ll.push(5);

ll.print();
