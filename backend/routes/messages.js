
import express from "express";

import { verifyToken } from "../middleware/auth.js";
import { getMessages, sendMessage } from "../controllers/messages.js";

const router = express.Router();

router.get("/:userid/:id", verifyToken, getMessages);
router.post("/send/:id", verifyToken, sendMessage);

export default router;