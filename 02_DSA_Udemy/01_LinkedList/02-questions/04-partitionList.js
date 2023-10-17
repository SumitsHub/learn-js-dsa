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

  getLength() {
    console.log('Length: ' + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  partitionList(x) {
    // Approach - create 2 lists, one containing nodes with value less than x and second containing values greater than or equal to x, then combine both lists and point head to to the first list

    //  1. If the head of the list is null, return
    if (!this.head) return null;
    // 2. Create two dummy nodes with value 0 (dummy1 and dummy2)
    let dummy1 = new Node(0); // head pointer node to first list
    let dummy2 = new Node(0); // head pointer node to second list

    // 3. Initialize prev1 pointer to dummy1
    let prev1 = dummy1; // pointer to iterate through first list
    // 4. Initialize prev2 pointer to dummy2
    let prev2 = dummy2; // // pointer to iterate through second list

    // 5. Initialize current pointer to the head of the list
    let current = this.head; // pointer to iterate through current list

    // 6. Loop while current pointer is not null
    while (current !== null) {
      // a. if the value of the current node is less than x
      if (current.value < x) {
        // i. set the next of prev1 pointer to the current pointer
        prev1.next = current;
        // ii. Move prev1 pointer one step ahead in the 1st list
        prev1 = prev1.next;
      } // b. else if current.value >= x
      else {
        // i. Set the next of prev2 pointer to the current pointer
        prev2.next = current;
        // ii. Move prev2 pointer one step ahead in the 2nd list
        prev2 = prev2.next;
      }
      // Move current pointer one step ahead in the current list
      current = current.next;
    }
    // 7. Set the next of prev2 pointer to null -> ending the second list
    prev2.next = null;
    // 8. Set the next of prev1 pointer to the next of dummy2
    prev1.next = dummy2.next; // -> appending 2nd list to the 1st one
    // 9. Set the head of the list to the next of dummy1
    this.head = dummy1.next; // pointing head to new list's 2nd node as first node is dummy
  }
}

let myLinkedList = new LinkedList(3);
myLinkedList.push(5);
myLinkedList.push(8);
myLinkedList.push(5);
myLinkedList.push(10);
myLinkedList.push(2);
myLinkedList.push(1);

console.log('Original list:');
myLinkedList.printList();

const partitionValue = 5;
myLinkedList.partitionList(partitionValue);

console.log(`\nList after partitioning around ${partitionValue}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    3
    5
    8
    5
    10
    2
    1
    List after partitioning around 5:
    3
    2
    1
    5
    8
    5
    10
*/
