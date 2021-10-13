import "./Start.css";

import * as React from "react";

import {AiFillStar} from "react-icons/ai";
import startnone from "../../assets/images/none.png";
import starton from "../../assets/images/on.png";

const Start: React.FC<{rating: number}> = ({rating}) => {
  const started = "#ffce6d";
  const unstart = "#e0e0e0";
  const startLength = [1,2,3,4,5];
  // const rating = 5;
  return (
    <div className="start">
      {
        startLength.map((index) => <AiFillStar color={index <= rating ? started : unstart} size="32" />)
      }
    </div>
  );
};

export default Start;
