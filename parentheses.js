function parentheses(parens){
    var len = parens.length;
    var arr = parens.split('');
    var res;
    if(arr[0] == 41 || arr[len -1] == 40){return false;}
    else if(arr[0]==arr[len-1] || len%2==1) {return false;}
    return true;
}

var test = "(())()()()(()()";  // false;
var test2 = "((())()())" // true;

console.log(parentheses(test));
console.log(parentheses(test2));