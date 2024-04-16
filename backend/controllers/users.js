import User from "../models/User.js";


export const editProfile = async(req,res) => {
  try{
    const {userId} = req.params;
    const {picturePath,username} = req.body;

    const updatedUser = await  User.findByIdAndUpdate(
      userId,
      {picturePath,username},
      { new: true }
    )

    res.status(200).json(updatedUser);
  }catch(err){
    res.status(404).json({message: err.message});
  }
}

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getSearch = async (req,res) => {
  try{
    const {searchname} = req.params;

    const filteredUsers = await User.find({ username: { $regex: searchname, $options: 'i' } });
    res.status(200).json(filteredUsers);
  }catch(err){
    res.status(404).json({ message: err.message });
  }
}

export const getUserFollowers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);


    const followers = await Promise.all(
      user.followers.map((id) => User.findById(id))
    );

    const formattedFollowers = followers.map(
      ({ _id, name, username,  picturePath }) => {
        return { _id, name, username,  picturePath};
      }
    );
    res.status(200).json(formattedFollowers);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


export const getUserFollowing = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    


    const following = await Promise.all(
      user.following.map((id) => User.findById(id))
    );

    if(!following){
      res.status(404).json({message : `${id}`})
    }

    const formattedFollowing = following.map(
      ({ _id, name, username,  picturePath }) => {
        return { _id, name, username,  picturePath};
      }
    );
    res.status(200).json(formattedFollowing);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};



export const getLoggedUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addRemoveFollowing = async (req, res) => {
  try {
    const { id, followingId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(followingId);

    if(!user){
      res.status(404).json({message : "Not found"})
    }

    if (user.following.includes(followingId)) {
      user.following = user.following.filter((id) => id !== followingId);
      friend.followers = friend.followers.filter((id) => id !== id);
    } else {
      user.following.push(followingId);
      friend.followers.push(id);
    }
    await user.save();
    await friend.save();

    // const following = await Promise.all(
    //   user.following.map((id) => User.findById(id))
    // );
    // const formattedFollowing = following.map(
    //   ({ _id, name, username, picturePath }) => {
    //     return { _id, name, username, picturePath };
    //   }
    // );

    res.status(200).json({message : "done"});
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
