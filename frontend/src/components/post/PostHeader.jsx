import React from "react";
import profilePic from "../../../public/assets/pp/63351f969b613d345489037b.png";
import FollowButton from "../FollowButton";

const PostHeader = ({ post, imageUrl,isFollowing }) => {

  function convertToRelativeTimeAgo(timestamp) {
    // Convert timestamp to Date object (UTC)
    const dateUTC = new Date(timestamp);

    // Calculate the difference between the current time (UTC) and the given timestamp
    const currentDate = new Date();
    const timeDifference = currentDate - dateUTC;

    // Convert milliseconds to seconds
    const secondsDifference = Math.floor(timeDifference / 1000);

    // Define time intervals
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hr: 3600,
        min: 60,
    };

    // Calculate relative time
    let relativeTime;
    for (const [unit, seconds] of Object.entries(intervals)) {
        const interval = Math.floor(secondsDifference / seconds);
        if (interval >= 1) {
            relativeTime = interval + ' ' + unit 
            // + (interval === 1 ? ' ago' : 's ago');
            break;
        }
    }

    // If relativeTime is still undefined, it means it's less than a minute ago

    if (!relativeTime) {
        relativeTime = 'Just now';
    }

    return relativeTime;
}

  return (
    <div className="flex gap-2 sm:gap-4 mb-3 items-center">
      <div className="lg:w-[56px] lg:h-[56px] md:w-[45px] md:h-[45px] w-[32px] h-[32px]">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src={imageUrl}
            onError={(e) => {
              e.target.src = profilePic;
            }}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col line-clamp-1">
        <a
          href={`/profilepage/${post.userId}`}
          className="text-decoration-none"
        >
          <div className="font-[600] md:text-[1.1rem] flex items-center ">
            <span className="line-clamp-1 ">{post.name}</span>
            <span class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800  rounded-full ml-1 ">
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                />
                <path
                  fill="#fff"
                  d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                />
              </svg>
            </span>
          </div>
          <div className="text-[#808A9D] md:text-[1rem] text-[0.8rem] line-clamp-1 flex truncate">
            @<span className="line-clamp-1">{post.username}</span>
          </div>
        </a>
      </div>

      <div className="text-[#808A9D] md:ml-[-10px] ml-[-12px] md:text-[1rem] text-[0.8rem] whitespace-nowrap">
        {convertToRelativeTimeAgo(post.createdAt)}
      </div>
      {post.isBullish === "" ? (
        <span class="bg-white text-black-800 md:text-[0.9rem] text-[0.8rem] font-medium me-2 md:px-2.5 md:py-0.5 px-2 py-0.2 rounded dark:bg-green-900 dark:text-green-300">
          Neutral
        </span>
      ) : post.isBullish === "true" ? (
        <span class="bg-green-100 text-green-800 md:text-[0.9rem] text-[0.8rem] font-medium me-2 md:px-2.5 md:py-0.5 px-2 py-0.2 rounded dark:bg-green-900 dark:text-green-300">
          Bullish
        </span>
      ) : (
        <span class="bg-red-100 text-red-800 md:text-[0.9rem] text-[0.8rem] font-medium me-2 md:px-2.5 md:py-0.5 px-2 py-0.2 rounded dark:bg-red-900 dark:text-green-300">
          Bearish
        </span>
      )}

      {!isFollowing && <FollowButton userId={post.userId} />}
    </div>
  );
};

export default PostHeader;
