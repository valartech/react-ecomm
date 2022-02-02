import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PhotosContextProvider } from "./Context/Photos";

ReactDOM.render(
  <React.StrictMode>
    <PhotosContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PhotosContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
