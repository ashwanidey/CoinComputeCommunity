import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MessagesContext } from "../../../context/MessagesContext";
import { useParams } from "react-router-dom";
import defaultpp from "../../../../public/assets/pp/63351f969b613d345489037b.png";
import { UserContext } from "../../../context/UserContext";
import Messages from "./Messages";

const ConversationSection = () => {
  const { chatUserId } = useParams;
  const { setSelectedConversation } = useContext(MessagesContext);
  const { image } = useContext(UserContext);
  const imageUrl = `${image}${chatUserId}`;

  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-3">
        <button
          onClick={() => {
            navigate("/messages");
            setSelectedConversation(null);
          }}
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
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
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </button>

        {/* HEADER */}
        <div className="flex gap-2 ">
          <div className="md:w-[56px] md:h-[56px] w-[45px] h-[45px]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={imageUrl}
                onError={(e) => {
                  e.target.src = defaultpp;
                }}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 class="md:text-3xl text-xl font-extrabold dark:text-white">
              Full Name
            </h1>
            <div className="text-[#808A9D] md:text-[1rem] text-[0.8rem] ">
              online
            </div>
          </div>
        </div>
      </div>

      

      <div className=" w-full h-full rounded-lg mt-5">
        <Messages/>
      </div>
    </>
  );
};

export default ConversationSection;
