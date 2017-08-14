function whoIsNext(names, r){
    var l = names.length;
    while (r >= l) { r -= l; l *= 2; }
    return names[Math.floor(names.length * r / l)];
}

var test = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];

console.log(whoIsNext(test,8));
console.log(whoIsNext(test, 7230702951));