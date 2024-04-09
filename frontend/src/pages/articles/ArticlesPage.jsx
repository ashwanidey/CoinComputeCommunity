import React from 'react'
import ArticlesSection from './ArticlesSection'

const ArticlesPage = () => {
  return (
    <div className='min-h-[calc(-108px + 100vh)]  flex'>
      <div className='flex-grow-0 flex-shrink-0 flex-basis-[260px] bg-white h-full min-w-64 lg:flex hidden'> </div>
      <div className=' w-full flex-grow-2 flex-shrink-1 flex-basis-0 md:px-[24px] px-[14px] py-[32px] '>
      <ArticlesSection/>
      </div>
      
    </div>
  )
}

export default ArticlesPage