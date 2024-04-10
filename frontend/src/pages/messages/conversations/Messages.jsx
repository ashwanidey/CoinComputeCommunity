import React from "react";
import "flowbite";
import defaultpp from "../../../../public/assets/pp/63351f969b613d345489037b.png";
const Messages = () => {
  return (
    <>
      <div class="flex items-start gap-2.5">
        <div className="md:w-[56px] md:h-[56px] w-[45px] h-[45px]">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={``}
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
              Full Name
            </span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p class="text-sm font-normal text-gray-900 dark:text-white">
              {" "}
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>
          </div>
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
      </div>
    </>
  );
};

export default Messages;