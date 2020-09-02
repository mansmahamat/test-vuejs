/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-const */
/* eslint-disable import/prefer-default-export */
export const SET_CHARACTERS = (state, characters) => {
  state.characters = characters;
};

export const SET_QUOTES = (state, quotes) => {
  state.quotes = quotes;
};

export const SET_CHARACTER = (state, character) => {
  state.character = character;
};

// eslint-disable-next-line consistent-return
export const ADD_TO_FAVLIST = (state, { character, quantity }) => {
  let favInList = state.favList.find(item => {
    return item.character.char_id === character.char_id;
  });

  if (favInList) {
    return;
  }

  state.favList.push({
    character,
    quantity,
  });
};

export const REMOVE_TO_FAVLIST = (state, character) => {
  state.favList = state.favList.filter(item => {
    return item.character.char_id !== character.char_id;
  });
};
