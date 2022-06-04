import React from 'react';

import CartItem from '../CartItem/CartItem';
import './CartList.css';

const CartList = ({
  cartItems,
  restaurantId,
  totalAmount,
  restaurantName,
  address,
  method,
}) => {
  return (
    <>
      <ul>
        {cartItems.map((i) => (
          <CartItem
            key={i.id}
            id={i.id}
            name={i.name}
            price={i.price}
            qty={i.qty}
            customize={i.customize}
            restaurantId={restaurantId}
            restaurantName={restaurantName}
            address={address}
            method={method}
          />
        ))}
      </ul>
      <hr className="amount-line" />
      <div className="total-amount">
        <h1>Total: ₹{totalAmount}</h1>
      </div>
    </>
  );
};

export default CartList;
