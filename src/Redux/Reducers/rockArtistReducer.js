import { ROCK_ARTIST_LIST } from "../Actions";
import {
  ROCK_ARTIST_FETCH1,
  ROCK_ARTIST_FETCH2,
  ROCK_ARTIST_FETCH3,
  ROCK_ARTIST_FETCH4,
} from "../Actions";

const initialState = {
  rockArtistList: [],
  rockArtistFetch1: null,
  rockArtistFetch2: null,
  rockArtistFetch3: null,
  rockArtistFetch4: null,
  loading: true,
};

export const rockArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCK_ARTIST_LIST:
      return { ...state, rockArtistList: action.payload };

    case ROCK_ARTIST_FETCH1:
      return { ...state, rockArtistFetch1: action.payload };

    case ROCK_ARTIST_FETCH2:
      return { ...state, rockArtistFetch2: action.payload };
    case ROCK_ARTIST_FETCH3:
      return { ...state, rockArtistFetch3: action.payload };
    case ROCK_ARTIST_FETCH4:
      return { ...state, rockArtistFetch4: action.payload };

    case "LOADING_ON":
      return { ...state, loading: true };
    case "LOADING_OFF":
      return { ...state, loading: false };
    default:
      return state;
  }
};
