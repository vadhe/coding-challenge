import "./Button.css";

import * as React from "react";

const Button: React.FC<{onClick: any}> = ({onClick}) => {
  return <button onClick={onClick} className="button">Add review</button>;
};

export default Button;
