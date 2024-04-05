import express from "express";
import { getLoggedUser, getUser,addRemoveFollowing, getUserFollowers, getUserFollowing } from "../controllers/users.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", getUser);
// router.get("/:id", verifyToken, getLoggedUser);
router.get("/followers/:id", verifyToken,getUserFollowers);
router.get("/following/:id", verifyToken,getUserFollowing);
router.patch("/:id/:followingId", verifyToken, addRemoveFollowing);

export default router;
