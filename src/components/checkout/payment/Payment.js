import "./Payment.css";
import React, { Component } from "react";
import Button from "../button/Button";
import PaymentForm from "../form/Form";
import { cardFormatter, maskCardNumber } from "../../../helpers";

class Payment extends Component {
  state = {
    cardNumber: "",
    submitted: false
  };
  handleCardChange = e => {
    this.setState({
      cardNumber: cardFormatter(e.target.value)
    });
  };
  handleCardBlur = e => {
    this.setState({ cardNumber: maskCardNumber(this.state.cardNumber) });
  };
  handleSubmit = value => {
    this.setState({ submitted: !this.state.submitted });
  };
  render() {
    const { submitted, cardNumber } = this.state;
    const thankyou = submitted ? "submitted" : "not-submited";
    return (
      <div className={`payment-card__wrapper ${thankyou}`}>
        <header>
          <div className="payment-card__header">
            <img src="/images/Visa.png" alt="visa-card-logo" />
            <div>
              <h2>39 eur</h2>
              <p>design magazine</p>
            </div>
          </div>
          <PaymentForm
            cardNumber={cardNumber}
            handleCardChange={this.handleCardChange}
            handleCardBlur={this.handleCardBlur}
          />
          <Button onClick={this.handleSubmit}>complete payment</Button>
        </header>
      </div>
    );
  }
}
export default Payment;
