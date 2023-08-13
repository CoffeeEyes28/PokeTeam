import { useState } from 'react'
import getPokemon  from './assets/js/API.js'
import "./app.css"
import Header from './components/Header'

function App() {

  const [pokemomTeam, setPokemonTeam] = [];


 

  async function generateMon () {

    const randomId = Math.floor(Math.random() * 1282 )

      const pokemon = await getPokemon(randomId)

      const pokemonData = pokemon.data

      console.log(pokemonData)

      const newPoke = {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default
      }

        console.log(newPoke)
     
  }

  return (
    <>
      <Header />
    
      <div className='main-container'>
        <h2>Generate your team</h2>
        <button onClick={generateMon}>Generate</button>









      </div>


      
    </>
  )
}

export default App
