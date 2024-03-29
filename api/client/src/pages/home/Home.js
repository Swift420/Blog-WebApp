import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css"
import { useLocation } from 'react-router';
import { axiosInstance } from '../../config';


function Home() {
  const [posts, setPosts] = useState([]);
  const search = useLocation();



  useEffect(()=>{
    const fetchPosts = async () => {
     const res = await axiosInstance.get("/posts");
     console.log(res.data)

     setPosts(res.data)

     console.log(posts)
    }
    fetchPosts()
  },[])
  return(
    <>
    <Header />
  <div className='home'>
      <Posts posts={posts}/>
      <Sidebar />
  </div>
  </>
  );
}

export default Home;
