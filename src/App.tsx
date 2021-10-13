import "./App.css";
import "./Reset.css";

import * as React from "react";

import AddStart from "./components/add-start/AddStart";
import Button from "./components/button/Button";
import {RatingContext} from "./context/RatingContext";
import Start from "./components/start/Start";
import StartWithLabel from "./components/start/StartWithLabel";

const App: React.FC = () => {
  const [isModal, setIsModal] = React.useState(false)
  const {rating} = React.useContext(RatingContext)
  const closeModal = () => false;
  const openModal = () => true;
  const handleShowModal = () => {
    if(isModal === false) {
      setIsModal(openModal())
    }
    if(isModal === true) {
      setIsModal(closeModal())
    }
  }
  return (
    <div className="App">
      <div className={isModal ? "":"none"}>
       <AddStart />
      </div>
      <section className="container">
        <section className="header-rating">
          <h1>The Minimalist Entrepreneur</h1>
          <div className="wrapper-total-start">
            <div>
              <Start rating={rating}/>
              <Start rating={rating}/>
            </div>
            <Button onClick={handleShowModal}/>
          </div>
        </section>
        <hr />
        <section className="body-rating">
          <h2>Reviews</h2>
          <div className="">
            <StartWithLabel />
            <StartWithLabel />
            <StartWithLabel />
          </div>
        </section>
      </section>
    </div>
  );
};

export default App;
