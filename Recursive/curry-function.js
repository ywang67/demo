function curry(fn, arg) {
  var length = fn.length;
  var _arg = arg || [];
  return function() {
    var args = [..._arg, ...Array.from(arguments)];

    if (args.length < length) {
      return curry(fn, args);
    } else {
      return fn(...args);
    }
  }
}

var curryFunc = curry(function(a, b, c) {
  console.log([a, b, c]);
});

curryFunc('a', 'b', 'c');
curryFunc('a', 'b')('c');
curryFunc('a', 'b', 'c');
