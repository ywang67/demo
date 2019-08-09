var o = {
 30: "kuma",
 3 : "hello",
 6 : "world",
 100: {
   30: "xiaoxiao",
   40: "fudan"
 },
 200: {
  60: "foo",
  90: "bar",
  30: {
    200: 'nihao',
    300: 'right',
    400: 'focus',
  },
},
};

const flattenObj = (obj) => {
  const res = {};
  function flatten(currObj, parentKey) {
    const currKeys = Object.keys(currObj);
    currKeys.forEach(key => {
      const newKey = parentKey ? `${parentKey}-${key}` : key;
      if (typeof currObj[key] !== 'object') {
        res[newKey] = currObj[key];
      } else {
        flatten(currObj[key], newKey);
      }
    });
  }
  flatten(obj, null);
  console.log(res);
}

flattenObj(o);
