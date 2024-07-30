/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

*/

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numberList.length; i++) {
  const numero = numberList[i];
    
//Se o resto da divisão por 2 for igual a 0   
  if (numero % 2 === 0) {
    console.log(numero);
  }
}
