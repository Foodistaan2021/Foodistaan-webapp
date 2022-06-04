import React, { useContext } from 'react';
import { useState,useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { auth, googleAuthProvider } from './firebase';
import { database } from './firebase';
// import { Modal, Button } from 'react-bootstrap';
// import {database} from 'firebase/app';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';

import { RecaptchaVerifier, signInWithPopup } from 'firebase/auth';
import { signInWithPhoneNumber } from 'firebase/auth';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from './store/auth-context';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const authCtx = useContext(AuthContext);
  const [phoneno, setPhoneno] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [OTP, setOTP] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [adress, setAdress] = useState('')
  const history = useHistory();
  // auth.onAuthStateChanged(())
setAdress(localStorage.getItem('address'));



  

  

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const requestOTP = (e) => {
    e.preventDefault();
    const phoneNumber = countryCode + phoneno;

    if (phoneNumber.length >= 12) {
      generateRecaptcha();

      let appVerifier = window.recaptchaVerifier;
      console.log(appVerifier);
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log('OTP has been sent');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    let otp = e.target.value;
    setOTP(otp);
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          const user = result.user;
          // console.log("user 1234",user.uid);
          // console.log('user verified');
          // alert("User is verified")

          //phone number stored to state
          
          setPhoneNumber(user.phoneNumber);

          e.preventDefault();
          //if user is verified using otp
          if (user != null) {
            console.log('user present');

            //get document reference
            const docRef = doc(database, 'users', user.phoneNumber);

            getDoc(docRef).then((doc) => {
              // if user already exist in the data base
              if (doc.exists()) {
                console.log('user exist in data base-1');
                //fetch cart id
                authCtx.login({
                  phoneNumber: user.phoneNumber,
                  cartId: doc.data()['cart-id'],
                });
                history.goBack();
              } else {
                console.log(
                  'user does not exist in data base,open modal and add details to data base'
                );

                setModalShow(true);

              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
          console.log('Wrong OTP');
        });
    }
  };

  //Google , Facebook authentication function
  const handleOnClick = async (provider) => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  // const handleShow = () => setShow(true);
  const handleClose = () => {
    //Cart document for user generated with auto id
    const cartDocRef = doc(collection(database, 'cart'));

    // getting reference of user document created using phone number as key
    const docRef = doc(database, 'users', phoneNumber);

    //updating details into created user document
    setDoc(docRef, {
      'cart-id': cartDocRef.id,
      name: name,
      adress:adress,
      email: email,
      phoneNumber: phoneNumber,
      
    })
      .then(() => {
        setDoc(cartDocRef, {
          'vendor-id': '',
          'vendor-name': '',
        }).then(() => {
          console.log('success');
        });
      })
      .catch((error) => {
        console.log(error);
        console.log('user details not added');
      });

    console.log(phoneNumber);
    setModalShow(false);
    authCtx.login({
      phoneNumber,
      cartId: cartDocRef.id,
    });
    history.goBack();
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
          {/* <div>
            <button className="active-log-sign login-tab-btn">Login</button>
            <Link to="/signUp">
              <button className="signup-tab-btn-L">Sign Up</button>
            </Link>
          </div> */}
          <div className="d-flex align-items-center login-form-container mx-auto">
            <select
              className="login-input-select"
              onChange={(e) => {
                setCountryCode(e.target.value);
              }}
            >
              <option>+91</option>
              <option>+92</option>
            </select>

            <form onSubmit={requestOTP} className="my-5 login-form">
              <div id="sign-in-button"></div>
              <input
                type="tel"
                className="login-input"
                placeholder="Enter mobile number"
                onChange={(e) => {
                  setPhoneno(e.target.value);
                }}
              ></input>
              <button className="login-input-btn">
                <FaArrowRight />
              </button>
              <div className="sign-in-button"></div>
            </form>



            <form
              className="my-5 login-form"
              onSubmit={(e) => {
                e.preventDefault();
                verifyOTP(e);
              }}
            >
              <input
                type="tel"
                className="login-input"
                placeholder="Enter OTP"
                value={OTP}
                onChange={verifyOTP}
              ></input>
              <button className="login-input-btn">
                <FaArrowRight />
              </button>
            </form>
          </div>

          {/* <!-- Modal --> */}

          <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow}
            onHide={() => setModalShow(true)}
          >
            <Modal.Header closeButton>
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{ fontSize: 40 }}
              >
                Enter Your Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label></label>
              <Form style={{ fontSize: 30 }}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>

                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose}>Done</Button>
            </Modal.Footer>
          </Modal>

          <div className="d-flex justify-content-center align-items-center my-2">
            <div className="login-or-dash"></div>
            <p className="px-2">or</p>
            <div className="login-or-dash"></div>
          </div>
          <div className="my-5">
            <button
              onClick={() => handleOnClick(googleAuthProvider)}
              className="google-tab-btn mx-2 "
            >
              <div className="d-flex justify-content-center align-items-center">
                <img src="/goggle.png" className="login-icons" />
                <p className="mx-2">Login with Google</p>
              </div>
            </button>
            {/* <button className="facebook-tab-btn mx-2">
              <div className="d-flex justify-content-center align-items-center">
                <img src="/facebook.png" className="login-icons" />
                <p className="mx-2">Login with Facebook</p>
              </div>
            </button> */}
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
