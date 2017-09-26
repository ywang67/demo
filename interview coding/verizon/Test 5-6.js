/**
 * Created by Paul on 8/24/2017.
 */
var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');

console.log(myArr);

var x =0;

function foo(){
 x++;
 this.x = x;
 return foo;
}
var bar = new new foo;
console.log(bar.x);
console.log(typeof foo());