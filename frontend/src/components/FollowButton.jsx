import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const FollowButton = (props) => {
  const { isLoggedIn, user, setShowModal, setIsLogin, host, setUser } =
    useContext(UserContext);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addRemoveFollowing = async () => {
    setIsLoading(true);
    try {
      const val = JSON.parse(localStorage.getItem("token"));
      const response = await fetch(
        `${host}/users/${user._id}/${props.userId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${val}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      const response2 = await fetch(`${host}/users/${user._id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${val}`,
        },
      });

      const data2 = await response2.json();
      localStorage.setItem("user", JSON.stringify(data2));
      // setUser(data2);
      setUser(data2);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      setIsFollowing(user.following.includes(props.userId));
    }
  }, [user]);

  return (
    <>
      {!isLoggedIn || (user && user._id) !== props.userId ? (
        isLoading ? (
          <>
            <button
              disabled
              type="button"
              class="py-2 px-2  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center  ml-auto"
            >
              <svg
                aria-hidden="true"
                class="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </button>
          </>
        ) : isFollowing ? (
          <>
            <button
              type="button"
              class="border focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-[12px] px-1 py-1 md:py-2 md:px-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ml-auto"
              onClick={() => addRemoveFollowing()}
            >
              Following
            </button>
          </>
        ) : isLoggedIn ? (
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-auto"
            onClick={() => addRemoveFollowing()}
          >
            Follow
          </button>
        ) : (
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-auto"
            onClick={() => {
              setShowModal(true), setIsLogin(true);
            }}
          >
            Follow
          </button>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default FollowButton;
