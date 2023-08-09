import { useState, useEffect } from "react";

function PokemonViewer({ id }) {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        headers: { accepts: "application/json" },
      });
      const data = await response.json();
      console.log(data, "this is data");
      setPokemon(data);
    }
    getPokemon(id);
  }, [id]);
  return (
    <div className="pokemon-viewer">
      <p>{pokemon.name}</p>
      <img
        src={pokemon.sprites?.other.home.front_default}
        alt="Random pokemon"
      />
      <p>{pokemon.weight}lbs</p>
    </div>
  );
}

export default PokemonViewer;
