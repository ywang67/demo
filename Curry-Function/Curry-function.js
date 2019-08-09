function curry(fn, args) {
    var length = fn.length;
    args = args || [];

    return function() {

        var _args = args.slice(0);

        var arg;
        var i;
        console.log(arguments);

        for (i = 0; i < arguments.length; i++) {

            arg = arguments[i];

            _args.push(arg);

        }
        if (_args.length < length) {
            return curry.call(this, fn, _args);
        }
        else {
            return fn.apply(this, _args);
        }
    }
}


var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});

fn('a')('b')('c')
