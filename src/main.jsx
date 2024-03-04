// Path: main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
