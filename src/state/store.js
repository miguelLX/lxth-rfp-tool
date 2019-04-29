import React from "react";
import constants from "./constants";

import { authenticationReducer } from "./reducers";

export const Store = React.createContext("");

const initialState = {
  user: null,
  episodes: [],
  favourites: [],
  count: 0
};

function reducer(state, action) {
  if (action.reducer !== "undefined" && action.reducer != null) {
    return action.reducer(state, action);
  } else {
    switch (action.type) {
      default:
        return state;
    }
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
