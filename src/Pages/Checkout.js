import React from 'react';
import Layout from '../components/common/layout/Layout';
import Cart from '../components/RestaurantsDetail/Menu/Cart/Cart';
import { TiTick } from 'react-icons/ti';

const Checkout = () => {
  return (
    <>
      <Layout>
        <div className="container checkout-wrapper">
          <div className="row">
            <div className="col-sm-7">
              <h1 className="checkout-title">Checkout</h1>
              <div className="display-name">
                <h1 className="">
                  Raghav Dhingra{' '}
                  <span className="display-email">
                    (raghavdhingra@example.com)
                  </span>
                </h1>
                <div className="securely-logged">
                  You are securely logged in
                </div>
              </div>
              <div className="display-name">
                <h1 className="display-name-text">Delivery Address </h1>
                <div className="address">
                  <TiTick className="select-icon" /> Home:{' '}
                  <span className="address-text">
                    S1/75 Old Mahavir Nagar, Tilak nagar New Delhi
                  </span>
                  <div className="change-address">
                    {/* <button></button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <Cart checkout />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Checkout;
