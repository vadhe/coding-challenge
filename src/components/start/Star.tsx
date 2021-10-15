import "./Star.css";

import * as React from "react";

import {AiFillStar} from "react-icons/ai";
import { StarContext } from "../../context/StarContex";

// interface Start {
//   rating: number,
// }
const Start: React.FC = () => {
  const stared = "#ffce6d";
  const unstar = "#e0e0e0";
  const starLength = [1,2,3,4,5];
  const star = React.useContext(StarContext)?.star || 0
  const addStar = React.useContext(StarContext)?.addStar || function(){
    alert("okokoko")
  }
  // let [star, setStar] = React.useState(0);
  // const addStar = (value: number) => {
  //   setStar(value)
  // }
  return (
    <div className="rating">
      <div>
      {
        starLength.map((index) => <AiFillStar key={index} onClick={() => addStar(index)} color={index <= star ? stared : unstar} size="32" />)
      }
      </div>
    </div>
  );
};

export default Start;
