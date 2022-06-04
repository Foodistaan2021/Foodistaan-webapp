import React from 'react';

import './NewsFeed.css';
import mediumImg from '../assets/IMAGEmedium.png';
import instaImg from '../assets/IMAGEinsta.png';
import linkedinImg from '../assets/IMAGElinkedin.png';

const feeds = [
  {
    id: 'feed1',
    img: linkedinImg,
    social: 'Linkedin',
    caption: 'Augmenting the Indian Street Food Vendor Market',
  },
  {
    id: 'feed2',
    img: instaImg,
    social: 'Instagram',
    caption:
      'Your favourite street hawker now available online through Hokart!',
  },
  {
    id: 'feed3',
    img: mediumImg,
    social: 'Medium',
    caption: 'Indian Street Vendor Market : The Sunrise Sector of Food Tech',
  },
];

const NewsFeed = () => {
  return (
    <section className="newsfeed">
      <h1>News Feed</h1>
      <ul className="newsfeed__items">
        {feeds.map((f) => (
          <li key={f.id} className="newsfeed__item">
            <div className="newsfeed__item-img-container">
              <img src={f.img} alt={f.id} />
            </div>
            <div className="newsfeed__item-info">
              <h2>{f.social}</h2>
              <p>{f.caption}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsFeed;
