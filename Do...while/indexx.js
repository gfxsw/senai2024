//exemplos de do...while - código vem primeiro, depois condição
let p = 0;

while (p < 10) {
  console.log(p);
  p++;
}

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 10);


//exemplo de do...while - com if

let a = 0
do {
  if(b == 10) {
    break
  }
  a++
}