import React from 'react'
import TrendingSection from '../../components/trendingSection/TrendingSection'
import CommentsSection from './CommentsSection'

const CommentsPage = () => {
  return (
    <div className='min-h-[calc(-108px + 100vh)]  flex'>
      <div className='flex-grow-0 flex-shrink-0 flex-basis-[260px] bg-white h-full min-w-64 lg:flex hidden'> </div>
      <div className='max-w-[1000px] w-full flex-grow-2 flex-shrink-1 flex-basis-0 md:px-[24px] px-[14px] py-[32px] '>
      <CommentsSection/>
      </div>
      <div className='max-w-[400px] min-w-[350px]  lg:flex hidden '><TrendingSection/></div>
    </div>
  )
}

export default CommentsPage