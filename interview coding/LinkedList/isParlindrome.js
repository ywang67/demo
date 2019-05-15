class LinkedList {
  contructor() {
    this.head = null;

    this.reverse = this.reverse.bind();
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

  reverse() {
    if (!this.head || !this.head.next) {
      console.log('empty or single linked list!');
      return;
    }

    var p1 = null;
    var p2 = this.head;
    var p3;

    while (p2) {
      p3 = p2.next;
      p2.next = p1;
      p1 = p2;
      p2 = p3;
    }
    this.head = p1;
  }
}

let head = new LinkedList();

const test = [1, 2, 3, 4, 5, 6, 7];
test.forEach(e => {
  head.insetNodeAtTail(e);
});

const isParlindrome = (head) => {
  var l1 = head;
  const temp = head;
  temp.reverse();
  var l2 = temp;

  console.log(l1);
  console.log(l2);

  while (l2) {
    if (l2.data !== l1.data) {
      return false;
    }

    l1 = l1.next;
    l2 = l2.next;
  }
  return true;
}

isParlindrome(head);
