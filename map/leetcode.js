// 数组求交集
const intersection = (nums1, nums2) => {
  const map = new Map();

  nums1.forEach((item) => {
    map.set(item, true);
  });

  const result = [];
  nums2.forEach((item) => {
    if (map.has(item)) {
      result.push(item);
      map.delete(item); // 记得删除字典里的item
    }
  });

  return result;
};
