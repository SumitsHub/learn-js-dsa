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

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  /** reverse the linked list */
  reverse() {
    // swapping head and tail node
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    // variables to store previous node and next node
    let prev = null;
    let next = temp.next;

    // iterate through list
    for (let i = 0; i < this.length; i++) {
      // store reference of the next node
      next = temp.next;
      // assign current node next to previous node -> reversing pointer in backward direction
      temp.next = prev;
      // assign previous node to current node
      prev = temp;
      // move to next node -> change current node to next node
      temp = next;
    }
    return this;
  }
}

function main() {
  let ll = new LinkedList(1);
  ll.push(2);
  ll.push(3);
  ll.push(4);
  ll.printList();
  ll.reverse();
  ll.printList();
}

main();
