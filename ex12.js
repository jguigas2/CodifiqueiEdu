const prompt = require("prompt-sync")();

let number = Number(prompt());

if(number <= 10)
    for(let i = 1; i < 11; i++) {
        console.log("A tabuada do " + number + " eh: " + number*i);
    }