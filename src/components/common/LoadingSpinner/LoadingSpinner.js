import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = (props) => {
  return (
    <div className={props.center ? 'center-loader' : ''}>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingSpinner;
