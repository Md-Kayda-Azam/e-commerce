import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";
import bcrypt from "bcrypt";

/**
 * @DESC Login User
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
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
      return next(createError("Invalid email, please valid email submit", 400));
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

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: (process.env.APP_ENV = "Development" ? false : true),
      sameSite: "strict",
      Path: "/",
      maxAge: 7 * 24 * 60 * 60 * 100,
    });

    res.status(200).json({
      token,
      user: loginUser,
      message: "User login successful",
    });
  } catch (error) {
    return next(createError("login data can not user", 400));
  }
};
/**
 * @DESC Log Out User
 * @ROUTE /api/v1/auth/logout
 * @method POST
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const logOut = async (req, res, next) => {
  res.clearCookie("accessToken");
  res.status(200).json({
    message: "LogOut Successfull",
  });
};
/**
 * @DESC Register User
 * @ROUTE /api/v1/auth/register
 * @method POST
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      next(createError("All fields are required"));
    }

    // check user email
    const userEmailCheck = await User.findOne({ email });

    if (userEmailCheck) {
      next(createError("Email already axist"));
    } else {
      // password hash
      const hashPassword = await bcrypt.hash(password, 10);

      // create data
      const user = await User.create({
        name,
        email,
        password: hashPassword,
      });

      res.status(200).json({
        user,
        message: "Create data successful",
      });
    }
  } catch (error) {
    next(createError("Create data can not user", 400));
  }
};
/**
 * @DESC Register User
 * @ROUTE /api/v1/auth/register
 * @method POST
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const loggedInUser = async (req, res, next) => {
  res.status(200).json(req.me);
};
