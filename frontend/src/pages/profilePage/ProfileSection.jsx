import React from 'react'
import profilePic from "../../assets/pp_files/3d038610f4814b2aaad21dde55d554e4.jpg"

const ProfileSection = () => {
  return (
    <div>
      <h2 className='font-[700] text-[2rem] mb-[24px] p-[8px]'>Profile</h2>
      <div>
        <div className='bg-[#cfd6e4] w-full pt-[33.33333%] relative rounded-[8px]'>
          <div className='absolute inset-[45%]'></div>
        </div>

        <div className='pl-[24px]'>


        <div class="grid grid-cols-[min-content,min-content] gap-x-8">
            <div class="grid grid-rows-2 sm:gap-y-6">
            <div className="grid-item h-[100px] relative top-[-24px]">
              <div className='w-[140px] h-[140px] 
              
              rounded-full bg-white overflow-hidden p-[4px]'>
                <span className='w-[110px] h-[110px]'>
                <div className='rounded-full w-full h-full overflow-hidden'>
                  <img src={profilePic} alt="" className="object-cover w-full h-full" />
                </div>
                </span>
              </div>
            </div>



              <div class="grid-item pt-2">
                <span className='whitespace-nowrap text-[#58667E] text-[1rem] '>Joined 2024 March</span>
              </div>
            </div>
            <div class="grid grid-rows-2 gap-y-4">
              <div class="grid-item pt-2">
                <p className='font-[600] text-[1.5rem]  whitespace-nowrap'>Full Name</p>
                <p><span >@</span>UserName</p>
                <div className='flex sm:gap-2 sm:flex-row flex-col mt-2'>
                  <p className='font-[600] flex gap-1'><span>0</span>Following</p>
                  <p className='font-[600] flex gap-1'><span>0</span>Followers</p>
                </div>
                </div>
              <div class="grid-item"></div>
            </div>
          </div>


          <div className='min-h-[10000px]'>
            <p>Posts</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection