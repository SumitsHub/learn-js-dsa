class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.head.pev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (!temp) return false;
    temp.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    let node = new Node(value);
    let before = this.get(index - 1);
    let after = before.next;

    node.prev = before;
    node.next = after;
    before.next = node;
    after.prev = node;

    this.length++;
    return true;
  }

  /** remove element at the specified index */
  remove(index) {
    // handling edge cases -> start, end, invalid index
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return false;

    // get current element and before and after current
    let current = this.get(index);
    let before = current.prev;
    let after = current.next;

    // adjust prev and next of before and after
    before.next = after;
    after.prev = before;

    // set prev and next of current to null
    current.next = current.prev = null;

    this.length--;
    return current;
  }

  printList(reverse = false) {
    let temp = reverse ? this.tail : this.head;
    let output = "";

    while ((!reverse && temp.next) || (reverse && temp.prev)) {
      output += temp.value + " > ";
      temp = reverse ? temp.prev : temp.next;
    }
    output += temp.value;
    console.log(output);
  }
}

let dll = new DoublyLinkedList(0);

dll.push(1);
dll.push(2);
dll.push(3);

dll.insert(0, 10);
dll.insert(1, 11);

dll.printList();
dll.printList(true);