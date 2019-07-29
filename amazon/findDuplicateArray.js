/**
* [1 ... 10,000] => length of 10,000
* It actually has length 10,001 because one of the integers in the range is
* in there twice.
*
* [799, 4, 503, 4, ... 10000, 100]
*
* The array is unsorted. Write a function to find the repeated number.
*/

const findDuplicate = (arr) => {
    const res = {};
    arr.Foreach(e => {
       res[e] = res[e] ? res[e] + 1 : 1;
    });

    Object.keys(res).forEach(key => {
        if (res[key] > 1) {
            console.log(key);
        }
    });
}

=== check type also
== just check value

const fondDuplicateFixed = (arr) => {
    const target = [];
    arr.foEach(e => target.push(e));
    const arrSorted = target.sort();
    const res = arrSorted.filter((e, index) => arrSorted.indexOf(e) !== index );
    return res;
}
