//Salário até R$2.112,00, é isento; Salário entre R$2.112,01 e R$2.826,65, deverá pagar 7.5%; Salário entre R$2.826,66 e R$3.751,05, deverá pagar 15%;
//Salário entre R$3.751,06 e R$4.664,68, deverá pagar 22.5%; Salário acima de R$4664,68, deverá pagar 27.5%
const prompt = require("prompt-sync")();

const salario = prompt("Digite seu salário");

const salario1 = salario * 0.075;

const salario2 = salario * 0.15;

const salario3 = salario * 0.225;

const salario4 = salario * 0.275;

if (salario <= 2112) {
  console.log("Insento");
} else if (salario == 2112 || salario <= 2826.65) {
  console.log(salario1);
} else if (salario == 2826.66 || salario <= 3751.05) {
  console.log(salario2);
} else if (salario == 3751.06 || salario <= 4664.68) {
  console.log(salario3);
} else {
  console.log(salario4);
}
