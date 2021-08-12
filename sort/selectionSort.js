Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    const temp = this[i];
    let minIndex = i;

    for (let j = i + 1; j < this.length; j++) {
      if (this[j] < temp) {
        minIndex = j;
      }
    }

    this[i] = this[minIndex];
    this[minIndex] = temp;
  }
};

const arr = [5, 4, 3, 2, 1, 7];

arr.selectionSort();

console.log(arr); // [1,2,3,4,5]  o(n^2)
