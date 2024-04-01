import express from "express";
import { username, email } from "../controllers/verify.js";

const router = express.Router();

router.post("/username", username);
router.post("/email", email);

export default router;
