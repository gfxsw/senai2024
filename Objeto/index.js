const pessoa = {
  nome: "Guilherme",
  idade: 15,
  definicao: "lindo",
};
//adiciona
pessoa.origem = "Nutribem";
console.log(pessoa);
//deleta
delete pessoa.origem;
console.log(pessoa);
//alterar
pessoa.nome = "Lindo";
console.log(pessoa);
