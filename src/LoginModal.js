import React, { useState, useContext } from 'react';
import { auth, googleAuthProvider } from './firebase';
import { database } from './firebase';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { RecaptchaVerifier, signInWithPopup } from 'firebase/auth';
import { signInWithPhoneNumber } from 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from './store/auth-context';
import { FaArrowRight } from 'react-icons/fa';
import './styles/LoginModal.css';
import logo from './images/logo.png';

function LoginModal(props) {
    const authCtx = useContext(AuthContext);
    const [phoneno, setPhoneno] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [OTP, setOTP] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const history = useHistory();


    console.log(localStorage.getItem('user'));

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
        console.log("Number", phoneNumber);

        if (phoneNumber.length >= 12) {
            generateRecaptcha();

            let appVerifier = window.recaptchaVerifier;
            console.log("app",appVerifier);
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
        console.log("OTP",otp);
        setOTP(otp);
        if (OTP.length == 6) {
            let confirmationResult = window.confirmationResult;
            confirmationResult
            .confirm(OTP)
            .then((result) => {
                const user = result.user;
                console.log(user);
                console.log('user verified');
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
            email: email,
            adress:localStorage.getItem('adress'),
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
        <div 
            className='modal fade' 
            id="loginBackdrop" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabindex="-1" 
            aria-labelledby="login" 
            aria-hidden="true"
        >
            <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content' style={{backgroundColor: 'rgba(92, 92, 92, 0.9)'}}>
                    <div className='modal-header login-header'>
                        <button type="button" data-bs-dismiss="modal" className='login-btn-close' aria-label="Close">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <div className='container login-modal-container'>
                            <div 
                                className='absolute-center login-modal-content' 
                            >
                                <img src={logo} alt="logo" className="absolute-center"/>
                                <h1>
                                    Delicious Street food
                                    at your doostep!
                                </h1>
                                <p>
                                    Welcome  back! Please login to your account.
                                </p>
                                
                                <form onSubmit={requestOTP} style={{marginBottom: '15px'}}>

                                    <div id="sign-in-button" ></div>
                                    <div className='mobile_no'>
                                    <select
                                    className="login-input-select login-modal-select"
                                    onChange={(e) => {
                                        setCountryCode(e.target.value);
                                    }}
                                >
                                    <option>+91</option>
                                    <option>+92</option>
                                </select>
                                    <input
                                        type="tel"
                                        className="login-input login-modal-input"
                                        style={{marginRight: '3rem '}}
                                        placeholder="Enter mobile number"
                                        onChange={(e) => {
                                            setPhoneno(e.target.value);
                                        }}
                                    >
                                    
                                    </input>
                                    <button type="submit" className="login-modal-btn">
                                        <FaArrowRight />
                                    </button>

                                    </div>

                                    <div className="sign-in-button"></div>
                                </form>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        verifyOTP(e);
                                    }}
                                >
                                <div className="mobile_otp">
                                <input
                                    type="tel"
                                    className="login-input login-modal-input"
                                    placeholder="Enter OTP"
                                    value={OTP}
                                    onChange={verifyOTP}
                                ></input>
                                <button className="login-modal-btn">
                                    <FaArrowRight />
                                </button>
                                </div>
                                </form>
                                <span className="login-methods">
                                    <p style={{color: '#fff'}}>Or login with</p>
                                    <button
                                        onClick={() => handleOnClick(googleAuthProvider)}
                                        className="mx-2 login-methods-btn"
                                    >
                                        <img src="/google.png" className="login-icons mx-2" />
                                        {/*Login with Google*/}
                                    </button>
                                    <button className='mx-2 login-methods-btn'>
                                        <img src="/mail.png" className="login-icons mx-2" />
                                        {/*Login with Google*/}
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;