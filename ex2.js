const prompt = require("prompt-sync")();

let idade = prompt("Digite uma idade: ");

if(idade <= 11 && idade >= 0)
    console.log("Criança");
else if(idade >= 12 && idade <= 18)
    console.log("Adolescente");
else if(idade >= 19 && idade <= 59)
    console.log("Adulto");
else if(idade >= 60)
    console.log("Idoso");
else
    console.log("Digite uma idade real");