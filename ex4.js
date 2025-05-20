const prompt = require("prompt-sync")();

console.log("Escolha um dos números a seguir");

console.log("1. Login");

console.log("2. Cadastre-se");

console.log("3. Abrir com Google");

let x = prompt();
switch (x) {
    case "1":
        console.log("Entre com seu email");
        break;
    case "2":
        console.log("Entre com seu cpf");
        break;
    case "3":
        console.log("Confirme para vincular conta google?");
        break;
}
