import React from "react";
import { MdDeliveryDining, MdShoppingCart } from "react-icons/md";
import { GiCardPickup } from "react-icons/gi";
import { FaRegCopy } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";

const MainMenuCard = () => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      <div className="">
        <div className="mainmenu-card-container">
          <img src="/cake.jpeg" className="mainmenu-card-container-img"></img>
          <div className="p-5">
          <div className="heading-font d-flex justify-content-between py-2">
            <div>
            <h1 className="font-weight-bolder">Blueberry Waffle</h1>
            <h1 className="font-weight-bolder">Rs.200</h1>
            </div>
            <div className="food-item-mark">Mark</div>
          </div>
          <p className="py-2">Waffle with a twist of blueberry, and a punch of icecream</p>
          <button className="my-5 food-item-addbtn">ADD</button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mainmenu-card-container">
          <img src="/cake.jpeg" className="mainmenu-card-container-img"></img>
        </div>
      </div>
    </div>
  );
};

export default function menu() {
  return (
    <div className="container-fluid normal-font my-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 d-flex">
          <ul className="mx-auto">
            <li className="text-dark heading-font pb-5">Menu</li>
            <li className="text-dark">Recommended</li>
            <li className="text-dark">Best Sellers</li>
            <li className="text-dark">Chef's Choice</li>
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
          <div className="text-center availability-selection-section">
            <span className="mx-5">
              <MdDeliveryDining className="heading-font me-3" />
              Delivery
            </span>
            <span className="mx-5">
              <GiCardPickup className="heading-font me-3" />
              Pickup
            </span>
            <span className="mx-5">
              <FaRegCopy className="normal-heading-font me-3" />
              Overview
            </span>
          </div>
          <div className="p-5">
            <MainMenuCard />
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 px-5">
          <div className="cart-container">
            <div className="cart-container-inner-top py-5">
              <div className="main-heading-font font-weight-bolder">
                <MdShoppingCart className="cart-icon me-3" />
                My Cart
              </div>
            </div>
            <div className="cart-container-inner-bottom p-5">
              <div className="d-flex card-container-resturant">
                <div className="cart-container-inner-image me-3"></div>
                <div>
                  <p className="font-weight-bolder my-2 heading-font">
                    Anna's hut
                  </p>
                  <p>Rohini, Delhi</p>
                </div>
              </div>
              <div className=" d-flex justify-content-between my-3 ms-5">
                <div className="d-flex flex-column">
                  <p className="mt-2">Garlic mix munchao Noodles</p>
                  <p className="mt-2 text-secondary">
                    vegies, less spice, 3 mayo
                  </p>
                  <p className="mt-2 small-font">Customize</p>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <button className="heading-font cart-btns cart-btn-remove">
                    -
                  </button>
                  <p
                    className="cart-btns text-center"
                    style={{ alignSelf: "self-end" }}
                  >
                    1
                  </p>
                  <button className="heading-font cart-btns cart-btn-add">
                    +
                  </button>
                </div>
              </div>
              <div className=" d-flex justify-content-between my-3 ms-5">
                <div className="d-flex flex-column">
                  <p className="mt-2">Garlic mix munchao Noodles</p>
                  <p className="mt-2 text-secondary">
                    vegies, less spice, 3 mayo
                  </p>
                  <p className="mt-2 small-font">Customize</p>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <button className="heading-font cart-btns cart-btn-remove">
                    -
                  </button>
                  <p
                    className="cart-btns text-center"
                    style={{ alignSelf: "self-end" }}
                  >
                    1
                  </p>
                  <button className="heading-font cart-btns cart-btn-add">
                    +
                  </button>
                </div>
              </div>
              <p className="heading-font d-flex justify-content-end">
                <BiRupee />
                <span>120</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
