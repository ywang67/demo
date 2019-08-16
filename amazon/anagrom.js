/**
Write a function in JavaScript or TypeScript that determines if two strings
are anagrams of each other, where one word can be formed by a letter rearrangement
of the other.

Example:

anagram("cat", "act");
=> true
anagram("cat", "dog");
=> false
*/

const anagram = (val1, val2) => {
    const res1 = {};
    const res2 = {};
    let equal = true;
    val1.split('').forEach(e => {
        res1[e]= res1[e] ? res1[e] + 1 : 1;
    });
    val2.split('').forEach(e => {
        res2[e]= res2[e] ? res2[e] + 1 : 1;
    });
    Object.keys(res1).forEach(key => {
       if (res2[key] !== res1[key]) {
           equal = false;
       }
    });
    return equal;
}

const anagrom2 = (val1, val2) => {
    if (val1.length !== val2.length) {
        return false;
    }

    const res1 = val1.split('').sort();
    const res2 = val2.split('').sort();

    res1.forEach((e, i) => {
        if (res2[i] !== e) {
            return false;
        }
    });
    return true;
}
