import React from "react";
import "../profile.css";
import Header from "../../components/common/header";
import profileIMG from "../../Profile/profileIMG.png"
import Footer from "../../components/common/footer.js";
import { Link } from "react-router-dom";

export default function notifications(){
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
                               <li className="marginB "><Link to="/address"  className="big-font">Addresses</Link></li>
                               <li className="marginB active"><Link to="/notifications"  className="big-font">Notifications</Link></li>
                           </ul>
                       </div>
                    </div>
                   <div className="col-7 white white-container">
                   <h1 className="big-font marginB-12rem">Notifications</h1>
                   <h1 className="big-font">Regarding Order</h1>
                   <p className="md-font-thin no-order-text marginB-12rem">Order related SMS cannot be disabled as they are critical to provide service</p>
                   <h1 className="big-font">Recommendations & Reminders</h1>
                   <div className="row">
                   <div className="col-5 marginB"><label className="switch">
                           <input type="checkbox"/>
                           <span className="toggle-slider"/>
                         </label>
                        </div>
                       <div className="col-7 marginB"><p className="md-font-thin no-order-text">Turn on the Recommendations and Reminders to get daily updates and 
                           reminders everytime something that you might like pops up.<br/>Stay updated :)</p></div>
                   </div>
                   <h1 className="big-font">Blogs Mails Subscription</h1>
                   <div className="row">
                       <div className="col-5 marginB"><label className="switch">
                           <input type="checkbox"/>
                           <span className="toggle-slider"/>
                         </label>
                        </div>
                       <div className="col-7 marginB"><p className="md-font-thin no-order-text">Turn on to the blog subscription to get mails regarding latest blogs on food added
                       by your favourite bloggers!
                         <br/>Stay updated :)</p></div>
                   </div>
                   </div>
               </div>
            </div>
            <Footer/>
        </div>
    )
}