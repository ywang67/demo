/**
 * Created by Owner on 2017/6/20.
 */
var test = A =>{
    let a = 0;
    let sum = 0;
    for(let i= 0; i<A.length; i++){
        sum += A[i];
    }
    avg = sum/A.length;
    var arr = A.map(e =>
        Math.abs(e-a);
        )

    return arr.indexOf(Math.max.apply(null, arr));
    console.log(arr);
}

console.log(test([9,4,-3,-10 ]));