import React from "react";
import BlogsCards from "../BlogCard/BlogsCards";
import blogImg from "../assets/blog.jpg";
import pizza from "../assets/Pizza.png";
import dish from '../assets/dish.png';
import { AiOutlineArrowRight } from "react-icons/ai";
import "./BlogItem.css";
import { Link } from "react-router-dom";
const BlogItem = ({ title, datetime, ab,description,number, }) => {

  
  return (
    <div className={number % 2 == 0 ? "blogs-out-even" : "blog-out-odd"} >
    <BlogsCards className={number % 2 == 0  ? "blog-item" : "blog-item"}>
      <div className={number % 2 == 0 ? "blog_container" : "blog_container-odd"}>
        <div className={number % 2 == 0 ? "blog-item__img-container" : "blog-item__img-container-odd"}>
          <img src={blogImg} alt="blog" />
        </div>
        <div className={number % 2 == 0 ? "blog-item__blog-container" : "blog-item__blog-container-odd"}>
          <div className= "blog-item__title" >
            <h1>{title}</h1>
            <p>{datetime}</p>
          </div>
          <div className= "blog-item__blog" >
            <p>{description}</p>
          </div>
          <div className="blog-item__actions" >
          <Link to={`/blogdetail/${ab}`}>
            <button>
              View <AiOutlineArrowRight />
            </button>
            </Link>
          </div>
        </div>
      </div>
     
    </BlogsCards>

    <div className={number % 2 == 0 ? "image" : "image-odd"}>
    <img src={dish} alt=""  />
  </div>
    </div>
  );
};

export default BlogItem;
