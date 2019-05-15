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
}

let head = new LinkedList();

const test = [1, 2, 3, 3, 5, 6, 7];
test.forEach(e => {
  head.insetNodeAtTail(e);
});
console.log(head);

const removeDuplicate = (head) => {
  if (!head || !head.next) {
    console.log('no duplicate, this linked list is empty or one node list!');
    return;
  }

  let p1 = head;
  let p2 = p1.next;
  let nodes = {};
  nodes[p1.data] = true;

  while (p2) {
    let data = p2.data;
    if (nodes[data]) {
      p1.next = p2.next;
    } else {
      nodes[data] = true;
      p1 = p2;
    }
    p2 = p2.next;
  }
  return head;
}

console.log('removed: ', removeDuplicate(head.head));
