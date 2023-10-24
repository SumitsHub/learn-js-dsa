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

  /** Print list with arrow(>) separated values */
  print() {
    if (!this.head) return '';
    let temp = this.head;
    let output = '';
    // iterate through the list
    while (temp.next) {
      // add value of each node to the output string
      output += temp.value + ' > ';
      temp = temp.next;
    }
    // add value of the last node (tail node of the list)
    output += temp.value;
    return output;
  }
}

let ll = new LinkedList(4);
ll.push(5);

ll.printList();
