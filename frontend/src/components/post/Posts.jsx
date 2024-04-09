import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const Posts = (props) => {
  const { isLoggedIn, image, user, token, host, setFlicker, flicker,darkMode} =
    useContext(UserContext);

  const [post, setPost] = useState(props.post);
 

  const imageUrl = `${image}${post.picturePath}`;

  const deleteUser = async () => {
    const response = await fetch(`${host}/posts/${post._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    const posts = await response.json();

    props.setPosts(posts);

    window.location.reload();
  };

  

  useEffect(() => {}, [post]);

  return (
    <>
      <div className="mt-3 md:p-4 p-2 rounded-lg bg-gray-50 dark:bg-[#323546]" style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}>
        {/* Header */}
        <PostHeader
          imageUrl={imageUrl}
          post={post}
          isFollowing={props.isFollowing}
        />

        <div>
          <a href={`/postdetails/${post._id}`} className="text-decoration-none text-inherit">
            {/* Description */}
            <p className="dark:text-white">{post.description}</p>
          </a>
        </div>

        <PostFooter
          isLoggedIn={isLoggedIn}
          postUserId={post.userId}
          // userId={user._id}
          deleteUser={deleteUser}
          post={post}
          setPost={(data) => setPost(data)}
        />
      </div>
    </>
  );
};

export default Posts;
