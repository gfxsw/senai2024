const par = [];
const impar = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    par.push(i);
  } else impar.push(i);
}
console.log(par, impar);
