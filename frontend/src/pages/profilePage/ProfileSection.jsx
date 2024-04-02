import React from 'react'
import profilePic from "../../assets/pp_files/3d038610f4814b2aaad21dde55d554e4.jpg"
import Posts from '../../components/post/Posts'
import  'flowbite'

const data = [`
Enjin
@enjin
In today’s featured Beam, the Enjineers made their way to Calvary Pentecostal Church, Ontario, Canada for a children’s digital Easter egg hunt! 🐰🥚


Beam is the ultimate airdrop distribution tool to unleash NFTs and rewards, friendly enough for your kids! 💜


Whether you’re at Church or in the Multiverse, Beam delivers like no other:


🟣 QR codes to enable mass distribution of digital assets online and IRL.


🟣 Scan-to-claim technology where anyone with a smartphone can claim NFTs.


🟣 Built-in conditional claims to target your most loyal players and holders.


And it’s only just begun. 🔥
Join the fun and create your Beams today!` ,
 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium animi, veniam distinctio, deleniti doloremque vel ab aperiam ad non necessitatibus, earum magnam. Odio culpa esse nemo itaque adipisci quibusdam!",
 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium animi, veniam distinctio, deleniti doloremque vel ab aperiam ad non necessitatibus, earum magnam. Odio culpa esse nemo itaque adipisci quibusdam!"]

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
                <div className='font-[600] text-[1.5rem]  whitespace-nowrap'>Full Name</div>
                <div><span >@</span>UserName</div>
                <div className='flex sm:gap-2 sm:flex-row flex-col mt-2'>
                  <div className='font-[600] flex gap-1'><span>0</span>Following</div>
                  <div className='font-[600] flex gap-1'><span>0</span>Followers</div>
                </div>
                </div>
              <div class="grid-item"></div>
            </div>
          </div>


          
        </div>
        <div className='min-h-[10000px] md:mt-[-60px] mt-[-90px]'>
            
            

<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block px-4 py-2 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Posts</button>
        </li>
        {/* <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li> */}
    </ul>
</div>
<div id="default-styled-tab-content">
    <div class="hidden " id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
      {data.map(data => {
        return (
      <Posts post = {data}/>
        )
      })}
        
    </div>
    {/* <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div> */}
</div>

            
          </div>
      </div>
    </div>
  )
}

export default ProfileSection