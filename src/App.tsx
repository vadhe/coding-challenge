import "./App.css";
import "./Reset.css";

import * as React from "react";

import AddStart from "./components/add-start/AddStar";
import Button from "./components/button/Button";
import Rating from "./components/rating/Rating";
import {RatingContext} from "./context/RatingContext";

const App: React.FC = () => {
  const [isModal, setIsModal] = React.useState(false)
  const ratings = React.useContext(RatingContext)?.ratings
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
  // console.log(rating)
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
              {
                ratings && <Rating rating={ratings[0].start}/>
              }
            </div>
            <Button label="Add review" onClick={handleShowModal}/>
          </div>
        </section>
        <hr />
        <section className="body-rating">
          <h2>Reviews</h2>
          <div className="">
            {
                ratings && ratings.map((rating) => <Rating rating={rating.start} label={rating.label} totalRating={rating.start}/>)
            }
          </div>
        </section>
      </section>
    </div>
  );
};

export default App;
