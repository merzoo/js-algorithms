// 数组去重
const arr = [1, 2, 3, 4, 4, 4];
const distinctArr = [...new Set(arr)];
console.log(distinctArr); // [1,2,3,4]

// 判断 item 是在存在与集合
const set = new Set(arr);
const has = set.has(1);
console.log(has); // true

// 求交集
const set2 = new Set([2, 3]);
const intersection = new Set([...set].filter((item) => set2.has(item)));
console.log(intersection); // Set(2) { 2, 3 }

// 求差集
const difference = new Set([...set].filter((item) => !set2.has(item)));
console.log(difference); // Set(2) { 1, 4 }

// 迭代set
for (let item of set) {
  console.log(item);
}

for (let item of set.keys()) {
  console.log(item);
}

for (let [key, value] of set.entries()) {
  console.log(key === value); // true
}

// set转数组
console.log(Array.from(set)); // [1,2,3,4]
console.log([...set]); // [1,2,3,4]
