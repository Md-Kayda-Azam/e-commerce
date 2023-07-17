import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { createError } from "../utils/createError.js";

// verify token

const tokenVerify = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader) {
    return next(createError("Unauthrized", 400));
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decode) => {
    if (err) {
      return next(createError("Invalid token", 400));
    }

    const me = await User.findOne({ email: decode.email }).select("-password");

    req.me = me;

    next();
  });
};

// export default
export default tokenVerify;
