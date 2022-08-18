import React, { useState, useEffect } from "react";
import { listPokemons as listPokemonsService } from "../../services/pokeAPI";
import Card from "../Card";

const SectionCards = () => {
  const [listPokemons, setlistPokemons] = useState([]);

  useEffect(() => {
    listPokemonsService()
      .then((pokemons) => setlistPokemons(pokemons))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section>
      {listPokemons.map(({ name, url }) => (
        <Card name={name} url={url} />
      ))}
    </section>
  );
};

export default SectionCards;
