import User from "../models/User.js";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "../consts.js";
import jwt from "jsonwebtoken";

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
    return res
      .status(200)
      .json({ message: `${user.userName} is now logged in`, token });
  } catch (err) {
    next(err);
  }
};

export default {
  register,
  login,
};
