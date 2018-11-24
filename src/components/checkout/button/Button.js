import React from "react";

const Button = ({ children, onClick, ...props }) => {
  return (
    <button className="payment-card__button" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
