//multiplicar os numeros da mesma linha
const arr = [
  [10, 20, 60],
  [8, 10, 52],
];
//
//padrao - minha primeira linha vai ter uma sequencia de 00, 01, 02 } aumento gradual de 1 em 1
//padrao - minha segunda linha vai ter uma sequencia de 10, 11, 12 } aumento gradual de 1 em 1
let fora = 0;
let resultado = 0;
//usar for dentro de for
for (let linha = 0; linha < arr.length; linha++) {
  for (let coluna = 0; coluna < arr.length; coluna++) {
    if (coluna == 0) {
      fora = arr[linha][coluna] * arr[linha][coluna + 1];
    } else {
      resultado = fora * arr[linha][coluna + 1];
      console.log(resultado);
    }
  }
}
