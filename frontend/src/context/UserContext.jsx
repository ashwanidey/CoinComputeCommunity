import { createContext,useEffect,useState,useMemo } from "react";

export const UserContext = createContext({});

export const UserProvider = ({children}) =>{
  const [user,setUser] = useState([]);
  const [token,setToken] = useState("");
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  

  const saveUser = (user,token,isLoggedIn) => {
    
    if(user.length != 0){
      
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('LoggedIn',isLoggedIn);
    }
  }

  const deleteUser = () => {
    localStorage.setItem('user', JSON.stringify([]));
    localStorage.setItem('token', JSON.stringify(""));
    localStorage.setItem('LoggedIn',!isLoggedIn);
  }
  

  useEffect(()=>{
   
    setIsLoggedIn(JSON.parse(localStorage.getItem("LoggedIn")))
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    const loggedToken = JSON.parse(localStorage.getItem("token"));
    
    setUser(loggedUser)
    
    // if(token.length !== 0)
    // setToken(loggedToken)
  },[isLoggedIn])

  // useEffect(() => {
  //   window.location.reload();
  // }, [isLoggedIn]);
  
  return (
    <UserContext.Provider value = {{user,setUser,isLoggedIn,setIsLoggedIn,saveUser,deleteUser,token,setToken}}>
      {children}
    </UserContext.Provider>
  )
}