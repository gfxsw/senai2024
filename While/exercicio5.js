const prompt = require("prompt-sync")();
const nome = "guilherme";
const senha = "1234";

while (true) {
  let nomeuser = prompt("Digite um nome de usuário: ");
  let senhauser = prompt("Digite uma senha: ");
  if (nomeuser == nome && senhauser == senha) {
    console.log("login realizado com sucesso");
    break;
  } else {
    console.log("dados errados");
  }
}
