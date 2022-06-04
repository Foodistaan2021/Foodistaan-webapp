import React from 'react'
import { TiLocation } from 'react-icons/ti';
// import "./css/searchBar.css";
import { Link } from 'react-router-dom';

const Display = () => {
  return (
    <div>
    <span>
  {/*<TiLocation className="absolute-center location-icon" />*/}
    <Link to="/gmap">
      <h2>Get Current Location</h2>
      </Link>
    </span>
    </div>
  )
}

export default Display