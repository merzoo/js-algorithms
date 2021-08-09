Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    let temp = this[i];
    let j = i;

    while (j > 0) {
      if (temp < this[j - 1]) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j--;
    }

    this[j] = temp;
  }
};

const arr = [5, 4, 3, 2, 1];
arr.insertionSort();

console.log(arr);
