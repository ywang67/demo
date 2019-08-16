const arr = [1, 2, 4, 1, 7, 8, 3];

const rec_opt = (arr, i) => {
  if (i === 0) {
    return arr[0];
  } else if (i === 1) {
    return Math.max(arr[0], arr[1]);
  } else {
    const A = rec_opt(arr, i - 2) + arr[i];
    const B = rec_opt(arr, i - 1);
    return Math.max(A, B);
  }
}

console.log(rec_opt(arr, 6));

const dp_opt = (arr) => {
  const opt = [];
  opt[0] = arr[0];
  opt[1] = Math.max(arr[0], arr[1]);

  let j = 2;
  while (j < arr.length) {
    const A = opt[j - 2] + arr[j];
    const B = opt[j - 1];
    opt[j] = Math.max(A, B);
    j++;
  }
  console.log(opt);
  return opt[arr.length - 1];
}
console.log(dp_opt(arr));
