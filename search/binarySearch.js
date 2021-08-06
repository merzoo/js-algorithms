Array.prototype.binarySearch = function (item) {
  // 先sort
  let l = 0;
  let r = this.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const element = this[mid];

    if (item > element) {
      l = mid + 1;
    } else if (item < element) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4];

console.log(arr.binarySearch(0));

console.log(11);
