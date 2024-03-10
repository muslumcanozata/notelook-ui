import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
