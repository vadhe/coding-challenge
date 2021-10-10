import "./Start.css";

import * as React from "react";

import startnone from "../../assets/images/none.png";
import starton from "../../assets/images/on.png";

const Start: React.FC = () => {
  return (
    <div className="start">
      <img alt="ok" src={starton} />
      <img alt="ok" src={starton} />
      <img alt="ok" src={startnone} />
      <img alt="ok" src={startnone} />
      <img alt="ok" src={startnone} />
    </div>
  );
};

export default Start;
