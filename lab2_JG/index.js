const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");

let testArray = [1,2,3,4,5];
let noArray;

// test head
console.log("TEST HEAD!!!!!!!!!!!!!!!!!!!!!")
try{
    console.log(arrayUtils.head([]))
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.head())
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.head([1,"2"]))
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.head(testArray))
}catch(error){
    console.log(error)
}


// test last
console.log("TEST LAST!!!!!!!!!!!!!!!!!!!!!")
try{
    console.log(arrayUtils.last([]))
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.last())
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.last([1,"2"]))
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.last(testArray))
}catch(error){
    console.log(error)
}


// test remove
console.log("TEST REMOVE!!!!!!!!!!!!!!!!!!!!!")
try{
    console.log(arrayUtils.remove([],0))
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.remove(noArray,0))
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.remove([1,"2"],0))
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.remove(testArray,"0"))
}catch(error){
    console.log(error)
}

try{
    arrayUtils.remove(testArray,0);
    console.log(testArray);
}catch(error){
    console.log(error)
}

// test range
console.log("TEST RANGE!!!!!!!!!!!!!!!!!!!!!")
try{
    console.log(arrayUtils.range("5"));
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.range(-1));
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.range(5));
}catch(error){
    console.log(error)
}

try{
    console.log(arrayUtils.range(5,"a"));
}catch(error){
    console.log(error)
}

// test count
console.log("TEST COUNT!!!!!!!!!!!!!!!!!!!!!");
try{
    console.log(arrayUtils.countElements([]));
}catch(error){
    console.log(error);
}

try{
    console.log(arrayUtils.countElements());
}catch(error){
    console.log(error);
}

try{
    console.log(arrayUtils.countElements([true,1]));
}catch(error){
    console.log(error);
}

try{
    console.log(arrayUtils.countElements([1,1,2,"3","3",3,"hi","hi"]));
}catch(error){
    console.log(error);
}

// test isEqual
console.log("TEST ISEQUAL");

try{
    console.log(arrayUtils.isEqual());
}catch(error){
    console.log(error);
}

try{
    console.log(arrayUtils.isEqual([]));
}catch(error){
    console.log(error);
}

try{
    console.log(arrayUtils.isEqual([1,"2"],[1,2]));
}catch(error){
    console.log(error);
}

try{
    console.log(arrayUtils.isEqual([1,2],[1]));
}catch(error){
    console.log(error);
}

try{
    console.log(arrayUtils.isEqual([1,2],[1,2]));
}catch(error){
    console.log(error);
}

try{
    console.log(arrayUtils.isEqual([],[]));
}catch(error){
    console.log(error);
}

// test capitalize
console.log("TEST CAPITALIZE");
try{
    console.log(stringUtils.capitalize());
}catch(error){
    console.log(error);
}

try{
    console.log(stringUtils.capitalize(123));
}catch(error){
    console.log(error);
}

try{
    console.log(stringUtils.capitalize("aPPLe"));
}catch(error){
    console.log(error);
}

// test repeat
console.log("TEST REPEAT");
try{
    console.log(stringUtils.repeat());
}catch(error){
    console.log(error);
}

try{
    console.log(stringUtils.repeat(123,2));
}catch(error){
    console.log(error);
}

try{
    console.log(stringUtils.repeat("abc",-1));
}catch(error){
    console.log(error);
}

try{
    console.log(stringUtils.repeat("abc","2"));
}catch(error){
    console.log(error);
}

try{
    console.log(stringUtils.repeat("abc",2));
}catch(error){
    console.log(error);
}

// test countChars
console.log("TEST COUNTCHARS");
try{
    console.log(stringUtils.countChars());
}catch(error){
    console.log(error);
}

try{
    console.log(stringUtils.countChars(123123));
}catch(error){
    console.log(error);
}

try{
    console.log(stringUtils.countChars("Apple is an apple!"));
}catch(error){
    console.log(error);
}

// test extend
console.log("TEST EXTEND!!!!!");
try{
    console.log(objUtils.extend());
}catch(error){
    console.log(error)
}

try{
    console.log(objUtils.extend(1,"2"));
}catch(error){
    console.log(error)
}


try{
    console.log(objUtils.extend({x:2,y:3},{x:4,a:1}));
}catch(error){
    console.log(error)
}

// test smush
console.log("TEST SMUSH!!!!!");
try{
    console.log(objUtils.smush());
}catch(error){
    console.log(error)
}

try{
    console.log(objUtils.smush(1,"2"));
}catch(error){
    console.log(error)
}


try{
    console.log(objUtils.smush({x:2,y:3},{x:4,a:1}));
}catch(error){
    console.log(error)
}

// test mapValues
console.log("TEST MAPVALUES!!!!!");

try{
    console.log(objUtils.mapValues());
}catch(error){
    console.log(error)
}

try{
    console.log(objUtils.mapValues({x:1},"func"));
}catch(error){
    console.log(error)
}

try{
    console.log(objUtils.mapValues({x:"1",y:2},n=>n*2));
}catch(error){
    console.log(error)
}

try{
    console.log(objUtils.mapValues({x:1,y:2},n=>n*2));
}catch(error){
    console.log(error)
}



