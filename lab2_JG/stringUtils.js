const arrayUtils = require("./arrayUtils");
function capitalize(string){
    if(typeof string !== "string" || string === undefined){
        throw "input string is invalid"
    }
    let output = string.toLowerCase();
    let chars = output.split("");
    chars[0] = chars[0].toUpperCase();
    return chars.join("");
}

function repeat(string,num){
    if(typeof string !== "string" || string === undefined){
        throw "input string is invalid"
    }
    if(typeof num !== "number" || num<=0 || num === undefined){
        throw "input number is invalid"
    }
    let sequence = [];
    for (let i = 0; i<num; i++){
        sequence.push(string);
    }
    return sequence.join("");
}

function countChars(string){
    if(typeof string !== "string" || string === undefined){
        throw "input string is invalid"
    }
    let chars = string.split("");
    return arrayUtils.countElements(chars);
}

module.exports = {
    capitalize,
    repeat,
    countChars

}