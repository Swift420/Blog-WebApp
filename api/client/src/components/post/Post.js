import React from 'react';
import "./post.css"
import {Link } from "react-router-dom"
function Post({post}) {
  const PF = "https://blog-swift.herokuapp.com/images/"
  
  return (
  <div className='post'>
    {post.photo && (
      <img 
      className='postImg' 
      src={PF + post.photo}
      ></img>
    )}
      <div className='postInfo'>
          <div className='postCats'>
            {post.categories.map((c)=>(
              <span className='postCat'>{c.name}</span> 
            ))}
             
             
          </div>
          <Link className='link' to={`/post/${post._id}`}>
          <span className='postTitle'>{post.title}</span>
          </Link>
          

          <hr/>
          <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className='postDesc'>{post.desc}</p>
  </div>
  );
}

export default Post;
