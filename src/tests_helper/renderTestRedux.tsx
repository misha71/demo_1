import React from "react";
import { setupStore } from "../store";
import { Provider } from "react-redux";

export const renderTestRedux = (component, initialState) => {
  const store = setupStore();
  return <Provider store={store}>{component}</Provider>;
};
