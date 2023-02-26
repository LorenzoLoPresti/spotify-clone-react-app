import { act } from "react-dom/test-utils";
import { FAVOURITE, SELECTED_SONG } from "../Actions";

const initialState = {
  selectedSong: null,
  favouriteList: [],
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_SONG:
      return { ...state, selectedSong: action.payload };

    case FAVOURITE:
      return {
        ...state,
        favouriteList: [...state.favouriteList, action.payload],
      };
    default:
      return state;
  }
};
