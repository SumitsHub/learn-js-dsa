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

  /** method to get list starting from specified index */
  getListFromIndex(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    // temp.next = null; -> not setting next to null as we want complete list starting from index
    return temp;
  }

  /** set/update value of the node specified at index */
  set(index, value) {
    // retrive node at specified index
    let temp = this.getListFromIndex(index);
    if (temp) {
      // change the value of that node
      temp.value = value;
      return true;
    }
    return false;
  }
}

let ll = new LinkedList(4);
ll.push(5);
