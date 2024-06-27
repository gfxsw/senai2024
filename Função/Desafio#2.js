//Faça uma aplicação que realize as 4 operações básicas de uma calculadora: adição, subtração, multiplicação e divisão.
//Cada operação básica deve ser uma função declarada que receba como parâmetro
//dois números do qual irá realizar a operação e retornar o resultado.
//1. receber 2 números do usuário através do prompt
//2. perguntar ao usuário qual operação realizar
//3. exibir o resultado
//4. perguntar se o usuário deseja realizar mais alguma operação: caso queira, recomeçar o processo.
//_______________________________________________________________________________________________________________________________
const prompt = require("prompt-sync")();

function soma(x, y) {
  return x + y;
}

function subtracao(x, y) {
  return x - y;
}

function multiplicacao(x, y) {
  return x * y;
}

function divisao(x, y) {
  return x / y;
}

while (true) {
  const x = Number(prompt("Digite um número: "));
  const y = Number(prompt("Digite outro número: "));
  const felix = prompt(
    "Você quer realizar soma, subtração, multiplicação ou divisão? "
  );

  let resultado;

  switch (felix) {
    case "soma":
      resultado = soma(x, y);
      break;
    case "subtracao":
      resultado = subtracao(x, y);
      break;
    case "multiplicacao":
      resultado = multiplicacao(x, y);
      break;
    case "divisao":
      resultado = divisao(x, y);
      break;
    default:
      console.log("Opção inválida");
  }

  console.log("O resultado é:", resultado);
  const esc = prompt(
    "Deseja realizar mais alguma operação? Responda, sim (S) ou não (N)"
  );
  if (esc == "n") {
    break;
  }
}
