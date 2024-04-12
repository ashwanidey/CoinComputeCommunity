import React, { useContext } from "react";
import "flowbite";

import { UserContext } from "../../../context/UserContext";
import SenderMessage from "./SenderMessage";
import ReceiverMessage from "./ReceiverMessage";
const Message = ({chatPerson,message,userId}) => {
  
  let person = chatPerson ? chatPerson : [];
  
  
  return (
    <>
    <div className="mt-3">
    {!(message.senderId === userId) ? <ReceiverMessage person = {person} message={message}/> : <SenderMessage person = {person} message={message}/>
    }
    </div>
    </>
      
  );
};

export default Message;
