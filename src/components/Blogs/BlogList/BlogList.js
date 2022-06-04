import React,{useState,useEffect} from 'react';
import BlogItem from '../BlogItem/BlogItem';
import './BlogList.css';
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import { database } from '../../../firebase'
import footer from '../../common/footer';
const BlogList = () => {


  const [blogs,setBlogs]=useState([]);


  useEffect(() => {
    const q = query(collection(database, 'Blog'))
    onSnapshot(q, (querySnapshot) => {
      setBlogs(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])


  
console.log("Blogs",blogs);


  return (
    <ul>
      <h1 className="blog-heading">Recommended for You</h1>
      {blogs.map((b,index) => (



        <BlogItem 
          key={b.id}
          ab={b.id}
          title={b.data.title}
          datetime={b.data.datetime}
          description={b.data.description}
          number={index}           
        />


      ))}
    </ul>
  );
};

export default BlogList;
