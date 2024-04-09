import React, { useContext, useState } from 'react'
import { UserContext } from '../../../context/UserContext';

const CreateComment = ({postId}) => {
  const {user,token,host,isLoggedIn,showModal,setShowModal,setIsLogin,darkMode} = useContext(UserContext);
  const [description,setDescription] = useState("");

  const handleSubmit = (async(event) => {
    event.preventDefault();

    const values = {
        "userId" : user._id,
        "postId" : postId,
        "description" : description,
    }



    const response = await fetch(`${host}/comments/`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`,"Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const posts = await response.json();
      
      if(isLoggedIn) window.location.reload();
    
})

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
          <div class="w-full   dark:border-gray-600">
              <div class="  rounded-t-lg ">
                  <label for="comment" class=" text-gray-800 font-[600] text-lg py-2 dark:text-white ">Your Reply</label>
                  <textarea id="comment" rows="4" class=" border border-gray-200  rounded-lg px-4 py-3 w-full  text-sm text-gray-900 bg-gray-200 dark:bg-[#323546] focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required onChange={(e) => setDescription(e.target.value)} style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}/>
              </div>
              <div class="flex items-center justify-between   dark:border-gray-600">
                {isLoggedIn ? <button type='submit' class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-auto">
                      Post comment
                  </button> :
                  <button  onClick={ () =>
                    {setShowModal(true);
                      setIsLogin("login")}
                    
                  } class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-auto">
                  Post comment
              </button>}
                  
                  
              </div>
          </div>
        </form>
  )
}

export default CreateComment