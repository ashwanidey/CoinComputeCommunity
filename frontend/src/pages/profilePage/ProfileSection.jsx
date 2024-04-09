import React, { useContext, useEffect, useState } from "react";
// import profilePic from "../../assets/pp_files/3d038610f4814b2aaad21dde55d554e4.jpg"
import defaultpp from "../../../public/assets/pp/63351f969b613d345489037b.png";
import Posts from "../../components/post/Posts";
import "flowbite";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import ProfileModal from "./ProfileModal";
import Loading from "../../components/Loading";

const ProfileSection = () => {
  const [user, setUser] = useState([0]);
  const [posts, setPosts] = useState([0]);
  const {
    token,
    setToken,
    host,
    image,
    setShowProfileModal,
    showProfileModal,darkMode
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
           <h1 class="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
      <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Profile</span></h1>
          <div>
            <div className="bg-[#cfd6e4] w-full pt-[33.33333%] relative rounded-[8px]">
              <div className="absolute inset-[45%]"></div>
            </div>

            <div className="pl-[24px] dark:text-white">
              <div class="grid grid-cols-[min-content,min-content] gap-x-8">
                <div class="grid grid-rows-2 sm:gap-y-6">
                  <div className="grid-item h-[100px] relative top-[-24px]">
                    <div
                      className="w-[140px] h-[140px] 
            
            rounded-full bg-white overflow-hidden p-[4px]"
            style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}>
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
                    <span className="whitespace-nowrap text-[#58667E] text-[1rem] dark:text-gray-200">
                      Joined 2024 March
                    </span>
                  </div>
                </div>
                <div class="grid grid-rows-2 gap-y-4">
                  <div class="grid-item pt-2">
                    <div className="font-[600] text-[1.5rem]  whitespace-nowrap ">
                      {user.name}
                    </div>
                    <div className="dark:text-gray-300">
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
        <Loading/>
      )}
    </>
  );
};

export default ProfileSection;
