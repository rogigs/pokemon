import React, { useState, useEffect } from "react";
import { listPokemons as listPokemonsService } from "../../services/pokeAPI";
import Card from "../Card";
import * as S from "./styles";

const SectionCards = () => {
  const [listPokemons, setlistPokemons] = useState([]);

  useEffect(() => {
    listPokemonsService()
      .then((pokemons) => setlistPokemons(pokemons))
      .catch((error) => console.error(error));
  }, []);

  return (
    <S.Wrapper>
      {listPokemons.map(({ name, url }) => (
        <Card name={name} url={url} />
      ))}
    </S.Wrapper>
  );
};

export default SectionCards;
