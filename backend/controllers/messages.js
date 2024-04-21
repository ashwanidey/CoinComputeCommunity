import Conversation from "../models/Conversation.js";
import Message from "../models/Messages.js";
import { getReceiverSocketId, io } from "../socket/scoket.js";
// import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message, userId } = req.body;
    const { id: receiverId } = req.params;
    const senderId = userId;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    // SOCKET IO FUNCTIONALITY WILL GO HERE
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId, userid: senderId } = req.params;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getConversations = async (req, res) => {
  try {
    const { userId } = req.params;
        const conversations = await Conversation.find({
            participants: { $elemMatch: { $eq: userId } }
        }).populate('participants');

				const people = conversations.map(conversation => {
					return conversation.participants.filter(participant => participant._id !== userId);
			});

			const formattedPeople = people.flat()

			const filteredArray = formattedPeople.filter(person => person._id != userId);
        res.status(200).json(filteredArray);
  } catch (e) {
    res.status(500).json({ error: "Internal server error" });
  }
};
