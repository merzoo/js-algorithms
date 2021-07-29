Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let minIndex = i;

    for (let j = i; j < this.length; j++) {
      if (this[minIndex] > this[j]) {
        minIndex = j;
      }
    }

    const temp = this[i];
    this[i] = this[minIndex];
    this[minIndex] = temp;
  }
};

const arr = [5, 4, 3, 2, 1];

arr.selectionSort();

console.log(arr); // [1,2,3,4,5]  o(n^2)
