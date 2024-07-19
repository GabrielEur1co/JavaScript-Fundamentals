/*ISSO É UMA CLASSE*/ 

class Pesoa {
    nome;
    idade;

    /* INSTÂNCIA COM CONSTRUTOR */
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;

    }

    lavarLouca(){
        console.log(`${this.nome} lavou a louça`)
    }
}

/* iSSO É UMA INSTÂNCIA DA CLASS PESSOA */

const gabriel = new Pesoa();
gabriel.nome = 'Gabriel';
gabriel.idade = 25;
gabriel.lavarLouca()


/* INSTÂNCIANDO UMA PESSOA COM UM CONSTRUCTOR*/

const gabriela = new Pesoa ('Gabriela', 23)


console.log(gabriel);
console.log(gabriela);
gabriela.lavarLouca();



