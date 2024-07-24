const { gets, print } = require("./funcoes-auxiliares-ex0002");

const n = gets();

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
  const numero = gets();

  if (numero % 2 === 0) {
    if (maiorNumeroPar === null || numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else if (menorNumeroImpar === null || numero < menorNumeroImpar) {
    menorNumeroImpar = numero;
  }
}

print(`O maior número par é: ${maiorNumeroPar}`);
print(`O menor numero impar é: ${menorNumeroImpar}`);
