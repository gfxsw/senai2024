const prompt = require("prompt-sync")();
let maior;
let menor;
let i = 0;

do {
  const numeros = Number(prompt("Digite seu número: "));
  if (i == 0) {
    maior = numeros;
    menor = numeros;
  }
  if (numeros > maior) {
    maior = numeros;
  }

  if (numeros < menor) {
    menor = numeros;
  }
  i++;
} while (i < 10);
console.log("maior numero: ", maior);
console.log("menor numero: ", menor);
