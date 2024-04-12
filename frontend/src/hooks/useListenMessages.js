import { useContext, useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { MessagesContext } from "../context/MessagesContext";

const useListenMessages = (personId) => {
	const { socket } = useSocketContext();
	const { messages, setMessages,selectedConversation } = useContext(MessagesContext);
	
	

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			if(personId === newMessage.senderId)
		
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;