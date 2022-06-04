import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TiLocation } from 'react-icons/ti';
import { database } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../css/searchBar.css';
import '../css/landingPage.css'
import Gmap from '../Gmap';

const Search = () => {
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
    <div className="search_Container">
        <div className="location_search">
            <Gmap/>
        </div>
    </div>
  )
}

export default Search