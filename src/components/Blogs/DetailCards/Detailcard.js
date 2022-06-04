import React, { useState, useEffect } from "react";
import spicyburger from "../assets/spicyburger.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { database } from "../../../firebase";
import "./detailcard.css";

const Detailcard = () => {
  const [blog, setBlog] = useState([]);
  // const twoblog = blog.slice(0,2);
  useEffect(() => {
    const q = query(collection(database, "Blog"));
    onSnapshot(q, (querySnapshot) => {
      setBlog(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const twoblog = blog.slice(0, 2);
  console.log("Details blog", twoblog)

  // console.log("detcard", blog.substring(5))



  return (
    <div className="cards">
      {twoblog.map((bl, index) => {
        return(
          <div className="details_container">
          <div className="det_card">
            <div className="card_img">
              <img src={spicyburger} alt="" />
            </div>
            <div className="card_details">
              <div className="det_title">
                <h1>{bl.data.title}</h1>
              </div>
              <div className="det_datetime">
                <p>{bl.data.datetime}</p>
              </div>
              <div className="det_description">
                <p>{bl.data.description}</p>
              </div>
              <div className="blog-item__actions">
                <Link to={`/blogdetail/${bl.id}`}>
                  <button>
                    View <AiOutlineArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default Detailcard;
