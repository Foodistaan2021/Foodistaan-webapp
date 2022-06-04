import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TiLocation } from 'react-icons/ti';
import { database } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../css/searchBar.css';
import '../css/landingPage.css'
import Gmap from '../Gmap';
import Location from '../map/Location';





export default function SearchBar() {
  // all the CSS of this search bar is in landing.css file

  const [state, setState] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchdatahandler = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const querySnapshot = await getDocs(collection(database, 'DummyData'));

        const loadedData = [];
        querySnapshot.forEach((doc) => {
          loadedData.push(doc.data());
        });

        setRestaurants(loadedData);
        //console.log(loadedData);
        setIsLoading(false);
      } catch (err) {
        setError('Something went wrong!!');
        setIsLoading(false);
      }
    };

    fetchdatahandler();
  }, []);

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = restaurants.filter((restaurant) => {
        const regex = new RegExp(`${text}`, 'gi');
        return restaurant.search.match(regex);
      });
    }

    setSuggestions(matches);
    setText(text);
  };

  let cssClass = 'noSuggestionList';

  if (suggestions.length >= 1) {
    cssClass = 'suggestionList';
  }

  return (
    <div className='location_search_row'>
    
          
 
                  <Location/>

          <div className="search_cuisine input-search-bar-2">
            <input
              placeholder=
                "Search Cuisines"
              
              className="search-input home-search-input"
              value={text}
              onChange={(e) => onChangeHandler(e.target.value)}
              onBlur={() => {
                setTimeout(() => {
                  setSuggestions([])
                }, 300)
              }}
              // style={{
              //   paddingRight: location.pathname === '/explore' || location.pathname.match('/restaurant') ? '150px' : '',
              // }}
            />
          </div>
        <div className={cssClass}>
          {suggestions.map((suggestion, i) =>
            <Link to={`/restaurant/${suggestion.id}`}>
              <div
                className="search-input suggestion"
                key={i}
                onClick={() => onSuggestHandler(suggestion.Name)}>
                <span>
                  <img 
                    style={{ height: '2rem', weight: '2rem' }} 
                    src={suggestion.FoodImage} 
                    alt="food" 
                  />
                </span>
                <div className="suggestionName">
                  {suggestion.Name}
                </div>
                </div>
              </Link>
            )}
          </div>
          <div>
            {suggestions.length == 0 && text.length != 0 && (
              <div className="noResultText">
                <div>No Results Found</div>
              </div>
            )}
          </div>
        </div>
     
  );
}
