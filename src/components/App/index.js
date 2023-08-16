import React, { useState } from "react";
import "./App.css";
import PokemonViewer from "../PokemonViewer";

function App() {
  const [id, setId] = useState();
  let random = Math.floor(Math.random() * 152);
  function handleClick() {
    setId(random);
  }

  return (
    <div className="App">
      <button
        className="button"
        onClick={() => {
          handleClick();
        }}
      >
        Get Random Pokemon
      </button>
      <PokemonViewer id={random} />
      <p className="pokeid">Pokedex: {id}</p>
    </div>
  );
}

export default App;
