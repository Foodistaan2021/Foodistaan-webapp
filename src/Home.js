import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './store/auth-context';
import HomeNavbar from './HomeNavbar';
import Header from './components/common/header';
import SearchBar from './components/common/searchBar.js';
import SpecialOffers from './components/SpecialOffers';
import OrderByCuisines from './components/OrderByCuisines';
import Footer from './components/common/footer';
import Trolly from './components/common/trolly';
import Restaurants from './components/Restaurants/Restaurants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const [matches, setMatches] = useState(window.matchMedia("(max-width: 768px)").matches);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    window
    .matchMedia("(max-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div className="App">
      <Header />
      <main className='main'>
        <div 
          className='home-search-bar'
          style={{display: (matches) ? 'block' : 'none'}}
        >
           <SearchBar /> 
        </div>

        <div className="search_bar"
       
        >
        <SearchBar /> 
        
  </div>
       
        <SpecialOffers />
        {/* <Trolly /> */}
        {/* <Deals /> */}
        <OrderByCuisines />
        <Restaurants />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
