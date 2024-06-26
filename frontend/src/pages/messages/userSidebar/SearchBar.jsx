import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");
  const { host,token } = useContext(UserContext);

  const getSearch = async (value) => {
    const response = await fetch(`${host}/users/search/${value}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },

    });
    const data = await response.json();
    setResults(data);
  };

  const handleChange = (value) => {
    setInput(value);
    getSearch(value);
    
  }

  
  return (
    <div>
      <form>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ms-2 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            class="block w-full py-3 pl-9  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
            onChange={(e)=>handleChange(e.target.value)}
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
