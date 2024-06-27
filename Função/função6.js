//Crie uma função que receba um número como parâmetro.
//A função deve gerar um número aleatório e usar o número do parâmetro como valor máximo de aleatoriedade.

function aleatorio(numero) {
  console.log(Math.random() * numero);
}
aleatorio(5);
