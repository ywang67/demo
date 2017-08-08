var items=[1,2,3,4,5,6];
function isEven(n) {
    return n%2==0;
}
function partitionOn(func, items) {
    var truthies = items.filter(func);
    console.log(truthies);
    var falsies = items.filter(function (a) {return !func(a)});
    console.log(falsies);
    items.length = 0;
    items.push.apply(items, falsies.concat(truthies));

    return falsies.length;
/*    truthies.push(...falsies);
    items = truthies;
    return items*/
}

var i = partitionOn(isEven, items);
console.log(items);