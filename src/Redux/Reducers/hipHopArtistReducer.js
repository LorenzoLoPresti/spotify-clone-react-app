import { HIP_HOP_ARTIST_LIST } from "../Actions";
import {
  HIP_HOP_ARTIST_FETCH1,
  HIP_HOP_ARTIST_FETCH2,
  HIP_HOP_ARTIST_FETCH3,
  HIP_HOP_ARTIST_FETCH4,
} from "../Actions";

const initialState = {
  hipHopArtistList: [],
  hipHopArtistFetch1: null,
  hipHopArtistFetch2: null,
  hipHopArtistFetch3: null,
  hipHopArtistFetch4: null,
  loading: true,
};

export const hipHopArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIP_HOP_ARTIST_LIST:
      return { ...state, hipHopArtistList: action.payload };

    case HIP_HOP_ARTIST_FETCH1:
      return { ...state, hipHopArtistFetch1: action.payload };
    case HIP_HOP_ARTIST_FETCH2:
      return { ...state, hipHopArtistFetch2: action.payload };
    case HIP_HOP_ARTIST_FETCH3:
      return { ...state, hipHopArtistFetch3: action.payload };
    case HIP_HOP_ARTIST_FETCH4:
      return { ...state, hipHopArtistFetch4: action.payload };

    case "LOADING_ON":
      return { ...state, loading: true };
    case "LOADING_OFF":
      return { ...state, loading: false };
    default:
      return state;
  }
};
