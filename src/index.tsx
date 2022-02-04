import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PhotosContextProvider } from "./Context/Photos";
import { BASE_URL } from "./utils/links";

ReactDOM.render(
  <React.StrictMode>
    <PhotosContextProvider>
      <BrowserRouter basename={BASE_URL}>
        <App />
      </BrowserRouter>
    </PhotosContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
