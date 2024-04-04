import express from "express";
import { getLoggedUser, getUser,addRemoveFollowing } from "../controllers/users.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", getUser);
// router.get("/:id", verifyToken, getLoggedUser);
router.patch("/:id/:followingId", verifyToken, addRemoveFollowing);

export default router;
