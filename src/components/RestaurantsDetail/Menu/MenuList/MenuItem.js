import React, { useContext, useState } from 'react';

import './MenuItem.css';
import CustomizationModal from '../CustomizationModal/CustomizationModal';
import LoginModal from '../../../../LoginModal';
import { CartContext } from '../../../../store/cart-context';
import { AuthContext } from '../../../../store/auth-context';
import { useHistory } from 'react-router-dom';

const MenuItem = ({
  name,
  id,
  price,
  image,
  description,
  veg,
  address,
  selectedMethod,
  restaurantName,
  restaurantId,
}) => {
  const [showCustomizationModal, setShowCustomizationModal] = useState(false);
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const customizationModalHandler = () => {
    if (authCtx.isLoggedIn) {
      setShowCustomizationModal((prev) => !prev);
    } else {
      history.push('/login');
    }
  };

  const addItemFromMenuItemHandler = (userSelection) => {
    cartCtx.addItem({
      restaurantId: restaurantId,
      address: address,
      restaurantName: restaurantName,
      method: selectedMethod === 'Overview' ? 'Delivery' : selectedMethod,
      cartItem: {
        id: `${id}-${userSelection.customize}`,
        name: name,
        price: userSelection.price,
        customize: userSelection.customize,
        qty: 1,
      },
    });
  };

  return (
    <>
      {showCustomizationModal && (
        <CustomizationModal
          name={name}
          price={price}
          onClose={customizationModalHandler}
          dietaryType={veg ? 'Veg' : 'Non Veg'}
          onAddItem={addItemFromMenuItemHandler}
          customize={'Half'}
        />
      )}
      <li className="menu-list__item">
        <div className="menu-list__img-container">
          <img src={image} alt="" />
        </div>
        <div>
          <div className="menu-list__item-info">
            <div className="menu-list__name-price">
              <h3>{name}</h3>
              <h3>₹ {price}</h3>
            </div>
            {/*<span className={veg ? 'dot veg' : 'dot non-veg'}>
              <span></span>
      </span>*/}
          </div>
          <p className="menu-list__description">
            {`${description.substring(0, 50)}...`}
          </p>
          {
            authCtx.isLoggedIn
            ? (
              <button
                className="menu-list__add-btn"
                onClick={customizationModalHandler}
              >
                ADD
              </button>
            )
            : (
              <button
                className="menu-list__add-btn"
                data-bs-toggle="modal" 
                data-bs-target="#loginBackdrop"
                data-bs-dismiss="modal"
              >
                ADD
              </button>
            )
          }
        </div>
      </li>
      <LoginModal />
    </>
  );
};

export default MenuItem;
