// make object avaiable with array iterator.

var obj = {
  a: 1,
  b: 2,
  c: 3,
};
// console.log('before customize iterable: ', [...obj]);

obj[Symbol.iterator] = () => {
  return {
    next: function() {
      const doneStatus = this.index < Object.values(obj).length
        ? false
        : true;
      const temp = this.index;
      this.index++
      return { value: Object.values(obj)[temp], done: doneStatus };
    },
    index: 0,
  }
}

console.log([...obj]);
