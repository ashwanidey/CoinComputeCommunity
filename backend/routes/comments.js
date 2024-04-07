import express from "express";
import {createComment, getPostComments, getUserComments} from "../controllers/comments.js"
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/post/:postId",getPostComments)
router.get("/user/:userId",getUserComments)

router.post("/", verifyToken, createComment);

export default router;