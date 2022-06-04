import React, { useEffect, useState } from 'react';

import RestaurantsList from './RestaurantsList';
import LoadingSpinner from '../common/LoadingSpinner/LoadingSpinner';
import { database } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


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
        setIsLoading(false);
      } catch (err) {
        setError('Something went wrong!!');
        setIsLoading(false);
      }
    };

    fetchdatahandler();
  }, []);

  return (
    <>
      {isLoading && !error && <LoadingSpinner center />}
      {!isLoading && !error && restaurants.length > 0 && (
        <>
        <h1 className='restaurants-header'>Restaurants near me</h1>
        <RestaurantsList restaurants={restaurants} />
        </>
      )}
      {!isLoading && error && <p className="center">{error}</p>}
    </>
  );
};

export default Restaurants;
