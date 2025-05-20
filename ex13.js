const prompt = require("prompt-sync")();

let x = Number(prompt())
let soma = 0

while(x != 0){
    soma += x
    x = Number(prompt())
}
console.log(soma)