/**
 * Created by Paul on 8/24/2017.
 */
function bar(){
    return foo;
    foo = 10;
    function foo(){}
    var foo = '11';
}
console.log(typeof bar());

function bar2(){
    return foo;
    foo = '11';
}

console.log(typeof bar2());

var x =3;
var foo = {
    x: 2,
    baz: {
        x:1,
        bar: function(){
            return this.x
        }
    }
}

var go = foo.baz.bar;

console.log(go());

console.log(foo.baz.bar());
