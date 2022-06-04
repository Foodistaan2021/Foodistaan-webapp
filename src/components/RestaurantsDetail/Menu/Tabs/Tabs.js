import React from 'react';

import { MdDeliveryDining } from 'react-icons/md';
import { GiCardPickup } from 'react-icons/gi';
import { IoMdCopy } from 'react-icons/io';
import './Tabs.css';

const Tabs = ({ selectedMethod, onSelectMethod }) => {
  return (
    <div className="menu-list__tabs">
      <div
        className={selectedMethod === 'Delivery' ? 'active' : ''}
        onClick={onSelectMethod.bind(null, 'Delivery')}
      >
        <MdDeliveryDining /> Delivery
      </div>
      <div
        className={selectedMethod === 'Pickup' ? 'active' : ''}
        onClick={onSelectMethod.bind(null, 'Pickup')}
      >
        <GiCardPickup /> Pickup
      </div>
      <div
        className={selectedMethod === 'Overview' ? 'active' : ''}
        onClick={onSelectMethod.bind(null, 'Overview')}
      >
        <IoMdCopy />
        Overview
      </div>
    </div>
  );
};

export default Tabs;
