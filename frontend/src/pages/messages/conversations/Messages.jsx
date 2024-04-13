import React, { useContext, useEffect, useRef, useState } from "react";
import { MessagesContext } from "../../../context/MessagesContext";
import { UserContext } from "../../../context/UserContext";
import Message from "./Message";
import useListenMessages from "../../../hooks/useListenMessages";

const Messages = ({ chatPerson, userId }) => {
  const {
    selectedConversation,
    setSelectedConversation,
    messages,
    setMessages,
  } = useContext(MessagesContext);

  const personId = chatPerson?._id;
  useListenMessages(personId);

  const lastMessageRef = useRef();
  const [loading, setLoading] = useState(false);

  const { host, token } = useContext(UserContext);

  const getMessages = async () => {
    setLoading(true);
    const response = await fetch(
      `${host}/messages/${selectedConversation}/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    setMessages(data);
    setLoading(false);
  };

  useEffect(() => {
    getMessages();
  }, [selectedConversation, setMessages]);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <>
      <div className=" mt-[5rem] ">
        {!loading ? (
          !(messages.length === 0) ? (
            messages.map((message) => {
              return (
                <div key={message._id} ref={lastMessageRef}>
                  <Message
                    chatPerson={chatPerson}
                    message={message}
                    userId={userId}
                  />
                </div>
              );
            })
          ) : (
            <div className="dark:text-white flex justify-center items-center">
              <h1 className="text-[1.2rem] font-[500]">
                Be the first one to start conversation
              </h1>
            </div>
          )
        ) : (
          <div class=" rounded-lg  animate-pulse">
        
          <div class="w-6 h-6 bg-gray-300 rounded-full mb-2"></div>
          <div class="py-2.5 px-3 w-[70%] h-8 bg-gray-300 rounded mb-2"></div>

          <div class="w-6 h-6 bg-gray-300 rounded-full mb-2 ml-auto"></div>
          <div class="py-2.5 px-3 w-[70%] h-8 bg-gray-300 rounded mb-2 ml-auto"></div>
          <div class="w-6 h-6 bg-gray-300 rounded-full mb-2"></div>
          <div class="py-2.5 px-3 w-[70%] h-8 bg-gray-300 rounded mb-2"></div>

          <div class="w-6 h-6 bg-gray-300 rounded-full mb-2 ml-auto"></div>
          <div class="py-2.5 px-3 w-[70%] h-8 bg-gray-300 rounded mb-2 ml-auto"></div>
          
          
          <div class="w-6 h-6 bg-gray-300 rounded-full mb-2"></div>
          <div class="py-2.5 px-3 w-[70%] h-8 bg-gray-300 rounded mb-2"></div>
          <div class="w-6 h-6 bg-gray-300 rounded-full mb-2"></div>
          <div class="py-2.5 px-3 w-[70%] h-8 bg-gray-300 rounded mb-2"></div>
          
        </div>
        )}
      </div>
    </>
  );
};

export default Messages;
