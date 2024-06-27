//dado de 20 lados
//Se o dado tiver o valor 1, você voltará 1 espaço;
//Se o dado tiver o valor entre 2 e 11, você não avança;
//Se o dado tiver o valor entre 12 e 19, você avançará 1 espaço.
//Se o dado tiver o valor 20, você avançará 10 espaços.
//loop while que gere um valor aleatório e faça a verificação das condições acima com esse número.
// Ao alcançar ou ultrapassar o valor de 10 espaços avançados,
//deverá encerrar o loop e exibir ao usuário quantas iterações foram necessárias para isso.

let espaco = 0;
let i = 0;
while (true) {
  let dado = 20;
  let sorteio = Math.random() * dado;
  sorteio = Math.ceil(sorteio);
  console.log("Você tirou: " + sorteio);
  i++;
  if (sorteio == 1) {
    espaco = espaco - 1;
    console.log("Você voltou uma casa");
  }

  if (sorteio >= 2 && sorteio <= 11) {
    espaco = 0;
    console.log("Você não avança");
  }
  if (sorteio >= 12 && sorteio <= 19) {
    espaco = espaco + 1;
    console.log("Você avançou 1 espaço");
  }
  if (sorteio == 20) {
    espaco = espaco + 20;
    console.log("Você avançou 10 espaços");
  }
  break;
}
