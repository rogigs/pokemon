import React, { useEffect, useState } from "react";
import { listPokemons as listPokemonsService } from "../../services/pokeAPI";

// eslint-disable-next-line
const Home = () => {
  const [listPokemons, setlistPokemons] = useState([]);

  useEffect(() => {
    listPokemonsService()
      .then((pokemons) => setlistPokemons(pokemons))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {listPokemons.map(({ name }) => (
        <p>{name}</p>
      ))}
    </div>
  );
};

export default Home;
