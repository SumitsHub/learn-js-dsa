class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null');
    } else {
      console.log('Head: ' + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log('Tail: null');
    } else {
      console.log('Tail: ' + this.tail.value);
    }
  }

  getLength() {
    console.log('Length: ' + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  hasLoop() {
    // Initialize slow and fast pointers at head
    let slow = this.head;
    let fast = this.head;

    // Iterate through the list
    while (fast !== null && fast.next !== null) {
      // move slow pointer one step
      slow = slow.next;
      // move fast pointer two steps
      fast = fast.next.next;

      // if slow pointer and fast pointer meets, loop exists
      if (slow === fast) return true;
    }
    // if no loop found return false
    return false;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log('Original list:');
myLinkedList.printList();

const hasLoopResult = myLinkedList.hasLoop();
console.log(`\nHas loop? ${hasLoopResult}`);

// Create a loop for testing purposes
myLinkedList.tail.next = myLinkedList.head.next; // Create a loop by linking tail to the second node

const hasLoopResultAfterLoop = myLinkedList.hasLoop();
console.log(`\nHas loop after creating a loop? ${hasLoopResultAfterLoop}`);

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Has loop? false
    Has loop after creating a loop? true
*/
