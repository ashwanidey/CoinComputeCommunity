import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  
  try {
    const { name, username, email, password } = req.body;
    
    
    // const salt = await bcrypt.genSalt();
    // const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      username,
      email,
      password,
    });
    // const newUser = new User({
    //   name: "John Doe",
    //   username: "johndoe",
    //   email: "johndoe@example.com",
    //   password: "password123"
    // });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    // res.json(res.body)
    res.status(500).json({ error: err.message });
  }
};
