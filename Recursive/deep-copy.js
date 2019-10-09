const deepCopy = target => {
  // const copyObjArr = [];

  function copy(target) {
    if (typeof target !== "object" || !target) {
      return target;
    }
    // let i = 0;
    // while (i < copyObjArr.length) {
    //   if (copyObjArr[i].target === target) {
    //     return copyObjArr[i].copyObjArr;
    //   }
    // }
    const tempObj = Array.isArray(target) ? [] : {};

    // copyObjArr.push({ target: target, copyTarget: tempObj});

    Object.keys(target).forEach(key => {
      // if (tempObj[key]) {
      //   return;
      // }
      tempObj[key] = copy(target[key]);
    });
    return tempObj;
  }
  return copy(target);
};
var test = {
  a: "1",
  b: {
    b1: [1, 2, 3],
    b2: 22,
    b3: 23
  },
  c: {
    c1: 31,
    c2: 32
  }
};

console.log(deepCopy(test));
