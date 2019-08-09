class Node {
  constructor(nodeData, leftData, rightData) {
    this.nodeData = nodeData;
    this.leftData = leftData;
    this.rightData = rightData;
  }
}

function createTree(array) {
  if (!array.length) {
    return null;
  } else {
    var mid = parseInt(array.length / 2);
    var node = new Node(array[mid], null, null);
    var leftArray = array.slice(0 , mid);
    var rightArray = array.slice(mid + 1 , array.length );
    node.leftData = createTree(leftArray);
    node.rightData = createTree(rightArray);
    return node;
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var Tree = createTree(arr);
console.log(Tree);

// this one needs to be excute in browser.

// binary tree treaverse with in order.
const backToArrayInOrder = (tree) => {
  const res = [];
  if (!tree.nodeData) {
    return null;
  }
  function createArr(node) {
    if (node.nodeData) {
      res.push(node.nodeData);
    }
    if (node.leftData) {
      createArr(node.leftData);
    }
    if (node.rightData) {
      createArr(node.rightData);
    }
  }
  createArr(tree);
  return res;
}

console.log('InOrder: ', backToArrayInOrder(Tree));
