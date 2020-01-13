function partial(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    const arr = [...args, ...Array.from(arguments)];
    fn(...arr);
  };
}

var f = partial(
  function(a, b, c) {
    var res = a + b + c;
    console.log(res);
  },
  1,
  2,
  3
);

f(4);
