import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import loginSliceReducer from "./Slice/LoginSlice";
// import homeReducer from './Slice/HomeSlice';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import localStorage from "redux-persist/es/storage";

const reducers = combineReducers({
  login: loginSliceReducer,
  // home: homeReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: localStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["login"], //Things u want to persist
  blacklist: [], //Things u dont
};

const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = createStore(persistedReducer, applyMiddleware(logger));

// export const store = configureStore({
//   reducer: persistedReducer,
//   // devTools: true
//   // middleware: [createLogger()],

// });
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger),
});

export const persistor = persistStore(store);
