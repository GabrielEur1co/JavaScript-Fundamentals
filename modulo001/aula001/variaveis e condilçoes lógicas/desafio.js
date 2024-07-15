//Preço do combustível 5.87;
    const precoCombustivel = 5.87;

//Gasto médio de combustível do carro por KM 11.5;
    const consumoMedioCombustivel = 11.5;

//Distância em KM da viagem 353KM;
    let distanciaParaCaldasNovasGO = 353;

//Calculo de gasto com combustível da IDA;  

    const gastoDeCombustivelIDA = (distanciaParaCaldasNovasGO/consumoMedioCombustivel) * precoCombustivel;

//Calculo de gasto com combustível da VOLTA;
    const gastoDeCombustivelVOLTA = (distanciaParaCaldasNovasGO/consumoMedioCombustivel) * precoCombustivel;

//Calculo de gasto com combustível da IFA E VOLTA;

    const gastoDeCombustivelIdaEVolta = (gastoDeCombustivelIDA + gastoDeCombustivelVOLTA);


//Resultado

    console.log(`O valor em Reais que será gasto de combustível na IDA é de: R$: ${gastoDeCombustivelIDA.toFixed(2)}`);
    console.log('---------------------------------------------------------------------------------------------------')
    console.log(`O valor em Reais que será gasto de combustível na VOLTA é de: R$: ${gastoDeCombustivelVOLTA.toFixed(2)}`);
    console.log('---------------------------------------------------------------------------------------------------')
    console.log(`O valor em Reais que será gasto de combustível na IDA e na VOLTA é de: R$: ${gastoDeCombustivelIdaEVolta.toFixed(2)}`);
    console.log('---------------------------------------------------------------------------------------------------')


    //O metodo .tofixed(), serve para fixar as casas decimais.
    