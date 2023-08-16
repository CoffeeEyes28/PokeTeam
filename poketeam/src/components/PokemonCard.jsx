import React from "react";
import '../assets/css/card.css'


function pokemonCard(pokemon){

const poke = pokemon.pokemon

console.log(poke)


    return(
        
        <div className="pokemon-card" id={poke.type}>
         <h3 className="pokeName">{poke.name}</h3>
        <p>{poke.id}</p>
        <img src={poke.image} />


        </div>
        
        
        
    )
}

export default pokemonCard;
