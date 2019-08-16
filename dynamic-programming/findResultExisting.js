const arr = [3, 34, 4, 12, 5, 2];

const target = 9;

const rec_subset = (arr, i, s) => {
  if (s === 0) {
    return true;
  } else if (i === 0) {
    return arr[i] === s;
  } else if (arr[i] > s) {
    return rec_subset(arr, i - 1, s);
  } else {
    const A = rec_subset(arr, i - 1, s - arr[i]);
    const B = rec_subset(arr, i - 1, s);
    return A || B;
  }
}
console.log(rec_subset(arr, arr.length - 1, 13));


// This dp is wrong, please figure it out in future.
const dp_subset = (arr, s) => {
  const subset = [];
  let i = 0;
  while (i< arr.length) {
    subset.push([true]);
    i++;
  }
  let m = 1;
  while (m <= s) {
    subset[0][m] = false;
    m++;
  }
  subset[0][arr[0]] = true;
  let j = 1;
  // console.log(subset)
  while (j < arr.length) {
    let k = 1;
    while (k <= s) {
      console.log(`current j = ${j}, and arr: `, arr[j]);
      // console.log('k: ', k);
      if (arr[j] > k) {
        // console.log(`subset[${j}][${k}]: ${subset[j-1][k]}`)
        subset[j][k] = subset[j - 1][k];
      } else {
        const A = subset[j - 1][k - arr[j]];
        const B = subset[j -1][k]
        subset[j][k] = A || B;
        // console.log('A: ', A);
        // console.log('B: ', B);
        // console.log(`subset[${j}][${k}]: ${subset[j-1][k]}`);
      }
      k++;
    }
    // console.log(`subset row ${j}: `, subset);
    j++;
  }
  console.log('res: ', subset);
  console.log(subset[arr.length - 1][target]);
  return subset[arr.length - 1][target];
}

dp_subset(arr, 13);
