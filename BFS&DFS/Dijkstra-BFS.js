const dict = {
  a: [{ 'b': 5 }, { 'c': 1 }],
  b: [{ 'a': 5 }, { 'c': 2 }, { 'd': 1 }],
  c: [{ 'a': 1 }, { 'b': 2 }, { 'd': 4 }, { 'e': 8 }],
  d: [{ 'b': 1 }, { 'c': 4 }, { 'e': 3 }, { 'f': 6 }],
  e: [{ 'c': 8 }, { 'd': 3 }],
  f: [{ 'd': 6 }],
};

const distanceInit = (map, starter) => {
  const distance = {};
  Object.keys(map).forEach(n => {
    distance[n] = n !== starter ? Infinity : 0;
  })
  return distance;
}

const bfs = (map, starter) => {
  const firstElement = {};
  firstElement[starter] = 0;
  let queue = [firstElement];
  const seen = [];
  const startElement = {};
  startElement[starter] = null;
  const parent = startElement;
  const distance = distanceInit(map, starter);

  while (queue.length) {
    console.log('test: ', queue);
    queue.sort((a, b) => {
      return Object.values(a)[0] - Object.values(b)[0]
    })
    console.log('nidie: ', queue)
    const temp = queue.shift();
    const dist = Object.values(temp)[0];
    console.log('check: ', dist);
    const vertex = Object.keys(temp)[0];
    seen.push(temp);
    const nodes = map[vertex];
    const nodesVerb = nodes.map(n => Object.keys(n)[0]);
    
    nodesVerb.forEach(n => {
      let isExisting = seen.filter(s => Object.keys(s)[0] === n).length > 0;
      if (!isExisting) {
        const currDist = dist + map[vertex].filter(e => Object.keys(e)[0] === n)[0][n];
        if (currDist < distance[n]) {
          const replaceObj = {};
          replaceObj[n] = currDist;
          queue.push(replaceObj);
          parent[n] = vertex;
          distance[n] = currDist;
        }

      }
    });
  }
  console.log('distance: ', distance);
  console.log('parent: ', parent);
}

bfs(dict, 'a');