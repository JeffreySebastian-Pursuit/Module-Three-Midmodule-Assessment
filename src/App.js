import React from "react";
import "./App.css";
import GarageItems from "./Components/GarageItems";
import productData from "./data/productData";
import CartItems from "./Components/CartItems";
import CheckoutForm from "./Components/CheckoutForm";

class App extends React.Component {
  state = { data: [] };

  addToCart = (product) => {
    this.setState((prevState) => {
      return { data: [product, ...prevState.data] };
    });
  };

  calculateSubtotal = () => {
    const { data } = this.state;
    let subtotal = 0;
    data.forEach((product) => {
      subtotal += product.price;
    });
    return subtotal || 0;
  };

  calculateTax = () => {
    const { data } = this.state;
    let tax = 0;
    data.forEach((product) => {
      tax += product.price;
    });
    tax *= 0.05;
    return tax || 0;
  };
  // calculateTotal = () => {
  //   const { data } = this.state;
  //   let total = 0;
  //   let tax = 0.05;
  //   data.forEach((product) => {
  //     (total * tax) + (total + product.price);
  //   });
  //   return total || 0;
  // };

  render() {
    const { data } = this.state;
    const sum = this.calculateSubtotal();
    const tax = this.calculateTax();
    // const total = this.calculateTotal();
    return (
      <div>
        <GarageItems productData={productData} addToCart={this.addToCart} />
        <CartItems data={data} subtotal={sum} tax={tax} />
        <CheckoutForm subtotal={sum} tax={tax}/>
      </div>
    );
  }
}

export default App;
