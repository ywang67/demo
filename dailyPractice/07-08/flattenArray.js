var test = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]];

const flatten = (arr) => {
  const res = [];
  function flat(currArr) {
    if (Array.isArray(currArr)) {
      currArr.forEach(e => {
        flat(e);
      });
    } else {
      res.push(currArr);
    }
  }
  flat(arr);
  return res;
}

console.log(flatten(test));
