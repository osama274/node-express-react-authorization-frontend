import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./AppContext.js";
import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import App from "./App";

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);
