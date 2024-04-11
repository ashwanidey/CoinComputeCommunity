import React, { useContext, useEffect, useRef } from 'react'
import { MessagesContext } from '../../../context/MessagesContext'
import { UserContext } from '../../../context/UserContext';
import Message from './Message';
import useListenMessages from '../../../hooks/useListenMessages';


const Messages = ({chatPerson,userId}) => {
  const {selectedConversation,setSelectedConversation,messages,setMessages} = useContext(MessagesContext);
  useListenMessages();
 
  const lastMessageRef = useRef();

	
  
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

  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  return (
    <>
    <div className='mb-[4rem]'>
    {!(messages.length === 0) ? messages.map(message=>{
      return (
        <div key={message._id} ref={lastMessageRef}>
        <Message chatPerson={chatPerson} message = {message} userId={userId}/>
       </div>
      )
    }) : <div className='dark:text-white flex justify-center items-center'>
      <h1 className='text-[1.2rem] font-[500]'>Be the first one to start conversation</h1></div>}
    </div>
    </>
  )
}

export default Messages