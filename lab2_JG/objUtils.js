function extend(...args){
    if (args.length===0){
        throw "input is empty";
    }
    args.forEach(obj=>{
        if(typeof obj !=="object"){
            throw "input is invalid";
        }
    })
    output = {};
    args.forEach(obj =>{
        for(var a in obj){
            if(output[a]===undefined){
                output[a] = obj[a];
            }
        }
    })
    return output;
}

function smush(...args){
    if (args.length===0){
        throw "input is empty";
    }
    args.forEach(obj=>{
        if(typeof obj !=="object"){
            throw "input is invalid";
        }
    })
    output = {};
    args.forEach(obj =>{
        for(var a in obj){
            output[a] = obj[a];
        }
    })
    return output;
}

function mapValues(object,func){
    if(object=== undefined || func === undefined){
        throw "input is undefined";
    }
    if(typeof object !=="object" || typeof func !=="function"){
        throw "input type is invalid"
    }
    for(var a in object){
        if(typeof object[a]!== "number"){
            throw "input type is invalid"
        }
        object[a] = func(object[a]);
    }
    return object;
}

module.exports = {
    extend,
    smush,
    mapValues
}