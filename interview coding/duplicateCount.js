function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

var text = 'abcdefghijabcdeABCDABCabA ?'


function duplicateCount2(text){
    var text2 = text.toLowerCase();
    var count = {};
    var arr = text2.split('');
    for(var i=0; i< arr.length; i++){
        if(count.hasOwnProperty(arr[i])){
            count[arr[i]]++
        }else{count[arr[i]] = 1;}
    }
    var arr2 = Object.keys(count);
    var res = 0;
    for(var j=0; j<arr2.length; j++){
        //console.log(arr2[j]);
        if(count[arr2[j]]>1){
            res ++;
            /*console.log(res);*/
        }
    }
//console.log(count.a);
    return res;
}

console.log(duplicateCount(text));
console.log(duplicateCount2(text));