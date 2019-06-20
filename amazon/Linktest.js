class LinkedList {
  constructor() {
    this.head = null;
  }

  insertNode(data) {
    const node = {
      data,
      next: null,
    };

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

  clear() {
    this.head = null;
  }

  deleteNode(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
    } else {
      let p1 = this.head;
      let p2 = this.head.next;

      while (p2) {
        if (p2.data === data) {
          p1.next = p2.next;
        } else {
          p1 = p2;
        }
        p2 = p2.next;
      }
    }
  }

  reverse() {
    if (!this.head || !this.head.next) {
      return;
    }
    const nodes = [];
    let p1 = this.head;
    while (p1) {
      nodes.push(p1.data);
      p1 = p1.next;
    }
    nodes.reverse();
    this.head = null;
    nodes.forEach(e => this.insertNode(e));
  }
}

const test = [1, 2, 3];
const link = new LinkedList();

test.forEach(e => link.insertNode(e));
// link.deleteNode(2);
link.reverse();
console.log(link);
