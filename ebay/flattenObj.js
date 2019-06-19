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


var p = function flatten(obj) {
   var res = {};

   var keysLevel1 = Object.keys(obj);
   keysLevel1.forEach(k1 => {
       if (typeof obj[k1] === 'object') {
           var keysLevel2 = Object.keys(obj[k1]);
           keysLevel2.forEach(k2 => {
               var newKey = k1 + '.' + k2;
               res[newKey] = obj[k1][k2];
           });
       } else {
           res[k1] = obj[k1];
       }
   });
   return res;
}

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
