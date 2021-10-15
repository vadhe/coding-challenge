import "./Button.css";

import * as React from "react";

interface InterfaceButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}
const Button: React.FC<InterfaceButton> = ({label, ...props}) => {
  return <button {...props} className="button">{label}</button>;
};

export default Button;
