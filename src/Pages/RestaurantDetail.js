import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';

import Layout from '../components/common/layout/Layout';
import FoundRestaurantsDetail from '../components/RestaurantsDetail/FoundRestaurantsDetail';
// import { DUMMY_RESTAURANT_DETAIL } from './dummy-restaurant-detail';
import { database } from '../firebase';
import LoadingSpinner from '../components/common/LoadingSpinner/LoadingSpinner';
import HomeNavbar from '../HomeNavbar';

const RestaurantDetail = () => {
  const { rid } = useParams();
  const [resDetail, setResDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchResDetail = async () => {
      setIsLoading(true);
      const resRef = collection(database, 'DummyData');

      const qRes = query(resRef, where('id', '==', rid));

      try {
        const querySnapshot = await getDocs(qRes);

        const loadedDetail = [];

        querySnapshot.forEach((doc) => {
          loadedDetail.push(doc.data());
        });

        setResDetail({ ...loadedDetail[0] });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchResDetail();
    return () => {
      setResDetail({}); // This worked for me
    };
  }, [rid]);

  //finding detail from store data by checking params id and data id

  // const resDetail = DUMMY_RESTAURANT_DETAIL.find((r) => r.id === rid);

  return (
    <>
      <HomeNavbar />
      {isLoading && <LoadingSpinner center />}
      {!isLoading && resDetail && (
        <FoundRestaurantsDetail details={resDetail} />
      )}
    </>
  );
};

export default RestaurantDetail;
