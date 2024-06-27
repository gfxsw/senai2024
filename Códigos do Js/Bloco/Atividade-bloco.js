const prompt = require("prompt-sync")();
let idade = Number(prompt("Digite sua idadade: "));

if (idade < 18) {
  console.log("Não possui idade o suficiente para dirigir");
} else {
  console.log("Apto a dirigir");
}
