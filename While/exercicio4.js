const prompt = require("prompt-sync")();
const sesi = 59;
while (true) {
  let user = prompt("Digite um número: ");
  if (user == sesi) {
    console.log("parabéns, você acertou o número");
    break;
  }
  if (user > sesi) {
    console.log("Digite um número menor");
  } else {
    if (user < sesi) console.log("Digite um número maior");
  }
}
