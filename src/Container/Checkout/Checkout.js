import React, { Component } from "react";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
class Checkout extends Component {
  state = {
    ingredients: {}
  };
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);

    const ingredients = {};
    for (let param of query.entries()) {
      //["salsa","1"]
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      </div>
    );
  }
}

export default Checkout;