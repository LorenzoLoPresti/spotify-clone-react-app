import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { hipHopArtistReducer } from "../Reducers/hipHopArtistReducer";
import { rockArtistReducer } from "../Reducers/rockArtistReducer";
import { popArtistReducer } from "../Reducers/popArtistReducer";
import { searchReducer } from "../Reducers/searchReducer";
import { playerReducer } from "../Reducers/playerReducer";

const rootReducer = combineReducers({
  rock: rockArtistReducer,
  pop: popArtistReducer,
  hipHop: hipHopArtistReducer,
  search: searchReducer,
  player: playerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
