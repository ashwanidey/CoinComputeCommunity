import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const PostFooter = ({ isLoggedIn, postUserId, userId, deleteUser, post,setPost}) => {
  const { admin,host,token,setShowModal,setIsLogin,user} = useContext(UserContext);
  
  const isLiked = post.likes[user._id];

  const patchLike = async () => {
    const response = await fetch(`${host}/posts/like/${post._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
    });
    const updatedPost = await response.json();
    setPost(updatedPost)
    
  };

  return (
    <div className="flex mt-3 items-center">
      
      {isLoggedIn ? (isLiked === undefined ? (
        <button onClick ={()=>patchLike()} className="flex items-center gap-0.5">
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
          <p className="mb-0.1">{Object.keys(post.likes).length}</p>
        </button>
      ) : (
        <button onClick ={()=>patchLike()} className="flex items-center gap-0.5">
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
          <p className="mb-0.1">{Object.keys(post.likes).length}</p>
        </button>
      )) : <button onClick ={()=>{setShowModal(true);setIsLogin('login')}} className="flex items-center gap-0.5">
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
      <p className="mb-0.1">{Object.keys(post.likes).length}</p>
    </button>}
    

      {isLoggedIn && (userId === admin || userId === postUserId) && (
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
