const obj1 = {
    a: {
        a1: {
            a11: 3,
            a12: 4,
            a13: {
                a131: 131,
                a132: 132,
            }
        },
        a2: 5,
    },
    b: 11,
}

const obj2 = {
    a: {
        a1: {
            a11: 3,
            a12: 4,
        },
        a2: 5,
    },
    b: 11, 
}

const obj3 = {
    a: {
        a1: {
            a11: 3,
            a12: 4,
            a13: {
                a131: 131,
                a132: 132,
            }
        },
        a2: 5,
    },
    b: 11,
}

// my approach.
// flatten first then comapre.
const flatten = (obj) => {
    const res = {};
    function flat(currObj, currKey) {
        if (typeof currObj === 'object') {
            Object.keys(currObj).forEach(key => {
                const newKey = currKey ? `${currKey}-${key}` : key;
                flat(currObj[key], newKey);
            })
        } else {
            res[currKey] = currObj;
        }
    }
    flat(obj, null);
    return res;
}

// console.log(flatten(obj1));  // testing flatten function works well.

const deepCompare = (obj1, obj2) => {
    const res1 = flatten(obj1);
    const res2 = flatten(obj2);
    const keyArr1 = Object.keys(res1).sort();
    const keyArr2 = Object.keys(res2).sort();
    let res = keyArr1.length === keyArr2.length;
    keyArr1.forEach(k1 => {
        if (res1[k1] != res2[k1]) {
            res = false;
        }
    });
    return res;
}

console.log(deepCompare(obj1, obj3));








// approad from others.
function deepCompare2(x, y) {
    var i, l, leftChain, rightChain;

    function compare2Objects(x, y) {
        var p;

        // remember that NaN === NaN returns false
        // and isNaN(undefined) returns true
        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
            return true;
        }

        // Compare primitives and functions.     
        // Check if both arguments link to the same object.
        // Especially useful on the step where we compare prototypes
        if (x === y) {
            return true;
        }

        // Works in case when functions are created in constructor.
        // Comparing dates is a common scenario. Another built-ins?
        // We can even handle functions passed across iframes   
        if ((typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)) {
            return x.toString() === y.toString();
        }

        // At last checking prototypes as good as we can
        if (!(x instanceof Object && y instanceof Object)) {
            return false;
        }

        if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
            return false;
        }

        if (x.constructor !== y.constructor) {
            return false;
        }

        if (x.prototype !== y.prototype) {
            return false;
        }

        // Check for infinitive linking loops
        if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
            return false;
        }

        // Quick checking of one object being a subset of another.
        // todo: cache the structure of arguments[0] for performance
        for (p in y) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            } else if (typeof y[p] !== typeof x[p]) {
                return false;
            }
        }

        for (p in x) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            } else if (typeof y[p] !== typeof x[p]) {
                return false;
            }

            switch (typeof(x[p])) {
                case 'object':
                case 'function':

                    leftChain.push(x);
                    rightChain.push(y);

                    if (!compare2Objects(x[p], y[p])) {
                        return false;
                    }

                    leftChain.pop();
                    rightChain.pop();
                    break;

                default:
                    if (x[p] !== y[p]) {
                        return false;
                    }
                    break;
            }
        }

        return true;
    }

    if (arguments.length < 1) {
        return true; //Die silently? Don't know how to handle such case, please help...
        // throw "Need two or more arguments to compare";
    }

    for (i = 1, l = arguments.length; i < l; i++) {

        leftChain = []; //Todo: this can be cached
        rightChain = [];

        if (!compare2Objects(arguments[0], arguments[i])) {
            return false;
        }
    }

    return true;
}
