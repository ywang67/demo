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

//dp
const dp_fibo = (n) => {
  const fibo = [];
  fibo[0] = 1;
  fibo[1] = 1;
  let j = 2;
  while (j < n) {
    fibo[j] = fibo[i - 2] + fibo[i - 1];
    j++;
  };
  return fibo;
}

console.log(fibo(10));
