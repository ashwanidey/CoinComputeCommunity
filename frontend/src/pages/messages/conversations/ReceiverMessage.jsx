import React, { useContext } from 'react'
import defaultpp from "../../../../public/assets/pp/63351f969b613d345489037b.png";
import { UserContext } from '../../../context/UserContext';
import { extractTime } from '../../../utils/extractTime';
const ReceiverMessage = ({person,message}) => {
  const {image} = useContext(UserContext);
  const imageUrl = `${image}${person.picturePath}`
  const {darkMode} = useContext(UserContext)
  
  return (
    <div class="flex items-start gap-2.5">
        <div className="md:min-w-[40-px] md:min-h-[40px] min-w-[30px] h-[30px] rounded-full" style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}>
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={imageUrl}
              onError={(e) => {
                e.target.src = defaultpp;
              }}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div class="flex flex-col gap-1 w-full max-w-[320px]">
          <div class="flex items-center space-x-2 ltr:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              {person.name}
            </span>
            
          </div>
          <div class="flex flex-col leading-1.5 py-2.5 px-3 w-[70%] border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-[#3F474B]" style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {}}>
            <div class="text-sm  text-gray-900 dark:text-white" >
              
              {message.message}
            </div>
          </div>
          <div className='flex items-center space-x-2 ltr:space-x-reverse'>
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              {extractTime(message.createdAt)}
            </span>
            </div>
        </div>
      </div>
  )
}

export default ReceiverMessage