// pra frente, trás, direita e esquerda; que lado ele está se movendo
const prompt = require("prompt-sync")();

const espaco = prompt("Digite um lado para se mover: ");

if (espaco == "frente") {
  console.log("Voce se moveu para frente");
} else if (espaco == "tras") {
  console.log("Você se moveu para trás");
} else if (espaco == "direita") {
  console.log("Você se moveu para direita");
} else {
  console.log("Você se moveu para esquerda");
}
