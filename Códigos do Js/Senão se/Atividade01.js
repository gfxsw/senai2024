// comparar <4 - reprovado; >= 4 < 7 - Recuperação; >=7 - Aprovado
const prompt = require("prompt-sync")();

const nota00 = Number(prompt("Digite sua nota00: "));

const nota001 = Number(prompt("Digite sua nota001: "));

const nota002 = Number(prompt("Digite sua nota002: "));

const media001 = nota00 + nota001 + nota002 / 3;

if (media001 < 4) {
  console.log("Reprovado");
} else if (media001 >= 4 && media001 < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}
