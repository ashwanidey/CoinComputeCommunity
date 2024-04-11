import { createContext, useState, useEffect, useContext } from "react";

import io from "socket.io-client";
import { UserContext } from "./UserContext";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {

  const {host,isLoggedin} = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"))
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	

	useEffect(() => {
		if (user) {
			const socket = io('https://coincomputecommunity.onrender.com', {
				query: {
					userId: user._id,
				},
			});

			setSocket(socket);

			// socket.on() is used to listen to the events. can be used both on client and server side
			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [isLoggedin]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};