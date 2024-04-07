import express from "express";
import {createComment, deleteComment, getPostComments, getUserComments} from "../controllers/comments.js"
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/post/:postId",getPostComments)
router.get("/user/:userId",getUserComments)

router.post("/", verifyToken, createComment);
router.delete("/:id", verifyToken, deleteComment);

export default router;