Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const l = arr.slice(0, mid);
    const r = arr.slice(mid);

    const orderLeft = rec(l);
    const orderRight = rec(r);
    const res = [];

    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else {
        res.push(orderRight.shift());
      }
    }

    return res;
  };

  const res = rec(arr);
  res.forEach((item, i) => (this[i] = item));
};

const arr = [5, 4, 3, 2, 1];

arr.mergeSort();

console.log(arr);
