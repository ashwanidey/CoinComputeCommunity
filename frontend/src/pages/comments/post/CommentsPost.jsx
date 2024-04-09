import React, { useContext } from 'react'
import CommentsPostHeader from './CommentsPostHeader'
import CommentsPostFooter from './CommentsPostFooter'
import { UserContext } from '../../../context/UserContext'



const CommentsPost = ({post}) => {
  const {darkMode} = useContext(UserContext)
  return (
    <>
    <CommentsPostHeader post={post} />
    <blockquote class="p-4 font-[700]  border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-[#323546] rounded-md" style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}>
    
    <div className='mb-3 space-y-2 tracking-wide text-gray-500 dark:text-white ] first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-2 first-letter:float-start'>{post.description}</div>
    </blockquote>
    <CommentsPostFooter post={post}/>
    </>
  )
}

export default CommentsPost