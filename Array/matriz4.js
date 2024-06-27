const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
  for (let coluna = 0; coluna <= numbers.length; coluna++) {
    soma = soma + numbers[i][coluna];
    console.log(soma);
  }
}
