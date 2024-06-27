const prompt = require("prompt-sync")();
let calor = Number(prompt("Escreva a Temperatura "));
let fahrenheit = calor * 1.8 + 32;
console.log(fahrenheit);
