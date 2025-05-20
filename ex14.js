const prompt = require("prompt-sync")();

let number = Number(prompt());
let fatorial = 1;

let i;
for (i = 1; i <= number; i++) {
    fatorial *= i;
}

console.log('O fatorial de ' + number + ' eh: ' + fatorial);