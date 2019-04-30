import React from "react";

export const Store = React.createContext("");

const initialState = {
  alert: {
    type: null,
    message: null
  },
  user: null
};

function reducer(state, action) {
  if (action.reducer !== undefined && action.reducer != null) {
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
