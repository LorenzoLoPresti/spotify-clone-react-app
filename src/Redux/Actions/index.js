export const ARTIST_LIST = "ARTIST_LIST";
export const POP_ARTIST_LIST = "POP_ARTIST_LIST";
export const HIP_HOP_ARTIST_LIST = "HIP_HOP_ARTIST_LIST";
export const ROCK_ARTIST_FETCH = "ROCK_ARTIST_FETCH";
export const POP_ARTIST_FETCH = "POP_ARTIST_FETCH";
export const HIP_HOP_ARTIST_FETCH = "HIP_HOP_ARTIST_FETCH";

export const artistListAction = (artistList) => {
  return { type: ARTIST_LIST, payload: artistList };
};
export const popArtistListAction = (artistList) => {
  return { type: POP_ARTIST_LIST, payload: artistList };
};
export const hipHopArtistListAction = (artistList) => {
  return { type: HIP_HOP_ARTIST_LIST, payload: artistList };
};

export const artistRockFetchAction = (artistList) => {
  return { type: ROCK_ARTIST_FETCH, payload: artistList };
};

export const artistPopFetchAction = (artistList) => {
  return { type: POP_ARTIST_FETCH, payload: artistList };
};
export const artisthipHopFetchAction = (artistList) => {
  return { type: HIP_HOP_ARTIST_FETCH, payload: artistList };
};

export const artistFetchFunctionAction = (artist, genreFetch) => {
  return async (dispatch, getState) => {
    // dispatch({
    //   type: "LOADING_ON",
    // });
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
    );
    if (response.ok) {
      let data = await response.json();
      dispatch(genreFetch(data));
    }
    dispatch({
      type: "LOADING_OFF",
    });
  };
};
