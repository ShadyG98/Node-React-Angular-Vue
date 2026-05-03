import React from "react";
import ReactDOM from "react-dom";
import 'bootswatch/dist/yeti/bootstrap.css'
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App title="React Typescript" />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
