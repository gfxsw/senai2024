const prompt = require("prompt-sync")();

const nota = Number(prompt("Digite sua nota mano: "));

switch (true) {
  case nota <= 10 && nota >= 7:
    console.log("Aprovado");
    break;
  case nota <= 6 && nota >= 4:
    console.log("Recuperação");
    break;
  case nota <= 3:
    console.log("Recuperado");
    break;
}
