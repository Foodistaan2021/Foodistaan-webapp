import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { Button } from "react-bootstrap";
import Header from "./common/header";
import SearchBar from "./common/searchBar.js";
import Footer from "./common/footer";
import "./css/landingPage.css";
import DiveInImg1 from "../images/DiveInImg1.png";
import DiveInImg2 from "../images/DiveInImg2.png";
import DiveInImg3 from "../images/DiveInImg3.png";
import DiveInImg4 from "../images/DiveInImg4.png";
import Img1 from "../images/img1.svg";
import Img2 from "../images/img2.svg";
import Img3 from "../images/img3.svg";
import Img4 from "../images/img4.svg";
import vendor1 from "./Images/vendor1.png";
import vendor2 from "./Images/vendor2.png";
import vendor3 from "./Images/vendor3.png";
import vendor4 from "./Images/vendor4.png";
import partner from "./Images/partner.png";
import Pvendorimg1 from "../images/vendorImg1.png";
import Pvendorimg2 from "../images/vendorImg2.png";
import Pvendorimg3 from "../images/vendorImg3.png";
import Pvendorimg4 from "../images/vendorImg4.png";
import appMobile from "../images/appMobile.png";
import mobile from "../components/Images/mobile.png";
// import nearbyShop from './Images/nearbyShop.png'
import { Link } from "react-router-dom";
import Search from "./common/Search";
import Gmap from "./Gmap";
import Location from "./map/Location";

const HomePage = () => {
  <Link to={"/explore"}></Link>;
};
var flag, flag2;
function WindowWidth() {
  const screenSize = window.innerWidth;
  return screenSize;
}

export default function LandingPage() {
  if (WindowWidth() <= 600) {
    flag = 1.7;
    flag2 = 1.7;
  } else {
    flag = 4;
    flag2 = 4;
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="landingPage">
          <Header />
          {/* <div className='row outer-search-bar container-fluid'>
                    <div className='col-md-3 '></div>
                    <div className='col-md-6 search-bar'>
                        <div className='location-container'>
                            <div className='location-wrapper'>
                                <div className='location-icon-name'>
                                    <TiLocation className='absolute-center location-icon' />
                                    <div ><span className='home-text'>Home</span><br /> Rohini, Delhi</div>
                                </div>
                            </div>
                        </div>
                        <div className='input-search-bar absolute-center'>
                            <FiSearch className='search-icon' />
                            <input placeholder='Search Cuisines' className='search-input' />
                        </div>
                    </div>
                    <div className='col-md-3 '></div>
                </div> */}

          <div className="banner-text">
            <div className="title">
              <p className="title">streato</p>
              <p>Not sure where to get the best street food?</p>
              <p>Perfect, We will help you!</p>
            </div>
            {/*<div className="explore-btn">Perfect. We'll help you!</div>*/}

            <Location />
          </div>
        </div>
      </div>

      {/* --------------------banner complete---------------------- */}

      <div className="container-fluid">
        <div className="">
          {/*<div className="heading_text">Let's Explore the Streets</div>*/}
          <div className="letsDiveIn">
            <div className="diveIn_Img_text">
              <Link to={"/explore"}>
                <img className="diveIn_Img" src={Img1}></img>
                <div className="diveIn_text">Order Online</div>
              </Link>
            </div>
            <div className="diveIn_Img_text">
              <Link to={"/explore"}>
                <img className="diveIn_Img " src={Img2}></img>
                <div className="diveIn_text">Go for a food walk</div>
              </Link>
            </div>
            <div className="diveIn_Img_text">
              <img className="diveIn_Img" src={Img4}></img>
              <div className="diveIn_text">Hear from vendors</div>
            </div>
            <div className="diveIn_Img_text">
              <img className="diveIn_Img" src={Img3}></img>
              <div className="diveIn_text">Add something</div>
            </div>
          </div>
        </div>
      </div>

      {/*Listen from Vendors*/}

      <div className="heading-text">Listen From Vendors</div>
      <div className="vendors_wrapper">
        <Swiper
          slidesPerView={`${flag2}`}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={vendor1} className="vendor-img" />

              <div className="popular-vendor-name">Ram Ramesh Chandra</div>
              <p className="vendor-location">Khana Khaza corner</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={vendor2} className="vendor-img" />

              <div className="popular-vendor-name">Ram Ramesh Chandra</div>
              <span className="vendor-location">Khana Khaza corner</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={vendor3} className="vendor-img" />

              <div className="popular-vendor-name">Ram Ramesh Chandra</div>
              <span className="vendor-location">Khana Khaza corner</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={vendor4} className="vendor-img" />
              <div className="popular-vendor-name">Ram Ramesh Chandra</div>
              <span className="vendor-location">Khana Khaza corner</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={vendor1} className="vendor-img" />

              <div className="popular-vendor-name">Ram Ramesh Chandra</div>
              <p className="vendor-location">Khana Khaza corner</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={vendor2} className="vendor-img" />

              <div className="popular-vendor-name">Ram Ramesh Chandra</div>
              <span className="vendor-location">Khana Khaza corner</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={vendor3} className="vendor-img" />

              <div className="popular-vendor-name">Ram Ramesh Chandra</div>
              <span className="vendor-location">Khana Khaza corner</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={vendor4} className="vendor-img" />
              <div className="popular-vendor-name">Ram Ramesh Chandra</div>
              <span className="vendor-location">Khana Khaza corner</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Become Partner*/}
      <div className="partner_container">
        <div className="partner-wrapper">
          <div className="row">
            <div className="search">
              <div className="partner-banner-text">
                Join the Streato Family.
              </div>
              <div className="below-banner">
                Become our food partner.
                <br /> Start Selling on Streato!
              </div>
              <Button className="explore-btn-small">Learn More</Button>
            </div>
            {/*<div className="col-6 search absolute-center">
              <img src={partner} className="partner-img" />
              </div> */}
          </div>
        </div>
      </div>

      {/* Popular Vendors */}
      <div className="heading-text">Popular Vendors</div>
      <div className="partner_container popular-wrapper">
        <div className="row">
          <div className="col-md-4 popular-vendors padd-0">
            <div>
              <img className="popular-vendor-img" src={Pvendorimg4}></img>
            </div>
            <div className="popular-vendor-name">
              <span>Ram Ramesh Chandra</span>
              <div className="popular-vendor-location">
                Khana Khazana Corner <br /> kala bazarm chandni chowk
              </div>
            </div>
          </div>
          <div className="col-md-4 popular-vendors  padd-0">
            <div>
              <img className="popular-vendor-img" src={Pvendorimg1}></img>
            </div>
            <div className="popular-vendor-name">
              <span>Ram Ramesh Chandra</span>
              <div className="popular-vendor-location">
                Khana Khazana Corner <br /> kala bazarm chandni chowk
              </div>
            </div>
          </div>
          <div className="col-md-4 popular-vendors padd-0">
            <div>
              <img className="popular-vendor-img" src={Pvendorimg4}></img>
            </div>
            <div className="popular-vendor-name">
              <span>Ram Ramesh Chandra</span>
              <div className="popular-vendor-location">
                Khana Khazana Corner <br /> kala bazarm chandni chowk
              </div>
            </div>
          </div>
          <div className="col-md-4 popular-vendors padd-0">
            <div>
              <img className="popular-vendor-img" src={Pvendorimg1}></img>
            </div>
            <div className="popular-vendor-name">
              <span>Ram Ramesh Chandra</span>
              <div className="popular-vendor-location">
                Khana Khazana Corner <br /> kala bazarm chandni chowk
              </div>
            </div>
          </div>
          <div className="col-md-4 popular-vendors padd-0">
            <div>
              <img className="popular-vendor-img" src={Pvendorimg2}></img>
            </div>
            <div className="popular-vendor-name">
              <span>Ram Ramesh Chandra</span>
              <div className="popular-vendor-location">
                Khana Khazana Corner <br /> kala bazarm chandni chowk
              </div>
            </div>
          </div>
          <div className="col-md-4 popular-vendors padd-0">
            <div>
              <img className="popular-vendor-img" src={Pvendorimg3}></img>
            </div>
            <div className="popular-vendor-name">
              <span>Ram Ramesh Chandra</span>
              <div className="popular-vendor-location">
                Khana Khazana Corner <br /> kala bazarm chandni chowk
              </div>
            </div>
          </div>
        </div>
      </div>

{/*Get App*/}


      <div className="container-fluid">


        <div className="get_App">
              <div className="get_App_left">
                <h1>Get Streato App</h1>
                <p>Download the application from playstore or apple store to get exciting updates.</p>
                <button>Download Now</button>
              </div>
              <div className="get_App_right">
                <img src={appMobile} alt="mobile" />
              </div>
        </div>


        
      

       

        <Footer />
      </div>
    </div>
  );
}
