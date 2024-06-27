//Crie uma variável episodios que receba através do prompt um número digitado pelo usuário.
//Crie uma estrutura condicional que, baseado no número episodios, determine:
//Se for entre 1 e 10, deve exibir “série curta”;
//Se for entre 11 e 100, deve exibir “série média”;
//Se for entre 101 e 999, deve exibir “série longa”;
//Se for maior que 1000, deve exibir “One Piece”;
//Se não for nenhum valor mencionado (default), deve exibir “não existe”.
const prompt = require("prompt-sync")();
const episodios = Number(prompt("Digite uma número: "));

switch (true) {
  case episodios <= 10:
    console.log("série curta");
    break;
  case episodios >= 11 && episodios <= 100:
    console.log("série média");
    break;
  case episodios >= 101 && episodios <= 999:
    console.log("série longa");
    break;
  case episodios > 1000:
    console.log("One Piece");
    break;
  default:
    console.log("não existe");
}
