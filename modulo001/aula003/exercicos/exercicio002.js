class Pessoa {
  nome;
  peso;
  altura;
  imc;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.imc = this.calcularImc()
  }

  calcularImc(){

    return this.peso / Math.pow(this.altura, 2);

    
  }

  dizerValorImc() {
    
    return `Meu imc é ${this.imc.toFixed(2)}`;
  }

  classificarImc(){
    if(this.imc < 18.5){
        return 'Baixo peso.'
    }else if(this.imc >= 18.5 && this.imc <= 24.9){
        return 'Peso normal.'
    }else if(this.imc >=25 && this.imc <= 29.9){
        return 'Acima do peso.'
    }else if(this.imd >=30 && this.imc <= 39.9){
        return 'Obesidade'
    }else{
        return 'Obesidade Grave!'
    }
  }
}

const gabriel = new Pessoa("Gabriel", 78.5, 1.8);

console.log(gabriel.dizerValorImc());

const gabriela = new Pessoa ('Gabriela', 62, 1.62);

console.log(gabriela.dizerValorImc());
console.log(gabriela.classificarImc());

const pessoaObesa = new Pessoa ('Gordão', 180, 1.60);

console.log(`O ${pessoaObesa.nome} tem ${pessoaObesa.classificarImc()}`)





