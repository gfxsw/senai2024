const prompt = require("prompt-sync")();
/*
  Exemplo do Objeto da Tarefa
  {
    id: number,
    tarefa: string,
    marcada: boolean
  }
*/
const lista = [
  {
    id: 1,
    tarefa: "felix",
    marcada: false,
  },
  {
    id: 2,
    tarefa: "ama",
    marcada: false,
  },
  {
    id: 3,
    tarefa: "for",
    marcada: false,
  },
];

console.clear();

function mostrarLista() {
  console.log(lista);
}
mostrarLista();

function adicionarTarefa() {
  const prompts = prompt("Digite um texto: ");
  const obj = {
    id: 4,
    tarefa: prompts,
    marcada: false,
  };
  lista.push(obj);
  console.log(lista);
}
adicionarTarefa();

function marcarTarefa() {
  const promptss = Number(prompt("Digite um número: "));
  lista[promptss - 1].marcada = true;
  console.log(lista);
}
marcarTarefa();

function removerTarefa() {
  const promptss = Number(prompt("Digite um número: "));
  delete lista[promptss - 1].tarefa;
  console.log(lista);
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}
