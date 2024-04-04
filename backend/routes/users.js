import express from "express";
import { getLoggedUser, getUser } from "../controllers/users.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", getUser);
// router.get("/:id", verifyToken, getLoggedUser);

export default router;
