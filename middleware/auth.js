import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../consts.js";
import User from "../models/User.js";

const auth = async (req, res, next) => {
  const rawToken = req.headers.authorization;

  if (!rawToken) {
    return res.status(403).json({ message: "No token has been provided" });
  }

  const token = rawToken.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const foundUser = await User.findById(decoded.id).select(
      "id userName email role"
    );

    if (!foundUser) {
      return res.status(403).json({
        message: "User no longer exists",
      });
    }

    req.currentUser = foundUser;
  } catch (err) {
    next(err);
  }
};

export default auth;
