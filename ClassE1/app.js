const dictionary = require("./dictionary");

try {
    console.log(dictionary.lookupDefinition("programming"))
}catch (error){
    console.log(error)
}

try{
    console.log(dictionary.getWord("The action or process of writing computer programs."))
}catch (error){
    console.log(error)
}

try {
    console.log(dictionary.lookupDefinition("dog"))
}catch (error){
    console.log(error)
}

try{
    console.log(dictionary.getWord("dog is a kind of animal"))
}catch (error){
    console.log(error)
}
