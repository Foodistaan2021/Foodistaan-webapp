import React from 'react';

import './SectionTwoAndThree.css';

const SectionTwoAndThree = ({ data, title, backgroundColor }) => {
  return (
    <section
      className="problem-solving"
      style={
        backgroundColor
          ? { backgroundColor: backgroundColor }
          : { backgroundColor: '#fff' }
      }
    >
      <h1>{title}</h1>
      <ul className="problem-solving__items">
        {data.map((d) => (
          <li key={d.id} className="problem-solving__item">
            <div className="problem-solving__item-img">
              <img src={d.img} alt="ps" />
            </div>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionTwoAndThree;
