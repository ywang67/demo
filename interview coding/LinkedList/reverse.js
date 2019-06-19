class LinkedList {
  contructor() {
    this.head = null;
  }

  insetNodeAtTail(data) {
    const node = {
      data: data,
      next: null,
    }
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

  deletNodeWithVal(data) {
    if (!this.head) {
      console.log('this list is empty!');
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
    } else {
      let p1 = head;
      let p2 = p1.next;
      while (p2) {
        if (p2.data === data) {
          p2 = p2.next;
          break;
        } else {
          p1 = p2;
        }
        p2 = p2.next;
      }
    }
  }

  clear() {
    this.head = null;
  }
}

let head = new LinkedList();

const test = [1, 2, 3, 4, 5, 6, 7];
test.forEach(e => {
  head.insetNodeAtTail(e);
});
console.log(head);


const reverse = (list) => {
  if (!list || !list.next) {
    return list;
  }
  const res = reverse(list.next);
  list.next.next = list;
  list.next = null;
  return res;
}

console.log('reverse: ', { head: reverse(head.head) });
