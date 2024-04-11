import React, { useContext, useEffect } from 'react'
import { MessagesContext } from '../../../context/MessagesContext'
import { UserContext } from '../../../context/UserContext';
import Message from './Message';
import useListenMessages from '../../../hooks/useListenMessages';


const Messages = ({chatPerson,userId}) => {
  const {selectedConversation,setSelectedConversation,messages,setMessages} = useContext(MessagesContext);
  useListenMessages();
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
  },[selectedConversation,setMessages]);

  return (
    <>
    <div className='mb-[4rem]'>
    {!(messages.length === 0) ? messages.map(message=>{
      return (
        <Message chatPerson={chatPerson} message = {message} userId={userId}/>
      )
    }) : <div className='dark:text-white flex justify-center items-center'>
      <h1 className='text-[1.2rem] font-[500]'>Be the first one to start conversation</h1></div>}
    </div>
    </>
  )
}

export default Messages