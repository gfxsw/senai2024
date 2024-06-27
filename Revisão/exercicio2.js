//Crie uma variável numero que receba através do prompt um número digitado pelo usuário.
//Crie uma estrutura condicional que verifica se numero é maior que 5 e, se for, exiba "O número é maior que 5".
const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número mano: "));
if (numero > 5) {
  console.log("Seu número é maior que 5");
}
