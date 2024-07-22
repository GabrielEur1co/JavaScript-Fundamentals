const {gets, print } = require('./funcoes-auxiliares');

const numeroSorteado = [];

for (let i = 0; i < 5; i++) {
    this.numeroSorteado = gets();
    numeroSorteado.push(this.numeroSorteado);    
}

print(numeroSorteado)

let maiorNumero = 0;

for (let i = 0; i < numeroSorteado.length; i++) {
    this.numeroSorteado = numeroSorteado[i];

    if(this.numeroSorteado > maiorNumero){
        maiorNumero = this.numeroSorteado;
    }
    
}

print(maiorNumero)