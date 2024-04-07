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

export const createComment = async (req, res) => {
  try {
    const { description, isBullish, userId ,postId} = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: `${userId}` });
    }

    const newComment = new Comment({
      userId,
      postId,
      name: user.name,    
      username: user.username,
      description,
      userPicturePath: user.picturePath,
      isBullish,
      // picturePath,
      likes: {},
      // comments: [],
    });
    const savedComment = await newComment.save();

    // const post = await Post.find();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

