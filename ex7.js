const prompt = require("prompt-sync")();

console.log("Quantas maçãs foram compradas? ")
let apples = Number(prompt())

let price = 0

if(apples < 12){
    price = 0.3 * apples
    console.log(price)
    }
else {
    price = 0.25 * apples
    console.log(price)
}