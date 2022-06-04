import React from 'react';

import './BuisnessHighlights.css';

const highlights = [
  {
    id: 'h1',
    title: 'Vendors Onboarded',
    highlight: '600+',
    desc: 'Vendors onboarded within 30 days of operations.',
  },
  {
    id: 'h2',
    title: 'Customer Orders',
    highlight: '5000+',
    desc: '400+ orders processed by just 10 vendors.',
  },
  {
    id: 'h3',
    title: 'Same Store Revenue',
    highlight: '203%',
    desc: '53% jump in revenues for Same store.',
  },
];

const BuisnessHighlights = () => {
  return (
    <section className="buisness-highlights">
      <h1>Buisness Highlights</h1>
      <ul className="buisness-highlights__items">
        {highlights.map((h) => (
          <li key={h.id} className="buisness-highlights__item">
            <p>{h.title}</p>
            <h2>{h.highlight}</h2>
            <p>{h.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BuisnessHighlights;
