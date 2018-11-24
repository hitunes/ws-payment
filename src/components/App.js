import "./App.css";
import React, { Component } from "react";
import Payment from "./checkout/payment/Payment";
import Submitted from "./checkout/payment/Submitted";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Payment />
        <Submitted />
      </div>
    );
  }
}

export default App;
