import { HIP_HOP_ARTIST_LIST } from "../Actions";
import { HIP_HOP_ARTIST_FETCH } from "../Actions";

const initialState = {
  hipHopArtistList: [],
  hipHopArtistFetch: null,
  loading: true,
};

export const hipHopArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIP_HOP_ARTIST_LIST:
      return { ...state, hipHopArtistList: action.payload };

    case HIP_HOP_ARTIST_FETCH:
      return { ...state, hipHopArtistFetch: action.payload };

    case "LOADING_ON":
      return { ...state, loading: true };
    case "LOADING_OFF":
      return { ...state, loading: false };
    default:
      return state;
  }
};
