import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import CommentModal from "../../pages/comments/commentsSection/CommentModal";

const PostFooter = ({ isLoggedIn, postUserId, deleteUser, post, setPost }) => {
  const { admin, host, token, setShowModal, setIsLogin } =
    useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const [showCommentModel, setShowCommentModal] = useState(false);

  let isLiked = undefined;
  let numberOfLikes = Object.keys(post.likes).length;
  if (post.likeCount) numberOfLikes += parseInt(post.likeCount);

  if (user) isLiked = post.likes[user._id];

  const patchLike = async () => {
    const response = await fetch(`${host}/posts/like/${post._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user._id }),
    });
    const updatedPost = await response.json();
    setPost(updatedPost);
  };

  return (
    <div className="flex mt-3 items-center">
      {isLoggedIn ? (
        isLiked === undefined ? (
          <button
            onClick={() => {
              patchLike();
              if (isLiked) numberOfLikes--;
              else numberOfLikes++;
            }}
            className="flex items-center gap-0.5"
          >
            <svg
              class="w-5 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            <div className="mb-0.1">{numberOfLikes}</div>
          </button>
        ) : (
          <button
            onClick={() => {
              patchLike();
              if (isLiked) numberOfLikes--;
              else numberOfLikes++;
            }}
            className="flex items-center gap-0.5"
          >
            <svg
              class="w-5 h-5 text-red-600 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
            <div className="mb-0.1">{numberOfLikes}</div>
          </button>
        )
      ) : (
        <button
          onClick={() => {
            setShowModal(true);
            setIsLogin("login");
          }}
          className="flex items-center gap-0.5"
        >
          <svg
            class="w-5 h-5 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
            />
          </svg>
          <div className="mb-0.1">{numberOfLikes}</div>
        </button>
      )}
      <button className="ml-8" onClick={() => setShowCommentModal(true)}>
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <CommentModal
        showCommentModal={showCommentModel}
        setShowCommentModal={setShowCommentModal}
        postId={post._id}
      />

      {isLoggedIn && (user._id === admin || user._id === postUserId) && (
        <button
          className="ml-auto mt-auto"
          onClick={() => {
            deleteUser();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-gray-800 "
            fill="currentcolor"
          >
            <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default PostFooter;
