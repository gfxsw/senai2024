const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];
for (let num of numbers) {
  console.log(num);
}
// outra maneira
const numbers2 = [
  [10, 20, 60],
  [8, 10, 52],
];

for (let linha = 0; linha < numbers2.length; linha++) {
  for (let coluna = 0; coluna < numbers2[linha].length; coluna++) {
    console.log(linha);
  }
}
