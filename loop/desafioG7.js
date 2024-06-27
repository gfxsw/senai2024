const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite a altura seu merda: "));
for (let i = 1; i <= numero; i++) {
  console.log("  ".repeat(numero - i), "🤣".repeat(i + i - 1));
}
