const deepCopy = (obj) => {
  var res = {};
  function copy(val) {
    if (typeof val === 'object') {
      Object.keys(val).forEach((currKey) => {
        copy(currKey, val[currKey]);
      });
    } else {
      res[key] = val;
    }
  }
  copy(obj);
  return res;
}

var test = {
  a: '1',
  b: {
    b1: 21,
    b2: 22,
    b3: 23,
  },
  c: {
    c1: 31,
    c2: 32
  },
};

console.log(deepCopy(test));
