const func = (arr, text) => {
  const res = [];
  text.forEach((e, index) => {
    const temp = [];
    e.split("").forEach(s => {
      temp.push(arr.indexOf(s));
    });
    const replacement = temp.join("");
    res.push(`${replacement}-${index}`);
  });
  console.log(res);
};

func([3, 5, 4, 6, 2, 7]);

// 还没有完成.
