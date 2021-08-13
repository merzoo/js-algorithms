class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }
  // ok
  push(val) {
    const node = new Node(val);

    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }
  // ok
  getElementAt(index) {
    if (index < 0 || index > this.count) return;

    if (index === 0) {
      return this.head;
    } else {
      let current = this.head;
      let i = 0;
      while (current) {
        if (i === index) return current;
        current = current.next;
        i++;
      }
    }
  }
  // ok
  indexOf(val) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.val === val) return i;
      current = current.next;
      i++;
    }

    return -1;
  }
  remove(val) {
    const index = this.indexOf(val);
    return this.removeAt(index);
  }
  // ok
  removeAt(index) {
    if (index < 0 || index > this.count) return;
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }

    return current.val;
  }
  // ok
  insert(val, index) {
    if (index < 0 || index > this.count) return;
    const node = new Node(val);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      previous.next = node;
      node.next = current;
    }

    this.count++;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getHead() {
    return this.head;
  }
  toString() {
    if (this.getHead() == null) {
      return "";
    }
    let objString = `${this.head.val}`;
    let current = this.head.next;

    while (current) {
      objString += "," + current.val;
      current = current.next;
    }

    return objString;
  }
}

// test case
const list = new LinkedList();

list.push(1);
list.push(2);

console.log(list); // 1 2
console.log(list.getElementAt(1)); // Node { element: 2, next: undefined }
console.log(list.indexOf(2)); // 1

list.insert(7, 0);

console.log(list); // 7 1 2

console.log(list.getElementAt(2)); // Node { element: 2, next: undefined }

console.log(list.remove(7)); // 7

console.log(list.toString()); // 1,2
