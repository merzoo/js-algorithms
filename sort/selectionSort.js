Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length; i++) {
    const temp = this[i];
    let minIndex = i;

    for (let j = i; j < this.length; j++) {
      if (this[j] < temp) {
        minIndex = j;
      }
    }

    this[i] = this[minIndex];
    this[minIndex] = temp;
  }
};

const arr = [5, 4, 3, 2, 1];

arr.selectionSort();

console.log(arr); // [1,2,3,4,5]  o(n^2)
