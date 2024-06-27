const prompt = require("prompt-sync")();
const cambioMoedas = {
  dolar_us: {
    nome: "Dólar Americano",
    codigo: "USD",
    valor_em_real: 5.4,
  },
  euro: {
    nome: "Euro",
    codigo: "EUR",
    valor_em_real: 6.52,
  },
  libra: {
    nome: "Libra Esterlina",
    codigo: "GBP",
    valor_em_real: 7.42,
  },
  iene: {
    nome: "Iene Japonês",
    codigo: "JPY",
    valor_em_real: 0.049,
  },
  dolar_au: {
    nome: "Dólar Australiano",
    codigo: "AUD",
    valor_em_real: 4.14,
  },
};

const tipoMoedas = {
  0: "dolar_us",
  1: "euro",
  2: "libra",
  3: "iene",
  4: "dolar_au",
};

function realizarCambio(brl, moeda) {
  return brl * cambioMoedas[tipoMoedas[moeda]].valor_em_real;
}

const brl = Number(prompt("Digite um valor em reais (apenas números):"));

if (isNaN(brl)) {
  console.log("Digite apenas números!");
} else {
  const moeda = prompt(
    "Escolha uma moeda para realizar o câmbio:\n\n0 - USD\n1 - EURO\n2 - GBP\n3 - IENE\n4 - AUD\n\n"
  );

  if (moeda in tipoMoedas) {
    const cambio = realizarCambio(brl, moeda);
    console.log(
      `R$ ${brl} equivalem a ${cambio} ${cambioMoedas[tipoMoedas[moeda]].nome}`
    );
  } else {
    console.log("Moeda selecionada inexistente!");
  }
}
