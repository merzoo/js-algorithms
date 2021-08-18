// 字典：键值对
const m = new Map();

// 新增
m.set("a", "1");
m.set("b", "2");

//删除
m.delete("b");

// 清空
// m.clear()

// 改
m.set("a", "9");

console.log(m.get("a")); // 9
