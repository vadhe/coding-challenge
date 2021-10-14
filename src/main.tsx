import "./index.css";

import App from "./App";
import RatingContext from "./context/RatingContext";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <RatingContext>
      <App />
    </RatingContext>
  </React.StrictMode>,
  document.getElementById("root"),
);
