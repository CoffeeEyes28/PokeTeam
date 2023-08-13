import axios from "axios";

async function getPokemon (id){
  const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

  return poke;
}

export default getPokemon;