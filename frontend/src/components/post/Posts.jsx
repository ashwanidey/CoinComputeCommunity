import React, { useContext, useState } from 'react'
import profilePic from "../../../public/assets/pp/63351f969b613d345489037b.png"
import { UserContext } from '../../context/UserContext'
import FollowButton from '../FollowButton'

const Posts = (props) => {
  const {isLoggedIn,image} = useContext(UserContext)
  // const [post,setPost] = useState([])
  
  const post = props.post
  // console.log(post)
  // console.log(`../../assets/pp/${post.picturePath}`)
  // const imageUrl = `https://raw.githubusercontent.com/ashwanidey/CoinComputeCommunity/main/frontend/public/assets/pp/${post.picturePath}`;
  const imageUrl = `${image}${post.picturePath}`;
  return (

    <>
    {/* {post.length !== 0 ?  */}
    <div className='mt-3 md:p-4 p-2 rounded-lg bg-gray-50 dark:bg-gray-800'>
      <div className='flex gap-2 sm:gap-4 mb-3 items-center'  >
        <div className='md:w-[56px] md:h-[56px] w-[45px] h-[45px]'>
          <div className='w-full h-full rounded-full overflow-hidden'>
          <img src={imageUrl} onError={(e) => {e.target.src = profilePic}} alt="" className="object-cover w-full h-full" />
          </div>
          </div>
        <div className='flex flex-col '>

        <a href={`/profilepage/${post.userId}`} className='text-decoration-none'>
        <div className='font-[600] md:text-[1.1rem] flex items-center'>{post.name}
        <span class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800  rounded-full ml-1 ">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"/>
          <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"/>
          </svg>
          
          </span>
          </div>
        <div className='text-[#808A9D] md:text-[1rem] text-[0.8rem]'>@{post.username}</div>
        </a>
        </div>
        
       
        
        <div className='text-[#808A9D] md:ml-[-10px] ml-[-12px] md:text-[1rem] text-[0.8rem]'>2h </div>
        {post.isBullish === '' ? <span class="bg-white text-black-800 text-[0.9rem] font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Neutral</span> : (post.isBullish === 'true' ? <span class="bg-green-100 text-green-800 text-[0.9rem] font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Bullish</span> : <span class="bg-red-100 text-red-800 text-[0.9rem] font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-green-300">Bearish</span>)}
       
        <FollowButton userId = {post.userId} />
      </div>
      <p className=''>{post.description}</p>
    </div> 
    {/* : <>
    <p className='text-6xl'>No Posts</p></>} */}
    
    </>
  )
}

export default Posts