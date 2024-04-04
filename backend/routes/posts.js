import express from "express";
import { getFeedPosts, getUserPosts } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", getFeedPosts);
router.get("/:userId", getUserPosts);

export default router;
