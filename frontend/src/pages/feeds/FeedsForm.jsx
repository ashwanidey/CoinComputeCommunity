import React, { useContext, useState } from 'react'
import 'flowbite'
import { UserContext } from '../../context/UserContext'

const FeedsForm = () => {
    const {user,token,host} = useContext(UserContext);
    const [description,setDescription] = useState("");
    const [isBullish,setIsBullish] = useState('');

    const handleSubmit = (async(event) => {
        event.preventDefault();
   
        const values = {
            "userId" : user._id,
            "description" : description,
            "isBullish" : isBullish
        }

  

        const response = await fetch(`${host}/posts/`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}`,"Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          const posts = await response.json();
          
          if(isLoggedIn)window.location.reload();
        
    })

  const {showModal, setShowModal,isLoggedIn,isLogin,setIsLogin} = useContext(UserContext)
  return (
   <>
   <form onSubmit={(e) => handleSubmit(e)}>
   <div class="w-full mb-4 border border-gray-200 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" class="sr-only"></label>
           <textarea id="comment" rows="2" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="How do you feel about market today? Share your thoughts..." onChange={(e) => setDescription(e.target.value)}  required ></textarea>
       </div>
       <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">

<ul class="grid  gap-2 grid-cols-2 p-0 m-0">
    <li>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" onChange={() => setIsBullish('true')}  />
        <label for="hosting-small" class=" inline-flex items-center justify-between w-full p-2 text-gray-500  border border-gray-200 rounded-2xl cursor-pointer group  peer-checked:bg-[#16C784] peer-checked:text-white hover:text-gray-600 ">                      
            <div class=" block">
                
                <div class="w-full md:text-[0.9rem] text-[0.7rem] ">Bullish</div>
            </div>
            
        </label>
    </li>
    <li >
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" onChange={() => setIsBullish('false')} />
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-2 text-gray-500  border border-gray-200 rounded-2xl cursor-pointer group  peer-checked:bg-[#EA3943] peer-checked:text-white hover:text-gray-600">
            <div class="block">
                
                <div class="w-full md:text-[0.9rem] text-[0.7rem]">Bearish</div>
            </div>
            
        </label>
    </li>
</ul>

       {isLoggedIn ? 
       <button type="submit"  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-auto">
               POST
           </button> :
           <button class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-auto" onClick={() => {
            setShowModal(true)
            setIsLogin(true)}}>
             POST
           </button> 
         }
           
           
       </div>
   </div>
</form>
<p class="ms-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
   </>
  )
}

export default FeedsForm