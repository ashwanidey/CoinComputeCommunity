import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
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

    if (user.following.includes(followingId)) {
      user.following = user.following.filter((id) => id !== followingId);
      friend.followers = friend.followers.filter((id) => id !== id);
    } else {
      user.following.push(followingId);
      friend.followers.push(id);
    }
    await user.save();
    await friend.save();

    const following = await Promise.all(
      user.following.map((id) => User.findById(id))
    );
    const formattedFollowing = following.map(
      ({ _id, name, username, picturePath }) => {
        return { _id, name, username, picturePath };
      }
    );

    res.status(200).json(formattedFollowing);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
