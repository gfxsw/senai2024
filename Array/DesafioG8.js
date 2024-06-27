const lista_numeros = [5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1];
for (let i = 0; i < lista_numeros.length; i++) {
  if (i != lista_numeros.indexOf(lista_numeros[i])) {
    lista_numeros.splice(i, 1);
    i--;
  }
}
console.log(lista_numeros.sort());
