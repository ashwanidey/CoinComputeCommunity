import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    postId: {
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
    
    userPicturePath: {
      type: String,
      default : ""
    },
    isBullish:{
      type : String,
      default: ""
    },
    likes: {
      type: Map,
      of: Boolean,
    },
    
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;