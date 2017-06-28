var test = (A) =>{
    let reg = /[.?!]/;
    A = A.replace(/\s\s+/g, ' ');
    let temp = A.split(reg);
    let res = 0;
    for(var i = 0; i<temp.length; i++){
        let len = temp[i].trim().split(' ').length;
        if(len > res){
            res = len;
        }
    }
    return res;
}

console.log(test('Forget  CVs. .Save time . x x'));