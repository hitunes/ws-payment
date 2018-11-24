import "./Payment.css";
import React from "react";

const Submitted = () => {
  return (
    <div className="submitted__wrapper">
      <div>
        <h1>Thank you</h1>
        <i className="fas fa-check" />
        <p>
          Thanks a bunch for filling that out. It means a lot to us, just like
          you do!
        </p>
      </div>
    </div>
  );
};
export default Submitted;
