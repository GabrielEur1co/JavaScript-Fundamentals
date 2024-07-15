/*
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e sua classificação conforme a tabela abaixo:

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;

*/

let nota1 = 8;
let nota2 = 5.8;
let nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
  console.log(
    `Parabéns sua média foi: ${media.toFixed(2)}, você foi aprovado!`
  );
} else if (media > 5 && media < 7) {
  console.log(`Sua média foi: ${media.toFixed(2)}, você está de  recuperação!`);
} else {
  console.log(`Sua média foi: ${media.toFixed(2)}, você está reprovado!`);
}
