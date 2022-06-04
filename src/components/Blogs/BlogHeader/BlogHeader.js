import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

import './BlogHeader.css';

const BlogHeader = () => {
  return (
    <section>
      <div className="blog-header">
        <div className="blog-searchbar">
          <span>
            <BiSearch />
          </span>
          <input type="text" placeholder="Search Articles" />
        </div>
        <div className="post-blog">
        <Link to="/createblog">
          <p>Post Your Article</p>
          </Link>
         <div className="svg">
         <AiOutlinePlus/>
         </div>            
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
