import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { auth } from "./firebase";
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Login() {
  const [phoneno, setPhoneno] = useState();
  const configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: response => {
          onSignInSubmit();
        },
      },
      auth
    );
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha()
    const phoneNumber = phoneno;
    const appVerifier = window.recaptchaVerifier;
    
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        console.log("OTP sent")
      })
      .catch(error => {console.log(error.message)});
  };

  return (
    <div className="container-fluid normal-font">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 login-container-left d-flex flex-column justify-content-center">
          <p className="main-heading-font font-weight-bolder py-2">
            Missing your
          </p>
          <p className="main-heading-font font-weight-bolder py-2">
            favourite pani puri
          </p>
          <p className="main-heading-font font-weight-bolder py-2"> waala?</p>
          <p className="heading-font text-white py-2">
            Order food from your favourite vendors
          </p>
          <p className="heading-font text-white py-2">
            and even enjoy the delicious ghar ka khana.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 login-container-right">
          <img src="/logo.png" width="80%" />
          <div className="signUp-display-btn">
          <Link to='/login'> <button className="login-tab-btn-S">Login</button></Link>
            <button className="active-log-sign signup-tab-btn-S">Sign Up</button>
          </div>
          <div className="d-flex login-form-container mx-auto">
            <select className="login-input-select-S">
              <option>+91</option>
              <option>+92</option>
            </select>
            <form className="login-form">
              <div id="sign-in-button"></div>
              <input
                type="tel"
                className="login-input-S"
                placeholder="Enter mobile number"
                onChange={e => {
                  setPhoneno(e.target.value);
                }}
              ></input>
              <input type="email"
                className="login-input-S"
                placeholder="Enter email address"
                onChange={e => {
                  setPhoneno(e.target.value);
                }}></input>
              <button
                onClick={e => {
                 onSignInSubmit(e)
                }}
                className="login-input-btn-S"
              >
                <FaArrowRight />
              </button>
            </form>
          </div>
          <div className="d-flex justify-content-center align-items-center my-2">
            <div className="login-or-dash"></div>
            <p className="px-2">or</p>
            <div className="login-or-dash"></div>
          </div>
          <div className="my-5">
            <button className="google-tab-btn mx-2 ">
              <div className="d-flex justify-content-center align-items-center">
                <img src="/goggle.png" className="login-icons" />
                <p className="mx-2">Login with Google</p>
              </div>
            </button>
            <button className="facebook-tab-btn mx-2">
              <div className="d-flex justify-content-center align-items-center">
                <img src="/facebook.png" className="login-icons" />
                <p className="mx-2">Login with Facebook</p>
              </div>
            </button>
          </div>
          <button className="email-tab-btn">
            <div className="d-flex justify-content-center align-items-center">
              <img src="/mail.png" className="login-icons" />
              <p className="mx-2">Login with email</p>
            </div>
          </button>
          <p className="my-5">
            By continuing from this page you are agreeing to our Terms and
            Policy
          </p>
        </div>
      </div>
    </div>
  );
}
