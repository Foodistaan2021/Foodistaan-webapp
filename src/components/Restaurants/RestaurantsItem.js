import React from 'react';

import { FaStar, FaShoppingBag } from 'react-icons/fa';
import { GiScooter } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const RestaurantsItem = (props) => {
  const name =
    props.name.length > 25 ? `${props.name.slice(0, 25)}...` : props.name;

  const locationArray = props.address.includes(',')
    ? props.address.split(',')
    : props.address.split(' ');
  const lastIndex = locationArray.length - 1;
  const locationToShow = `${locationArray[lastIndex - 1]}, ${
    locationArray[lastIndex]
  }`;

  return (
    <div className="restaurant-item">
      <div className="restaurant-card">
        <div className="badges">
          <h1>50% off</h1>
          <p>
            S <span>Certified</span>
          </p>
        </div>
        <Link to={`/restaurant/${props.id}`}>
          <div className="restaurant-card__image-container">
            <img src={props.image} alt="" />
          </div>
          <div className="restaurant__info">
            <div className="restaurant__name-ratings">
              <h1>{name}</h1>
              <p>
                {props.stars}
                <FaStar />
              </p>
            </div>
            <div className="restaurant__cuisines-cost">
              <p className="restaurant__cuisines">Russian Cuisines</p>
              <p className="cost">₹ {props.cost} for Two</p>
            </div>
            <div className="restaurant-specifications">
              <div className="restaurant-specifications__delivery-takeaway">
                <h1
                  className={
                    props.delivery ? 'specification' : 'error-specification'
                  }
                >
                  <GiScooter /> Delivery
                </h1>
                <h1
                  className={
                    props.takeaway ? 'specification' : 'error-specification'
                  }
                >
                  <FaShoppingBag /> Takeaway
                </h1>
              
              <h1 className="specification">
                <IoLocationSharp /> {locationToShow}
              </h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantsItem;
