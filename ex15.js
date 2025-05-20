const prompt = require("prompt-sync")();

let a = 0,
    b = 1;

console.log('Sequencia de Fibonacci:');
console.log(1)
for (let i = 1; i < 10; i++) {
    console.log(a + b);
    let temp = a + b;
    a = b;
    b = temp;
}