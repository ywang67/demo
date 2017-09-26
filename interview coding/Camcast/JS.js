function removeMultiples(arr, X){
    return arr.filter(function(el) {
        return el%X !==0;
    })

}
var arr1 = [1,2,3,4,5,6,7,8,9,10];


console.log(removeMultiples(arr1, 2));

function remove(arr, mul) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % mul) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(remove(arr1, 4));
