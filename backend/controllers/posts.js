import Post from "../models/Posts.js";
import User from "../models/User.js";

export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    post.reverse();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const {postId} = req.params;

    const post = await Post.findById(postId);
    
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


export const getFollowingPosts = async (req, res) => {
  try {
    const {userId} = req.params;
    const user = await User.findById(userId);
    const followingList = user.following;
    // res.status(200).json({msg : `${followingList}`});

    const following = await Promise.all(
      user.following.map(async (id) => {
        const posts = await Post.find({ userId: id });
        return posts.map(({ _id,userId, name, username, description, isBullish, likes, picturePath,createdAt }) => {
          return { _id,userId, name, username, description, isBullish, likes, picturePath,createdAt };
        });
      })
    );
    
    // Flatten the array of arrays
    const formattedFollower = following.flat();
    // formattedFollower.reverse();
    

    

    // const posts = await Post.find({ userId: { $in: followingList } });
    res.status(200).json(formattedFollower );
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
      likes: {},
      // comments: [],
    });
    const savedPost = await newPost.save();

    // const post = await Post.find();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};


export const createPostBot = async (req, res) => {
  try {
    const { isBullish, userId,screenName } = req.body;
    const user = await User.findById(userId);
    
    const url = `https://twitter-api45.p.rapidapi.com/timeline.php?screenname=${screenName}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
        'X-RapidAPI-Host': 'twitter-api45.p.rapidapi.com'
      }
    };

    
      const response = await fetch(url, options);
      const result = await response.json();
      const tweet = result.timeline[0].text;
      


      let description = tweet.replace(/RT\s@.*?:\s"/, '');

   

    const newPost = new Post({
      userId,
      name: user.name,
      username: user.username,
      description,
      picturePath: user.picturePath,
      isBullish,
      // picturePath,
      likes: {},
      // comments: [],
    });
    const savedPost = await newPost.save();

    // const post = await Post.find();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

