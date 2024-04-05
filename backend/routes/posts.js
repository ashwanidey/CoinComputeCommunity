import express from "express";
import { createPost, deleteUser, getFeedPosts, getUserPosts } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";


const router = express.Router();

/* READ */
router.get("/", getFeedPosts);
router.get("/:userId", getUserPosts);
router.post("/", verifyToken, createPost);
router.delete("/:id",verifyToken,deleteUser);
export default router;
