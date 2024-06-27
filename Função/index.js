//estrutura
function cumprimentar() {
  console.log("Oi");
}
cumprimentar();

//com parametro
function cumprimentar(nome) {
  console.log("Oi, " + nome);
}
cumprimentar("felix");

//com variavel
const nome = "kaue";

function cumprimentar(nome) {
  console.log("Oi, " + nome);
}
cumprimentar(nome); //"Oi, kaue"
