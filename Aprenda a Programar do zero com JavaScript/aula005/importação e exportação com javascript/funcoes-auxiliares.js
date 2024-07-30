const entrada = [5,50,10,98,23];
let i = 0;

function gets(){
    const valor = entrada[i];
    i++;
    return valor
}

function print (texto){

    console.log(texto);
}

//EXPORTANDO AS FUNÇÕES 
module.exports = {gets, print}