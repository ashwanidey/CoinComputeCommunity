import React, { useContext } from 'react'
import defaultpp from "../../../../public/assets/pp/63351f969b613d345489037b.png";
import { UserContext } from '../../../context/UserContext';
import { extractTime } from '../../../utils/extractTime';

const SenderMessage = ({person,message}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const {image} = useContext(UserContext);
  const imageUrl = `${image}${user.picturePath}`
  
  
  return (
    <div class="flex items-start gap-2.5 flex-row-reverse">
        <div className="md:w-[56px] md:h-[56px] w-[45px] h-[45px]">
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
          <div class="flex items-center space-x-2 ltr:space-x-reverse ml-auto">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              {user.name}
            </span>
           
          </div>
          <div class="flex flex-col leading-1.5 py-2.5 px-3 w-[70%] border-gray-200 bg-gray-100 rounded-s-xl rounded-ee-xl dark:bg-blue-600 ml-auto">
            <p class="text-sm font-normal text-gray-900 dark:text-white ">
              {" "}
              {message.message}
            </p>
          </div>
          <div className='flex items-center space-x-2 ltr:space-x-reverse ml-auto'>
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

export default SenderMessage