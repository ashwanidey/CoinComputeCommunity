import React from 'react'
import ProfileSection from './ProfileSection'
import SideBar from '../sidebar/SideBar'
import TrendingSection from '../../components/trendingSection/TrendingSection'

const ProfilePage = () => {
  return (
    <div className='min-h-[calc(-108px + 100vh)] dark:bg-gray-800  flex'>
      <div className='flex-grow-0 flex-shrink-0 flex-basis-[260px]  h-full min-w-64 lg:flex hidden'>{' '} </div>
      <div className='max-w-[1000px] w-full flex-grow-2 flex-shrink-1 flex-basis-0  dark:bg-gray-800  md:px-[24px] px-[14px] py-[32px] '>
      <ProfileSection/>
      </div>
      <div className='max-w-[400px] min-w-[350px]  lg:flex hidden '><TrendingSection/></div>
    </div>

  )
}



export default ProfilePage