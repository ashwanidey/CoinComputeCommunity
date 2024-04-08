import React from 'react'
import CommentsPostHeader from './CommentsPostHeader'
import CommentsPostFooter from './CommentsPostFooter'



const CommentsPost = ({post}) => {
  return (
    <>
    <CommentsPostHeader post={post} />
    <blockquote class="p-4 font-[700]  border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
    
    <div className='mb-3 space-y-2 tracking-wide text-gray-500 dark:text-gray-400   first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-2 first-letter:float-start'>{post.description}</div>
    </blockquote>
    <CommentsPostFooter post={post}/>
    </>
  )
}

export default CommentsPost