import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { movieReducer as reducer } from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import "./index.scss";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
