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

import { email, username } from "./controllers/verify.js";
import { comments, posts, users } from "./data/index.js";

import Post from "./models/Posts.js";
import User from "./models/User.js";
import Comment from "./models/Comments.js";

import verifyRoutes from "./routes/verify.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js"
import messagesRoutes from "./routes/messages.js"
import { app,server } from "./socket/scoket.js";
import { editProfile } from "./controllers/users.js";


// CONFIGURATION

// When u use type modules these are important to get dir name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });
// ROUTES
app.post("/auth/register", register);
app.post("/editprofile/:userId", upload.single("picture"),editProfile);

//Router routes
app.use("/verify", verifyRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/messages", messagesRoutes);
// MONGOOSE SETUP
app.get("/keep-alive", (req, res) => {
  res.send("Server is alive.");
});
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    server.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
  //   User.insertMany(users);
  //   Post.insertMany(posts);
  //  Comment.insertMany(comments);
    setInterval(() => {
      fetch("http://localhost:3001/keep-alive")
        .then(() => {
          console.log("Server pinged to prevent sleeping.");
        })
        .catch((error) => {
          console.error("Error pinging server:", error);
        });
    }, 1200000);
  })
  .catch((error) => console.log(`${error} did not connect`));
