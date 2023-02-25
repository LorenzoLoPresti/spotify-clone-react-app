import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { hipHopArtistReducer } from "../Reducers/hipHopArtistReducer";
import { rockArtistReducer } from "../Reducers/rockArtistReducer";
import { popArtistReducer } from "../Reducers/popArtistReducer";
import { searchReducer } from "../Reducers/searchReducer";

const rootReducer = combineReducers({
  rock: rockArtistReducer,
  pop: popArtistReducer,
  hipHop: hipHopArtistReducer,
  search: searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
