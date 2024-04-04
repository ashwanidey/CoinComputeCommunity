import React, { useContext, useEffect, useState } from 'react'
// import profilePic from "../../assets/pp_files/3d038610f4814b2aaad21dde55d554e4.jpg"
import defaultpp from "../../../public/assets/pp/63351f969b613d345489037b.png"
import Posts from '../../components/post/Posts'
import  'flowbite'
import { useParams } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

const data1 = [`
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
  const [user,setUser] = useState([0]);
  const [posts,setPosts] = useState([0]);
  const {token,setToken,host,image} = useContext(UserContext);
  const [loaded,setLoaded] = useState(false);
  const [imageUrl,setImageUrl] = useState("");
  
  
  
  const { userId } = useParams();
 


  const getUser = async () => {
    try {
      const val = JSON.parse(localStorage.getItem("token"));
      const response = await fetch(`${host}/users/${userId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${val}` },
      });
      const data = await response.json();
      setUser(data);
      setImageUrl(`${image}${data.picturePath}`);

      const response1 = await fetch(`${host}/posts/${userId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${val}` },
      });
      const data1 = await response1.json();
      setPosts(data1);
      setLoaded(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    
  };

  const getUserPosts = async () => {
    // setLoaded(false)
    const val = await JSON.parse(localStorage.getItem("token"))
    const response = await fetch(`${host}/posts/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${val}` },
    });
    const data = await response.json();
    setPosts(data);
    
    s
  }

  // if(!posts) return null;

  useEffect(() => {
    getUser();
    // getUserPosts();
  }, []); 

  // console.log(posts)
  return (
    <>
    {(loaded)  ? 
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
                <img src={user.picturePath.length === 0 ? defaultpp : imageUrl} alt="" className="object-cover w-full h-full" />
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
              <div className='font-[600] text-[1.5rem]  whitespace-nowrap'>{user.name}</div>
              <div><span >@</span>{user.username}</div>
              <div className='flex sm:gap-2 sm:flex-row flex-col mt-2'>
                <div className='font-[600] flex gap-1'><span>{user.following.length}</span>Following</div>
                <div className='font-[600] flex gap-1'><span>{user.followers.length}</span>Followers</div>
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
  {/* <div class="hidden " id="styled-profile" role="tabpanel" aria-labelledby="profile-tab"> */}
    {posts.map(data => {
      return (
    <Posts post={data}/>
      )
    })}
      
  {/* </div> */}
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
  :
  <>
  <div className='flex justify-center '>
  <h1 class="flex items-center md:text-5xl  text-3xl font-extrabold dark:text-white whitespace-nowrap">
  <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2 ">404 </span>User Not Found
  </h1></div></>}
    
    </>
  )
}

export default ProfileSection