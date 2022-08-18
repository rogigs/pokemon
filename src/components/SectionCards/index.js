import React, { useState, useEffect } from "react";
import { listPokemons as listPokemonsService } from "../../services/pokeAPI";

const SectionCards = () => {
  const [listPokemons, setlistPokemons] = useState([]);

  useEffect(() => {
    listPokemonsService()
      .then((pokemons) => setlistPokemons(pokemons))
      .catch((error) => console.error(error));
  }, []);

  return <section>SectionCards</section>;
};

export default SectionCards;
