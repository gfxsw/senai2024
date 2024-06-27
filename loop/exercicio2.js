const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um numero maior que zero: "));

for (let i = 1; i < numero; i++) {
  console.log(i);
}
