import React, { useContext, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { CartContext } from '../../../../../store/cart-context';
import CustomizationModal from '../../CustomizationModal/CustomizationModal';

import './CartItem.css';

const CartItem = ({
  name,
  price,
  qty,
  customize,
  restaurantId,
  restaurantName,
  address,
  method,
  id,
}) => {
  const [showCustomizationCartModal, setShowCustomizationCartModal] =
    useState(false);
  const cartCtx = useContext(CartContext);

  const customizationCartModal = () => {
    setShowCustomizationCartModal((prev) => !prev);
  };

  const addItemFromCartItemHandler = (userSelection) => {
    cartCtx.updateItem({
      id,
      ...userSelection,
    });
  };

  const increaseItemHandler = () => {
    cartCtx.addItem({
      restaurantId: restaurantId,
      address: address,
      restaurantName: restaurantName,
      method: method,
      cartItem: {
        id: id,
        name: name,
        price: price,
        customize: customize,
        qty: 1,
      },
    });
  };

  const decreaseItemHandler = () => {
    cartCtx.removeItem(id);
  };

  return (
    <>
      {showCustomizationCartModal && (
        <CustomizationModal
          name={name}
          price={price}
          onClose={customizationCartModal}
          dietaryType={'Veg'}
          customize={customize}
          onAddItem={addItemFromCartItemHandler}
        />
      )}
      <div className="cart-item">
        <div className="cart-item__actions">
          <div>
            <h1 className="cart-item__name">{name}</h1>
            <div className="cart-item__customize">
              <p>{customize}</p>
              <button onClick={customizationCartModal}>
                Customize{' '}
                <span>
                  <IoMdArrowDropdown />
                </span>
              </button>
            </div>
          </div>
          <div>
            <div className="cart-item__dial">
              <button onClick={decreaseItemHandler}>-</button>
              <p>{qty}</p>
              <button onClick={increaseItemHandler}>+</button>
            </div>
            <h1 className="cart-item__price">₹ {price}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
