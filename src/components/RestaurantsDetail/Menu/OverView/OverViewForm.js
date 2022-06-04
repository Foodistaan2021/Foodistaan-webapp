import React, { useState } from 'react';

import './OverViewForm.css';
import profilePic from '../../assets/cover.jpg';
import { AiFillStar } from 'react-icons/ai';

const OverViewForm = ({ onAdd }) => {
  const [enteredReview, setEnteredReview] = useState('');

  const changeReviewHandler = (e) => {
    setEnteredReview(e.target.value);
  };

  const submitReviewHandler = (e) => {
    e.preventDefault();

    onAdd({
      id: `rev${Math.random()}`,
      name: 'Nimesh',
      review: enteredReview,
      ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />],
    });
  };

  return (
    <div className="overview-review">
      <h1>Reviews</h1>
      <form className="overview-review__form" onSubmit={submitReviewHandler}>
        <div className="overview__img_container">
          <img src={profilePic} alt="user" />
        </div>
        <textarea
          rows="5"
          placeholder="Write Your Review"
          onChange={changeReviewHandler}
          value={enteredReview}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default OverViewForm;
