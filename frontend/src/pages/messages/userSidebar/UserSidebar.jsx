import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

import EachUser from "./EachUser";
import SearchResultList from "./SearchResultList";

const UserSidebar = () => {

  const {host} = useContext(UserContext); 
  const user = JSON.parse(localStorage.getItem("user"))
  const token = JSON.parse(localStorage.getItem("token"))
  const [isLoading,setIsLoading] = useState(false);
  const [people,setPeople] = useState([])

  const [results,setResults] = useState([])

  const getConversations= async () => {
    setIsLoading(true);
    
    const response = await fetch(`${host}/messages/conversations/all/${user && user._id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token && token}` },
    });

    const data = await response.json();
    setPeople(data);
    // console.log(followers);
    setIsLoading(false);
  };

  useEffect(()=>{
    getConversations();
  },[])

  // useEffect(()=>{
  //   return ()=>{setInput([])}
  // },[])

  return (
    <>
    <div>
      <h1 class="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Messages
        </span>
      </h1>
     
      <SearchBar setResults = {setResults}/>
      {results && results.length > 0 && <SearchResultList results={results} setResults={setResults}/>}
      
      <div className="mt-4">
      <div className="dark:text-white mb-3 font-[800] text-[1.3rem]">All Messages</div>
      {people.map(person => {
        return (
          <EachUser person = {person}/>
        )
      })}
      </div>
      </div>
    </>
  );
};

export default UserSidebar;
