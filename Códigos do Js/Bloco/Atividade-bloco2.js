const prompt = require("prompt-sync")();
let user = "guilherme";
let senha = 1234;
const user2 = prompt("Digite seu nome: ");
const senha2 = prompt("Digite sua senha: ");

if (user == user2 && senha == senha2) {
  console.log("acesso liberado");
} else {
  console.log("acesso bloqueado");
}
