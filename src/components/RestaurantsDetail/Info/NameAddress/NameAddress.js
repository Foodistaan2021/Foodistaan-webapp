import React from 'react';

import './NameAddress.css';

const NameAddress = ({ name, type, address }) => {
  return (
    <div className="restaurant-detail__information">
      <h1>{name}</h1>
      <p>{type} Restaurant</p>
      <p>{address}</p>
    </div>
  );
};

export default NameAddress;
