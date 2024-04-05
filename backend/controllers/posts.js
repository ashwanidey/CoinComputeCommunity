import Post from "../models/Posts.js";
import User from "../models/User.js";

export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteUser = async(req,res) => {
  try{
    const { id } = req.params;
    const deletedPost = await Post.deleteOne({ _id: id });

    const posts = await Post.find()
    res.status(201).json(posts);
  }catch (err) {
    res.status(409).json({ message: err.message });
  }
}


export const createPost = async (req, res) => {
  try {
    const { description, isBullish, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: `${userId}` });
    }

    const newPost = new Post({
      userId,
      name: user.name,
      username: user.username,
      description,
      picturePath: user.picturePath,
      isBullish,
      // picturePath,
      // likes: {},
      // comments: [],
    });
    const savedPost = await newPost.save();

    // const post = await Post.find();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

