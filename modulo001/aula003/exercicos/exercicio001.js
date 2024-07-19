/* ISSO É UMA CLASSE */
class Carro {
    marca;
    cor;
    gastoMedioPorKM

    /* ISSO É O CONSTRUTOR DO OBJT */
    constructor(marca, cor, gastoMedioPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = 1/gastoMedioPorKM;
    }

    /* ISSO É UM METODO */
    calcularGastoDaViagem(distanciaEmKM, precoGasolina){

        return distanciaEmKM * this.gastoMedioPorKM * precoGasolina;

    }

    
}

/* */
const golf = new Carro ('Volkswagen', 'Prata', 11);

console.log(golf);

console.log(golf.calcularGastoDaViagem(100, 6.75));

const punto = new Carro ('Fiat', 'Preto', 14);

console.log(punto.calcularGastoDaViagem(350,5.75));

console.log(golf.gastoMedioPorKM.toFixed(2))