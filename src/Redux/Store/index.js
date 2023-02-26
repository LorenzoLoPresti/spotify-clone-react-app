import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { hipHopArtistReducer } from "../Reducers/hipHopArtistReducer";
import { rockArtistReducer } from "../Reducers/rockArtistReducer";
import { popArtistReducer } from "../Reducers/popArtistReducer";
import { searchReducer } from "../Reducers/searchReducer";
import { playerReducer } from "../Reducers/playerReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const rootReducer = combineReducers({
  rock: rockArtistReducer,
  pop: popArtistReducer,
  hipHop: hipHopArtistReducer,
  search: searchReducer,
  player: playerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
