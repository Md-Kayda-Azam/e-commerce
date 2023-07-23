import { slugCreate } from "../helper/slugCreate.js";
import Permission from "../models/Permission.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcrypt";

/**
 * get all Permissions
 * @param {*} req
 * @param {*} res
 */
export const getAllPermissions = async (req, res, next) => {
  try {
    const data = await Permission.find();

    res.status(200).json({
      Permissions: data,
      message: "All data get successful",
    });
  } catch (error) {
    next(createError("Data can not all get", 400));
  }
};
/**
 * create Permission
 * @param {*} req
 * @param {*} res
 */
export const createPermission = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      next(createError("All fields are required"));
    }
    // permission check
    const permissionCheck = await Permission.findOne({ name });

    if (permissionCheck) {
      next(createError("Permission already axist"));
    }
    // create data
    const data = await Permission.create({
      name,
      slug: slugCreate(name),
    });

    res.status(200).json({
      Permission: data,
      message: "Create data successful",
    });
  } catch (error) {
    next(createError("Create data can not Permission", 400));
  }
};
/**
 * single Permission
 * @param {*} req
 * @param {*} res
 */
export const singlePermission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const permission = await Permission.findById(id);
    res.status(200).json({
      permission,
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
export const deletePermission = async (req, res, next) => {
  try {
    const { id } = req.params;

    const permission = await Permission.findByIdAndDelete(id);

    res.status(200).json({
      permission,
      message: "Permission delete data successful",
    });
  } catch (error) {
    next(createError("Permission delete not found", 400));
  }
};
/**
 * update product brand
 * @param {*} req
 * @param {*} res
 */
export const updatedPermission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // update Permission data
    const permission = await Permission.findByIdAndUpdate(
      id,
      {
        name,
        slug: slugCreate(name),
      },
      { new: true }
    );

    res.status(200).json({
      permission,
      message: "Permission delete data successful",
    });
  } catch (error) {
    next(createError("Permission update not found", 400));
  }
};
