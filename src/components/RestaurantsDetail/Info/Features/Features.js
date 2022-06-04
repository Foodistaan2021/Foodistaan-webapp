import React from 'react';
import { BiRupee, BiChair } from 'react-icons/bi';
import { GiScooter } from 'react-icons/gi';

import './Features.css';

const Features = ({ costForTwo, delivery, seating }) => {
  return (
    <div className="restaurant-detail__features">
      <p>
        <span>
          <BiRupee />
        </span>{' '}
        {`Cost for two ₹${costForTwo}`}
      </p>
      <p>
        <span>
          <GiScooter />
        </span>{' '}
        {`Delivery ${delivery ? 'Available' : 'Unavailable'}`}
      </p>
      <p>
        <span>
          <BiChair />
        </span>{' '}
        {`Seating ${seating ? 'Available' : 'Unavailable'}`}
      </p>
    </div>
  );
};

export default Features;
