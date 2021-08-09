class Queue {
  constructor(data) {
    this.data = data || [];
  }

  push() {
    this.data.push();
  }

  pop() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  length() {
    return this.data.length;
  }

  empty() {
    return this.data.length === 0;
  }
}
