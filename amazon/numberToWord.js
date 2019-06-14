const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 102, 110, 210, 990];

const solution = (arr) => {
  const h = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const th = ['twenty', 'thirdty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hh = ['hundred', 'hundreds'];
  const fh = ['thousand', 'thousands'];
  const res = [];
  arr.forEach(e => {
    if (e < 20) {
      res.push(h[e]);
    } else {
      if (e < 100) {
        const temp = e.toString();
        const digitOne = Number(temp[0]);
        const digitTwo = Number(temp[1]);
        res.push(`${th[digitOne]}${h[digitTwo]}`);
      } else {
        const temp = e.toString();
        const digitOne = Number(temp[0]);
        const digitTwo = Number(temp[1]);
        const digitThree = Number(temp[2]);
        const digitOneString = digitOne > 1 ? `${h[digitOne]}${hh[1]}and` : `${h[digitOne]}${hh[0]}and`;

        res.push(`${digitOneString}${th[digitTwo]}${h[digitThree]}`);
      }
    }
  });
  console.log(res);
  const resLen = [];
  res.forEach(l => {
    resLen.push(l.length);
  });
  console.log(resLen);
  return resLen;
};

solution(test);
