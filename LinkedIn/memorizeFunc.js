var sum = function(a, b) {
  return a + b;
}

var memory = function(fn) {
  var cache = {};
  return function() {
    var arg = Array.from(arguments).sort();
    var key = JSON.stringify(arg);
    console.log(key);
    if (cache[key]) {
      return cache[key];
    } else {
      var val = fn(...arg);
      cache[key] = val;
      return val;
    }
  }
}
var memorizedFunc = memory(sum);

// console.log(memorizedFunc(1, 2));
// console.log(memorizedFunc(1, 2));

for (var i = 0; i< 100000; i++) {
  // console.log(sum(1, 2));
  // memorizedFunc(1, 2)
  console.log(memorizedFunc(1, 2));
}
