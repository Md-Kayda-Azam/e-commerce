import express from "express";
import tokenVerify from "../middlewares/verifyToken.js";
import {
  createRole,
  deleteRole,
  getAllRoles,
  singleRole,
  updatedRole,
} from "../controllers/roleControllers.js";

const router = express.Router();

// verify token
router.use(tokenVerify);

// create route
router.get("/", getAllRoles);
router.post("/", createRole);
router.get("/:id", singleRole);
router.delete("/:id", deleteRole);
router.put("/:id", updatedRole);
router.patch("/:id", updatedRole);

export default router;
