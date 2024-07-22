const {gets, print } = require('./funcoes-auxiliares');

const listaNumeroSorteado = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    listaNumeroSorteado.push(numeroSorteado);    
}

print(listaNumeroSorteado)

let maiorNumero = 0;

for (let i = 0; i < listaNumeroSorteado.length; i++) {
     const listaNumeros = listaNumeroSorteado[i];

    if(listaNumeros > maiorNumero){
        maiorNumero = listaNumeros;
    }
    
}

print(maiorNumero)