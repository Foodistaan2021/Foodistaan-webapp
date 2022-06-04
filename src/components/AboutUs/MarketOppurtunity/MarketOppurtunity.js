import React from 'react';

import './MarketOppurtunity.css';
import moBgImg from '../assets/IMAGEbg.png';

const oppurtunities = [
  {
    id: 'mo1',
    provided: '$ 392 Billion',
    oppurtunity: 'Total Annual Addressable Market - Street Vendors',
  },
  {
    id: 'mo2',
    provided: '$ 1.7 Billion',
    oppurtunity: 'Street Vendors Daily Turnover',
  },
  { id: 'mo3', provided: '$ 10 Million', oppurtunity: 'Street Vendor Census' },
];

const MarketOppurtunity = () => {
  return (
    <section className="market-oppurtunity">
      <h1>A Sizable Market Opportunity</h1>
      <div className="market-oppurtunity__img-container2">
        <img src={moBgImg} alt="bg" />
      </div>
      <ul className="market-oppurtunity__items">
        {oppurtunities.map((o) => (
          <li className="market-oppurtunity__item" key={o.id}>
            <p>{o.oppurtunity}</p>
            <h2>{o.provided}</h2>
          </li>
        ))}
      </ul>
      <div className="market-oppurtunity__img-container">
        <img src={moBgImg} alt="bg" />
      </div>
    </section>
  );
};

export default MarketOppurtunity;
