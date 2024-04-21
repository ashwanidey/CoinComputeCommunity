import { createContext, useEffect, useState, useMemo } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [flicker, setFlicker] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  //  const host = "http://localhost:3001"
  // const host = "https://coincomputecommunity.onrender.com";
  const host = "https://coincomputecommunity-6szc.onrender.com"
  const image = `https://raw.githubusercontent.com/ashwanidey/CoinComputeCommunity/main/frontend/public/assets/pp/`;
  const admin = "661243ddade7861c070d59ea";
  // const image = `../../../public/assets/pp/`

  const saveUser = (user, token, isLoggedIn) => {
    if (user.length != 0) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("LoggedIn", isLoggedIn);
    }
  };

  const deleteUser = () => {
    localStorage.setItem("user", JSON.stringify([]));
    localStorage.setItem("token", JSON.stringify(""));
    localStorage.setItem("LoggedIn", !isLoggedIn);
  };

  const getUser = async () => {
    const response = await fetch(`${host}/users/${user._id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("LoggedIn")));
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    setUser(loggedUser);
    setToken(JSON.parse(localStorage.getItem("token")));
    if (user && token) getUser();
    // else deleteUser();
    // if(token.length !== 0)
    // setToken(loggedToken)
  }, []);

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("LoggedIn")));
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    setUser(loggedUser);
    setToken(JSON.parse(localStorage.getItem("token")));
    if (user && token) getUser();
    // else deleteUser();
    // if(token.length !== 0)
    // setToken(loggedToken)
  }, [isLoggedIn]);


  

  useEffect(() => {
    if(localStorage.getItem("color-theme") === 'dark' || localStorage.getItem("color-theme") === null){
      document.documentElement.classList.add("dark");
      document.querySelector('body').style.backgroundColor = "rgb(31 41 55 / 1)"
    }

    
    
    
    setDarkMode(document.documentElement.classList.contains("dark"));
   
    const themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    );
    const themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );
    const themeToggleBtn = document.getElementById("theme-toggle");

    const setThemeIconsVisibility = (isDarkTheme) => {
      if (!isDarkTheme) {
        themeToggleDarkIcon.classList.remove("hidden");
        themeToggleLightIcon.classList.add("hidden");
      } else {
        themeToggleDarkIcon.classList.add("hidden");
        themeToggleLightIcon.classList.remove("hidden");
      }
    };

    const toggleTheme = () => {
      const isDarkTheme = document.documentElement.classList.contains("dark");
      if(!isDarkTheme)
      document.querySelector('body').style.backgroundColor = "rgb(31 41 55 / 1)"
      else
      document.querySelector('body').style.backgroundColor = "#FFFFFF"
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("color-theme", isDarkTheme ? "light" : "dark");
      setThemeIconsVisibility(!isDarkTheme);
      setDarkMode(isDarkTheme)
    };

    themeToggleBtn.addEventListener("click", toggleTheme);

    // Set initial state of theme icons based on local storage or dark mode preference
    const isDarkTheme =
      localStorage.getItem("color-theme") === "dark" ||
      (!localStorage.getItem("color-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setThemeIconsVisibility(isDarkTheme);

    // Cleanup event listener
    return () => {
      themeToggleBtn.removeEventListener("click", toggleTheme);
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        saveUser,
        deleteUser,
        token,
        setToken,
        showModal,
        setShowModal,
        isLogin,
        setIsLogin,
        isloading,
        setIsLoading,
        host,
        image,
        admin,
        showProfileModal,
        setShowProfileModal,
        flicker,
        setFlicker,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
