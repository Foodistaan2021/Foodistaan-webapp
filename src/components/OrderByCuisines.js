import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import Slider from "react-slick";
import red from "../images/Group1.png";
import yellow from "../images/Group2.png";
import green from "../images/Group3.png";
import blue from "../images/Group4.png";
import bubby from "../images/bubby.png";
import burger from "../images/burger.png";
import franky from "../images/franky.png";
import panicpizza from "../images/panicpizza.png";
import pizza from "../images/pizza.png";
import rawc from "../images/rawc.png";
import roll from "../images/roll.png";
import rollie from "../images/rollie.png";

import burgernew from "../images/burgernew.png";
import pizzan from "../images/pizzan.png";
import rolln from "../images/rolln.png";
import routdan from "../images/routdan.png";

import "./css/landingPage.css";

var flag;
function WindowWidth() {
  const screenSize = window.innerWidth;
  return screenSize;
}
export default class CenterMode extends Component {
  render() {
    if (WindowWidth() <= 600) {
      flag = 3.5;
    } else {
      flag = 5;
    }

    return (
      <div className="cuisine">
      {/*<div>
          <h1 className="restaurants-header">Order By Cuisines</h1>

          <div className="row1">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="col1">
              <img className="image" src={burgernew} alt="First slide" />
              <p>Bubbly Burger</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col1">
              <img className="image" src={burgernew} alt="First slide" />
              <p>Bubbly Burger</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col1">
              <img className="image" src={burgernew} alt="First slide" />
              <p>Bubbly Burger</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col1">
              <img className="image" src={burgernew} alt="First slide" />
              <p>Bubbly Burger</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col1">
              <img className="image" src={burgernew} alt="First slide" />
              <p>Bubbly Burger</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col1">
              <img className="image" src={burgernew} alt="First slide" />
              <p>Bubbly Burger</p>
            </div>
          </SwiperSlide>
          
        </Swiper>
        </div>
    </div>*/}
        <div>
          <h1 className="restaurants-header">Order By Cuisines</h1>

          <div className="row1">
            
            <div className="col1">
              <img className="image" src={burgernew} alt="First slide" />
              <p>Bubbly Burger</p>
            </div>
            <div className="col1">
              <img className="image" src={rolln} alt="First slide" />
              <p>Routda Roll</p>
            </div>
            <div className="col1">
              <img className="image" src={routdan} alt="First slide" />
              <p>Friendly Franky</p>
            </div>
            <div className="col1">
              <img className="image" src={pizzan} alt="First slide" />
              <p>Panic Pizza</p>
            </div>
          </div>
          <div className="row1">
            
            <div className="col1">
              <img className="image" src={pizzan} alt="First slide" />
              <p>Panic Pizza</p>
            </div>
            <div className="col1">
              <img className="image" src={rolln} alt="First slide" />
              <p>Routda Roll</p>
            </div>
            <div className="col1">
              <img className="image" src={routdan} alt="First slide" />
              <p>Friendly Franky</p>
            </div>
            <div className="col1">
              <img className="image" src={burgernew} alt="First slide" />
              <p>Bubbly Burger</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <Swiper slidesPerView={`${flag}`} spaceBetween={5} pagination={{
//   "clickable": true
//   }} className="mySwiper container-fluid slider" navigation={true}>
//   <SwiperSlide>  <div className='absolute-center' >
//                    <div>
//                     <h3><img className="cuisine-img"src={red}alt="First slide"/></h3>
//                    </div>
//                  </div>
//   </SwiperSlide>
//   <SwiperSlide>  <div className='absolute-center' >
//                    <div>
//                     <h3><img className="cuisine-img"src={yellow}alt="First slide"/></h3>
//                    </div>
//                  </div>
//                   </SwiperSlide>
//   <SwiperSlide>  <div className='absolute-center' >
//                    <div>
//                     <h3><img className="cuisine-img"src={green}alt="First slide"/></h3>
//                    </div>
//                  </div>
//                 </SwiperSlide>
//   <SwiperSlide>  <div className='absolute-center' >
//                    <div>
//                     <h3><img className="cuisine-img"src={blue}alt="First slide"/></h3>
//                    </div>
//                  </div></SwiperSlide>
//   <SwiperSlide>  <div className='absolute-center' >
//                    <div>
//                     <h3><img className="cuisine-img"src={red}alt="First slide"/></h3>
//                    </div>
//                  </div></SwiperSlide>
//   <SwiperSlide>  <div className='absolute-center' >
//                    <div>
//                     <h3><img className="cuisine-img"src={yellow}alt="First slide"/></h3>
//                    </div>
//                  </div></SwiperSlide>
//   <SwiperSlide>  <div className='absolute-center'>
//                    <div>
//                     <h3><img className="cuisine-img"src={green}alt="First slide"/></h3>
//                    </div>
//                  </div></SwiperSlide>
//   <SwiperSlide>  <div className='absolute-center'>
//                    <div>
//                     <h3><img className="cuisine-img"src={blue}alt="First slide"/></h3>
//                    </div>
//                  </div></SwiperSlide>
//   <SwiperSlide>  <div className='absolute-center'>
//                    <div>
//                     <h3><img className="cuisine-img"src={red}alt="First slide"/></h3>
//                    </div>
//                  </div></SwiperSlide>
//   </Swiper>
