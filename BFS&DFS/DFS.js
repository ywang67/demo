const dict = {
  a: ['b', 'c'],
  b: ['a', 'c', 'e'],
  c: ['a', 'b', 'd', 'e'],
  d: ['c', 'e', 'f'],
  e: ['b', 'c', 'd'],
  f: ['d'],
};

const dfs = (map, starter) => {
  const res = [];
  let stack = [starter];
  const parent = {};
  parent[starter] = null;
  while (stack.length) {
    const temp = stack.pop();
    map[temp].forEach(e => {
      if (stack.indexOf(e) < 0 && res.indexOf(e) < 0) {
        stack.push(e);
        parent[e] = temp;
      }
    });
    res.push(temp);
  }

  let v = 'e';
  while (v) {
    console.log(v);
    v = parent[v];
  }
  return res;
}

console.log(dfs(dict, 'a'));
