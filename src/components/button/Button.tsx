import "./Button.css";

import * as React from "react";

interface Button {
  onClick: any,
  label: string
}
const Button: React.FC<Button> = ({onClick, label}) => {
  return <button onClick={onClick} className="button">{label}</button>;
};

export default Button;
