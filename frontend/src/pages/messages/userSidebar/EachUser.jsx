import React, { useContext } from 'react'
import defaultpp from "../../../../public/assets/pp/63351f969b613d345489037b.png"
import { UserContext } from '../../../context/UserContext';
import { NavLink } from 'react-router-dom';
import { MessagesContext } from '../../../context/MessagesContext';
import { useSocketContext } from '../../../context/SocketContext';

const EachUser = ({person}) => {
  const {setSelectedConversation} = useContext(MessagesContext)
  const{onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(person._id)
  const {image,darkMode} = useContext(UserContext)
  const imageUrl = `${image}${person.picturePath}`;
  return (
    <NavLink to={`/messages/${person._id}`} className="text-decoration-none color-inherit">
    <div  className='flex gap-2 sm:gap-4 mb-3 items-center' onClick={()=>setSelectedConversation(person._id)}>
        <div className='md:min-w-[56px] md:h-[56px] min-w-[45px] h-[45px] rounded-full' style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}>
          <div className='w-full h-full rounded-full overflow-hidden'>
          <img src={imageUrl} onError={(e) => {e.target.src = defaultpp}} alt="" className="object-cover w-full h-full" />
          </div>
          </div>
        <div className='flex flex-col ' >

        
        <div className='font-[600] md:text-[1.1rem] flex items-center dark:text-white '><span className='line-clamp-1 '>{person.name}</span>
        <span class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800  rounded-full ml-1 ">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className='dark:text-blue-500'>
          <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"/>
          <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"/>
          </svg>
          
          </span>
          </div>
        <div className='text-[#808A9D] md:text-[1rem] text-[0.8rem] '>{isOnline ? <span className='text-green-300'>online</span> : "Offline"}</div>
       
        </div>

        
        
        </div>
        </NavLink>
  )
}

export default EachUser