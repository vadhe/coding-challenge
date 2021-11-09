import "./App.css";
import "./Reset.css";

import * as React from "react";

import AddStart from "./components/add-start/AddStar";
import Button from "./components/button/Button";
import { ModalContext } from "./context/ModalContext";
import Rating from "./components/rating/Rating";
import {RatingContext} from "./context/RatingContext";

const App: React.FC = () => {
  const {isModal, handleShowModal} = React.useContext(ModalContext)
  const ratings = React.useContext(RatingContext)?.ratings
  const { response } = React.useContext(RatingContext)
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
                ratings?.length? <Rating rating={ratings[0].star}/> : 'No Rating'
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
                response && response.map((rating: any) => <Rating rating={rating.star} label={rating.label} totalRating={rating.star}/>)
            }
          </div>
        </section>
      </section>
    </div>
  );
};

export default App;