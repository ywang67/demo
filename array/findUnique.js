const func = arr => {
  const multi = [];
  const uniq = [];
  let i = 0;
  while (i < arr.length) {
    if (
      i < arr.length - 1 &&
      arr.slice(i + 1, arr.length).indexOf(arr[i]) > -1
    ) {
      if (multi.indexOf(arr[i]) < 0) {
        multi.push(arr[i]);
      }
    }
    if (
      i < arr.length - 1 &&
      arr.slice(i + 1, arr.length).indexOf(arr[i]) < 0
    ) {
      if (multi.indexOf(arr[i]) < 0) {
        uniq.push(arr[i]);
      }
    }
    i++;
  }
  console.log("multi: ", multi);
  console.log("uniq: ", uniq);
  return uniq;
};

func([1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 7, 9, 9, 9, 8, 11]);
