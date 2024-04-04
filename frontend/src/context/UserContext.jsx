import { createContext,useEffect,useState,useMemo } from "react";

export const UserContext = createContext({});

export const UserProvider = ({children}) =>{
  const [user,setUser] = useState([]);
  const [token,setToken] = useState("");
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin,setIsLogin] = useState(false);
  const [isloading,setIsLoading] = useState(false);

 const host = "http://localhost:3001"
// const host = "https://coincomputecommunity.onrender.com"
// const image = `https://raw.githubusercontent.com/ashwanidey/CoinComputeCommunity/main/frontend/public/assets/pp/`;
const image = `../../../public/assets/pp/`
  

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
    
    
    setUser(loggedUser)
    setToken(JSON.parse(localStorage.getItem("token")))
    
    // if(token.length !== 0)
    // setToken(loggedToken)
  },[isLoggedIn])

  // useEffect(() => {
  //   window.location.reload();
  // }, [isLoggedIn]);
  
  return (
    <UserContext.Provider value = {{user,setUser,isLoggedIn,setIsLoggedIn,saveUser,deleteUser,token,setToken,showModal, setShowModal,isLogin,setIsLogin,isloading,setIsLoading,host,image}}>
      {children}
    </UserContext.Provider>
  )
}