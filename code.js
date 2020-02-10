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