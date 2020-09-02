/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
export const favItemCount = (state, character) => {
  const favInList = state.favList.find((item) => {
    return item.character.char_id === character.char_id;
  });
};
