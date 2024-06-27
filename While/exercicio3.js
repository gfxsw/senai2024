const prompt = require("prompt-sync")();
let i = 0;
let maior;
let menor;

while (i < 10) {
  const usuario = Number(prompt("Digite seu número: "));
  if (i == 0) {
    maior = usuario;
    menor = usuario;
  } else {
    if (usuario > maior) maior = usuario;
  }

  if (usuario < menor) {
    menor = usuario;
  }
  i++;
}
console.log("maior numero: ", maior);
console.log("menor numero: ", menor);
