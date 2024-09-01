// dependency
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// component and pages
import App from "./App";
// style links
import "./custom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
