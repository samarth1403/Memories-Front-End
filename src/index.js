import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
//Provider keeps tract of store which holds Global data and it allows us to access states from anywhee insider the
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import './index.css'

//To avoid error while sending request to Server 
// Add this "proxy":"http://localhost:3000" in package.json

//Creating a store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
