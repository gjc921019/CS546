
function head(inputArray){
    if(inputArray === undefined || inputArray.length === 0 ){
        throw "Input array is empty";
    }
    inputArray.forEach(value => {
        if(typeof value !== "number"){
            throw "Input array contains non-number element";
        }
    })
    return inputArray[0];

}

function last(inputArray){
    if(inputArray === undefined || inputArray.length === 0 ){
        throw "Input array is empty";
    }
    inputArray.forEach(value => {
        if(typeof value !== "number"){
            throw "Input array contains non-number element";
        }
    })
    return inputArray[inputArray.length-1];
}

function remove (inputArray, index){
    if(inputArray === undefined || inputArray.length === 0 ){
        throw "Input array is empty";
    }
    inputArray.forEach(value => {
        if(typeof value !== "number"){
            throw "Input array contains non-number element";
        }
    })
    if (typeof index !== "number"){
        throw "index is not a number";
    }
    inputArray.splice(index,1);
}

function range(end,value){
    if(typeof end !== "number" || end === undefined || end<=0){
        throw "input is invalid";
    }
    let outputArray = [];
    if(value === undefined){
        for(let i =0; i<end; i++){
            outputArray.push(i);
        }
    }
    else{
        for(let i =0; i<end; i++){
            outputArray.push(value);
        }
    }
    return outputArray;
}

function countElements(inputArray){
    if(inputArray === undefined || inputArray.length === 0 ){
        throw "Input array is empty";
    }
    inputArray.forEach(value => {
        if(!(typeof value === "number" || typeof value ==="string")){
            throw "Input array contains illegal element";
        }
    })
    let outputObj = {};
    inputArray.forEach(value =>{
        if(outputObj[value]===undefined){
            outputObj[value] = 1;
        }
        else{
            outputObj[value]++;
        }
    })
    return outputObj;
}

function isEqual(arrayOne,arrayTwo){
    if(arrayOne === undefined || arrayTwo === undefined ){
        throw "Input array is undefined";
    }
    arrayOne.forEach(value => {
        if(!(typeof value === "number")){
            throw "Input array contains illegal element";
        }
    })
    arrayTwo.forEach(value => {
        if(!(typeof value === "number")){
            throw "Input array contains illegal element";
        }
    })

    if(arrayOne.length !== arrayTwo.length){
        return false;
    }

    for(let i = 0 ; i<arrayOne.length; i++){
        if(arrayOne[i]!== arrayTwo[i]){
            return false;
        }
    }
    return true;
}

module.exports = {
    head,
    last,
    remove,
    range,
    countElements,
    isEqual
}
