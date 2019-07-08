var test = {
  1: {
    10: 'nihao',
    11: 'hello',
    12: 'bangjo',
  },
  2: {
    20: 'shijie',
    21: 'world',
    22: 'cest via',
  },
  3: {
    30: {
      300: 'yoshi',
      301: 'mario',
      302: 'lucy',
    },
    31: 'super mario',
  },
}

const flatten = (obj) => {
  const res = {};
  function flat(currObj, key) {
    if (typeof currObj === 'object') {
      Object.keys(currObj).forEach(curKey => {
        var newKey = key ? `${key}-${curKey}` : curKey;
        flat(currObj[curKey], newKey);
      });
    } else {
      res[key] = currObj;
    }
  }
  flat(obj, null);
  return res;
}

console.log(flatten(test));
