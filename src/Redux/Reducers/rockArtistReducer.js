import { ARTIST_LIST } from "../Actions";
import { ROCK_ARTIST_FETCH } from "../Actions";

const initialState = {
  rockArtistList: [],
  rockArtistFetch: [],
  loading: true,
};

export const rockArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTIST_LIST:
      return { ...state, rockArtistList: action.payload };

    case ROCK_ARTIST_FETCH:
      return { ...state, rockArtistFetch: action.payload };

    case "LOADING_ON":
      return { ...state, loading: true };
    case "LOADING_OFF":
      return { ...state, loading: false };
    default:
      return state;
  }
};
