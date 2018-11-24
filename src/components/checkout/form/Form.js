import React from "react";
import { days, month } from "../../../config";

const PaymentForm = props => {
  return (
    <form id="payment-form">
      <div className="payment-card__form">
        <div className="payment-card__form--number">
          <div>
            <label>card number</label>
            <input
              type="text"
              name="cardNumber"
              value={props.cardNumber}
              placeholder="card number"
              onBlur={props.handleCardBlur}
              onChange={props.handleCardChange}
            />
          </div>
          <div>
            <label>cvv</label>
            <input type="text" name="cvv" placeholder="cvv" />
          </div>
        </div>
        <div className="payment-card__form--name">
          <div>
            <label>Holder Name</label>
            <input type="text" name="name" placeholder="name" />
          </div>
        </div>
        <div className="payment-card__form--date">
          <div>
            <label>expiration date</label>
            <div className="payment-card__form--date-select">
              <select name="day" form="paymentForm">
                {days.map((day, index) => (
                  <option key={index} value={day.day}>
                    {day.day}
                  </option>
                ))}
              </select>
              <select name="month" form="paymentForm">
                {month.map((month, index) => (
                  <option key={index} value={month.number}>
                    {month.name}
                  </option>
                ))}
              </select>
              <select name="year" form="paymentForm">
                <option value="2018">2018</option>
                <option value="2019">2019</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default PaymentForm;
