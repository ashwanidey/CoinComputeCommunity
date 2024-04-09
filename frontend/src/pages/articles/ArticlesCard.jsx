import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';

const ArticlesCard = ({articles}) => {
  const {darkMode} = useContext(UserContext)
  const dateObject = new Date(articles.createdAt);
  const formattedDate = `${dateObject.getDate()} ${dateObject.toLocaleString('default', { month: 'short' })} ${dateObject.getFullYear()}`;
  return (
    <>
    <div className='flex flex-col relative h-full '>
      <div className=' mb-3 rounded-md'  style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}>
        <img src={articles.thumbnail} alt="" className='w-full h-[185px] object-cover rounded-md  '/>
      </div>
      <div className='text-[#222531] font-[600] mb-2 line-clamp-2 dark:text-white'>{articles.title}</div>
      <div className='line-clamp-2 text-[14px] text-[#58667e] mb-2 dark:text-gray-300'>{articles.description}</div>
      <div className='flex-grow'></div>
      <div className='bottom-0'>
    <div className='flex gap-1 items-center'>
      <div className='w-[30px] h-[30px] overflow-hidden rounded-full' style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}>
      <img src="https://pbs.twimg.com/profile_images/1483864435424784384/gjFDOmhQ_400x400.png" alt="" />
      </div>
      <div className='text-[13px] dark:text-gray-400'>cointelegraph</div>
      <div className='ml-auto text-[13px] dark:text-gray-400'>{formattedDate}</div>
      
      </div>
  </div>
    </div>
    
    </>
  )
}

export default ArticlesCard