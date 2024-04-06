import React, { useContext, useEffect, useState } from "react";
import TrendingSection from "../../components/trendingSection/TrendingSection";
import FeedsSection from "./FeedsSection";
import { UserContext } from "../../context/UserContext";

const FeedsPage = () => {
  const [posts, setPosts] = useState([]);

  const [followingPosts, setFollowingPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const { host, flicker } = useContext(UserContext);
  const [isFollowing, setIsFollowing] = useState(false);

  const getPosts = async () => {
    const token = await JSON.parse(localStorage.getItem("token"));
    const response = await fetch(`${host}/posts/`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setPosts(data);
  };

  const getFollowingPosts = async () => {
    const token = await JSON.parse(localStorage.getItem("token"));
    const response = await fetch(`${host}/posts/following/${user._id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();

    setFollowingPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {}, [posts, followingPosts, isFollowing, posts.likes]);

  return (
    <div className="min-h-[calc(-108px + 100vh)]  flex">
      <div className="flex-grow-0 flex-shrink-0 flex-basis-[260px] bg-white h-full min-w-64 lg:flex hidden">
        {" "}
      </div>
      <div className="max-w-[1000px] w-full flex-grow-2 flex-shrink-1 flex-basis-0 md:px-[24px] px-[14px] py-[32px] ">
        <FeedsSection
          setFollowingPosts={(d) => setFollowingPosts(d)}
          setPosts={(d) => {
            
            setPosts(d)
            
          }
          }
          posts={posts}
          followingPosts={followingPosts}
          getFollowingPosts={getFollowingPosts}
          getPosts={getPosts}
          isFollowing={isFollowing}
          setIsFollowing={(d) => setIsFollowing(d)}
        />
      </div>
      <div className="max-w-[400px] min-w-[350px]  lg:flex hidden ">
        <TrendingSection />
      </div>
    </div>
  );
};

export default FeedsPage;
