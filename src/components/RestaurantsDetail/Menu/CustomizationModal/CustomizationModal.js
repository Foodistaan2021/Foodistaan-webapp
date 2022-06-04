import React, { useState } from 'react';

import Modal from '../../../common/modal/Modal';
import './CustomizationModal.css';
import '../MenuList/MenuItem.css';

const CustomizationModal = ({
  name,
  onClose,
  price,
  dietaryType,
  customize,
  onAddItem,
}) => {
  const [selectedPrice, setSelectedPrice] = useState(price);
  const [selectedCustomization, setSelectedCustomization] = useState(customize);

  const changeRadioBtnHandler = (e) => {
    setSelectedPrice(
      +e.target.value === 0 ? selectedPrice - 100 : selectedPrice + 100
    );
    setSelectedCustomization(+e.target.value === 0 ? 'Half' : 'Full');
  };

  const submitCustomizationModalHandler = (e) => {
    e.preventDefault();

    onAddItem({
      customize: selectedCustomization,
      price: selectedPrice,
    });
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <header className="customize-modal__header">
        <div className="menu-list__name-price">
          <h3>{name}</h3>
          <h3>₹ {selectedPrice}</h3>
        </div>
        <span
          className={
            dietaryType === 'Veg'
              ? 'dot veg'
              : dietaryType === 'Non Veg'
              ? 'dot non-veg'
              : 'dot egg'
          }
        >
          <span></span>
        </span>
      </header>
      <form
        className="customize-modal__form"
        onSubmit={submitCustomizationModalHandler}
      >
        <div className="customization-input">
          <input
            type="radio"
            value="0"
            name="customize"
            onChange={changeRadioBtnHandler}
            checked={selectedCustomization === 'Half'}
          />
          <label>Half</label>
        </div>
        <div className="customization-input">
          <input
            type="radio"
            value="100"
            name="customize"
            checked={selectedCustomization === 'Full'}
            onChange={changeRadioBtnHandler}
          />
          <label>Full</label>
        </div>
        <div className="customization-footer">
          <button className="menu-list__add-btn" type="submit">
            ADD
          </button>
          <button className="menu-list__add-btn" type="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CustomizationModal;
