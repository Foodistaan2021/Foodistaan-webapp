import React from "react";
import "../profile.css";
import Header from "../../components/common/header";
import profileIMG from "../../Profile/profileIMG.png"
import Footer from "../../components/common/footer.js";
import { Link } from "react-router-dom";

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
                               <li className="marginB active"><Link to="/payments" className="big-font">Payments</Link></li>
                               <li className="marginB"><Link to="/address"  className="big-font">Addresses</Link></li>
                               <li className="marginB"><Link to="/notifications"  className="big-font">Notifications</Link></li>
                           </ul>
                       </div>
                    </div>
                   <div className="col-7 white white-container">
                       <h1 className="big-font">Payments</h1>
                   </div>
               </div>
            </div>
            <Footer/>
        </div>
    )
}