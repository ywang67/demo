/*    O(nlogn)	 space:O(1)*/

const quickSort = (arr) => {
  if (!arr.length) {
    return arr;
  }
  const base = Math.floor(arr.length/2);
  const baseEle = arr.splice(base, 1)[0];
  const left = [];
  const right = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < baseEle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
    i++;
  }
  return [
    ...quickSort(left),
    ...[baseEle],
    ...quickSort(right),
  ];
} 



  var arr = [4,3,1,2,5];
 
  console.log(quickSort(arr));
  // console.log(arr.sort());