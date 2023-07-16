import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";
import bcrypt from "bcrypt";

/**
 * create user
 * @param {*} req
 * @param {*} res
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(createError("All fields are required", 400));
    }

    // check user email
    const loginUser = await User.findOne({ email });

    if (!loginUser) {
      return next(createError("User not found", 400));
    }

    // password check
    const passwordCheck = await bcrypt.compare(password, loginUser.password);

    // password check
    if (!passwordCheck) {
      return next(createError("Wrong password", 400));
    }

    // create access token
    const token = jwt.sign(
      { email: loginUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN,
      }
    );
    // refresh access token
    const refreshToken = jwt.sign(
      { email: loginUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN,
      }
    );

    res.cookie("accessToken", token);

    res.status(200).json({
      token,
      refreshToken,
      user: loginUser,
    });
  } catch (error) {
    return next(createError("Create data can not user", 400));
  }
};
