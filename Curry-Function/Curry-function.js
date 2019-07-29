function curry(fn) {
  const arg1 = Array.prototype.slice.call(arguments, 1);
  return function() {
    const arg2 = Array.from(arguments);
    const arr = arg1.concat(arg2);
    return fn(...arr);
  }
}

const sum = (a, b) => {
  return a + b;
}

console.log(curry(sum, 1)(2));
