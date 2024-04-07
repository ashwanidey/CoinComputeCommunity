import React from 'react'
import CommentsPostHeader from './CommentsPostHeader'
import CommentsPostFooter from './CommentsPostFooter'



const CommentsPost = ({post}) => {
  return (
    <>
    <CommentsPostHeader post={post} />
    <blockquote class="md:text-lg italic font-semibold text-gray-900 dark:text-white md:ml-[60px] md:pl-3  md:mt-[-20px]"> 
    <div className='mb-3 space-y-6 md:space-y-0 text-gray-500 dark:text-gray-400  first-line:tracking-widest first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start'>{post.description}</div>
    </blockquote>
    {/* <CommentsPostFooter/> */}
    </>
  )
}

export default CommentsPost