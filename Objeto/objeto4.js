const dados = [
  {
    id: 1,
    nome: "Carlão Pedregulho",
  },
  {
    id: 2,
    nome: "Zezin Pão de forma",
  },
  {
    id: 3,
    nome: "Taccafaka Nopesh",
  },
];
//Usando o loop for, verifique cada elemento da array.
//Se o id 1, exiba “minerador”. Se o id for 2, exiba “padeiro”. Se o id for 3, exiba “peixeiro".
for (let i = 0; i < dados.length; i++) {
  if (dados[i].id == 1) {
    console.log("minerador");
  } else if (dados[i].id == 2) {
    console.log("padeiro");
  } else if (dados[i].id == 3) {
    console.log("peixeiro");
  }
}
