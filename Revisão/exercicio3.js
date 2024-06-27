//Crie uma variável idade que receba a idade pelo prompt.
//Crie uma estrutura condicional que determine através da idade se o usuário é maior ou menor de idade. Exiba no console.
const prompt = require("prompt-sync")();
const idade = Number(prompt("Digite sua idade mano: "));
if (idade >= 18) {
  console.log("Você é maior de idade");
} else console.log("Você é menor de idade mano");
