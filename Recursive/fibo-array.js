const fibo = (val) => {
  const res = [];
  let i = 1;
  function fiboCreate(currVal) {
    res.push(currVal);
    if (res.length < val) {
      let sum;
      if (i > 1) {
        sum = res[i - 1] + res[i - 2];
      } else {
        sum = res[i - 1];
      }
      i++;
      fiboCreate(sum);
    }
  }
  fiboCreate(i);
  return res;
}

console.log(fibo(10));
