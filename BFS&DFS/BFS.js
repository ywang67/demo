const dict = {
  a: ['b', 'c'],
  b: ['a', 'c', 'e'],
  c: ['a', 'b', 'd', 'e'],
  d: ['c', 'e', 'f'],
  e: ['b', 'c', 'd'],
  f: ['d'],
};

const bfs = (map, starter) => {
  const res = [];
  let queue = [starter];
  const parent = {};
  parent[starter] = null;
  while (queue.length) {
    const temp = queue.shift();
    map[temp].forEach(e => {
      if (queue.indexOf(e) < 0 && res.indexOf(e) < 0) {
        queue.push(e);
        parent[e] = temp;
      }
    });
    res.push(temp);
  }
  let v = 'e';
  while (v) {
    console.log('shotest steps to starter', v);
    v = parent[v];
  }
  return res;
}

console.log(bfs(dict, 'a'));
