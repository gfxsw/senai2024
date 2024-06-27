//Crie um objeto chamado pessoa com as seguintes propriedades:
//nome, idade, profissão, e país. Cada propriedade precisa possui algum valor atribuído, seja criativo.
//Exiba no console o nome e a idade.
//Altere a profissão para “vendedor da shopee”.
//Adicione uma propriedade email e atribua um email.
//Delete a propriedade país.
const pessoa = {
  nome: "Guilherme",
  idade: 15,
  profissão: "Cortador de cana",
  país: "Micronésia",
};
console.log(pessoa.nome, pessoa.idade);
pessoa.profissão = "Vendedor da shopee";
console.log("você conseguiu um novo emprego!", pessoa);
pessoa.email = "reiemvendasdashopee@outlook";
console.log("esse é seu e-mail de trabalho", pessoa);
delete pessoa.país;
console.log("você removeu a propriedade país, você morreu...", pessoa);
console.log(pessoa);
