import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, useHistory, } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "./redux/store";

const RealApp = () => {
  const history = useHistory()
  return <Provider store={appStore(history)}>
    <App />
  </Provider>
}

ReactDOM.render(
  <BrowserRouter>
    <RealApp />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
