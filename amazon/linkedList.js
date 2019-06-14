class LinkedList {
  constructor() {
    this.head = null;
  }

  insertNode(e) {
    const node = { data: e, next: null };
    if (!this.head) {
      this.head = node;
    } else {
      let p1 = this.head;
      while (p1.next) {
        p1 = p1.next;
      }
      p1.next = node;
    }
  }

  deleteNode(e) {
    if (!this.head) {
      console.log('this link is empty!')
      return;
    }

    if (this.head.data === e ) {
      this.head = this.head.next;
    } else {
      let p1 = this.head;
      let p2 = p1.next;
      while (p2) {
        if (p2.data === e) {
          p1.next = p2.next;
        } else {
          p1 = p2;
        }
        p2 = p2.next;
      }
    }
  }
}

const test = [1, 2, 3, 3, 4, 5, 6, 7, 11, 12, 12, 15, 16, 17];

const head = new LinkedList();

test.forEach(e => {
  head.insertNode(e);
});
console.log(head);

const removeDuplicate = (link) => {
  if (!link || !link.next) {
    console.log('this link list has no duplicates!');
    return;
  }

  let p1 = link;
  let p2 = link.next;
  const nodes = {};
  nodes[p1.data] = true;

  while (p2) {
    let data = p2.data;
    if (nodes[data]) {
        p1.next = p2.next;
    } else {
      p1 = p2;
      nodes[p1.data] = true;
    }
    p2 = p2.next;
  }
  return link;
}

// removeDuplicate(head.head);
head.deletNode(2);
