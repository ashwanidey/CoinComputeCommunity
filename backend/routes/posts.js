import express from "express";
import {
  createPost,
  deleteUser,
  getFeedPosts,
  getUserPosts,
  likePost,
  getFollowingPosts,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", getFeedPosts);
router.get("/following/:userId", getFollowingPosts);
router.get("/:userId", getUserPosts);
router.post("/", verifyToken, createPost);

router.delete("/:id", verifyToken, deleteUser);
router.patch("/like/:id", verifyToken, likePost);
export default router;
