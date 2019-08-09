const washer = (arr) => {
  let res = 0;
  const sum = arr.reduce((a, b) => a + b, 0);
  if (sum%arr.length !== 0) {
    res = -1;
    console.log(res);
    return res;
  }
  function findMinMove(arrFixed) {
    const maxnumber = Math.max(...arrFixed);
    const indexArray = [];
    const balanced = arrFixed.filter((e, i) => arrFixed.indexOf(e) === i).length === 1;
    if (!balanced) {
      arrFixed.forEach((e, i) => {
        if (e === maxnumber) {
          indexArray.push(i);
        }
      });
      console.log(arrFixed);
      indexArray.forEach(index => {
        if (index === 0 || (index !== 0 && arrFixed[index - 1] === arrFixed[index])) {
          arrFixed[index] = arrFixed[index] - 1;
          arrFixed[index + 1] =  arrFixed[index + 1] + 1;
          res += 1;
        } else if (index === arrFixed.length - 1 || (index !== arrFixed.length - 1 && arrFixed[index + 1] === arrFixed[index])) {
          arrFixed[index] = arrFixed[index] - 1;
          arrFixed[index - 1] = arrFixed[index - 1] + 1;
          res += 1;
        } else {
          arrFixed[index] = arrFixed[index] - 2;
          arrFixed[index + 1] =  arrFixed[index + 1] + 1;
          arrFixed[index - 1] = arrFixed[index - 1] + 1;
          res += 1;
        }
      });
      findMinMove(arrFixed);
    }
  }
  findMinMove(arr);
  console.log(res);
  return res;
}

washer([2, 8, 2]);
