import React from "react";
import ReactDOM from "react-dom";
import "sanitize.css";
import "./styles.css";

import AppFunctional from "./AppFunctional";
import AppClass from "./AppClass";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppFunctional />
    <AppClass />
  </React.StrictMode>,
  rootElement
);
