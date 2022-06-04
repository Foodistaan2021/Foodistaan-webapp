import React from 'react';

import './OverViewItem.css';
import profilePic from '../../assets/cover.jpg';

const OverViewItem = ({ review, name, ratings }) => {
  return (
    <div className="overview-item">
      <div className="overview__img_container">
        <img src={profilePic} alt="user" />
      </div>
      <div className="overview-review__card">
        <h2>{name}</h2>
        <div className="overview-review__rating">{ratings.map((el) => el)}</div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default OverViewItem;
