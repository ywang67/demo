function anagrams(word, words) {
    var arr1 = word.split('').sort().join('');
    var res =[];
    for(var i=0; i<words.length; i++){
        var arr2 = words[i].split('').sort().join('');
        if(arr2 == arr1){
            res.push(words[i]);
        }
    }
    return res;
}



console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
