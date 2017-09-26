/**
 * Created by Paul on 8/24/2017.
 */
function aaa() {
    return
    {
        test: 1
    };
}

console.log(typeof aaa()); // undefined

// Because return keyword just count in that line, if you make
// the return value to the next line of return then it will be
// not counted.

var myFunc = function (a,b){
    this.a = a;
    this.b = b;
    return this.a*this.b
}

var obj1 ={};

obj1.myFunc = myFunc;
console.log(obj1.myFunc(2,2));
var obj2 = new myFunc(2,2);
console.log(obj2);