import React, { useState, useEffect } from "react";
import { getPokemons } from "../../services/pokeAPI";

const Card = ({ url, name }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemons(url)
      .then((pokemons) => setPokemon(pokemons))
      .catch((error) => console.error(error));
  }, [url]);

  return (
    <article>
      <p>{name}</p>
      <img src={pokemon.sprites.front_default} alt={`Pokemon ${name}`} />
    </article>
  );
};

export default Card;
