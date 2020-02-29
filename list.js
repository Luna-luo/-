const createNode = value => {
  return {
    data: value,
    next: null
  };
};

const createList = value => {
  return createNode(value);
};

const appendList = (list, value) => {
  const node = createNode(value);
  let x = list;
  while (x.next) {
    //确认x是最后一个节点
    x = x.next;
  }
  x.next = node;
  return node;
};
const removerFromList = (list, node) => {
  let x = list;
  let p = node;
  while (x !== node && x !== null) {
    p = x;
    x = x.next;
  }
  if (x === null) {
    return false;
  } else if (x === p) {
    p = x.next;
    return p;
  } else {
    p.next = x.next;
    return list; //如果删除的不是第一个节点，返回原来的list即可
  }
};

const travelList = (list, fn) => {
  let x = list;
  while (x !== null) {
    fn(x);
    x = x.next;
  }
};

const list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
travelList(list, node => {
  console.log(node.data);
});
console.log("list");
console.log(list);
