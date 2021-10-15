import "./Rating.css";

import * as React from "react";

import {AiFillStar} from "react-icons/ai";

interface Start {
  rating: number,
  totalRating?: number,
  label?: string
}
const Rating: React.FC<Start> = ({rating, label, totalRating}) => {
  const stared = "#ffce6d";
  const unstar = "#e0e0e0";
  const starLength = [1,2,3,4,5];
  // const rating = 5;
  return (
    <div className="rating">
      <div>
      {
        starLength.map((index) => <AiFillStar key={index} color={index <= rating ? stared : unstar} size="32" />)
      }
      </div>
      <div className="rating-label">
        {totalRating}
      </div>
      <div className="rating-label">
        {label}
      </div>
    </div>
  );
};

export default Rating;
