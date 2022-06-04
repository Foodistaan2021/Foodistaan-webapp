import React from "react";
import "../profile.css";
import Header from "../../components/common/header";
import profileIMG from "../../Profile/profileIMG.png"
import Footer from "../../components/common/footer.js";
import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";

export default function profile(){
    return(
        <div className="bg-color">
            <Header/>
            <div className="container marginB">
               <div className="row outer-container">
                   <div className="col-5 light-yellow profile-attributes">
                       <div className="image-card">
                           <img className="img-size" src={profileIMG}></img>
                           <h2 className="big-font ">Anushka Singh</h2>
                       </div>
                       <hr />
                       <div className="attributes-container">
                           <ul className="big-font">
                           <li className="marginB"><Link to="/profile" className=" big-font">Profile</Link></li>
                               <li className="marginB"><Link to="/orders"  className="big-font">Orders</Link></li>
                               <li className="marginB"><Link to="/track-order" className="big-font">Track my order</Link></li>
                               <li className="marginB"><Link to="/payments" className="big-font">Payments</Link></li>
                               <li className="marginB active"><Link to="/address"  className="big-font">Addresses</Link></li>
                               <li className="marginB"><Link to="/notifications"  className="big-font">Notifications</Link></li>
                           </ul>
                       </div>
                    </div>
                   <div className="col-7 white white-container">
                        <h1 className="big-font marginB-12rem">Addresses</h1>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-4">
                                <h2 className="big-font"><i class="bi bi-house-fill"></i>Home</h2>
                            </div>
                            <div className="col-7 marginB">
                                <p className="big-font-thin">S1/XY, blah blah nagar, <br/> Dwarka Sector 21<br /> near gurudwara, New Delhi-22</p>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-4">
                                <h2 className="big-font">Office</h2>
                            </div>
                            <div className="col-7 marginB-12rem">
                                <p className="big-font-thin">S1/XY, blah blah nagar, <br/> Noida Sector 21<br />  New Delhi-22</p>
                            </div>
                            <div className="button-container"><button className="Add-Addresses big-font">Add Addresses</button></div>
                        </div>
                   </div>
               </div>
            </div>
            <Footer/>
        </div>
    )
}