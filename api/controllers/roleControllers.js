import { slugCreate } from "../helper/slugCreate.js";
import Role from "../models/Role.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcrypt";

/**
 * get all Roles
 * @param {*} req
 * @param {*} res
 */
export const getAllRoles = async (req, res, next) => {
  try {
    const data = await Role.find();

    res.status(200).json({
      Roles: data,
      message: "All data get successful",
    });
  } catch (error) {
    next(createError("Data can not all get", 400));
  }
};
/**
 * create Role
 * @param {*} req
 * @param {*} res
 */
export const createRole = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      next(createError("All fields are required"));
    }
    // Role check
    const RoleCheck = await Role.findOne({ name });

    if (RoleCheck) {
      next(createError("Role already axist"));
    }
    // create data
    const data = await Role.create({
      name,
      slug: slugCreate(name),
    });

    res.status(200).json({
      Role: data,
      message: "Create data successful",
    });
  } catch (error) {
    next(createError("Create data can not Role", 400));
  }
};
/**
 * single Role
 * @param {*} req
 * @param {*} res
 */
export const singleRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const role = await Role.findById(id);
    res.status(200).json({
      role,
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
export const deleteRole = async (req, res, next) => {
  try {
    const { id } = req.params;

    const role = await Role.findByIdAndDelete(id);

    res.status(200).json({
      role,
      message: "Role delete data successful",
    });
  } catch (error) {
    next(createError("Role delete not found", 400));
  }
};
/**
 * update product brand
 * @param {*} req
 * @param {*} res
 */
export const updatedRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // update Role data
    const role = await Role.findByIdAndUpdate(
      id,
      {
        name,
        slug: slugCreate(name),
      },
      { new: true }
    );

    res.status(200).json({
      role,
      message: "Role delete data successful",
    });
  } catch (error) {
    next(createError("Role update not found", 400));
  }
};