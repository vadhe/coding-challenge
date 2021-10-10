import "./Start.css";

import * as React from "react";

import startnone from "../../assets/images/none.png";
import starton from "../../assets/images/on.png";

const StartWithLabel: React.FC = () => {
  return (
   <div className="wrap-start-with-label">
    <div className="start">
      <img alt="ok" src={starton} />
      <img alt="ok" src={starton} />
      <img alt="ok" src={startnone} />
      <img alt="ok" src={startnone} />
      <img alt="ok" src={startnone} />
    </div>
    <div className="total-start">
      4
   </div>
   <div className="label-start">
     label
   </div>
   </div>
  );
};

export default StartWithLabel;
