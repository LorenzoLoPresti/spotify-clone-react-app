import { POP_ARTIST_LIST } from "../Actions";
import {
  POP_ARTIST_FETCH1,
  POP_ARTIST_FETCH2,
  POP_ARTIST_FETCH3,
  POP_ARTIST_FETCH4,
} from "../Actions";

const initialState = {
  popArtistList: [],
  popArtistFetch1: null,
  popArtistFetch2: null,
  popArtistFetch3: null,
  popArtistFetch4: null,
  loading: true,
};

export const popArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case POP_ARTIST_LIST:
      return { ...state, popArtistList: action.payload };

    case POP_ARTIST_FETCH1:
      return { ...state, popArtistFetch1: action.payload };
    case POP_ARTIST_FETCH2:
      return { ...state, popArtistFetch2: action.payload };
    case POP_ARTIST_FETCH3:
      return { ...state, popArtistFetch3: action.payload };
    case POP_ARTIST_FETCH4:
      return { ...state, popArtistFetch4: action.payload };

    case "LOADING_ON":
      return { ...state, loading: true };
    case "LOADING_OFF":
      return { ...state, loading: false };
    default:
      return state;
  }
};
