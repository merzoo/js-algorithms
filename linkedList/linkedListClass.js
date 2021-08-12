function defaultEquals(a, b) {
  return a === b;
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
  push(element) {
    const node = new Node(element);
    let current = this.head;

    if (current == null) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  insert(element, index) {
    const node = new Node(element);
    if (index < 0 || index > this.count) return;

    if (index == 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      previous.next = node;
      node.next = current;
    }
    this.count++;
  }
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  removeAt(index) {
    // 检查越界值
    if (index < 0 || index > this.count) return;
    let current = this.head;

    // 移除第一项
    if (index === 0) {
      this.head = current.next;
    } else {
      let previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }

    this.count--;

    return current.element;
  }
  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  getElementAt(index) {
    if (index < 0 || index > this.count) return;

    let current = this.head;
    let i = 0;
    while (current) {
      if (i === index) return current;
      current = current.next;
      i++;
    }
    return;
  }

  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count;
  }
  getHead() {
    return this.head;
  }
  toString() {
    if (this.getHead() == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;

    while (current) {
      objString += "," + current.element;
      current = current.next;
    }

    return objString;
  }
}

const list = new LinkedList();

list.push(1);
list.push(2);

console.log(list);
console.log(list.getElementAt(1));
console.log(list.indexOf(2));

list.insert(7, 0);

console.log(list);

console.log(list.getElementAt(2));

// console.log(list.remove(7));

console.log(list.toString());
