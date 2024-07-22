class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const joao = new Pessoa("João", 23);
const pedro = new Pessoa("Pedro", 24);
const jose = new Pessoa("José", 27);
const matheus = new Pessoa("Matheus", 33);
const bruno = new Pessoa("Bruno", 13);



/* A LISTA OU ARAYS FICA ENTRE []*/
/* em lista o primeiro elemento possui o incide  [0] */
const listaPessoas = [joao, pedro, jose, matheus, bruno];

/*AQUI EU IMPRIMI TODA A LISTA*/
console.log(listaPessoas);

/*AQUI EU IMPRIMI O INDICE 3 DA LISTA, NO CASO O OBJ MATHEUS*/
console.log(listaPessoas[3]);

/* O METODO PUSH ADICIONA PESSOAS AO ARRAY */
const eduardo = new Pessoa("Eduardo", 20);
listaPessoas.push(eduardo)
console.log(listaPessoas)

/* AQUI EU SUBISTIUI MATHEUS PO RGABRIELA UTILIZANDO O INDICE ENTRE []*/
const gabriela = new Pessoa('Gabriela', 22);
listaPessoas[3] = gabriela
console.log(listaPessoas)

/*AQUI EU REMOVI O ULTIMO INDICE DA LISTA UTILIZANDO O METODO .pop*/

console.log(listaPessoas)
console.log(listaPessoas.pop())
console.log(listaPessoas)

/*AQUI EU DESCUBRO O TAMANHO DA LISTA UTILIZANDO O METODO LENGTH*/
console.log(listaPessoas.length)