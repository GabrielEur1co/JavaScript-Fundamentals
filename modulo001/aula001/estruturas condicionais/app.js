//Valores boleanos TRUE & FALSE

console.log('--------------- true or false (valores boleanos) ------------------')

let verdadeiroOuFalso =  10 > 5; //true

console.log(verdadeiroOuFalso);

verdadeiroOuFalso = 0 >= 10 // false

console.log(verdadeiroOuFalso);

console.log('--------------------- VERIFICA SE O NÚMERO É PAR ------------------------')
//Rest0 da divisão %
//Esse trecho verifica se o numero é par, para isso o resto da divisão de um número por 2 tem que ser igual a 0.

let num = 0;
const calcRestoDaDivisao = num % 2;
const numEpar = calcRestoDaDivisao === 0;

console.log(numEpar);
console.log(calcRestoDaDivisao);


console.log('--------------------ESTRUTURAS CONDICIONAIS (IF, ELSE, ELSE IF) -----------------------')

if(numEpar === true){
    console.log(`O número: ${num} é par.`);

}else{
    console.log(`O número: ${num}, é impar.`);
}