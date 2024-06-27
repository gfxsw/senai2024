const prompt = require("prompt-sync")();

const peso = Number(prompt("Digite o peso da sua scania: "));

switch (true) {
  case peso >= 1000 && peso <= 3999:
    console.log("Caminhão de pequeno porte");
    break;
  case peso >= 4000 && peso <= 6000:
    console.log("Caminhão de médio porte");
    break;
  case peso > 6000:
    console.log("Caminhão de grande porte");
    break;
  default:
    console.log("Não é um caminhão");
}
