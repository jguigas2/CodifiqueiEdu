const prompt = require("prompt-sync")();

console.log("Digite os três lados do triângulo");
let A = Number(prompt()), B = Number(prompt()), C = Number(prompt());

if(A < (B + C) && B < (A + C) && C < (A + B)){
    if(A == B && B == C)
        console.log("Triângulo Equilátero");
    else if(A != B && B != C && A != C)
        console.log("Triângulo Escaleno");
    else if(A == B || A == C || B == C)
        console.log("Triângulo Isósceles");
}
else
    console.log("não é um triângulo");
