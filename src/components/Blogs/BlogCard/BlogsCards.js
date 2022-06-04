import React from 'react';

import './BlogsCards.css';

const BlogsCards = (props) => {
  return (
    <div
      className="blog-card"
    >
      {props.children}
    </div>
  );
};

export default BlogsCards;
