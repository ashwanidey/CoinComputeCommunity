import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    
    description: String,
    picturePath: {
      type : String,
      default : ""
    },
      
    userPicturePath: {
      type: String,
      default : ""
    },
    isBullish:{
      type : String,
      default: ""
    },
    // comments: {
    //   type: Array,
    //   default: [],
    // },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;