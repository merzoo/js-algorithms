Array.prototype.sequentialSearch = function (n) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === n) {
      return i;
    }
  }
  return -1;
};

// test case
const arr = [1, 2, 3, 4, 5];
const res = arr.sequentialSearch(2);
const res2 = arr.sequentialSearch(8);
