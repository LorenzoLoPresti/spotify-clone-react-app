import { ADD_FAVOURITE, REMOVE_FAVOURITE, SELECTED_SONG } from "../Actions";

const initialState = {
  selectedSong: null,
  favouriteList: [],
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_SONG:
      return { ...state, selectedSong: action.payload };

    case ADD_FAVOURITE:
      return {
        ...state,
        favouriteList: [...state.favouriteList, action.payload],
      };

    case REMOVE_FAVOURITE:
      return {
        ...state,
        favouriteList: state.favouriteList.filter(
          (song) => song !== action.payload
        ),
      };
    default:
      return state;
  }
};
