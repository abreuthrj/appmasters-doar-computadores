import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import App from "./reducers/App";

const combinedReducers = combineReducers({
  App,
});

const store = configureStore({
  reducer: combinedReducers,
});

export type StoreState = ReturnType<typeof store.getState>;
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;
export const useStoreDispatch: () => typeof store.dispatch = useDispatch;

export default store;
