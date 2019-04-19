import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import { store } from './store';
import { withdraw, charity } from './actions';

class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={dispatchWidthdraw} data-amount="10000">WITHDRAW $10,000</button>
          <button onClick={dispatchWidthdraw} data-amount="5000">WITHDRAW $5,000</button>
        </section>

        <p onClick={dispatchCharity} className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

const dispatchWidthdraw = (e) => {
  const amount = e.target.dataset.amount;
  console.log(amount);
  const {totalAmount} = store.getState();
  store.dispatch(withdraw(totalAmount,amount));
}
const dispatchCharity = (e) => {
  const {totalAmount, previousAmount} = store.getState();
  store.dispatch(charity(previousAmount, totalAmount));
}

export default App;
