const { gets, print } = require("./funcoes-auxiliares-ex0002");

const lista = [];

for (let i = 0; i <= 5; i++) {
  const numeros = gets();

  lista.push(numeros);
}

print(lista);

let maiorNumeroPar = 0;

for (let i = 0; i < lista.length; i++) {
  const maiorNumero = lista[i];

  if (maiorNumero % 2 === 0 && maiorNumero > maiorNumeroPar) {
    maiorNumeroPar = maiorNumero;
  }
}

print(maiorNumeroPar);

let maiorNumeroImpar = 0;

for (let i = 0; i < lista.length; i++) {
  const maiorNumero = lista[i];

  if (maiorNumero % 2 !== 0 && maiorNumero > maiorNumeroImpar) {
    maiorNumeroImpar = maiorNumero;
  }
}

print(maiorNumeroImpar);
