const prompt = require("prompt-sync")();

const numerin = Number(prompt("Digite seu numero: "));

let result = numerin;
let i = 1;

do {
  result = result * i;
  i++;
} while (i < numerin);
console.log("A fatorial de:", numerin, "é igual a: " + result);
