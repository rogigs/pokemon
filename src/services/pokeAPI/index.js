/* eslint-disable */
import axios from "axios";

export const listPokemons = (offset = 10, limit = 10) =>
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    .then(({ data }) => {
      console.log("🚀 ~ file: index.js ~ line 8 ~ .then ~ data", data);
      return data.results;
    })
    .catch((error) => {
      console.error(error);
    });
