import React,{useEffect,useState} from 'react'
import burger from "../assets/burger.png"
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { database } from '../../../firebase'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import './bloginfo.css'

import "../Details/details.css"

const BlogInfo = ({blog}) => {

  

  console.log("blogs",blog);
 
 

  
  


  

  return (

    <div className="blog_info">
    <div className="blog_cont">
    <div className="left_img">
      <img src={image1} alt="" />
    </div>
      <div className="blog_heading">
        <h1>{blog.title}</h1>
        <p>{blog.datetime}</p>
      </div>
      <div className="right_img">
      <img src={image2} alt="" />
    </div>
      </div>
      <div className="blog_description">
        <div>{blog.description}</div>
      </div>
      <div className="blog_images">
        <div className="burger">
          <img src={burger} alt="" />
        </div>
        <div className="burger">
          <img src={burger} alt="" />
        </div>
      </div>
      <div className="blog_description">
      <div>{blog.description}</div>
    </div>
  <div className="share_buttons ">
    <p>Share to</p>
    <span><AiFillLinkedin/></span>
    <span><AiFillFacebook/></span>
    <span><AiFillTwitterSquare/></span>
  </div>
    </div>
 
  )
}

export default BlogInfo