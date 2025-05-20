const prompt = require("prompt-sync")();

let sum = 0;
for(let i = 0; i < 5; i++) {
    sum += Number(prompt());
}
console.log("O resultado final eh: " + sum);