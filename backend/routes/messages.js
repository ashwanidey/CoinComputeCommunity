
import express from "express";

import { verifyToken } from "../middleware/auth.js";
import { getConversations, getMessages, sendMessage } from "../controllers/messages.js";

const router = express.Router();

router.get("/:userid/:id", verifyToken, getMessages);
router.get("/conversations/all/:userId", verifyToken, getConversations);
router.post("/send/:id", verifyToken, sendMessage);

export default router;