import React from "react";
import "../profile.css"
import Header from "../../components/common/header";
import profileIMG from "../../Profile/profileIMG.png";
import panda from "../panda.png";
import orderedImg from "../../Profile/orderedIMG.png";
import Footer from "../../components/common/footer.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


export default function profile(){

    const deliverDate="13 september";
    const total=`${200}`;
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
                               <li className="marginB active"><Link to="/orders"  className="big-font">Orders</Link></li>
                               <li className="marginB"><Link to="/track-order" className="big-font">Track my order</Link></li>
                               <li className="marginB"><Link to="/payments" className="big-font">Payments</Link></li>
                               <li className="marginB"><Link to="/address"  className="big-font">Addresses</Link></li>
                               <li className="marginB"><Link to="/notifications"  className="big-font">Notifications</Link></li>
                           </ul>
                       </div>
                    </div>
                   <div className="col-7 white white-container">
                   <h1 className="big-font marginB left" >Orders</h1>
                   <div className="panda-img" style={{background:`url(${panda})center center no-repeat`}}>
                        <div className="row">
                            <div className="col-sm-6">
                        <div className="order-card">
                            <div className="row">
                                <div className="col-5"><img className="orderedImg" src={orderedImg}></img></div>
                                <div className="col-7"><h1 className="restro-name"><span>Dunkin Donuts</span><br/><span className="restro-address">Subash Nagar</span></h1></div>
                                <div className="col-7"></div>
                                <div className="col-5"><h1 className="restro-name"><span className="success">Delivered</span> <br/><span>{deliverDate}</span></h1></div>
                            </div>
                            <div className="orderNumber marginB-4rem">
                                <h1 >Order Number <br/> <span className="orderNo">2214546577844</span></h1>
                            </div>
                            <div className="items marginB-4rem">
                                <h1>Items<br />
                                <span className="md-font" style={{color:"black"}}> 2{/*qty*/} x {/*item*/}Chocolate Rasberry Donut</span></h1>
                            </div>
                            <div className="total marginB-4rem">
                                <h1>Total Amount <br/>
                                <span  className="md-font" style={{color:"black"}}>Rs.{total}</span></h1>
                            </div>
                            <div className="view-details ">
                            <Button variant="danger" className="view-details">View Details</Button> 
                            </div>
                        </div>
                     </div>
                  
                            <div className="col-sm-6">
                        <div className="order-card">
                            <div className="row">
                                <div className="col-5"><img className="orderedImg" src={orderedImg}></img></div>
                                <div className="col-7"><h1 className="restro-name"><span>Dunkin Donuts</span><br/><span className="restro-address">Subash Nagar</span></h1></div>
                                <div className="col-7"></div>
                                <div className="col-5"><h1 className="restro-name"><span className="success">Delivered</span> <br/><span>{deliverDate}</span></h1></div>
                            </div>
                            <div className="orderNumber marginB-4rem">
                                <h1 >Order Number <br/> <span className="orderNo">2214546577844</span></h1>
                            </div>
                            <div className="items marginB-4rem">
                                <h1>Items<br />
                                <span className="md-font" style={{color:"black"}}> 2{/*qty*/} x {/*item*/}Chocolate Rasberry Donut</span></h1>
                            </div>
                            <div className="total marginB-4rem">
                                <h1>Total Amount <br/>
                                <span  className="md-font" style={{color:"black"}}>Rs.{total}</span></h1>
                            </div>
                            <div className="view-details">
                            <Button variant="danger" className="view-details">View Details</Button> 
                            </div>
                        </div>
                            </div>
                            
                            <div className="col-sm-6">
                        <div className="order-card">
                            <div className="row">
                                <div className="col-5"><img className="orderedImg" src={orderedImg}></img></div>
                                <div className="col-7"><h1 className="restro-name"><span>Dunkin Donuts</span><br/><span className="restro-address">Subash Nagar</span></h1></div>
                                <div className="col-7"></div>
                                <div className="col-5"><h1 className="restro-name"><span className="success">Delivered</span> <br/><span>{deliverDate}</span></h1></div>
                            </div>
                            <div className="orderNumber marginB-4rem">
                                <h1 >Order Number <br/> <span className="orderNo">2214546577844</span></h1>
                            </div>
                            <div className="items marginB-4rem">
                                <h1>Items<br />
                                <span className="md-font" style={{color:"black"}}> 2{/*qty*/} x {/*item*/}Chocolate Rasberry Donut</span></h1>
                            </div>
                            <div className="total marginB-4rem">
                                <h1>Total Amount <br/>
                                <span  className="md-font" style={{color:"black"}}>Rs.{total}</span></h1>
                            </div>
                            <div className="view-details">
                            <Button variant="danger" className="view-details">View Details</Button> 
                            </div>
                        </div>
                            </div>
                            
                            <div className="col-sm-6">
                        <div className="order-card">
                            <div className="row">
                                <div className="col-5"><img className="orderedImg" src={orderedImg}></img></div>
                                <div className="col-7"><h1 className="restro-name"><span>Dunkin Donuts</span><br/><span className="restro-address">Subash Nagar</span></h1></div>
                                <div className="col-7"></div>
                                <div className="col-5"><h1 className="restro-name"><span className="success">Delivered</span> <br/><span>{deliverDate}</span></h1></div>
                            </div>
                            <div className="orderNumber marginB-4rem">
                                <h1 >Order Number <br/> <span className="orderNo">2214546577844</span></h1>
                            </div>
                            <div className="items marginB-4rem">
                                <h1>Items<br />
                                <span className="md-font" style={{color:"black"}}> 2{/*qty*/} x {/*item*/}Chocolate Rasberry Donut</span></h1>
                            </div>
                            <div className="total marginB-4rem">
                                <h1>Total Amount <br/>
                                <span  className="md-font" style={{color:"black"}}>Rs.{total}</span></h1>
                            </div>
                            <div className="view-details">
                            <Button variant="danger" className="view-details">View Details</Button> 
                            </div>
                        </div>
                            </div>
                        </div>
                   </div>
                 </div>
               </div>
            </div>
            <Footer/>
        </div>
    )
}