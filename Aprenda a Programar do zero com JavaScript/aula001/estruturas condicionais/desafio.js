const precoEtanol = 3.75;
const precoGasolina = 5.75;
const gastoMedioPorKMlitro = 11;
let distanciaViagem = 750;

let tipoDeGasolina = 'Gasolina';

if (tipoDeGasolina === 'gasolina' || tipoDeGasolina === 'Gasolina'){

    gastoViagem = (distanciaViagem/gastoMedioPorKMlitro)*precoGasolina;

    console.log(`A viagem com gasolina custara R$: ${gastoViagem.toFixed(2)}`);

}else if(tipoDeGasolina === 'etanol' || tipoDeGasolina === 'Etanol'){

    gastoViagem = (distanciaViagem/gastoMedioPorKMlitro)*precoEtanol;

    console.log(`A viagem com etanol custara R$: ${gastoViagem.toFixed(2)}`);

}else{

    console.log('Tipo de gasolina invalido.');
}


