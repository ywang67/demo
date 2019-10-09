const deeepCopy = target => {
  function copy(currTarget) {
    if (!currTarget || typeof currTarget !== "object") {
      return currTarget;
    }
    const tempObj = Array.isArray(currTarget) ? [] : {};

    Object.keys(currTarget).forEach(key => {
      tempObj[key] = copy(currTarget[key]);
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

console.log(deeepCopy(test));
