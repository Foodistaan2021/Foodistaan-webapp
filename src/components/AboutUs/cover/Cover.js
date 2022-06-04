import React from 'react';
import circle from '../assets/Ellipse.png'
import rectangle6 from '../assets/Rectangle6.png'
import rectangle5 from '../assets/Rectangle5.png'
import './Cover.css';

const Cover = () => {
  return (
    <div className='cover'>
      <div className='row'>
        <div className='col-5 search'>
          <h1 className='cover-title'>Love <span className='cover-title2'>Street <br />Food?</span></h1>
          <h1 className='cover-sub-title'>Enjoy your favorite street food from the comfort and safety of your home.</h1>
          <button className='cover-orderNow'>Order Now</button>
        </div>
        <div className='col-7 container-fluid'>
          <div className='circle-img-wrapper '>
            <img src={circle} className='circle-img '></img>
            <img src={rectangle6} className='rectangle-left'></img>
            <img src={rectangle5} className='rectangle-right'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
