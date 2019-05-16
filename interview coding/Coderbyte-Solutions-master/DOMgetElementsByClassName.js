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

  while (p.length !== 0) {
    console.log(p);
    p.forEach(currNode => {
      if (currNode.classlist.includes(classname)) {
        res.push(currNode);
      }
      p = [];
      currNode.children.forEach(child => {
        p.push(child);
      });
    });
  }
  return res;
}

getElementsByClassName2(root, 'list-item');
