const test1 = [[1, 2, 3, 4], [5, 6], [7, 8, 9]];
const sum = (arr) => {
  let res = [];

  arr.forEach(e => {
    res = [...res, ...e];
  });
  return res;
}

console.log(sum(test1));

const test2 = [[1, 2, [3, 4], 5, 6, [7, 8, 9, [10, 11, 12, 13, 14, 15]]]];

const sumPlus = (arr) => {
  const res = [];
  function sum(currArr) {
    currArr.forEach(e => {
      if (typeof e === 'number') {
        res.push(e);
      } else {
        sum(e);
      }
    });
  }
  sum(arr);
  return res;
}

console.log('sumPlus: ', sumPlus(test2));

const sumPlusRude = (arr) => {
  const res = [];
  let frontier = arr;
  let allChild = [];

  while (frontier.length !== 0) {
    frontier.forEach((e, i) => {
      if (typeof e === 'number') {
        res.push(e);
      } else {
        allChild = [ ...allChild, ...e ];
      }
    });
    frontier = allChild;
    allChild = [];
  }
  res.sort((a, b) => a - b);
  return res;
}

console.log('sumPlusRude: ', sumPlusRude(test2));
