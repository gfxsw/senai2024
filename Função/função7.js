//Crie uma função que receba uma array como parâmetro e retorne a soma de todos os números da array.
function arr(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma = soma + array[i];
  }
  console.log(soma);
}
arr([1, 2, 3, 5]);
