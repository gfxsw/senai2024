const prompt = require("prompt-sync")();
let contador = 0;
let i = 0;
const numprimo = Number(prompt("Digite seu número: "));

do {
  if (numprimo % i == 0) {
    contador++;
  }
  i++;
} while (i <= numprimo);

if (contador == 2) {
  console.log("É primo");
} else {
  console.log("Não é primo");
}
