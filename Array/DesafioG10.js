// ---- Array ----
const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];

/*
          00 11 22 33 >> linha igual a coluna com incremento sequencial de +1 >> diagA (usar length - for)
          12 + 6 + 0 + 15 = 33
    
          03 12 21 30 >> soma da linha com a coluna é igual ao tamanho do array  menos 1 >> diagB (usar length - for)
          6 + 20 - 4 - 1 = 21
    
          diferença: 12
    */

// ---- Variáveis ----
let diagA = 0;
let diagB = 0;
let diferenca = 0;

// ---- Cálculos ----
for (let linha = 0; linha < arr.length; linha++) {
  for (let coluna = 0; coluna < arr[linha].length; coluna++) {
    // - Incrementando Diagonal A
    if (linha === coluna) diagA += arr[linha][coluna];
    // - Incrementando Diagonal B
    else if (linha + coluna === arr[linha].length - 1)
      diagB += arr[linha][coluna];
  }
}
console.log(
  "A soma da diagonal A é igual:",
  diagA,
  "A soma da diagonal B é igual:",
  diagB
);

diferenca = diagA - diagB;

// ---- Resultado ----
console.log("Diferença da Diagonal A com a Diagonal B: ", diferenca);
