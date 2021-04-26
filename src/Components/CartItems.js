import React from "react";

const CartItems = ({ data, subtotal, tax }) => {
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {data.map((product) => {
          const { name, price, id } = product;
          return (
            <li key={id}>
              {name}: ${price.toFixed(2)}
            </li>
          );
        })}
      </ul>
      <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
      <h2>Tax: ${tax.toFixed(2)}</h2>
      <h2>Total: ${(subtotal += tax).toFixed(2) || 0}</h2>
    </section>
  );
};

export default CartItems;
