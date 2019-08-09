const superWasher = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = sum/arr.length;
  if (sum%arr.length !== 0) {
    console.log(-1);
    return -1;
  } else if (arr.length === 1) {
    console.log(1);
    return 1;
  }

  const arrFixed = [];
  arr.forEach(e => {
    arrFixed.push(e - avg);
  });
  console.log(arrFixed);

  const absArray = [];

  arrFixed.forEach((e, i)=> {
    let j = i + 1;
    while (j < arrFixed.length) {
      absArray.push(Math.abs(arrFixed[i] + arrFixed[j]));
      j++;
    }
  });
  console.log(absArray);

  console.log(Math.max(...absArray));
  return Math.max(...absArray);
}

superWasher([1,0,5]);
