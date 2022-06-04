import React from 'react';

import Cover from './Cover/Cover';
import Info from './Info/Info';
import Menu from './Menu/Menu';

const FoundRestaurantsDetail = ({ details }) => {
  return (
    <section style={{position: 'relative'}}>
      <Cover
        rating={details.Stars}
        name={details.Name}
        image={details.FoodImage}
      />
      <Info
        name={details.Name}
        type={details.Cuisines}
        address={details.Address}
        offers={details.offers}
        costForTwo={details.Cost}
        delivery={details.Delivery}
        seating={details.Takeaway}
      />
      <Menu
        name={details.Name}
        address={details.Address}
        restaurantId={details.id}
      />
    </section>
  );
};

export default FoundRestaurantsDetail;
