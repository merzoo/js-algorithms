const a = { value: "a" };
const b = { value: "b" };
const c = { value: "c" };
const d = { value: "d" };

a.next = b;
b.next = c;
c.next = d;

console.log(a);

// 遍历链表
let pointer = a;

while (pointer) {
  console.log(pointer.value);
  pointer = pointer.next;
}

// 插入链表元素 在b,c之间加入e
const e = { value: "e" };
b.next = e;
e.next = c;

// 删除链表元素, 删除b
a.next = c;
console.log(a);
