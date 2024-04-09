import React, { useContext, useEffect, useState } from "react";
import FeedsForm from "./FeedsForm";
import Posts from "../../components/post/Posts";
import { UserContext } from "../../context/UserContext";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import noFollowing from "../../../public/assets/no-post.png"
import "./feeds.css";

const FeedsSection = ({
  getFollowingPosts,
  getPosts,
  followingPosts,
  posts,
  setPosts,
  setFollowingPosts,
  isFollowing,
  setIsFollowing,
}) => {
  const { isLoggedIn, setShowModal, setIsLogin } = useContext(UserContext);
 
  useEffect(() => {}, [posts, followingPosts, isFollowing, posts.likes]);
  

  return (
    <>
      <h1 class="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Feed
        </span>
      </h1>
      <FeedsForm />

      <div className="flex justify-evenly">
        <button
          className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white mt-3"
          onClick={() => {
            getPosts();
            setIsFollowing(false);
          }}
        >
          For <span class="text-blue-600 dark:text-blue-500">You</span>
        </button>
        {isLoggedIn ? (
          <button
            className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white mt-3"
            onClick={() => {
              getFollowingPosts();
              setIsFollowing(true);
            }}
          >
            Following
          </button>
        ) : (
          <button
            className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white mt-3"
            onClick={() => {
              setShowModal(true);
              setIsLogin(true);
            }}
          >
            Following
          </button>
        )}
      </div>

      {isFollowing && (followingPosts.length !== 0 ?
        followingPosts.map((data) => {
          return (
            
            <Posts
              post={data}
              setPosts={(d) => setFollowingPosts(d)}
              isFollowing={isFollowing}
            />
            
          );
        }) :
        <div className="flex flex-col items-center w-full">
          <div className="w-[40%] ">
          <img src={noFollowing} alt="" className="overflow-hidden"/>
          </div>
          <div class="text-4xl font-bold text-gray-800 dark:text-white ">Nothing here!</div>
          <div class="md:text-lg text-md font-[600] text-blue-800 dark:text-blue-100 mt-2 text-center">Go explore, follow some people and write some posts instead!</div>
        </div>)}
        
      {!isFollowing && 
        posts.map((data) => {
          
          return (
            
            <Posts
              post={data}
              setPosts={(d) => setPosts(d)}
              isFollowing={isFollowing}
            />
            
          );
        })}
    </>
  );
};

export default FeedsSection;