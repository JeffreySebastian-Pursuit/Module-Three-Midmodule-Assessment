import React from "react";

class CheckoutForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    creditCard: "",
    zipCode: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    const { subtotal, tax } = this.props;
    if (!firstName || !lastName || !email) {
      window.alert("Input is not valid");
    } else if (creditCard.length !== 16) {
      window.alert("Credit card number is not valid");
    } else if (zipCode.length !== 5) {
      window.alert("Zip code is not valid");
    } else {
      window.alert(
        `Purchase complete and you'll be charge $${(subtotal + tax).toFixed(2)}`
      );
    }
  };

  render() {
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    return (
      <section className="checkoutForm">
        <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            onChange={this.handleChange}
            value={firstName}
            name="firstName"
          ></input>
            <br></br>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            onChange={this.handleChange}
            value={lastName}
            name="lastName"
          ></input>
            <br></br>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={this.handleChange}
            value={email}
            name="email"
          ></input>
            <br></br>
          <label htmlFor="creditCard">Credit Card</label>
          <input
            id="creditCard"
            onChange={this.handleChange}
            value={creditCard}
            name="creditCard"
          ></input>
            <br></br>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            onChange={this.handleChange}
            value={zipCode}
            name="zipCode"
          ></input>
          <br></br>
          <button>Buy Now</button>
        </form>
      </section>
    );
  }
}

export default CheckoutForm;
