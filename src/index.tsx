import './index.css';

import App from "./App";
import RatingContext from "./context/RatingContext";
import React from "react";
import ReactDOM from "react-dom";
import StarContext  from "./context/StarContex";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RatingContext>
      <StarContext>
      <App />
      </StarContext>
    </RatingContext>
  </React.StrictMode>,
  document.getElementById("root"),
);


reportWebVitals();
