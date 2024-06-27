const prompt = require("prompt-sync")();
let maior;
let menor;

for (let i = 0; i < 5; i++) {
  const numero = Number(prompt("Digite seu numero: "));

  if (i == 0) {
    maior = numero;
    menor = numero;
  } else {
    if (numero > maior) maior = numero;
  }

  if (numero < menor) {
    menor = numero;
  }
}

console.log("maior numero: ", maior);
console.log("menor numero: ", menor);
