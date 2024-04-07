import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostSection from "./PostSection";
import { UserContext } from "../../context/UserContext";
import Comments from "./commentsSection/Comments";
import CreateComment from "../../components/CreateComment";

const CommentsSection = () => {
  const { postId } = useParams();
  const { host, token } = useContext(UserContext);
  const [post, setPost] = useState([]);
  const [comments,setComments] = useState([]);

  const getPost = async () => {
    const response = await fetch(`${host}/posts/${postId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    setPost(data);
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
      <PostSection post={post} />
      <CreateComment postId = {post._id}/>
      <h1 class="my-4 text-2xl font-[900] leading-4 tracking-wider text-gray-900 md:text-3xl  dark:text-white">
      <mark class="px-2 text-white bg-gray-500 rounded dark:bg-blue-500">COMMENTS</mark>
      </h1>

      {comments.length !== 0 ? comments.map(comment=>{
        return(
          <Comments comment = {comment}/>
        )
      }) : <div className="font-[500] text-[1.2rem]">No <span className="text-blue-500">Comments</span> on this post</div>}
      </div>
     
    </>
  );
};

export default CommentsSection;
