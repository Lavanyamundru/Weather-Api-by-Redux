import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./Reducer/rootReducer";

export const makeStore = () =>
  createStore(rootReducer,(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);
