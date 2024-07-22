/* 
1) Crie um programa que dado um número imprima a sua tabuada
*/
function mostarTabuada(numero){
    
    for (let i = numero; i < (numero * 10 + 1); i+=numero) {

        console.log(`${numero} x ${i-numero} = ${i}`);
        
    }
}    






function mostarTabuada2(number){

    for (let i = 1; i <=10; i++) {
        console.log(`${number} X ${i} = ${i * number}`);
        
    }
}

mostarTabuada2(9)