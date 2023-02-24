import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { hipHopArtistReducer } from "../Reducers/hipHopArtistReducer";
import { rockArtistReducer } from "../Reducers/rockArtistReducer";
import { popArtistReducer } from "../Reducers/popArtistReducer";

const rootReducer = combineReducers({
  rock: rockArtistReducer,
  pop: popArtistReducer,
  hipHop: hipHopArtistReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
