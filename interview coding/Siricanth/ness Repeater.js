String.prototype.callme = function(n){

    var str = this;

    var res = "";
    for(var i = 0; i<n; i ++) {
        res =str+res;
    }
    return res;
}
console.log("ness".callme(3));