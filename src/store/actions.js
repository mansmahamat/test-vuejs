/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const getCharacters = ({ commit }) => {
  axios.get('https://www.breakingbadapi.com/api/characters')
    .then((response) => {
      commit('SET_CHARACTERS', response.data);
    })
    .catch((error) => { console.log(error); });
};

export const getQuotes = ({ commit }) => {
  axios.get('https://www.breakingbadapi.com/api/quote?author=Walter+White')
    .then((response) => {
      commit('SET_QUOTES', response.data);
    })
    .catch((error) => { console.log(error); });
};

export const getCharacter = ({ commit }, id) => {
  axios
    .get(`https://www.breakingbadapi.com/api/characters/${id}`)
    .then((response) => {
      commit('SET_CHARACTER', response.data);
    })
    .catch((error) => { console.log(error); });
};

export const addCharacterToFav = ({ commit }, { character, quantity }) => {
  commit('ADD_TO_FAVLIST', { character, quantity });
};

export const removeFavFromList = ({ commit }, character) => {
  commit('REMOVE_TO_FAVLIST', character);
};
