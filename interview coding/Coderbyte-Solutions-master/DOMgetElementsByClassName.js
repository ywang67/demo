class DOMNode {
  constructor(classlist) {
    this.classlist = classlist || '';
    this.children = [];
  }
}

const root = new DOMNode('root foo');
const ul1 = new DOMNode('list ul');
const div1 = new DOMNode('container bar');

root.children.push(ul1, div1);
const li1 = new DOMNode('list-item li');
const li2 = new DOMNode('list-item foo');
const li3 = new DOMNode('list-item');

ul1.children.push(li1, li2, li3);
const p1 = new DOMNode('text');
const p2 = new DOMNode('text');

div1.children.push(p1, p2);


const getElementsByClassName = (node, classname) => {
  const res = [];

  function getElement(currNode) {
    currNode.children.forEach(elem => {
      if (elem.classlist.includes(classname)) {
        res.push(elem);
      }
      getElement(elem);
    });
  }

  getElement(node);
  return res;
}

const getElementsByClassName2 = (node, classname) => {
  const res = [];
  let p = [node];
  let allChild = [];

  while (p.length !== 0) {
    p.forEach(currNode => {
      if (currNode.classlist.includes(classname)) {
        res.push(currNode);
      }
      currNode.children.forEach(child => {
        allChild.push(child);
      });
    });
    p = allChild;
    allChild = [];
  }
  return res;
}

console.log(getElementsByClassName2(root, 'list-item'));
