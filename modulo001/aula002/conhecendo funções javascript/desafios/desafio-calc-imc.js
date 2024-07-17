function calImc(peso, altura){
    return peso/Math.pow(altura, 2);
}

function classificarImc(imc){

    if(imc < 18.5){
        return 'Abaixo do peso!';
    }else if (imc >= 18.5 && imc < 25){
        return 'Peso normal!';
    }else if (imc >= 25 && imc < 30){
        return 'Acima do Peso1';
    }else if (imc >= 30 && imc < 40){
        return 'Obeso!';
    }else{
        return 'Obesidade gave!'
    }

}


(function (){

    const peso  = 76;
    const altura = 1.80;
    const imc = calImc(peso, altura);

   console.log(classificarImc(imc));

})()

