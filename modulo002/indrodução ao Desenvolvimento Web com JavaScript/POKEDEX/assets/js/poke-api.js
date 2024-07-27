//Aqui se da o início do consumo da API, usando o fetch() nesse caso, passamos nossa const url como pramentro, o fetch é para dizer que essa é uma requisicão asincrona, ou seja a resposta dela não é imediata, mas sim uma promisse (Promessa de resposta), o metodo .then(o .then é um callback.) diz o que será feito se essa requisição der certo, ou como ela será tratada, caso a resposta dê certo, para caso dê errado usaremos o metódo .catch

const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types 
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
    .then(convertPokeApiDetailToPokemon) 
  };

pokeApi.getPokemons = (offset = 0, limit = 12) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`; // url da requisição

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => (pokemonsDetails))
   
}

