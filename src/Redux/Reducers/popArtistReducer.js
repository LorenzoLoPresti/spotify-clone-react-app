import { POP_ARTIST_LIST } from "../Actions";
import { POP_ARTIST_FETCH } from "../Actions";

const initialState = {
  popArtistList: [],
  popArtistFetch: null,
  loading: true,
};

export const popArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case POP_ARTIST_LIST:
      return { ...state, popArtistList: action.payload };

    case POP_ARTIST_FETCH:
      return { ...state, popArtistFetch: action.payload };

    case "LOADING_ON":
      return { ...state, loading: true };
    case "LOADING_OFF":
      return { ...state, loading: false };
    default:
      return state;
  }
};
