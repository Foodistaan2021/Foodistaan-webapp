import React, { useContext, useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../../store/cart-context";

import "./CartLink.css";

const CartLink = ({ mobile, cartId }) => {
  const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);

  const { cartItems ,totalAmount} = useContext(CartContext);

  const numOfItems = cartItems.reduce((prev, item) => prev + item.qty, 0);

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  const btnClassName = btnIsHighLighted ? "logo-badge bump" : "logo-badge";

  return (
    <div className={mobile ? "cart-info__mobile" : "cart-info__footer"}>
    <div className={mobile ? "cart_mobile" : "cart_footer"}>
    

      <Link className="cart-info__footer-logo" to={`/cart/${cartId}`}>
        {/*<HiShoppingCart />*/}
        <div>₹ {totalAmount}</div>
        <div>View Cart</div>
       
        {/*<span className={btnClassName}>{numOfItems}</span>*/}
      </Link>
      {/*<Link to={`/cart/${cartId}`} className="">
        <p>Add to Cart</p>
  </Link>*/}
    </div>
    </div>
  );
};

export default CartLink;
