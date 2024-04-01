import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path"; //Helps to manage path
import { fileURLToPath } from "url"; //Helps to set path
import { register } from "./controllers/auth.js";
import User from "./models/User.js";
import { email, username } from "./controllers/verify.js";

import verifyRoutes from "./routes/verify.js";
import authRoutes from "./routes/auth.js";

// CONFIGURATION

// When u use type modules these are important to get dir name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ROUTES
app.post("/auth/register", register);

//Router routes
app.use("/verify", verifyRoutes);
app.use("/auth", authRoutes);
// MONGOOSE SETUP

const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));
