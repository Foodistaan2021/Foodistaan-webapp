import React from 'react';

import sStarImg from '../assets/sstar.jpg';
import quoteImg from '../assets/quote.png';
import './SuperStar.css';

const SuperStar = () => {
  return (
    <section className="superstar">
      <h1>Our Super Stars</h1>
      <div className="superstar-name">
        <h3>Gaurav Thapa</h3>
        <p>Special Hot Momos, Koramangala Bangalore</p>
      </div>
      <div className="superstar__container">
        <div className="superstar-img__container">
          <img src={sStarImg} alt="sstar" />
        </div>
        <div className="superstar-info__container">
          <p>
            Foodistaan has changed my life. During the pandemic, I was forced to
            close my stall, but Foodistaan enabled me to take orders online from
            home and run my business. Now I earn more online than I did on the
            street.”
          </p>
        </div>
      </div>

      <div className="quote-image__background">
        <img src={quoteImg} alt="quote" />
      </div>
    </section>
  );
};

export default SuperStar;
