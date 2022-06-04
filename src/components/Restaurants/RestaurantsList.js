import React from 'react';
import RestaurantsItem from './RestaurantsItem';
import './Restaurants.css';

const RestaurantsList = ({ restaurants }) => {
  return (
    <div className="restaurant-items" style={{width: '100%'}}>
      {restaurants.map((r) => (
        <RestaurantsItem
          key={r.id}
          id={r.id}
          name={r.Name}
          address={r.Address}
          cost={r.Cost}
          type={r.cuisine}
          distance={r.distance}
          image={r.FoodImage}
          delivery={r.Delivery}
          takeaway={r.Takeaway}
          stars={r.Stars}
          cuisines={r.Cuisines}
          foodistaanCertified={r.FoodistaanCertified}
        />
      ))}
    </div>
  );
};

export default RestaurantsList;
