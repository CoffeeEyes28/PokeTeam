import { useState, useEffect } from 'react'
import getPokemon  from './assets/js/API.js'
import "./app.css"
import Header from './components/Header'
import PokemonCard from './components/PokemonCard.jsx'

function App() {

  const [pokemonTeam, setPokemonTeam] = useState([]);



  
  


 

  async function generateMon () {

    const min = Math.ceil(1)

    const max = Math.floor(1010)

    const newPokemonTeam = [];

    while(newPokemonTeam.length < 6){

    const randomId = Math.floor(Math.random() * (max - min) + min);

      const pokemon = await getPokemon(randomId)

      const pokemonData = pokemon.data

      console.log(pokemonData)

      const newPoke = {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        type: pokemonData.types[0].type.name
      }
          newPokemonTeam.push(newPoke)

  }

  setPokemonTeam(newPokemonTeam)

}

useEffect(() => {
  

}, [pokemonTeam])


    console.log(pokemonTeam)
  return (
    <>
      <Header />
    
      <div className='main-container'>
        <h2>Generate your team</h2>
        <button onClick={generateMon}>Generate</button>
        <br></br>
        <div className='grid-container'>

        {pokemonTeam.map(pokemon =>(
          <PokemonCard key={pokemon.id} pokemon={pokemon} className="grid-item"/>
        
        ))}
        
      </div>

      </div>


      
    </>
  )
}

export default App
