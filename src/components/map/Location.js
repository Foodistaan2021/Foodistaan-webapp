import React, { useEffect, useState } from "react";
import { TiLocation } from "react-icons/ti";
import axios from "axios";
import PlacesAutocomplete from "react-places-autocomplete";
import { MdGpsFixed } from "react-icons/md";



import "../css/location.css";
import { async } from "@firebase/util";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


const containerStyle = {
  width: "1920px",
  height: "1080px",
};
// const center = {
//   lat: 18.5204303,
//   lng: 73.8567437,
// };

const Location = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [address, setAddress] = useState("");

  const location = useLocation();

  useEffect(() => {
     navigator.geolocation.getCurrentPosition( async (position) => {
      console.log("lat", position.coords.latitude);
      console.log("long", position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, [latitude,longitude]);

  console.log("lat, lng",latitude , longitude)





  
 

  const getAddress =  () => {
     
     fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}
    &location_type=ROOFTOP&result_type=street_address&key=AIzaSyA2D_qJoq8XQ6DRIo9wSfzelarrEm-ARZM`)
      .then(( res) => res.json())
      // .then(data => console.log("add",data))
      .then((data) => setAddress(data.plus_code.compound_code))
      .catch((err) => alert(err));
  };


  // useEffect(() => {
  //   getAddress()
  // }, [])
  

  


  localStorage.setItem("address", address);



  

  

  
  
  






  


 
  
  const handleChange = (add) => {
    setAddress(add);
  };

  

  return (
    <div>
      <span>
        <div className={`${location.pathname === '/explore' ? 'location_searchbar_explore' : 'location_searchbar'}`}>

    


          <div class="dropdown">
            <p class="dropbtn"><TiLocation/></p>
            <div class="dropdown-content">
              <p onClick={getAddress}><MdGpsFixed/>Detect Current Location</p>
            
            </div>
          </div>

          {/*<p>{address}</p>*/}

          <div>
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            // onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className={`${location.pathname === '/explore' ? 'loc_search_explore' : 'loc_search'}`}>
                <input
                  {...getInputProps({
                    placeholder:`${location.pathname === '/explore' ? "Location" : "Where do you want to eat"}`,
                    className: "loc_search",
                  })}
                />
                <div className={`${location.pathname === '/explore' ? 'drdown_cont_explore' : 'drdown_cont'}`}>
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#42a5f5", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        className="in_suggest"
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
        </div>
      </span>
    </div>
  );
};

export default Location;