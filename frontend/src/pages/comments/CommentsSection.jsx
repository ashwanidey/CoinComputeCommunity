import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import Comments from "./commentsSection/Comments";
import CreateComment from "../../components/CreateComment";
import CommentsPost from "./post/CommentsPost";
import Loading from "../../components/Loading";

const CommentsSection = () => {
  const { postId } = useParams();
  const { host, token } = useContext(UserContext);
  const [post, setPost] = useState([]);
  const [comments,setComments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [isLoading,setIsLoading] = useState(false);

  const getPost = async () => {
    setIsLoading(true);
    const response = await fetch(`${host}/posts/${postId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    setPost(data);
    setIsLoading(false);
  };

  const getComments= async ()=>{
    const response = await fetch(`${host}/comments/post/${postId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    setComments(data);
  }

  useEffect(() => {
    
    getPost();
    getComments();
    
  }, []);

  return (
    <>
    <div className="flex flex-col gap-3 ">
      <h1 class="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
      <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        Post Details
      </span>
      </h1>
      {!isLoading ? 
      <>
      <CommentsPost post={post} user={user}/>
      <CreateComment postId = {post._id}/>

      <h1 class="my-4 text-2xl font-[900] leading-4 tracking-wider text-gray-900 md:text-3xl  dark:text-white">
      <mark class="px-2 text-white bg-gray-500 rounded dark:bg-blue-500">COMMENTS</mark>
      </h1>

      {comments.length !== 0 ? comments.map(comment=>{
        return(
          <Comments comment = {comment}/>
        )
      }) : <div className="font-[500] text-[1.2rem]">No <span className="text-blue-500">Comments</span> on this post</div>}
       </>: <Loading/>}
      
       </div>
    </>
  );
};

export default CommentsSection;
