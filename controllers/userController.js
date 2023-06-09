import User from "../models/User.js";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "../consts.js";
import jwt from "jsonwebtoken";
import Activity from "../models/Activity.js";

const getUserData = async (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);

  try {
    const foundUser = await User.findById(id).populate("itinerary");
    console.log(foundUser);
    if (!foundUser) {
      return res.status(404).json({ message: `No user found with ${id}.` });
    }

    return res.status(200).json({ message: "User found.", foundUser });
  } catch (err) {
    console.log(err);
  }
};

const updateItinerary = async (req, res, next) => {
  const { id } = req.params;
  const { activityId } = req.body;
  try {
    const foundUser = await User.findById(id);
    console.log(foundUser);
    if (!foundUser) {
      return res.status(404).json({ message: `No user found with ${id}.` });
    }
    const foundActivity = await Activity.findById(activityId);
    if (!foundActivity) {
      return res.status(404).json({ message: "Activity not found." });
    }
    foundUser.itinerary.push(activityId);
    const updatedItinerary = await foundUser.save();

    return res.status(200).json({ message: "User found.", updatedItinerary });
  } catch (err) {
    next(err);
  }
};

const removeFromItinerary = async (req, res, next) => {
  console.log("You made it here.");
  const { id: userId } = req.params;
  const { activityId } = req.query;
  // const { activityId } = req.body; -> Change to this when testing with postman
  console.log(userId);
  console.log(activityId);
  try {
    const foundUser = await User.findById(userId);
    if (!foundUser) {
      return res.status(404).json({ message: `No user found with ${userId}.` });
    }

    const activityToDelete = await Activity.findById(activityId);
    if (!activityToDelete) {
      return res
        .status(404)
        .json({ message: `No activity found with ${activityId}.` });
    }
    console.log(activityToDelete);

    const updatedUserItinerary = await User.findByIdAndUpdate(
      userId,
      { $pull: { itinerary: activityId } },
      { new: true }
    );

    console.log(updatedUserItinerary);

    return res.status(200).json({
      message: "Activity removed from your itinerary",
      updatedUserItinerary,
    });
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  const userData = req.body;

  try {
    const alreadyExists = await User.findOne({ email: userData.email });

    if (alreadyExists) {
      return res
        .status(400)
        .json({ message: `User with email ${userData.email} already exists!` });
    }

    if (userData.password !== userData.confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);

    const newUser = await User.create(userData);

    return res.status(200).json({
      message: `User ${userData.userName} has been created`,
      newUser: { userName: newUser.userName, email: newUser.email },
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  console.log("You are in the login controller.");
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const matchedPassword = await bcrypt.compare(password, user.password);
    if (!matchedPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = { id: user.id };

    const token = jwt.sign(payload, JWT_SECRET);
    console.log(token);
    return res.status(200).json({
      message: `${user.userName} is now logged in`,
      userId: `${user._id}`,
      role: `${user.role}`,
      token,
    });
  } catch (err) {
    next(err);
  }
};

const userlikedCountries = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const country = req.body.country;
  console.log(req.body);
  try {
    const foundUser = await User.findById(id);
    console.log(foundUser);
    if (!foundUser) {
      return res.status(404).json({ message: `No user found with ${id}.` });
    }
    const listedCountries = foundUser.likedCountries;
    if (listedCountries.includes(country)) {
      const index = listedCountries.indexOf(country);
      if (index !== -1) {
        listedCountries.splice(index, 1);
      }
    } else {
      foundUser.likedCountries.push(country);
    }

    const updatedLikes = await foundUser.save();

    return res.status(200).json({
      message: "The liked countries array has been updated",
      updatedLikes,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  register,
  login,
  getUserData,
  updateItinerary,
  removeFromItinerary,
  userlikedCountries,
};
