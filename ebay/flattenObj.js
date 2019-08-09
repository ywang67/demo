////////////
////////////
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
  90: "bar"
 }
};

// p = function flatten(obj)

// var p = {
//  "30": "kuma",
//  "3" : "hello",
//  "6" : "world",
//  "100.30": "xiaoxiao",
//  "100.40": "fudan",
//  "200.60": "foo",
//  "200.60" :"bar"
// };

function flattenRur(obj) {
  var res = {};
  function flat(currObj,key) {
    var keysLevel1 = Object.keys(currObj);
    keysLevel1.forEach(k1 => {
      var newKey = k1;
      if (key) {
        newKey = `${key}.${k1}`;
      }
      if (typeof currObj[k1] !== 'object') {
        res[newKey] = currObj[k1];
      } else {

          flat(currObj[k1], newKey);
      }
    });
  }
  flat(obj, null);
  return res;
}

flattenRur(o);
