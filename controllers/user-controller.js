const User = require("../models/User");

exports.getUser = async (req, res) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, "-password");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Failed to get user" });
  }

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ message: user });
};
