import axios from "axios";

export const listPokemons = (offset = 9, limit = 9) =>
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    .then(({ data }) => data.results)
    .catch((error) => {
      console.error(error);
    });

export const getPokemons = (url) =>
  axios
    .get(url)
    .then(({ data }) => data)
    .catch((error) => {
      console.error(error);
    });
