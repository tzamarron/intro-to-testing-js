// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if(typeof input !== "string" || input === "" || !isNaN(input)){
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input){
    return input === 5;
}

function isEven(input) {
    return parseInt(input) % 2 === 0;
}

function isVowel(input) {
    if (typeof input !== "string"){
        return false;
    } else {
        var result;
        var trimmingString = input.trim();
        switch (trimmingString.toUpperCase()) {
            case "A":
                result = true;
                break;
            case "E":
                result = true;
                break;
            case "I":
                result = true;
                break;
            case "O":
                result = true;
                break;
            case "U":
                result = true;
                break;
            default:
                result = false;
                break;
        }
        return result;
    }
}

function add(input1, input2){
    if (isNaN(input1) || isNaN(input2)){
        return NaN;
    } else{
        return parseFloat(input1) + parseFloat(input2);
    }
}