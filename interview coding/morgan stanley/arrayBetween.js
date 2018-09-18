/**
 * Created by Paul on 9/18/2018.
 */
let arr = [1, 2, 3, 4, 5, 6, 7];



const inBetween = (val1 , val2) => {
    return function (item) {
        return item < val2 && item > val1;
    }
}


arr.filter(inBetween(3, 6)); //should return [4, 5]