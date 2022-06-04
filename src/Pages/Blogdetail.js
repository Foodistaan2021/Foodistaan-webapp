import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogFilter from "../components/Blogs/BlogFilter/BlogFilter";
import BlogHeader from "../components/Blogs/BlogHeader/BlogHeader";
import Layout from "../components/common/layout/Layout";
import Header from "../components/common/header";
import footer from "../components/common/footer";
import { database } from "../firebase";
import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
  snapshotEqual,
  getDoc,
} from "firebase/firestore";
import BlogInfo from "../components/Blogs/BlogInfo/BlogInfo";
import BlogsCards from "../components/Blogs/BlogCard/BlogsCards";
import BlogItem from "../components/Blogs/BlogItem/BlogItem";
import Detailcard from "../components/Blogs/DetailCards/Detailcard";

import spicyburger from "../components/Blogs/assets/spicyburger.png";

const Blogdetail = () => {
  const [blog, setBlog] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    id && getSingleBlog();
    console.log("id", id);
  }, [id]);

  const getSingleBlog = async () => {
    const blogref = doc(database, "Blog", id);
    const snapshot = await getDoc(blogref);

    if (snapshot.exists()) {
      setBlog({ ...snapshot.data() });
    }
  };

  console.log("blog", blog);

  return (
    <div>
      <Header />

      <BlogHeader />
      <BlogFilter />
      <div className="details_Container">
        <div className="detail_image">
          <img src={spicyburger} alt="" />
        </div>
        <BlogInfo blog={blog} />

       
      </div>
      <div className="more_head">
      <h1>More for You to Read</h1>
      </div>
      <Detailcard blog={blog} />
    </div>
  );
};

export default Blogdetail;
