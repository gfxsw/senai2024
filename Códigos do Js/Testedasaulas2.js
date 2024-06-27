const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite um valor: ").trim());
switch (valor) {
  case 1:
    console.log("caso 1");
  case 7:
    console.log("caso 8");
    break;
  case "minecraft":
    console.log("caso minecraft");
  default:
    console.log("caso padrao");
}
