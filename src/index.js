import React, { StrictMode } from "react";
// import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import rootReducer from "./reducers";

import "./index.css";
const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
const root = ReactDOM.createRoot(rootElement);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
root.render(
  // <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </StrictMode>
);
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
