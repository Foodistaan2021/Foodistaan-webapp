import React, { useState, useEffect } from 'react';
import Features from './Features/Features';

import './Info.css';
import NameAddress from './NameAddress/NameAddress';
import Offers from './Offers/Offers';

const offers = [
  {
    title: '20% OFF UPTO ₹ 300',
    id: 'o1',
    offer: 'USE MASTERCARD100 | APPLIED 200 ABOVE',
  },
  {
    title: '20% OFF UPTO ₹ 300',
    id: 'o2',
    offer: 'USE MASTERCARD100 | APPLIED 200 ABOVE',
  },
];
const Info = (props) => {
  const [offset, setOffset] = useState(0);
  const [matches, setMatches] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
      window
      .matchMedia("(max-width: 768px)")
      .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const styles = {
    // position: offset > 500 && !matches ? 'fixed' : '',
    // top: offset > 500 && !matches ? 0 : '',
    // zIndex: 500,
    // backgroundColor: '#fff',
    // width: offset > 500 && !matches ? '100%' : '',
    // boxShadow: offset > 500 && !matches ? '-1px 11px 14px -2px rgba(0,0,0,0.3)' : '',
    // transform: offset > 500 ? 'scale(1.1)' : '',
    // paddingTop: offset > 500 && !matches ? '15px' : '',
    // paddingBottom: 0,
    // transition: 'all 400ms ease',
  }



  return (

    <section style={styles}>
      <div className="restaurant-detail__info-information">
        <NameAddress
          name={props.name}
          type={props.type}
          address={props.address}
        />
        <Offers offers={offers} />
      </div>
      <Features
        costForTwo={props.costForTwo}
        delivery={props.delivery}
        seating={props.seating}
      />
    </section>

  );
};

export default Info;
