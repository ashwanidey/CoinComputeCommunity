import Post from "../models/Posts.js";
import Comment from "../models/Comments.js";
import User from "../models/User.js";

export const getPostComments = async(req,res) => {
  try{
    const {postId} = req.params;

    const comments = await Comment.find({postId});
    res.status(200).json(comments);
  }catch(err){
    res.status(500).json({message : err.message})
  }
}

export const getUserComments = async(req,res) => {
  try{
    const {userId} = req.params;
    const comments = await Comment.find({userId});
    res.status(200).json(comments);
  }catch(err){
    res.status(500).json({message:err.message})
  }
}

