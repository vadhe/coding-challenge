import "./Button.css";

import * as React from "react";

interface InterfaceButton {
  onClick: (event:any) => void,
  label: string
}
const Button: React.FC<InterfaceButton> = ({onClick, label}) => {
  return <button onClick={onClick} className="button">{label}</button>;
};

export default Button;
