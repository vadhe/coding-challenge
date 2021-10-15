import './index.css';

import App from "./App";
import ModalProvider from './context/ModalContext';
import RatingProvider from "./context/RatingContext";
import React from "react";
import ReactDOM from "react-dom";
import StarProvider  from "./context/StarContex";
import reportWebVitals from './reportWebVitals';

// import

ReactDOM.render(
  <React.StrictMode>
    <RatingProvider>
      <StarProvider>
        <ModalProvider>
      <App />
      </ModalProvider>
      </StarProvider>
    </RatingProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);


reportWebVitals();
