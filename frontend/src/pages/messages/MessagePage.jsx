import React, { useContext, useEffect } from "react";
import UserSidebar from "./userSidebar/UserSidebar";
import { UserContext } from "../../context/UserContext";
import { MessagesContext } from "../../context/MessagesContext";

import ConversationSection from "./conversations/ConversationSection";

const MessagePage = () => {
  const { isLoggedIn, darkMode, setShowModal, setIsLogin } =
    useContext(UserContext);

  const { selectedConversation, setSelectedConversation } =
    useContext(MessagesContext);
  

  useEffect(() => {
    return () => setSelectedConversation('asdsa');
  }, [setSelectedConversation]);

  return (
    <div className="min-h-[calc(-108px + 100vh)] dark:bg-gray-800  h-full flex">
      <div className="flex-grow-0 flex-shrink-0 flex-basis-[260px]  h-full min-w-64 lg:flex hidden">
        {" "}
      </div>
      {isLoggedIn ? (
        <div className="flex w-full">
          <div
            className={`max-w-[1000px] w-full flex-grow-2 flex-shrink-1 flex-basis-0  dark:bg-gray-800  md:px-[24px] px-[14px] py-[32px] ${
              selectedConversation ? "md:block hidden" : ""
            }`}
          >
            <UserSidebar />
          </div>

          {selectedConversation ? (
            <>
              <div className=" md:min-w-[50%] w-full p-3 ">
               <ConversationSection/>
              </div>
            </>
          ) : (
            <div className=" min-w-[50%] bg-gray-50 dark:bg-[#323546]  lg:flex hidden  justify-center items-center">
              <h2 class="text-4xl font-extrabold dark:text-white text-center">Select a User to start conversation</h2>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center w-full h-full text-center ">
            <h1 class="mb-4 text-4xl font-extrabold  tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              <button
                onClick={() => {
                  setShowModal(true);
                  setIsLogin("login");
                }}
                class="inline-flex items-center justify-center px-3 py-3 mr-1  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Login
                <svg
                  class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>{" "}
              </button>{" "}
              to continue messaging
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default MessagePage;
