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

  kthToLastNode(k) {
    if (k <= 0) {
      console.log('Please call the function with positive integer value of k.');
      return;
    }

    var p1 = this.head;
    var p2 = this.head;

    for (var i = 0; i < k-1; i++) {
      if (!p2) {
        console.log('k is greater than the length of the linked list.');
        return;
      }

      p2 = p2.next;
    }

    if (!p2) {
      console.log('k is the size of the linked list.');
      return;
    }

    while (p2.next) {
      p1 = p1.next;
      p2 = p2.next;
    }

    return p1.data;
  }
}

let head = new LinkedList();

const test = [1, 2, 3, 4, 5, 6, 7];
test.forEach(e => {
  head.insetNodeAtTail(e);
});

console.log(head.kthToLastNode(1));
