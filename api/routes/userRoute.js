import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  singleUsers,
  updatedUser,
} from "../controllers/userControllers.js";
import tokenVerify from "../middlewares/verifyToken.js";

const router = express.Router();

// verify token
router.use(tokenVerify);

// create route
router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", singleUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updatedUser);

export default router;
