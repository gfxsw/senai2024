const prompt = require("prompt-sync")();
let notaescolar = Number(prompt("Qual sua nota1?"));
let notaescolar2 = Number(prompt("Qual sua nota2?"));
let notaescolar3 = Number(prompt("Qual sua nota3?"));
let mediaescolar = (notaescolar + notaescolar2 + notaescolar3) / 3;
console.log(mediaescolar);
