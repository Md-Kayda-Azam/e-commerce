import express from "express";
import {
  login,
  logOut,
  register,
  loggedInUser,
} from "../controllers/authControllers.js";
import tokenVerify from "../middlewares/verifyToken.js";

const routes = express.Router();
routes.post("/login", login);
routes.post("/logout", logOut);
routes.post("/register", register);

routes.get("/me", tokenVerify, loggedInUser);

export default routes;
