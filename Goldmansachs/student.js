const res = (arr, rank) => {
  const scoreObj = {};
  arr.forEach((a, index) => {
    const sum = a.reduce((m, n) => m + n, 0);
    scoreObj[`${sum}-${index}`] = sum;
  });
  const ranked = Object.keys(scoreObj).sort((j, k) => {
    const num1 = j.split("-")[0];
    const index1 = j.split("-")[1];
    const num2 = k.split("-")[0];
    const index2 = k.split("-")[1];

    if (Number(num1) === Number(num2)) {
      return Number(index1) - Number(index2);
    } else {
      return Number(num2) - Number(num1);
    }
  });
  const position = ranked[rank - 1].split("-")[1];
  console.log(scoreObj);
  console.log("ranked: ", ranked);
  console.log(position);
  return position;
};

res(
  [
    [80, 96, 81, 77],
    [78, 71, 93, 75],
    [71, 98, 70, 95],
    [80, 96, 89, 77]
  ],
  3
);
