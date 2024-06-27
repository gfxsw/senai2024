for (let i = 0; i < 10; i++) {
  console.log(i);
}

//condição fora do for
for (let i = 0; ; i++) {
  if (i > 10) {
    break;
  }
}

// sem a expressão final
for (let i = 0; i < 10; ) {
  if (i < 5) {
    i++;
  } else {
    i += 2;
  }
}

// sem nada
let i = 0;
for (;;) {
  i++;

  if (i > 10) {
    break;
  }
}
