import React from 'react';
import { FaStar } from 'react-icons/fa';

import './Cover.css';

const Cover = ({ name, rating, image }) => {
  return (
    <section className="restaurant-detail__cover">
      <div className="restaurant-img-container maincover">
        <img src={image} alt={name} />
      </div>
      <div className="restaurant-img-container">
        <img src={image} alt={name} />
      </div>
      <div className="restaurant-img-container">
        <img src={image} alt={name} />
      </div>
      <div className="restaurant-img-container">
        <img src={image} alt={name} />
      </div>
      <div className="restaurant-img-container">
        <img src={image} alt={name} />
      </div>
      <p className="rating-badge">
        {rating} <FaStar />
      </p>
    </section>
  );
};

export default Cover;
