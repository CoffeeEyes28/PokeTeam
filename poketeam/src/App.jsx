import { useState } from 'react'
import getPokemon  from './assets/js/API.js'
import "./app.css"
import Header from './components/Header'

function App() {

  const [pokemonTeam, setPokemonTeam] = useState([]);


 

  async function generateMon () {

    const min = Math.ceil(1)

    const max = Math.floor(1010)

    const randomId = Math.floor(Math.random() * (max - min) + min);

      const pokemon = await getPokemon(randomId)

      const pokemonData = pokemon.data

      console.log(pokemonData)

      const newPoke = {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default
      }

        if (pokemonTeam.length < 6 ){
          pokemonTeam.push(newPoke)
          setPokemonTeam(pokemonTeam)
          console.log(pokemonTeam)
        }else if (pokemonTeam.length === 6){
          console.log("team full")
          
        }else{
            console.log("team full try again")
        }

        console.log(pokemonTeam)

    
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
