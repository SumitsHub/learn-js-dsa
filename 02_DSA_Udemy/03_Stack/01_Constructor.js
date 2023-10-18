/** Node class with value and next properties */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/** Stack class with top pointer and length property */
class Stack {
  constructor(value) {
    const node = new Node(value);
    this.top = node;
    this.length = 1;
  }
}

let myStack = new Stack(1);

// NOTE - Stack supports only First In Last Out (FILO) OR Last In First Out (LIFO)
