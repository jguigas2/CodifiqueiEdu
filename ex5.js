const prompt = require("prompt-sync")();

let peso = prompt("Qual seu peso em kg?: ");
let altura = prompt("Qual sua altura em m?: ");

let IMC = peso/(altura*altura);

if(IMC < 18.5)
    console.log("baixo peso");
else if(IMC >= 18.5 && IMC <= 24.9)
    console.log("peso normal");
else if(IMC >= 25 && IMC <= 29.9)
    console.log("sobrepeso");
else
    console.log("obesidade");
