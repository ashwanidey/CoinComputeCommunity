import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'

const FollowButton = (props) => {
  const {isLoggedIn,user,setShowModal,setIsLogin,host,setUser} = useContext(UserContext);
  const [isFollowing,setIsFollowing] = useState(false);
  const [userUpdated,setUserUpdated] = useState(user);

  
  

  const addRemoveFollowing = async ()=>{
    
    try {
      const val = JSON.parse(localStorage.getItem("token"));
      const response = await fetch(
        `${host}/users/${user._id}/${props.userId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${val}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      const response2 = await fetch(`${host}/users/${user._id}`,
      {
        method: "GET",
          headers: {
            Authorization: `Bearer ${val}`,
            
          },
      })

      const data2 = await response2.json();
      localStorage.setItem('user', JSON.stringify(data2));
      // setUser(data2);
      setUserUpdated(data2);
      
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }


  useEffect(() => {
    if(isLoggedIn && userUpdated){
      setIsFollowing(userUpdated.following.includes(props.userId));
    }
  },[userUpdated])
  

  
  
  return (
    <>
    { isFollowing ? <>
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ml-auto" onClick={() => addRemoveFollowing()}>Following</button></> :
    
    (isLoggedIn ? 
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-auto" onClick={() => addRemoveFollowing()}>Follow</button> :
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-auto" onClick={() => {setShowModal(true),setIsLogin(true)}}>Follow</button>)}
    </>
  )
}

export default FollowButton