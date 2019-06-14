function getRandom(...arg) {
  return function() {
    console.log(arg[Math.floor(Math.random()*arg.length)]);
    return arg[Math.floor(Math.random()*arg.length)];
  }
}

const f = getRandom('China', 'India', 'US', 'Russian', 'Canada');

f();
f();
f();
