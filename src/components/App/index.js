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
    <div>
      <div className="logodiv">
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo-500x313.png"
          alt="pokemon logo"
        ></img>
      </div>
      <div className="ball-container">
        <div class="poke_box">
          <div class="pokeball">
            <button
              className="pokeball__button"
              onClick={() => {
                handleClick();
              }}
            ></button>
          </div>
        </div>
      </div>
      <div className="App">
        <PokemonViewer id={random} />
        <p className="pokeid">Pokedex: {id}</p>
      </div>
    </div>
  );
}

export default App;
