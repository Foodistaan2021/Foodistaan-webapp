import React from 'react';

import OfferItem from './OfferItem';
import './Offers.css';

const Offers = ({ offers }) => {
  return (
    <div className="restaurant-detail__info-offers">
      {offers.map((o) => (
        <OfferItem key={o.id} id={o.id} title={o.title} offer={o.offer} />
      ))}
    </div>
  );
};

export default Offers;
