import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmark, handleMarkAsrRead}) => {
    const [blogs, setBlogs] =useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 ml-4">
          <h1 className="text-4xl">Blogs:  {blogs.length}</h1> 
          {
            blogs.map(blog => <Blog   
                 key={blog.id}
                blog = {blog}
                handleAddBookmark={handleAddBookmark}
                handleMarkAsrRead = {handleMarkAsrRead}
            >
             
            </Blog>)
          } 
        </div>
    );
};
Blogs.propTypes ={
  handleAddBookmark : PropTypes.func,
  handleMarkAsrRead : PropTypes.func
}
export default Blogs;