import User from "../models/User.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcrypt";

/**
 * get all users
 * @param {*} req
 * @param {*} res
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const data = await User.find();

    res.status(200).json({
      users: data,
      message: "All data get successful",
    });
  } catch (error) {
    next(createError("Data can not all brand get", 400));
  }
};
/**
 * create user
 * @param {*} req
 * @param {*} res
 */
export const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      next(createError("All fields are required"));
    }

    // check user email
    const userEmailCheck = await User.findOne({ email });

    if (userEmailCheck) {
      next(createError("Email already axist"));
    }

    // password hash
    const hashPassword = await bcrypt.hash(password, 10);

    // create data
    const data = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(200).json({
      user: data,
      message: "Create data successful",
    });
  } catch (error) {
    next(createError("Create data can not user", 400));
  }
};
/**
 * single user
 * @param {*} req
 * @param {*} res
 */
export const singleUsers = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    res.status(200).json({
      user,
      message: "Single data successful",
    });
  } catch (error) {
    next(createError("Single data not found", 400));
  }
};
/**
 * delete product brand
 * @param {*} req
 * @param {*} res
 */
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    res.status(200).json({
      user,
      message: "User delete data successful",
    });
  } catch (error) {
    next(createError("User delete not found", 400));
  }
};
/**
 * update product brand
 * @param {*} req
 * @param {*} res
 */
export const updatedUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    // password hash
    const hashPassword = await bcrypt.hash(password, 10);

    // update user data
    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password: hashPassword,
      },
      { new: true }
    );

    res.status(200).json({
      user,
      message: "User delete data successful",
    });
  } catch (error) {
    next(createError("User delete not found", 400));
  }
};
