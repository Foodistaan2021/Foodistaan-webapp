
import React, { useEffect, useState } from "react";
import { TiLocation } from "react-icons/ti";
import axios from "axios";
import "./css/searchBar.css";
import PlacesAutocomplete from 'react-places-autocomplete';
import { MdGpsFixed } from "react-icons/md";

import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import"./css/landingPage.css"


import CurrentLocation from 'react-current-location-address'




const containerStyle = {
  width: '1920px',
  height: '1080px'
};
const center = {
  lat: 18.5204303,
  lng: 73.8567437,
};

const Gmap = () => {



  


  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [address, setAddress] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("lat",position.coords.latitude);
      console.log("long",position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    
    
  }, []);
  const getAddress = () =>{
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}
    &location_type=ROOFTOP&result_type=street_address&key=AIzaSyA2D_qJoq8XQ6DRIo9wSfzelarrEm-ARZM`)
    .then(res=>res.json())
    // .then(data => console.log("add",data.plus_code.compound_code))
    .then(data => setAddress(data.plus_code.compound_code))
    .catch(err => alert(err))
  }

  const handleChange = (add) => {
    setAddress(add)
  }
  return(
    <div>
    <span>
    <div className="display_location">
  <MdGpsFixed className="absolute-center location-icon" onClick={getAddress} />
  {/*<p>{address}</p>*/}
  <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      // onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="loc_search">
          <input
            {...getInputProps({
              placeholder: 'Where you want to eat ...',
              className: 'loc_search',
            })}
          />
          <div className="drdown_cont">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#42a5f5', cursor: 'pointer'}
                : { backgroundColor: '#ffffff', cursor: 'pointer'};
              return (
                <div className="in_suggest"
                  {...getSuggestionItemProps(suggestion, {
                    
                    style,
                  })}
                >
                <h6>{suggestion.description}</h6>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  </div>
    </span>
    </div>
  )

  
}

  

  


export default Gmap