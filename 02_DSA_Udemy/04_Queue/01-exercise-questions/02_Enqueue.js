class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  printQueue() {
    let temp = this.first;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getFirst() {
    if (this.first === null) {
      console.log('First: null');
    } else {
      console.log('First: ' + this.first.value);
    }
  }

  getLast() {
    if (this.last === null) {
      console.log('Last: null');
    } else {
      console.log('Last: ' + this.last.value);
    }
  }

  getLength() {
    console.log('Length: ' + this.length);
  }

  makeEmpty() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }
}

let myQueue = new Queue(2);

console.log('Before enqueue():');
console.log('--------------');
myQueue.getFirst();
myQueue.getLast();
myQueue.getLength();

console.log('\nQueue:');
myQueue.printQueue();

myQueue.enqueue(1);

console.log('\n\nAfter enqueue():');
console.log('-------------');
myQueue.getFirst();
myQueue.getLast();
myQueue.getLength();

console.log('\nQueue:');
myQueue.printQueue();

/*
    EXPECTED OUTPUT:

    Before enqueue():
    --------------
    First: 2
    Last: 2
    Length: 1

    Queue:
    2


    After enqueue():
    -------------
    First: 2
    Last: 1
    Length: 2

    Queue:
    2
    1

*/
