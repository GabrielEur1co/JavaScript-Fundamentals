const pesoEmKg = 82.8;
const altura = 1.80;

const calcIMC = pesoEmKg / (altura ** 2);
const IMC = calcIMC

if(IMC < 18.5){
    console.log(`Seu IMC é: ${IMC.toFixed(2)}, você está abaixo do peso.`)
}else if(IMC >= 18.5 && IMC < 25){
    console.log(`Seu IMC é: ${IMC.toFixed(2)}, você está com o peso normal.`)
}else if(IMC >= 25 && IMC < 30){
    console.log(`Seu IMC é: ${IMC.toFixed(2)}, você está acima do peso.`)
}else if(IMC >= 30 && IMC <= 40 ){
    console.log(`Seu IMC é: ${IMC.toFixed(2)}, você está Obeso.`)
}else{
    console.log(`Seu IMC é: ${IMC.toFixed(2)}, você está com Obesidade Grave.`)
}
