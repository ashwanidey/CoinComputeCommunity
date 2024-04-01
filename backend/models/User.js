import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    username: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    // picturePath: {
    //   type: String,
    //   default: "",
    // },
    // friends: {
    //   type: Array,
    //   default: [],
    // },
    // location: String,
    // occupation: String,
    // following: Number,
    // followers: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;