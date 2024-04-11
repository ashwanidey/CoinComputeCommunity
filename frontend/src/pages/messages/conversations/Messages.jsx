import React, { useContext, useEffect } from 'react'
import { MessagesContext } from '../../../context/MessagesContext'
import { UserContext } from '../../../context/UserContext';
import Message from './Message';


const Messages = ({chatPerson,userId}) => {
  const {selectedConversation,setSelectedConversation,messages,setMessages} = useContext(MessagesContext);
  console.log(messages)
  // console.log(selectedConversation)
  const {host,token} = useContext(UserContext);

  const getMessages = async ()=> {
    const response = await fetch(`${host}/messages/${selectedConversation}/${userId}`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json();
    setMessages(data)
  }

  useEffect(()=>{
    getMessages()
  },[]);

  return (
    <>
    <div className='mb-[4rem]'>
    {messages.map(message=>{
      return (
        <Message chatPerson={chatPerson} message = {message}/>
      )
    })}
    </div>
    </>
  )
}

export default Messages