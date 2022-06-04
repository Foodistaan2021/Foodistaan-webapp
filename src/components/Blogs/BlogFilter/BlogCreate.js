import React, { useState } from "react";
import "./Blogcreate.css";
import Header from "../../common/header";
import { database } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

const BlogCreate = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    datetime: new Date().toLocaleString(),
  });

  const { title, description, number } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, "Blog"), {
        title: title,
        description: description,
        // completed: false,
        datetime: new Date().toLocaleString(),
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Header />
      <div className="blogcreate_container">
        <h1>Write your Blog here</h1>
        <div className="blog_form">
          <form action="" onSubmit={handleSubmit}>
            <div className="blog_title">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="blog_title">
              <label htmlFor="">Description</label>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                value={description}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <div className="sub_btn">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogCreate;
