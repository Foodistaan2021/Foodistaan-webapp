import React, { useState } from 'react';
import Tabs from '../Tabs/Tabs';

import { AiFillStar } from 'react-icons/ai';

import './OverView.css';
import OverViewStory from './OverViewStory';
import OverViewForm from './OverViewForm';
import OverViewItem from './OverViewItem';

const dummy_reviews = [
  {
    id: 'rev1',
    review: 'Nice Restaurant Good Food',
    name: 'Nimesh',
    ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />],
  },
  {
    id: 'rev2',
    review: 'Great Variety',
    name: 'Nimesh',
    ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />],
  },
  {
    id: 'rev3',
    review: 'Delicious Food 😋😋',
    name: 'Nimesh',
    ratings: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
    ],
  },
];

const OverView = ({ selectedMethod, onSelectMethod, name }) => {
  const [reviews, setReviews] = useState(dummy_reviews);

  const addReviewHandler = (reviewData) => {
    setReviews((prev) => [reviewData, ...prev]);
  };

  return (
    <div className="overview">
      {/*<Tabs selectedMethod={selectedMethod} onSelectMethod={onSelectMethod} />*/}
      <div className="overview-container">
        <div>
          <OverViewStory name={name} />
        </div>
        <OverViewForm onAdd={addReviewHandler} />
        <div>
          {reviews.map((r) => (
            <OverViewItem
              key={r.id}
              id={r.id}
              review={r.review}
              name={r.name}
              ratings={r.ratings}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverView;
