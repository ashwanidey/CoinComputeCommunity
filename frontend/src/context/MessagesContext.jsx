import { createContext, useEffect, useState ,useLayoutEffect} from "react";

export const MessagesContext= createContext({});
export const MessagesProvider = ({children}) => {
  const [selectedConversation,setSelectedConversation] = useState(null);
  const [messages,setMessages] = useState([]);
 
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
      selectedConversation,setSelectedConversation,messages,setMessages
    }}
  >
    {children}
  </MessagesContext.Provider>
  )
}