import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./Reducer/rootReducer";

export const makeStore = () =>
  createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);
