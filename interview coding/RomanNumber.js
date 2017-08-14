function solution(number){
        romanArray = [];
        if (number >= 1000) {
            return thousands(number);
        }else if (number >= 100){
            return hundreds(number);
        }else if (number >= 10) {
            return tens(number);
        }else {
            return last_number(number);
        }

    function thousands(number){
        var remainder = number % 1000;
        var thousands = Math.floor(number / 1000);
        for(var e = 0; e < thousands; e++) {
            romanArray.push('M');
        }
        return hundreds(remainder);
    }

    function hundreds(number){
        var remainder = number % 100;
        var hundreds = Math.floor(number / 100);
        if (hundreds === 4){
            romanArray.push('CD');
        }else if(hundreds === 9){
            romanArray.push('CM');
        }else if(hundreds >= 5 && hundreds < 9){
            romanArray.push('D');
            for(var i = 0; i < (hundreds % 5); i++) {
                romanArray.push('C');
            }
        }else if (hundreds > 0 && hundreds < 4){
            for(var e = 0; e < hundreds; e++) {
                romanArray.push('C');
            }
        }else{

        }
        return tens(remainder);
    }

    function tens(number){
        var remainder = number % 10;
        var tens = Math.floor(number / 10);
        if (tens === 4){
            romanArray.push('XL');
        }else if(tens === 9){
            romanArray.push('XC');
        }else if(tens >= 5 && tens < 9){
            romanArray.push('L');
            for(var i = 0; i < (tens % 5); i++) {
                romanArray.push('X');
            }
        }else if (tens > 0 && tens < 4){
            for(var e = 0; e < tens; e++) {
                romanArray.push('X');
            }
        }else{

        }
        return last_number(remainder);
    }

    function last_number(number){
        if (number === 4){
            romanArray.push('IV');
        }else if(number === 9){
            romanArray.push('IX');
        }else if(number >= 5 && number < 9){
            romanArray.push('V');
            var remainder = number % 5;
            for(var i = 0; i < remainder; i++) {
                romanArray.push('I');
            }
        }else if (number > 0 && number < 4){
            for(var e = 0; e < number; e++) {
                romanArray.push('I');
            }
        }else{

        }
        return romanArray.join('');
    }
}


function roman_to_Int(str1) {
    if(str1 == null) return -1;
    var num = char_to_int(str1.charAt(0));
    var pre, curr;

    for(var i = 1; i < str1.length; i++){
        curr = char_to_int(str1.charAt(i));
        pre = char_to_int(str1.charAt(i-1));
        if(curr <= pre){
            num += curr;
        } else {
            num = num - pre*2 + curr;
        }
    }

    return num;
}

function char_to_int(c){
    switch (c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}



var test = 800;
console.log(solution(test));


console.log(roman_to_Int(solution(test)));