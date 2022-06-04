import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import './CartDropDown.css';

const CartDropDown = (props) => {
  const [chosenMehtod, setChosenMethod] = useState(props.method);
  const [showMethodList, setShowMethodList] = useState(false);

  const showCartMethodListHandler = (e) => {
    setShowMethodList((prev) => !prev);
  };

  const changeChosenMethodHandler = () => {
    setShowMethodList(false);
    setChosenMethod((prev) => (prev === 'Delivery' ? 'Pickup' : 'Delivery'));
  };

  return (
    <>
      <div className="cart-info__dropDown" onClick={showCartMethodListHandler}>
        {chosenMehtod}
        {showMethodList ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>
      {showMethodList && (
        <div
          className="cart-info__dropDown-other__option"
          onClick={changeChosenMethodHandler}
        >
          {chosenMehtod === 'Delivery' ? 'Pickup' : 'Delivery'}
        </div>
      )}
    </>
  );
};

export default CartDropDown;
