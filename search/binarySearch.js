Array.prototype.binarySearch = function (item) {
  let start = 0;
  let end = this.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const element = this[mid];

    if (item < element) {
      end = mid - 1;
    } else if (item > element) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

const arr = [1, 2, 3, 4];

console.log(arr.binarySearch(0));
