const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        { val: "d", children: [] },
        { val: "e", children: [] },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

const bfs = (tree) => {
  const q = [tree];
  while (q.length > 0) {
    const node = q.shift();
    console.log(node.val);
    node.children.forEach((item) => q.push(item));
  }
};

bfs(tree);
