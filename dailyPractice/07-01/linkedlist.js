// linkedlist;
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertNode(val) {
    const node = {
      data: val,
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

  deleteNode(val) {
    if (!this.head) {
      console.log('This is an empty link list.');
    } else if (this.head.data === val) {
      this.head = this.head.next;
    } else {
      let p1 = this.head;
      let p2 = p1.next;

      while (p2) {
        if (p2.data === val) {
          p1.next = p2.next;
        } else {
          p1 = p2;
        }
        p2 = p1.next;
      }
    }
  }

  removeDuplicate() {
    if (!this.head || !this.head.next) {
      console.log('this is an empty or single node link list.');
    } else {
      let p1 = this.head;
      let p2 = p1.next;
      let val = {};
      val[p1.data] = true;

      while (p2) {
        if (val[p2.data]) {
          p1.next = p2.next;
        } else {
          p1 = p2;
        }
        p2 = p1.next;
        val[p1.data] = true;
      }
    }
  }
}

var test = [1, 2, 3, 3, 4, 5, 5, 5, 6];

var list = new LinkedList();
test.forEach(e => list.insertNode(e));
console.log(list);

list.deleteNode(3);
console.log(list);

list.removeDuplicate();
console.log(list);
