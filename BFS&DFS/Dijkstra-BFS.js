const dict = {
  a: [{ 'b': 1 }, { 'c': 5 }],
  b: [{ 'a': 1 }, { 'c': 2 }, { 'e': 7 }],
  c: [{ 'a': 5 }, { 'b': 2 }, { 'd': 1 }, { 'e': 4 }],
  d: [{ 'c': 1 }, { 'e': 3 }, { 'f': 6 }],
  e: [{ 'b': 7 }, { 'c': 4 }, { 'd': 3 }],
  f: [{ 'd': 6 }],
};

const bfs = (map, starter) => {
  const res = [];
  const firstElement = {};
  firstElement[starter] = 0;
  let queue = [firstElement];
  const parent = {};
  parent[starter] = null;
  // while (queue.length) {
  //   const temp = Object.keys(queue.shift())[0];
  //   console.log(temp);
  //   map[temp].forEach(e => {
  //     if (queue.indexOf(e) < 0 && res.indexOf(e) < 0) {
  //       queue.push(e);
  //       parent[e] = temp;
  //     }
  //   });
  //   res.push(temp);
  // }
  let v = 'e';
  while (v) {
    console.log('shortest steps to starter', v);
    v = parent[v];
  }
  return res;
}

console.log(bfs(dict, 'a'));
