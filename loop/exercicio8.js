const prompt = require("prompt-sync")();
const numero_primo = Number(prompt("Digite um numero maior que zero: "));
let contador = 0;

for (let i = 1; i <= numero_primo; i++) {
  contador++;
}

if (contador == 2) {
  console.log("É número primo");
} else {
  console.log("Não é primo");
}
