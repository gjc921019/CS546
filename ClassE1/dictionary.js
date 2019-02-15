const words = {
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}

function checkInput(val){
    if(typeof val !=="string"){
        throw "Input is not a string";
    }
    else{
        return val;
    }
}

function lookupDefinition(val){
    if(words[checkInput(val)]!==undefined){
        return words[checkInput(val)];
    }
    else{
        throw "Word is not in the dictionary";
    }    
}

function getWord(val){
    checkInput(val);
    let getWord = getKeyByValue(words,val);
    if(getWord == undefined){
        throw "Word not found"
    }
    return getWord;

}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

module.exports = {
    lookupDefinition,
    getWord
}

