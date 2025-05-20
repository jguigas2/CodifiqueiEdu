const prompt = require("prompt-sync")();

let nota = prompt("Digite sua nota: ");

if(nota >= 6)
    console.log("Aprovado!");
else if(nota < 6 && nota >=2)
    console.log("Recuperação");
else
    console.log("Reprovado");2