/**
 * Created by Paul on 8/24/2017.
 */
var myArr = ['foo', 'bar', 'baz'];
myArr[10] = 'bin';

console.log(myArr.length);

function  getFunc() {
    var a = 7;
    return function(b) {
        console.log(a + b);
    }
}

var f = getFunc();
f(5);