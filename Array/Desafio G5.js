//multiplicar os numeros da mesma coluna
const arr = [
  [10, 20, 30],
  [10, 20, 30],
];
//padrao - minha primeira linha vai ter uma sequencia de 00, 01, 02 } aumento gradual de 1 em 1
//padrao - minha segunda linha vai ter uma sequencia de 10, 11, 12 } aumento gradual de 1 em 1
let linha1 = 0;
let linha2 = 0;
//usar for dentro de for
//for coluna
//for linha
for (let coluna = 0; coluna <= arr.length; coluna++) {
  for (let linha = 0; linha < arr.length; linha++) {
    linha1 = linha1 + linha++;
    let multiplicacao = arr[linha][coluna] * arr[linha1][coluna];
    console.log(multiplicacao);
  }
}
