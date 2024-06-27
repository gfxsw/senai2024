//ano bissexto
const prompt = require("prompt-sync")();

const ano = Number(prompt("Fale um ano qualquer entre 2000 a 2024: "));

if (ano % 4 == 0 && ano % 100 != 0) {
  console.log("É um ano bissexto");
} else if (ano % 400 == 0) {
  console.log("É um ano bissexto");
} else {
  console.log("É um ano comum");
}
