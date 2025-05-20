const prompt = require("prompt-sync")();

let x = prompt("Digite um número do conjunto N*: ");

if(x % 2 == 0)
    console.log("Número Par!");
else
    console.log("Número Ímpar");
