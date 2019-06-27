class LinkedList() {
  constructor() {
    this.head = null;
  }
}

var list = new LinkedList();

// es5.

var LinkedList = function() {
  this.head = null;
}

var linkInherit = function() {
  LinkedList.call(this);
}

// equal to new keyword.
// var list = new linkInherit();
var list = {};
list.__proto__ = linkInherit.prototype;
linkInherit.call(list);
