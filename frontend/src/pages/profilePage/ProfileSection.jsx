import React, { useContext, useEffect, useState } from "react";
// import profilePic from "../../assets/pp_files/3d038610f4814b2aaad21dde55d554e4.jpg"
import defaultpp from "../../../public/assets/pp/63351f969b613d345489037b.png";
import Posts from "../../components/post/Posts";
import "flowbite";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import ProfileModal from "./ProfileModal";

const ProfileSection = () => {
  const [user, setUser] = useState([0]);
  const [posts, setPosts] = useState([0]);
  const {
    token,
    setToken,
    host,
    image,
    setShowProfileModal,
    showProfileModal,
  } = useContext(UserContext);
  const [isFollowers, setIsFollowers] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { userId } = useParams();

  const [followers, setFollowers] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const getFollowers = async () => {
    setIsLoading(true);
    const response = await fetch(`${host}/users/followers/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    setFollowers(data);
    console.log(followers);
    setIsLoading(false);
  };

  const getFollowing = async () => {
    setIsLoading(true);
    const response = await fetch(`${host}/users/following/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    setFollowers(data);
    console.log(followers);
    setIsLoading(false);
  };

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

      const response1 = await fetch(`${host}/posts/user/${userId}`, {
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
    const val = await JSON.parse(localStorage.getItem("token"));
    const response = await fetch(`${host}/posts/user/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${val}` },
    });
    const data = await response.json();
    setPosts(data);

    s;
  };

  // if(!posts) return null;

  useEffect(() => {
    getUser();
    // getUserPosts();
  }, []);

  useEffect(()=>{

  },[posts])

  // console.log(posts)
  return (
    <>
      {loaded ? (
        <div>
          <h2 className="font-[700] text-[2rem] mb-[24px] p-[8px]">Profile</h2>
          <div>
            <div className="bg-[#cfd6e4] w-full pt-[33.33333%] relative rounded-[8px]">
              <div className="absolute inset-[45%]"></div>
            </div>

            <div className="pl-[24px]">
              <div class="grid grid-cols-[min-content,min-content] gap-x-8">
                <div class="grid grid-rows-2 sm:gap-y-6">
                  <div className="grid-item h-[100px] relative top-[-24px]">
                    <div
                      className="w-[140px] h-[140px] 
            
            rounded-full bg-white overflow-hidden p-[4px]"
                    >
                      <span className="w-[110px] h-[110px]">
                        <div className="rounded-full w-full h-full overflow-hidden">
                          <img
                            src={
                              user.picturePath.length === 0
                                ? defaultpp
                                : imageUrl
                            }
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </span>
                    </div>
                  </div>

                  <div class="grid-item pt-2">
                    <span className="whitespace-nowrap text-[#58667E] text-[1rem] ">
                      Joined 2024 March
                    </span>
                  </div>
                </div>
                <div class="grid grid-rows-2 gap-y-4">
                  <div class="grid-item pt-2">
                    <div className="font-[600] text-[1.5rem]  whitespace-nowrap">
                      {user.name}
                    </div>
                    <div>
                      <span>@</span>
                      {user.username}
                    </div>
                    <div className="flex sm:gap-2 sm:flex-row flex-col mt-2">
                      <button
                        className="font-[600] flex gap-1"
                        onClick={() => {
                          setShowProfileModal(true);
                          setIsFollowers(false);
                          setFollowers(null);
                          getFollowing();
                        }}
                      >
                        <span>{user.following.length}</span>Following
                      </button>
                      <button
                        className="font-[600] flex gap-1"
                        onClick={() => {
                          setShowProfileModal(true);
                          setIsFollowers(true);
                          setFollowers(null);
                          getFollowers();
                        }}
                      >
                        <span>{user.followers.length}</span>Followers
                      </button>
                    </div>
                  </div>
                  <div class="grid-item"></div>
                </div>
              </div>
            </div>
            <div className="min-h-[10000px] md:mt-[-60px] mt-[-90px]">
              <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  class="flex flex-wrap -mb-px text-sm font-medium text-center"
                  id="default-styled-tab"
                  data-tabs-toggle="#default-styled-tab-content"
                  data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
                  data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
                  role="tablist"
                >
                  <li class="me-2" role="presentation">
                    <button
                      class="inline-block px-4 py-2 border-b-2 rounded-t-lg"
                      id="profile-styled-tab"
                      data-tabs-target="#styled-profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Posts
                    </button>
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
                { posts.map((data) => {
                  return <Posts post={data} setPosts = {(idata) => {
                    // const formattedData = idata.filter(d => d.userId === user._id);
                   
                    setPosts(idata)
                  }}/>;
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
          <ProfileModal
            show={showProfileModal}
            onHide={() => setShowProfileModal(false)}
            isFollowers={isFollowers}
            userId={userId}
            followers={followers}
          />
        </div>
      ) : (
        <>
          <div className="flex justify-center ">
            <h1 class="flex items-center md:text-5xl  text-3xl font-extrabold dark:text-white whitespace-nowrap">
              <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2 ">
                Loading
              </span>
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileSection;
