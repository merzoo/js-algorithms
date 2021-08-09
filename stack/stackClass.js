class Stack {
  constructor(data) {
    this.data = data || [];
  }

  push() {
    this.data.push();
  }

  peek() {
    return this.data[0];
  }

  pop() {
    return this.data.pop();
  }

  empty() {
    return this.data.length === 0;
  }
}
