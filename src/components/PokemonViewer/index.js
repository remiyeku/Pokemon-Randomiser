import { useState } from "react";
import { useEffect } from "react";

function PokemonViewer({ id }) {
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!
  const [pokemon, setPokemon] = useState();
  

  useEffect(() => {
    async function getPokemon(){
      const response  = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}` )
      const data = await response.json();
      setPokemon(data);
      console.log(data);
    }
    getPokemon()
  },[id])
  
  console.log(pokemon)
  return (
    <div className="pokemon-viewer">
    <h1> {pokemon.name} </h1>
    <p>display pokemon with id {id} here!</p>
    </div>
  );
}

export default PokemonViewer;
