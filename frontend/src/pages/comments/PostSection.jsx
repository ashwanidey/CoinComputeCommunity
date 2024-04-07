import React from "react";
import Post from "../../../../backend/models/Posts";
import CommentsPost from "./post/CommentsPost";

const PostSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <h1 class="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Post Details
        </span>
      </h1>

      <CommentsPost post={post} user={user} />
    </>
  );
};

export default PostSection;
