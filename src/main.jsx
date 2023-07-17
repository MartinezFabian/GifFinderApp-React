import React from "react";
import ReactDOM from "react-dom/client";
import { GifFinderApp } from "./GifFinderApp";
import "normalize.css";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifFinderApp></GifFinderApp>
  </React.StrictMode>
);
