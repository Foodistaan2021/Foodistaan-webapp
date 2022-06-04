import React from "react";
import { FaStar, FaRupeeSign } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { MdEventSeat } from "react-icons/md";

export default function item() {
  return (
    <>
      <div className="container-fluid normal-font">
        <div className="row position-relative g-0">
          <img src="/Dosa.jpg" width="100%"></img>
          <div className="food-dashboard-rating-container d-flex flex-wrap align-items-center justify-content-center py-2">
            <h1 className="text-center heading-font">
              3.5 <FaStar />
            </h1>
            <p>10+ ratings</p>
          </div>
        </div>
      </div>
      <div className="container-fluid main-container normal-font">
        <div className="row my-5">
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <h1 className="main-heading-font my-2">Anna Dosa Corner</h1>
            <h3 className="normal-heading-font my-3">
              South Indian Restaurant
            </h3>
            <h5 className="my-2">IUD,Rohini,Delhi</h5>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <div className="food-dashboard-offer-card-2 m-2 position-relative">
              <p className="food-dashboard-horizontal heading-font font-weight-bolder">
                OFFER
              </p>
              <p className="food-dashboard-rating-card-text font-weight-bolder">
                20% off upto <FaRupeeSign />
                200
              </p>
              <p className="food-dashboard-rating-card-text small-font">
                USE MASTERCARD100 | ABOVE <FaRupeeSign />
                100
              </p>
              <p className="food-dashboard-rating-card-text small-font">
                Terms & Condition Applies
              </p>
            </div>
            <div className="food-dashboard-offer-card m-2 position-relative">
              <p className="food-dashboard-horizontal heading-font font-weight-bolder">
                OFFER
              </p>
              <p className="food-dashboard-rating-card-text font-weight-bolder">
                20% off upto <FaRupeeSign />
                200
              </p>
              <p className="food-dashboard-rating-card-text small-font">
                USE MASTERCARD100 | ABOVE <FaRupeeSign />
                100
              </p>
              <p className="food-dashboard-rating-card-text small-font">
                Terms & Condition Applies
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="food-dashboard-items d-flex align-items-center">
            <FaRupeeSign className="food-dashboard-items-icon-1" />
            <span>Cost for two 100</span>
          </p>
          <p className="food-dashboard-items d-flex align-items-center">
            <MdDeliveryDining className="food-dashboard-items-icon-2" />
            <span>Delivery Avialable</span>
          </p>
          <p className="food-dashboard-items d-flex align-items-center">
            <MdEventSeat className="food-dashboard-items-icon-3"/>
            <span>Seating Avialable</span>
          </p>
        </div>
      </div>
    </>
  );
}
