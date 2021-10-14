import "./Rating.css";

import * as React from "react";

import {AiFillStar} from "react-icons/ai";

interface Start {
  rating: number,
  totalRating?: number,
  label?: string
}
const Rating: React.FC<Start> = ({rating, label, totalRating}) => {
  const started = "#ffce6d";
  const unstart = "#e0e0e0";
  const startLength = [1,2,3,4,5];
  // const rating = 5;
  return (
    <div className="rating">
      <div>
      {
        startLength.map((index) => <AiFillStar color={index <= rating ? started : unstart} size="32" />)
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
