let i = 1;
let contador = 0;

do {
  contador = contador + i;
  i += 2;
} while (i < 100);
console.log(contador);

//segunda forma
let ii = 1;
let soma = 0;

do {
  if (ii % 2 != 0) {
    soma = soma + ii;
    console.log(ii);
  }
  ii++;
} while (i < 100);
