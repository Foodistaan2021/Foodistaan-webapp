import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Button } from "react-bootstrap";
import downloadbtn from "../../images/play_app.png";
import logo from "../../images/logo2.png";
import "../css/landingPage.css"
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function footer() {
  return (
    <div className="footer_container">
    <div className="logo_heading">
      <div className="logo">
        <img src={logo} alt="" />
             
      </div>
      <div className="footer_heading">
        <p>Want to be a part of revolution? <span>Join us</span></p>
      </div>
      </div>
      <div className="footer_content">
        <div className="logo_download_button">
         
            <img src={downloadbtn} alt="" />
            </div>
      
          <div className="footer_menu">
            <h5>Company</h5>
            <p>About us</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>Report</p>
            <p>FeedBack</p>
          </div>
          <div className="footer_for-you">
            <h5>For you</h5>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Security</p>
            <p>Become Vendor</p>
          </div>
          <div className="footer_help">
            <h5>Help</h5>
            <p>FAQ s</p>
            <p>Contact Us</p>
            <div className="social_media">
            <FaFacebook size={40} style={{
              marginRight:'2rem'
            }} />
            <AiFillTwitterCircle size={40} style={{
              marginRight:'2rem'
            }}/>
            <FaInstagram size={40}/>
            </div>
           
          </div>
      </div>
      <div className="footer_text">
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.</p>
        <p>Foodistaan Technology LLP. All rights reserved.</p>
      </div>
    </div>
  );
}
