import React, { useContext, useEffect, useState } from 'react'
import FeedsForm from './FeedsForm'
import Posts from '../../components/post/Posts'
import { UserContext } from '../../context/UserContext'
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

const FeedsSection = () => {

  const [posts,setPosts] = useState([]);
  const {host} = useContext(UserContext)
  
  const getPosts = async () => {
    const token = await JSON.parse(localStorage.getItem("token"))
    const response = await fetch(`${host}/posts/`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setPosts(data);
  };

  useEffect(()=>{
    getPosts();
  },[])

  // console.log(posts)

  return (
   <>
    <h1 class="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Feed</span></h1>
    <FeedsForm/>

    <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white mt-3">For<span class="text-blue-600 dark:text-blue-500"> You</span></h1>

    {posts.map(data => {
        return (
      <Posts post = {data}/>
        )
      })}

   </>
  )
}

export default FeedsSection