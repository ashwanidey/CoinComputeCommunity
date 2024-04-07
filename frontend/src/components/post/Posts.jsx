import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const Posts = (props) => {
  const { isLoggedIn, image, user, token, host, setFlicker, flicker } =
    useContext(UserContext);

  const [post, setPost] = useState(props.post);
  // console.log(post)

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
      <div className="mt-3 md:p-4 p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
        {/* Header */}
        <PostHeader
          imageUrl={imageUrl}
          post={post}
          isFollowing={props.isFollowing}
        />

        <div>
          <a href={`/postdetails/${post._id}`}>
            {/* Description */}
            <p className="">{post.description}</p>
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