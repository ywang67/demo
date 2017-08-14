function isValidIP(str) {
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipformat.test(str)

}
var test1 = "1.2.23.41"; //true

var test2 = "1.31213.1231.123"; //false

console.log(isValidIP(test1));

console.log(isValidIP(test2));

