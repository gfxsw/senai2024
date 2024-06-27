//Criar um objeto chamado carro com propriedades de marca, modelo, ano e cor.
//Exiba o modelo e cor.
//Altere a cor para “jacinto.
//Adicione uma propriedade condicao e defina se é usado ou novo.
//Delete a propriedade ano.
//Exiba no console o objeto.
const carro = {
  marca: "volkswagen",
  modelo: "Golf GTI",
  ano: "2017",
  cor: "vermelho",
};
carro.cor = "Jacinto";
carro.condição = "Zero KM";
delete carro.ano;
console.log(carro);
