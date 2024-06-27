//Crie uma array vazia.
//Utilizando o loop for, crie um loop 5 iterações que faça as seguintes ações:
//- Receba do usuário um nome.
//- Crie um objeto com uma propriedade id que será incremental (começa com 1 e vai aumentando),
//e uma propriedade nome que deverá receber o nome digitado pelo usuário.
//Adicione esse objeto no final da array.
//Ao final do loop, exiba a array no console.
const prompt = require("prompt-sync")();
const arr = [];
for (let i = 0; i < 5; i++) {
  const user = prompt("Digite um nome: ");
  const obj = {
    id: 1 + i,
    nome: user,
  };
  arr.push(obj);
}
console.log(arr);
