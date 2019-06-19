class LinkedList {
  constructor() {
    this.head = null;
  }

  insertNode(e) {
    const node = {
      data: e,
      next: null,
    };

    if (!this.head) {
      this.head = node;
      return;
    }

    let p1 = this.head;
    while (p1.next) {
      p1 = p1.next;
    }
    p1.next = node;
  }

  deleteNode(e) {
    if (!this.head) {
      console.log('this list is empty!');
      return;
    }
    if (this.head.data === e) {
      this.head = this.head.next;
    }
    let p1 = this.head;
    let p2 = this.head.next;
    while (p2) {
      if (p2.data === e) {
        p1.next = p2.next;
      } else {
        p1 = p2;
      }
      p2 = p2.next;
    }
  }

  clear() {
    this.head = null;
  }
}

var listA = new LinkedList();
var listB = new LinkedList();

var testA = [1, 2, 3];
var testB = [3, 4, 5];

testA.forEach(e => listA.insertNode(e));
// listA.deleteNode(1);
testB.forEach(e => listA.insertNode(e));

const merge = (l1, l2) => {
  if (!l1.head) {
    return l2;
  }
  if (!l2.head) {
    return l1;
  }
  let p1 = l2.head;
  const nodes = [];

  while (p1) {
    nodes.push(p1.data);
    p1 = p1.next;
  }
  nodes.forEach(e => l1.insertNode(e));
}
merge(listA, listB);

const removeDuplicate = (list) => {
  if (!list.head || !list.head.next) {
    console.log('this is a empty or single list!');
    return;
  }
  let p1 = list.head;
  let p2 = list.head.next;
  const res = {};
  res[p1.data] = true;

  while(p2) {
    if (res[p2.data]) {
      p1.next = p2.next;
    } else {
      p1 = p2;
      res[p1.data] = true;
    }
    p2 = p2.next;
  }
}
removeDuplicate(listA);

const reverse = (list) => {
  if (!list.head || !list.head.next) {
    console.log('rev: this is a empty or single list!');
    return list;
  }
  let p1 = list.head;
  const nodes = [];

  while (p1) {
    nodes.push(p1.data);
    p1 = p1.next;
  }
  list.head = list.clear();
  nodes.reverse();
  nodes.forEach(e => list.insertNode(e));
  return list;
}

reverse(listA);
console.log(listA);
