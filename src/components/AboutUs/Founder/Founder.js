import React from 'react';

import cf1 from '../assets/founderImg1.png';
import cf2 from '../assets/founderImg1.png';
import cf3 from '../assets/founderImg1.png';
import './Founder.css';

const Founders = [
  { id: 'founder1', name: 'Mayank', img: cf1 },
  { id: 'founder2', name: 'Dhruv', img: cf2 },
  { id: 'founder3', name: 'Name', img: cf3 },
];

const Founder = () => {
  return (
    <section className="founder">
      <h1>Founders</h1>
      <ul className="founder__items">
        {Founders.map((founder) => (
          <li key={founder.id} className="founder__item">
            <img src={founder.img} alt={founder.id} />
            <div>
              <h2>{founder.name}</h2>
              <p>Co-founder</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Founder;
