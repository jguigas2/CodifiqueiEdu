const prompt = require("prompt-sync")();

let x = Number(prompt()), y = Number(prompt())

if(x > y) {
    console.log(y)
    console.log(x)
}
else{
    console.log(x)
    console.log(y)
}