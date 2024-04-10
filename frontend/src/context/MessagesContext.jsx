import { createContext, useEffect, useState ,useLayoutEffect} from "react";

export const MessagesContext= createContext({});
export const MessagesProvider = ({children}) => {
  const [selectedConversation,setSelectedConversation] = useState(' sdasd');
 
  // useEffect(()=>{
  //   if(localStorage.getItem("selectedConversation")){
  //     setSelectedConversation(JSON.parse(localStorage.getItem("selectedConversation")));
  //   }else{
  //     localStorage.setItem("selectedConversation",JSON.stringify(selectedConversation))
  //   }
  // },[])
    
 
  return(
    <MessagesContext.Provider
    value={{
      selectedConversation,setSelectedConversation
    }}
  >
    {children}
  </MessagesContext.Provider>
  )
}