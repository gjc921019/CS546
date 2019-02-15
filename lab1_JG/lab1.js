function questionOne([x, y, z]) {
    if(typeof x !=="number" || typeof y !=="number" || typeof z !=="number" ){
        throw "Input is not a number";
    }
    else{
        return x * x + y * y + z * z;
    }
}

 function questionTwo(num) {
    if(typeof num !=="number"){
        throw "Input is not a number";
    }
    else{
        if (num < 1) {
            return 0;
        }
        if (num == 1) {
            return 1;
        }
        else {
            return questionTwo(num - 1) + questionTwo(num - 2);
        }
    }
}

 function questionThree(str) {
     if(typeof str !== "string"){
         throw "Input is not a string"
     }
     else{
        var n = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
                n = n + 1;
            }
        }
        return n;
     }
}

function questionFour(num) {
    if(typeof num !== "number"){
        throw "input is not a number"
    }
    else{
        if (num < 0) {
            return NaN;
        }
        if (num == 0) {
            return 1;
        }
        else {
            return questionFour(num - 1) * num;
        }
    }
}

module.exports = {
    firstName: "Jiacheng",
    lastName: "Guo",
    studentId: "10442082",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};