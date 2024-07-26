//Aqui se da o início do consumo da API, usando o fetch() nesse caso, passamos nossa const url como pramentro, o fetch é para dizer que essa é uma requisicão asincrona, ou seja a resposta dela não é imediata, mas sim uma promisse (Promessa de resposta), o metodo .then(o .then é um callback.) diz o que será feito se essa requisição der certo, ou como ela será tratada, caso a resposta dê certo, para caso dê errado usaremos o metódo .catch

const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 12) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`; // url da requisição

  return fetch(url)
    .then((response) => response.json())
    .then((jasonBody) => jasonBody.results)
    .catch((error) => console.error(error));
};

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4'),
    fetch('https://pokeapi.co/api/v2/pokemon/5'),
    fetch('https://pokeapi.co/api/v2/pokemon/6'),
    fetch('https://pokeapi.co/api/v2/pokemon/7'),
    fetch('https://pokeapi.co/api/v2/pokemon/8'),
    fetch('https://pokeapi.co/api/v2/pokemon/9'),
    fetch('https://pokeapi.co/api/v2/pokemon/10'),
    fetch('https://pokeapi.co/api/v2/pokemon/11'),
    fetch('https://pokeapi.co/api/v2/pokemon/12')
    
]).then((results) =>{
    console.log(results
        
    )
})