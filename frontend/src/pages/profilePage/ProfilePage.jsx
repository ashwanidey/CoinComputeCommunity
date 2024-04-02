import React from 'react'
import ProfileSection from './ProfileSection'
import SideBar from '../sidebar/SideBar'

const ProfilePage = () => {
  return (
    <div className='min-h-[calc(-108px + 100vh)]  flex'>
      <div className='flex-grow-0 flex-shrink-0 flex-basis-[260px] dark:bg-gray-800 h-full min-w-64 lg:flex hidden'> </div>
      <div className='max-w-[1000px] w-full flex-grow-2 flex-shrink-1 flex-basis-0 px-[24px] py-[32px] '>
      <ProfileSection/>
      </div>
      <div className='max-w-[350px] min-w-[300px]  lg:flex hidden'>dssadsa</div>
    </div>

  )
}

// /bg-[#cfd6e4]

export default ProfilePage