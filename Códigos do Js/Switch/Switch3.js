const prompt = require("prompt-sync")();

const código = Number(prompt("Digite seu código: "));

switch (true) {
  case código == 101:
    console.log("Maçã: R$3/kg");
    break;
  case código == 102:
    console.log("Melancia: R$5/kg");
    break;
  case código == 103:
    console.log("Morango: R$20/kg");
    break;
  default:
    console.log("Produto não registrado");
}
