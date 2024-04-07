import express from "express";
import {getPostComments, getUserComments} from "../controllers/comments.js"
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/post/:postId",getPostComments)
router.get("/user/:userId",getUserComments)

export default router;