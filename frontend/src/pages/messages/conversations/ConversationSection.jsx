import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessagesContext } from "../../../context/MessagesContext";
import { useParams } from "react-router-dom";
import defaultpp from "../../../../public/assets/pp/63351f969b613d345489037b.png";
import { UserContext } from "../../../context/UserContext";
import Messages from "./Messages";
import InputMessage from "./InputMessage";
import { useSocketContext } from "../../../context/SocketContext";

const ConversationSection = () => {
  const { setSelectedConversation,selectedConversation  } = useContext(MessagesContext);
  const {onlineUsers} = useSocketContext()
  
  
  const [chatPerson,setChatPerson] = useState(null);
  const { image,host,token,darkMode } = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const imageUrl = `${image}${chatPerson && chatPerson.picturePath}`;
  const isOnline = onlineUsers.includes(chatPerson?._id)

  const getUser = async () => {
    const response = await fetch(`${host}/users/${selectedConversation}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    setChatPerson(data);
  }

  useEffect(()=>{
    getUser();
  },[selectedConversation])

  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-3 md:fixed sticky top-0  bg-[#FFFFFF]  dark:bg-[#0B161F] md:w-[40%] w-full md:py-3 pb-3 " style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {}}>
       
        <button
          onClick={() => {
            navigate("/messages");
            setSelectedConversation(null);
          }}
        >
         <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
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
              {chatPerson && chatPerson.name}
            </h1>
            <div className='text-[#808A9D] md:text-[1rem] text-[0.8rem] '>{isOnline ? <span className='text-green-300'>online</span> : "Offline"}</div>
          </div>
        </div>
      </div>

      

      <div className=" w-full h-full rounded-lg mt-[2rem] md:mt-[6rem]  overflow-y-auto">
        <Messages chatPerson = {chatPerson} userId = {user._id}/>
      </div>
      <div className="fixed bottom-0  w-full -mx-3">
      <InputMessage chatUserId = {selectedConversation} userId = {user._id}/>
      </div>
     
    </>
  );
};

export default ConversationSection;
